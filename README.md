# API documentation

The Apis we using :

Rest API

Endpoint Documentation

- Resource description

Information

- Resource url
- Methods
- Parameters
- Request example
- Response examples
- Status and error codes
- Code sample

Keys to authorize the calls

Make requests via postman to test endpoints



##
# SUMMARY TABLE OF API ENDPOINTS

| **Table** | **Method** | **Endpoint** | **Description** |
| --- | --- | --- | --- |
| users | POST | /api/auth/register | Creates a new user profile using the information sent inside the body of the request and returns a message along with the new user and a JSON Web Token in the body of the response. |
| users | POST | /api/auth/login | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message with the user profile and a JSON Web Token token in the body of the response. |

#

##
