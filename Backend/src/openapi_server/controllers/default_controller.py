import os
from bson import Binary
import connexion
from typing import Dict
from typing import Tuple
from typing import Union
import uuid
from werkzeug.utils import secure_filename

from openapi_server.models.nearby_stations_response_inner import NearbyStationsResponseInner  # noqa: E501
from openapi_server.models.photo_upload_response import PhotoUploadResponse  # noqa: E501
from openapi_server.models.photos_url_response import PhotosURLResponse  # noqa: E501
from openapi_server.models.post_station_vote_request import PostStationVoteRequest  # noqa: E501
from openapi_server.models.team_properties import TeamProperties
from openapi_server.models.teams_response import TeamsResponse  # noqa: E501
from openapi_server.models.vote_response import VoteResponse  # noqa: E501
from openapi_server import util
from flask import current_app, jsonify

def get_nearby_stations(latitude, longitude, radius=None):  # noqa: E501
    """周辺のステーションの座標を取得

    指定された場所の周辺にあるステーションの座標を返します。 # noqa: E501

    :param latitude: 現在の場所の緯度。
    :type latitude: float
    :param longitude: 現在の場所の経度。
    :type longitude: float
    :param radius: ステーションを検索する半径（メートル単位）。デフォルトは1000メートルです。
    :type radius: int

    :rtype: Union[List[NearbyStationsResponseInner], Tuple[List[NearbyStationsResponseInner], int], Tuple[List[NearbyStationsResponseInner], int, Dict[str, str]]
    """
    mongo = current_app.mongo
    stations = mongo.db.stations.find() 
    station_list = [station for station in stations]
    for station in station_list:
        if "_id" in station:
            station["_id"] = uuid.UUID(bytes=station["_id"])
    print(station_list)

    return jsonify(station_list)

def get_station_photos_url(station_id):  # noqa: E501
    """ステーションの写真URLを取得

    指定されたステーションにアップロードされた写真のURLリストを取得します。 # noqa: E501

    :param station_id: 写真URLを取得するステーションのID。
    :type station_id: str
    :type station_id: str

    :rtype: Union[PhotosURLResponse, Tuple[PhotosURLResponse, int], Tuple[PhotosURLResponse, int, Dict[str, str]]
    """
    mongo = current_app.mongo
    station_uuid = uuid.UUID(station_id)
    
    station = mongo.db.stations.find_one({"_id": Binary.from_uuid(station_uuid)}, {"photoUrls": 1})  # `photoUrls` 필드만 가져오기
    
    if station and "photoUrls" in station:
        return jsonify(station["photoUrls"])
    else:
        return jsonify({"error": "No photos found for the given stationId"}), 404


def get_teams_info():  # noqa: E501
    """利用可能なチームの情報を取得

    RedチームとGreenチームのemojiとお題、そして全体のお知らせを取得します。 # noqa: E501


    :rtype: Union[TeamsResponse, Tuple[TeamsResponse, int], Tuple[TeamsResponse, int, Dict[str, str]]
    """
    return TeamsResponse(green=TeamProperties(emoji='🍈', theme='メロンだろう！'),
                         red=TeamProperties(emoji='🍉', theme='定番のスイカだ！'),
                         team_selection_message="夏ならどっちだ？")


<<<<<<< HEAD
def post_station_photo(station_id, photo = None):  # noqa: E501
=======
def post_station_photo(station_id, photo=None):  # noqa: E501
  
>>>>>>> 832c52c74f97fc7e9378df3e64eb3071d7ccad89
    """ステーションの写真をアップロード

    指定されたステーションに対して写真をアップロードします。 # noqa: E501

    :param station_id: 写真をアップロードするステーションのID。
    :type station_id: str
    :param photo: アップロードする写真ファイル。
    :type photo: FileStorage

    :rtype: Union[PhotoUploadResponse, Tuple[PhotoUploadResponse, int], Tuple[PhotoUploadResponse, int, Dict[str, str]]
    """
    if photo is None:
        return jsonify({"error": "No photo provided"}), 400
    # station_idをUUIDに変換
    try:
        station_uuid = uuid.UUID(station_id)
    except ValueError:
        return jsonify({"error": "Invalid UUID format for stationId"}), 400

    # ファイルの安全な名前を生成し、UUID名に変更
    file_ext = os.path.splitext(secure_filename(photo.filename))[1]  # ファイル拡張子を取得
    new_filename = f"{uuid.uuid4()}{file_ext}"  # 新しいUUID名を生成

    # 写真の保存先パスを設定（例: static/uploads）
    upload_folder = current_app.config.get("UPLOAD_FOLDER", "static/uploads")
    if not os.path.exists(upload_folder):
        os.makedirs(upload_folder)  # アップロードフォルダが存在しない場合は生成

    # 写真ファイルを保存
    photo.save(os.path.join(upload_folder, new_filename))

    # 保存された写真のURLを生成
    photo_url = f"{upload_folder}/{new_filename}"

    # MongoDBにURLを追加
    mongo = current_app.mongo
    station = mongo.db.stations.find_one({"_id": Binary.from_uuid(station_uuid)}, {"photos": 1})

    if station:
        # ステーションのphotosフィールドに新しい写真URLを追加
        mongo.db.stations.update_one(
            {"_id": Binary.from_uuid(station_uuid)},
            {"$push": {"photoUrls": photo_url}}
        )
        return jsonify({"message": "Photo uploaded successfully", "photoUrl": photo_url}), 201
    else:
        return jsonify({"error": "Station not found"}), 404



def post_station_vote(station_id, post_station_vote_request = None):  # noqa: E501
    """ステーションに対するチーム投票

    指定されたステーションに対してRedチームまたはGreenチームに投票します。 # noqa: E501

    :param station_id: 投票するステーションのID。
    :type station_id: str
    :type station_id: str
    :param post_station_vote_request: 
    :type post_station_vote_request: dict | bytes

    :rtype: Union[VoteResponse, Tuple[VoteResponse, int], Tuple[VoteResponse, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        post_station_vote_request = PostStationVoteRequest.from_dict(connexion.request.get_json())  # noqa: E501
    try:
        station_uuid = uuid.UUID(station_id)
    except ValueError:
        return jsonify({"error": "Invalid UUID format for stationId"}), 400
    color = post_station_vote_request.team
    points = post_station_vote_request.points
    mongo = current_app.mongo
    station = mongo.db.stations.find_one({"_id": Binary.from_uuid(station_uuid)}, {"totalVotes": 1})

    if station:
        # 指定された色の投票数を1増加
        mongo.db.stations.update_one(
            {"_id": Binary.from_uuid(station_uuid)},
            {"$inc": {f"totalVotes.{color}": points}}
        )
        return jsonify({"message": f"{color} vote incremented successfully"}), 200
    else:
        return jsonify({"error": "Station not found"}), 404
