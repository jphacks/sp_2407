import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.nearby_stations_response_inner import NearbyStationsResponseInner  # noqa: E501
from openapi_server.models.photo_upload_response import PhotoUploadResponse  # noqa: E501
from openapi_server.models.photos_url_response import PhotosURLResponse  # noqa: E501
from openapi_server.models.post_station_vote_request import PostStationVoteRequest  # noqa: E501
from openapi_server.models.teams_response import TeamsResponse  # noqa: E501
from openapi_server.models.vote_response import VoteResponse  # noqa: E501
from openapi_server import util


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
    return 'do some magic!'


def get_station_photos_url(station_id):  # noqa: E501
    """ステーションの写真URLを取得

    指定されたステーションにアップロードされた写真のURLリストを取得します。 # noqa: E501

    :param station_id: 写真URLを取得するステーションのID。
    :type station_id: str
    :type station_id: str

    :rtype: Union[PhotosURLResponse, Tuple[PhotosURLResponse, int], Tuple[PhotosURLResponse, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_teams_info():  # noqa: E501
    """利用可能なチームの情報を取得

    RedチームとGreenチームのemojiとお題を取得します。 # noqa: E501


    :rtype: Union[TeamsResponse, Tuple[TeamsResponse, int], Tuple[TeamsResponse, int, Dict[str, str]]
    """
    return 'do some magic!'


def post_station_photo(station_id, photo=None):  # noqa: E501
    """ステーションの写真をアップロード

    指定されたステーションに対して写真をアップロードします。 # noqa: E501

    :param station_id: 写真をアップロードするステーションのID。
    :type station_id: str
    :type station_id: str
    :param photo: アップロードする写真ファイル。
    :type photo: str

    :rtype: Union[PhotoUploadResponse, Tuple[PhotoUploadResponse, int], Tuple[PhotoUploadResponse, int, Dict[str, str]]
    """
    return 'do some magic!'


def post_station_vote(station_id, post_station_vote_request):  # noqa: E501
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
    return 'do some magic!'
