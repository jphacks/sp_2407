import unittest

from flask import json

from openapi_server.models.buildings_nearby_get200_response_inner import BuildingsNearbyGet200ResponseInner  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_buildings_nearby_get(self):
        """Test case for buildings_nearby_get

        Get nearby buildings coordinates
        """
        query_string = [('latitude', 3.4),
                        ('longitude', 3.4),
                        ('radius', 1000)]
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/buildings/nearby',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
