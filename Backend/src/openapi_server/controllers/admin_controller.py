import connexion
from typing import Dict
from typing import Tuple
from typing import Union

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
        "stationId": "123e4567-e89b-12d3-a456-426614174000",
        "stationName": "Shibuya Station",
        "coordinates": {
            "latitude": 35.658034,
            "longitude": 139.701636
        },
        "totalVotes": {
            "Red": 150,
            "Green": 120
        },
        "photos":
        {
            
        }
    }


    current_app.mongo.db.stations.insert_one(station_data)
    return 'do some magic!'
