from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class StationsStationIdVotePostRequest(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, team=None):  # noqa: E501
        """StationsStationIdVotePostRequest - a model defined in OpenAPI

        :param team: The team of this StationsStationIdVotePostRequest.  # noqa: E501
        :type team: str
        """
        self.openapi_types = {
            'team': str
        }

        self.attribute_map = {
            'team': 'team'
        }

        self._team = team

    @classmethod
    def from_dict(cls, dikt) -> 'StationsStationIdVotePostRequest':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _stations__stationId__vote_post_request of this StationsStationIdVotePostRequest.  # noqa: E501
        :rtype: StationsStationIdVotePostRequest
        """
        return util.deserialize_model(dikt, cls)

    @property
    def team(self) -> str:
        """Gets the team of this StationsStationIdVotePostRequest.

        投票するチームの名前。  # noqa: E501

        :return: The team of this StationsStationIdVotePostRequest.
        :rtype: str
        """
        return self._team

    @team.setter
    def team(self, team: str):
        """Sets the team of this StationsStationIdVotePostRequest.

        投票するチームの名前。  # noqa: E501

        :param team: The team of this StationsStationIdVotePostRequest.
        :type team: str
        """
        allowed_values = ["Red", "Green"]  # noqa: E501
        if team not in allowed_values:
            raise ValueError(
                "Invalid value for `team` ({0}), must be one of {1}"
                .format(team, allowed_values)
            )

        self._team = team
