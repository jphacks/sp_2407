from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server.models.station_information_coordinates import StationInformationCoordinates
from openapi_server.models.station_information_total_votes import StationInformationTotalVotes
from openapi_server import util

from openapi_server.models.station_information_coordinates import StationInformationCoordinates  # noqa: E501
from openapi_server.models.station_information_total_votes import StationInformationTotalVotes  # noqa: E501

class StationInformation(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, station_name=None, coordinates=None, photo_urls=None, total_votes=None):  # noqa: E501
        """StationInformation - a model defined in OpenAPI

        :param id: The id of this StationInformation.  # noqa: E501
        :type id: str
        :param station_name: The station_name of this StationInformation.  # noqa: E501
        :type station_name: str
        :param coordinates: The coordinates of this StationInformation.  # noqa: E501
        :type coordinates: StationInformationCoordinates
        :param photo_urls: The photo_urls of this StationInformation.  # noqa: E501
        :type photo_urls: List[str]
        :param total_votes: The total_votes of this StationInformation.  # noqa: E501
        :type total_votes: StationInformationTotalVotes
        """
        self.openapi_types = {
            'id': str,
            'station_name': str,
            'coordinates': StationInformationCoordinates,
            'photo_urls': List[str],
            'total_votes': StationInformationTotalVotes
        }

        self.attribute_map = {
            'id': '_id',
            'station_name': 'stationName',
            'coordinates': 'coordinates',
            'photo_urls': 'photoUrls',
            'total_votes': 'totalVotes'
        }

        self._id = id
        self._station_name = station_name
        self._coordinates = coordinates
        self._photo_urls = photo_urls
        self._total_votes = total_votes

    @classmethod
    def from_dict(cls, dikt) -> 'StationInformation':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The StationInformation of this StationInformation.  # noqa: E501
        :rtype: StationInformation
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> str:
        """Gets the id of this StationInformation.

        ステーションのID。  # noqa: E501

        :return: The id of this StationInformation.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id: str):
        """Sets the id of this StationInformation.

        ステーションのID。  # noqa: E501

        :param id: The id of this StationInformation.
        :type id: str
        """

        self._id = id

    @property
    def station_name(self) -> str:
        """Gets the station_name of this StationInformation.

        ステーションの名前。  # noqa: E501

        :return: The station_name of this StationInformation.
        :rtype: str
        """
        return self._station_name

    @station_name.setter
    def station_name(self, station_name: str):
        """Sets the station_name of this StationInformation.

        ステーションの名前。  # noqa: E501

        :param station_name: The station_name of this StationInformation.
        :type station_name: str
        """

        self._station_name = station_name

    @property
    def coordinates(self) -> StationInformationCoordinates:
        """Gets the coordinates of this StationInformation.


        :return: The coordinates of this StationInformation.
        :rtype: StationInformationCoordinates
        """
        return self._coordinates

    @coordinates.setter
    def coordinates(self, coordinates: StationInformationCoordinates):
        """Sets the coordinates of this StationInformation.


        :param coordinates: The coordinates of this StationInformation.
        :type coordinates: StationInformationCoordinates
        """

        self._coordinates = coordinates

    @property
    def photo_urls(self) -> List[str]:
        """Gets the photo_urls of this StationInformation.

        アップロードされた写真のURLリスト。  # noqa: E501

        :return: The photo_urls of this StationInformation.
        :rtype: List[str]
        """
        return self._photo_urls

    @photo_urls.setter
    def photo_urls(self, photo_urls: List[str]):
        """Sets the photo_urls of this StationInformation.

        アップロードされた写真のURLリスト。  # noqa: E501

        :param photo_urls: The photo_urls of this StationInformation.
        :type photo_urls: List[str]
        """

        self._photo_urls = photo_urls

    @property
    def total_votes(self) -> StationInformationTotalVotes:
        """Gets the total_votes of this StationInformation.


        :return: The total_votes of this StationInformation.
        :rtype: StationInformationTotalVotes
        """
        return self._total_votes

    @total_votes.setter
    def total_votes(self, total_votes: StationInformationTotalVotes):
        """Sets the total_votes of this StationInformation.


        :param total_votes: The total_votes of this StationInformation.
        :type total_votes: StationInformationTotalVotes
        """

        self._total_votes = total_votes