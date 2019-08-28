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
# AUTH ROUTES

**REGISTER**

**Registers a user**

_Method Url:_ /api/auth/register

_HTTP method:_**[POST]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| username | string | Yes | Username unique |
| email | String | Yes | Must be unique |
| password | String | Yes | Must be unique |
| password | string | yes | Must be the same with Password |
|   |   |   |   |
|   |   |   |   |

_example:_

{

&quot;Username&quot;:&quot;bigmuscle467&quot;

  &quot;email&quot;: &quot;email@gmail.com&quot;

  &quot;password&quot;: &quot;password123&quot;,

}

**Response**

**201 (Created)**

If you successfully register a user the endpoint will return an HTTP response with a status code 201 and a body as below.

_example:_

{

  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX&quot;

}



**400 (Bad Request)**

If you are missing an email or password for registration, the endpoint will return an HTTP response with a status code 400 and a body as below.

_example:_

{

  &quot;message&quot;: &quot;Oops, looks like this email already exists&quot;

}



**500 (Internal Server Error)**

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while registering&quot;

}



