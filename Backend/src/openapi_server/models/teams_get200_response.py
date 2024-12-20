from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server.models.teams_get200_response_green import TeamsGet200ResponseGreen
from openapi_server.models.teams_get200_response_red import TeamsGet200ResponseRed
from openapi_server import util

from openapi_server.models.teams_get200_response_green import TeamsGet200ResponseGreen  # noqa: E501
from openapi_server.models.teams_get200_response_red import TeamsGet200ResponseRed  # noqa: E501

class TeamsGet200Response(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, red=None, green=None):  # noqa: E501
        """TeamsGet200Response - a model defined in OpenAPI

        :param red: The red of this TeamsGet200Response.  # noqa: E501
        :type red: TeamsGet200ResponseRed
        :param green: The green of this TeamsGet200Response.  # noqa: E501
        :type green: TeamsGet200ResponseGreen
        """
        self.openapi_types = {
            'red': TeamsGet200ResponseRed,
            'green': TeamsGet200ResponseGreen
        }

        self.attribute_map = {
            'red': 'Red',
            'green': 'Green'
        }

        self._red = red
        self._green = green

    @classmethod
    def from_dict(cls, dikt) -> 'TeamsGet200Response':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _teams_get_200_response of this TeamsGet200Response.  # noqa: E501
        :rtype: TeamsGet200Response
        """
        return util.deserialize_model(dikt, cls)

    @property
    def red(self) -> TeamsGet200ResponseRed:
        """Gets the red of this TeamsGet200Response.


        :return: The red of this TeamsGet200Response.
        :rtype: TeamsGet200ResponseRed
        """
        return self._red

    @red.setter
    def red(self, red: TeamsGet200ResponseRed):
        """Sets the red of this TeamsGet200Response.


        :param red: The red of this TeamsGet200Response.
        :type red: TeamsGet200ResponseRed
        """

        self._red = red

    @property
    def green(self) -> TeamsGet200ResponseGreen:
        """Gets the green of this TeamsGet200Response.


        :return: The green of this TeamsGet200Response.
        :rtype: TeamsGet200ResponseGreen
        """
        return self._green

    @green.setter
    def green(self, green: TeamsGet200ResponseGreen):
        """Sets the green of this TeamsGet200Response.


        :param green: The green of this TeamsGet200Response.
        :type green: TeamsGet200ResponseGreen
        """

        self._green = green
