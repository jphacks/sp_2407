from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model import Model
from openapi_server.models.nearby_stations_response_inner_total_votes import NearbyStationsResponseInnerTotalVotes
from openapi_server import util

from openapi_server.models.nearby_stations_response_inner_total_votes import NearbyStationsResponseInnerTotalVotes  # noqa: E501

class VoteResponse(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, team=None, total_votes=None):  # noqa: E501
        """VoteResponse - a model defined in OpenAPI

        :param id: The id of this VoteResponse.  # noqa: E501
        :type id: str
        :param team: The team of this VoteResponse.  # noqa: E501
        :type team: str
        :param total_votes: The total_votes of this VoteResponse.  # noqa: E501
        :type total_votes: NearbyStationsResponseInnerTotalVotes
        """
        self.openapi_types = {
            'id': str,
            'team': str,
            'total_votes': NearbyStationsResponseInnerTotalVotes
        }

        self.attribute_map = {
            'id': '_id',
            'team': 'team',
            'total_votes': 'totalVotes'
        }

        self._id = id
        self._team = team
        self._total_votes = total_votes

    @classmethod
    def from_dict(cls, dikt) -> 'VoteResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The VoteResponse of this VoteResponse.  # noqa: E501
        :rtype: VoteResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> str:
        """Gets the id of this VoteResponse.

        投票したステーションのID。  # noqa: E501

        :return: The id of this VoteResponse.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id: str):
        """Sets the id of this VoteResponse.

        投票したステーションのID。  # noqa: E501

        :param id: The id of this VoteResponse.
        :type id: str
        """

        self._id = id

    @property
    def team(self) -> str:
        """Gets the team of this VoteResponse.

        投票されたチームの名前。  # noqa: E501

        :return: The team of this VoteResponse.
        :rtype: str
        """
        return self._team

    @team.setter
    def team(self, team: str):
        """Sets the team of this VoteResponse.

        投票されたチームの名前。  # noqa: E501

        :param team: The team of this VoteResponse.
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
    def total_votes(self) -> NearbyStationsResponseInnerTotalVotes:
        """Gets the total_votes of this VoteResponse.


        :return: The total_votes of this VoteResponse.
        :rtype: NearbyStationsResponseInnerTotalVotes
        """
        return self._total_votes

    @total_votes.setter
    def total_votes(self, total_votes: NearbyStationsResponseInnerTotalVotes):
        """Sets the total_votes of this VoteResponse.


        :param total_votes: The total_votes of this VoteResponse.
        :type total_votes: NearbyStationsResponseInnerTotalVotes
        """

        self._total_votes = total_votes
