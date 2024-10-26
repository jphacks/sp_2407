from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server.models.buildings_nearby_get200_response_inner_coordinates import BuildingsNearbyGet200ResponseInnerCoordinates
from openapi_server import util

from openapi_server.models.buildings_nearby_get200_response_inner_coordinates import BuildingsNearbyGet200ResponseInnerCoordinates  # noqa: E501

class BuildingsNearbyGet200ResponseInner(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, building_name=None, coordinates=None):  # noqa: E501
        """BuildingsNearbyGet200ResponseInner - a model defined in OpenAPI

        :param building_name: The building_name of this BuildingsNearbyGet200ResponseInner.  # noqa: E501
        :type building_name: str
        :param coordinates: The coordinates of this BuildingsNearbyGet200ResponseInner.  # noqa: E501
        :type coordinates: BuildingsNearbyGet200ResponseInnerCoordinates
        """
        self.openapi_types = {
            'building_name': str,
            'coordinates': BuildingsNearbyGet200ResponseInnerCoordinates
        }

        self.attribute_map = {
            'building_name': 'buildingName',
            'coordinates': 'coordinates'
        }

        self._building_name = building_name
        self._coordinates = coordinates

    @classmethod
    def from_dict(cls, dikt) -> 'BuildingsNearbyGet200ResponseInner':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _buildings_nearby_get_200_response_inner of this BuildingsNearbyGet200ResponseInner.  # noqa: E501
        :rtype: BuildingsNearbyGet200ResponseInner
        """
        return util.deserialize_model(dikt, cls)

    @property
    def building_name(self) -> str:
        """Gets the building_name of this BuildingsNearbyGet200ResponseInner.

        Name of the building.  # noqa: E501

        :return: The building_name of this BuildingsNearbyGet200ResponseInner.
        :rtype: str
        """
        return self._building_name

    @building_name.setter
    def building_name(self, building_name: str):
        """Sets the building_name of this BuildingsNearbyGet200ResponseInner.

        Name of the building.  # noqa: E501

        :param building_name: The building_name of this BuildingsNearbyGet200ResponseInner.
        :type building_name: str
        """

        self._building_name = building_name

    @property
    def coordinates(self) -> BuildingsNearbyGet200ResponseInnerCoordinates:
        """Gets the coordinates of this BuildingsNearbyGet200ResponseInner.


        :return: The coordinates of this BuildingsNearbyGet200ResponseInner.
        :rtype: BuildingsNearbyGet200ResponseInnerCoordinates
        """
        return self._coordinates

    @coordinates.setter
    def coordinates(self, coordinates: BuildingsNearbyGet200ResponseInnerCoordinates):
        """Sets the coordinates of this BuildingsNearbyGet200ResponseInner.


        :param coordinates: The coordinates of this BuildingsNearbyGet200ResponseInner.
        :type coordinates: BuildingsNearbyGet200ResponseInnerCoordinates
        """

        self._coordinates = coordinates
