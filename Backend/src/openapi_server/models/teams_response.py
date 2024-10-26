from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server.models.teams_response_green import TeamsResponseGreen
from openapi_server.models.teams_response_red import TeamsResponseRed
from openapi_server import util

from openapi_server.models.teams_response_green import TeamsResponseGreen  # noqa: E501
from openapi_server.models.teams_response_red import TeamsResponseRed  # noqa: E501

class TeamsResponse(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, red=None, green=None):  # noqa: E501
        """TeamsResponse - a model defined in OpenAPI

        :param red: The red of this TeamsResponse.  # noqa: E501
        :type red: TeamsResponseRed
        :param green: The green of this TeamsResponse.  # noqa: E501
        :type green: TeamsResponseGreen
        """
        self.openapi_types = {
            'red': TeamsResponseRed,
            'green': TeamsResponseGreen
        }

        self.attribute_map = {
            'red': 'Red',
            'green': 'Green'
        }

        self._red = red
        self._green = green

    @classmethod
    def from_dict(cls, dikt) -> 'TeamsResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The TeamsResponse of this TeamsResponse.  # noqa: E501
        :rtype: TeamsResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def red(self) -> TeamsResponseRed:
        """Gets the red of this TeamsResponse.


        :return: The red of this TeamsResponse.
        :rtype: TeamsResponseRed
        """
        return self._red

    @red.setter
    def red(self, red: TeamsResponseRed):
        """Sets the red of this TeamsResponse.


        :param red: The red of this TeamsResponse.
        :type red: TeamsResponseRed
        """

        self._red = red

    @property
    def green(self) -> TeamsResponseGreen:
        """Gets the green of this TeamsResponse.


        :return: The green of this TeamsResponse.
        :rtype: TeamsResponseGreen
        """
        return self._green

    @green.setter
    def green(self, green: TeamsResponseGreen):
        """Sets the green of this TeamsResponse.


        :param green: The green of this TeamsResponse.
        :type green: TeamsResponseGreen
        """

        self._green = green
