from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server import util


class PostStationVoteRequest(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, team=None, points=None):  # noqa: E501
        """PostStationVoteRequest - a model defined in OpenAPI

        :param team: The team of this PostStationVoteRequest.  # noqa: E501
        :type team: str
        :param points: The points of this PostStationVoteRequest.  # noqa: E501
        :type points: int
        """
        self.openapi_types = {
            'team': str,
            'points': int
        }

        self.attribute_map = {
            'team': 'team',
            'points': 'points'
        }

        self._team = team
        self._points = points

    @classmethod
    def from_dict(cls, dikt) -> 'PostStationVoteRequest':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The postStationVote_request of this PostStationVoteRequest.  # noqa: E501
        :rtype: PostStationVoteRequest
        """
        return util.deserialize_model(dikt, cls)

    @property
    def team(self) -> str:
        """Gets the team of this PostStationVoteRequest.

        投票するチームの名前。  # noqa: E501

        :return: The team of this PostStationVoteRequest.
        :rtype: str
        """
        return self._team

    @team.setter
    def team(self, team: str):
        """Sets the team of this PostStationVoteRequest.

        投票するチームの名前。  # noqa: E501

        :param team: The team of this PostStationVoteRequest.
        :type team: str
        """
        allowed_values = ["Red", "Green"]  # noqa: E501
        if team not in allowed_values:
            raise ValueError(
                "Invalid value for `team` ({0}), must be one of {1}"
                .format(team, allowed_values)
            )

        self._team = team

    @property
    def points(self) -> int:
        """Gets the points of this PostStationVoteRequest.

        投票する点数。  # noqa: E501

        :return: The points of this PostStationVoteRequest.
        :rtype: int
        """
        return self._points

    @points.setter
    def points(self, points: int):
        """Sets the points of this PostStationVoteRequest.

        投票する点数。  # noqa: E501

        :param points: The points of this PostStationVoteRequest.
        :type points: int
        """
        if points is not None and points < 1:  # noqa: E501
            raise ValueError("Invalid value for `points`, must be a value greater than or equal to `1`")  # noqa: E501

        self._points = points
