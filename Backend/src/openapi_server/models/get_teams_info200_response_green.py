from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class GetTeamsInfo200ResponseGreen(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, emoji=None, theme=None):  # noqa: E501
        """GetTeamsInfo200ResponseGreen - a model defined in OpenAPI

        :param emoji: The emoji of this GetTeamsInfo200ResponseGreen.  # noqa: E501
        :type emoji: str
        :param theme: The theme of this GetTeamsInfo200ResponseGreen.  # noqa: E501
        :type theme: str
        """
        self.openapi_types = {
            'emoji': str,
            'theme': str
        }

        self.attribute_map = {
            'emoji': 'emoji',
            'theme': 'theme'
        }

        self._emoji = emoji
        self._theme = theme

    @classmethod
    def from_dict(cls, dikt) -> 'GetTeamsInfo200ResponseGreen':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The getTeamsInfo_200_response_Green of this GetTeamsInfo200ResponseGreen.  # noqa: E501
        :rtype: GetTeamsInfo200ResponseGreen
        """
        return util.deserialize_model(dikt, cls)

    @property
    def emoji(self) -> str:
        """Gets the emoji of this GetTeamsInfo200ResponseGreen.

        Greenチームのemoji。  # noqa: E501

        :return: The emoji of this GetTeamsInfo200ResponseGreen.
        :rtype: str
        """
        return self._emoji

    @emoji.setter
    def emoji(self, emoji: str):
        """Sets the emoji of this GetTeamsInfo200ResponseGreen.

        Greenチームのemoji。  # noqa: E501

        :param emoji: The emoji of this GetTeamsInfo200ResponseGreen.
        :type emoji: str
        """

        self._emoji = emoji

    @property
    def theme(self) -> str:
        """Gets the theme of this GetTeamsInfo200ResponseGreen.

        Greenチームのお題。  # noqa: E501

        :return: The theme of this GetTeamsInfo200ResponseGreen.
        :rtype: str
        """
        return self._theme

    @theme.setter
    def theme(self, theme: str):
        """Sets the theme of this GetTeamsInfo200ResponseGreen.

        Greenチームのお題。  # noqa: E501

        :param theme: The theme of this GetTeamsInfo200ResponseGreen.
        :type theme: str
        """

        self._theme = theme
