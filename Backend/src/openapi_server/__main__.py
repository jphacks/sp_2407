#!/usr/bin/env python3

import connexion
from pymongo import MongoClient
import pymongo

from openapi_server import encoder
from flask_cors import CORS

def main():
    
    app = connexion.App(__name__, specification_dir='./openapi/')
    app.app.json_encoder = encoder.JSONEncoder
    app.app.config['JSON_AS_ASCII'] = False
    app.app.config["MONGO_URI"] = "mongodb://localhost:27017/JPHACKS2024"
    mongo = MongoClient(app.app.config["MONGO_URI"])
    app.app.mongo = mongo  # 앱에 mongo 속성으로 추가


    app.add_api('openapi.yaml',
                arguments={'title': 'SP2407 Nearby Stations API'},
                pythonic_params=True)

    app.run(port=8080)


if __name__ == '__main__':
    main()
