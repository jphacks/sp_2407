from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class StationsNearbyGet200ResponseInnerTotalVotes(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, red=None, green=None):  # noqa: E501
        """StationsNearbyGet200ResponseInnerTotalVotes - a model defined in OpenAPI

        :param red: The red of this StationsNearbyGet200ResponseInnerTotalVotes.  # noqa: E501
        :type red: int
        :param green: The green of this StationsNearbyGet200ResponseInnerTotalVotes.  # noqa: E501
        :type green: int
        """
        self.openapi_types = {
            'red': int,
            'green': int
        }

        self.attribute_map = {
            'red': 'Red',
            'green': 'Green'
        }

        self._red = red
        self._green = green

    @classmethod
    def from_dict(cls, dikt) -> 'StationsNearbyGet200ResponseInnerTotalVotes':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _stations_nearby_get_200_response_inner_totalVotes of this StationsNearbyGet200ResponseInnerTotalVotes.  # noqa: E501
        :rtype: StationsNearbyGet200ResponseInnerTotalVotes
        """
        return util.deserialize_model(dikt, cls)

    @property
    def red(self) -> int:
        """Gets the red of this StationsNearbyGet200ResponseInnerTotalVotes.

        Redチームの総投票数。  # noqa: E501

        :return: The red of this StationsNearbyGet200ResponseInnerTotalVotes.
        :rtype: int
        """
        return self._red

    @red.setter
    def red(self, red: int):
        """Sets the red of this StationsNearbyGet200ResponseInnerTotalVotes.

        Redチームの総投票数。  # noqa: E501

        :param red: The red of this StationsNearbyGet200ResponseInnerTotalVotes.
        :type red: int
        """

        self._red = red

    @property
    def green(self) -> int:
        """Gets the green of this StationsNearbyGet200ResponseInnerTotalVotes.

        Greenチームの総投票数。  # noqa: E501

        :return: The green of this StationsNearbyGet200ResponseInnerTotalVotes.
        :rtype: int
        """
        return self._green

    @green.setter
    def green(self, green: int):
        """Sets the green of this StationsNearbyGet200ResponseInnerTotalVotes.

        Greenチームの総投票数。  # noqa: E501

        :param green: The green of this StationsNearbyGet200ResponseInnerTotalVotes.
        :type green: int
        """

        self._green = green
