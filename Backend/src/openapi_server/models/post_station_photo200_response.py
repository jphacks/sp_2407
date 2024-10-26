from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class PostStationPhoto200Response(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, photo_urls=None):  # noqa: E501
        """PostStationPhoto200Response - a model defined in OpenAPI

        :param photo_urls: The photo_urls of this PostStationPhoto200Response.  # noqa: E501
        :type photo_urls: List[str]
        """
        self.openapi_types = {
            'photo_urls': List[str]
        }

        self.attribute_map = {
            'photo_urls': 'photoUrls'
        }

        self._photo_urls = photo_urls

    @classmethod
    def from_dict(cls, dikt) -> 'PostStationPhoto200Response':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The postStationPhoto_200_response of this PostStationPhoto200Response.  # noqa: E501
        :rtype: PostStationPhoto200Response
        """
        return util.deserialize_model(dikt, cls)

    @property
    def photo_urls(self) -> List[str]:
        """Gets the photo_urls of this PostStationPhoto200Response.

        アップロードされた写真のURLリスト。  # noqa: E501

        :return: The photo_urls of this PostStationPhoto200Response.
        :rtype: List[str]
        """
        return self._photo_urls

    @photo_urls.setter
    def photo_urls(self, photo_urls: List[str]):
        """Sets the photo_urls of this PostStationPhoto200Response.

        アップロードされた写真のURLリスト。  # noqa: E501

        :param photo_urls: The photo_urls of this PostStationPhoto200Response.
        :type photo_urls: List[str]
        """

        self._photo_urls = photo_urls