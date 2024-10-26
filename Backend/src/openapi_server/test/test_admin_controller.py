import unittest

from flask import json

from openapi_server.test import BaseTestCase


class TestAdminController(BaseTestCase):
    """AdminController integration test stubs"""

    def test_reset_database(self):
        """Test case for reset_database

        データベースのリセット
        """
        headers = { 
        }
        response = self.client.open(
            '/api/v0/database/reset',
            method='POST',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
