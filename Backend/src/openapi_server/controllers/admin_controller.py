import connexion
from typing import Dict
from typing import Tuple
from typing import Union
import uuid
from bson import Binary

from openapi_server import util
from flask import current_app


def reset_database():  # noqa: E501
    """データベースのリセット

    開発環境でデータベースをリセットします。すべてのデータが削除されます。 # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    station_collection = current_app.mongo.db.stations
    station_collection.delete_many({})
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "大通公園",
        "coordinates": {
            "latitude": 43.0598309,
            "longitude": 141.347055
        },
        "totalVotes": {
            "Red": 110,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "札幌駅",
        "coordinates": {
            "latitude": 43.068611,
            "longitude": 141.350778
        },
        "totalVotes": {
            "Red": 119,
            "Green": 120
        },
        "photoUrls":
        []
            
        
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "時計台",
        "coordinates": {
            "latitude": 43.0625318,
            "longitude": 141.3535791
        },
        "totalVotes": {
            "Red": 150,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "円山動物園",
        "coordinates": {
            "latitude": 43.0491419,
            "longitude": 141.3062499
        },
        "totalVotes": {
            "Red": 90,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "藻岩山",
        "coordinates": {
            "latitude": 43.0190508,
            "longitude": 141.3258572
        },
        "totalVotes": {
            "Red": 130,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "札幌ドーム",
        "coordinates": {
            "latitude": 43.0177717,
            "longitude": 141.4087122
        },
        "totalVotes": {
            "Red": 119,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "羊ケ丘展望台",
        "coordinates": {
            "latitude": 42.9990922,
            "longitude": 141.3943741
        },
        "totalVotes": {
            "Red": 121,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "大倉山スキー場",
        "coordinates": {
            "latitude": 43.050697,
            "longitude": 141.2857797
        },
        "totalVotes": {
            "Red": 119,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "北海道神宮",
        "coordinates": {
            "latitude": 43.0543725,
            "longitude": 141.3079465
        },
        "totalVotes": {
            "Red": 121,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)
    station_data = {
        "_id": Binary.from_uuid(uuid.uuid4()),
        "stationName": "モエレ沼公園",
        "coordinates": {
            "latitude": 43.1247779,
            "longitude": 141.4295949
        },
        "totalVotes": {
            "Red": 119,
            "Green": 120
        },
        "photoUrls":
        []
    }
    current_app.mongo.db.stations.insert_one(station_data)

    return 'do some magic!'
