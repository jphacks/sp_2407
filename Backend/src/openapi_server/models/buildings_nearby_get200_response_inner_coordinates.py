from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class BuildingsNearbyGet200ResponseInnerCoordinates(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, latitude=None, longitude=None):  # noqa: E501
        """BuildingsNearbyGet200ResponseInnerCoordinates - a model defined in OpenAPI

        :param latitude: The latitude of this BuildingsNearbyGet200ResponseInnerCoordinates.  # noqa: E501
        :type latitude: float
        :param longitude: The longitude of this BuildingsNearbyGet200ResponseInnerCoordinates.  # noqa: E501
        :type longitude: float
        """
        self.openapi_types = {
            'latitude': float,
            'longitude': float
        }

        self.attribute_map = {
            'latitude': 'latitude',
            'longitude': 'longitude'
        }

        self._latitude = latitude
        self._longitude = longitude

    @classmethod
    def from_dict(cls, dikt) -> 'BuildingsNearbyGet200ResponseInnerCoordinates':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _buildings_nearby_get_200_response_inner_coordinates of this BuildingsNearbyGet200ResponseInnerCoordinates.  # noqa: E501
        :rtype: BuildingsNearbyGet200ResponseInnerCoordinates
        """
        return util.deserialize_model(dikt, cls)

    @property
    def latitude(self) -> float:
        """Gets the latitude of this BuildingsNearbyGet200ResponseInnerCoordinates.


        :return: The latitude of this BuildingsNearbyGet200ResponseInnerCoordinates.
        :rtype: float
        """
        return self._latitude

    @latitude.setter
    def latitude(self, latitude: float):
        """Sets the latitude of this BuildingsNearbyGet200ResponseInnerCoordinates.


        :param latitude: The latitude of this BuildingsNearbyGet200ResponseInnerCoordinates.
        :type latitude: float
        """

        self._latitude = latitude

    @property
    def longitude(self) -> float:
        """Gets the longitude of this BuildingsNearbyGet200ResponseInnerCoordinates.


        :return: The longitude of this BuildingsNearbyGet200ResponseInnerCoordinates.
        :rtype: float
        """
        return self._longitude

    @longitude.setter
    def longitude(self, longitude: float):
        """Sets the longitude of this BuildingsNearbyGet200ResponseInnerCoordinates.


        :param longitude: The longitude of this BuildingsNearbyGet200ResponseInnerCoordinates.
        :type longitude: float
        """

        self._longitude = longitude
