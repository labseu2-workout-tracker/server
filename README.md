# BeFit [![Build Status](https://travis-ci.com/labseu2-workout-tracker/server.svg?branch=master)](https://travis-ci.com/labseu2-workout-tracker/server)
# API documentation

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

**NOTE** : When you are adding anything to this document you can always use your favourite text editor but save the file with the same format as this document and also as a docx. . When all is ready to be uploaded you can use any doc.x to markdown convertors then copy the syntax in the markdown and paste it on to here 
 Thank You
- https://word2md.com/

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

( If you successfully register a user the endpoint will return an HTTP response with a status code 201 and a body as below.)

_example:_

{

  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX&quot;

}



**400 (Bad Request)**

( If you are missing an email or password for registration, the endpoint will return an HTTP response with a status code 400 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, looks like this email already exists&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while registering&quot;

}



**LOGIN**

**Logs a user in**

_Method Url:_ /api/auth/login

_HTTP method:_**[POST]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| email | String | Yes | Must match an email in the database |
| password | String | Yes | Must match a password in the database corresponding to email above |

_example:_

{

  &quot;email&quot;: &quot;email@gmail.com&quot;

  &quot;password&quot;: &quot;password123&quot;,

}

**Response**

**200 (OK)**

( If you successfully login, the endpoint will return an HTTP response with a status code 200 and a body as below.)

_example:_

{

  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MDwiaWF0IjoxNTQ0MzM1NjUxLCJleHAuOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXnE&quot;,

}



**401 (Unauthorized)**

( If you fail to login, the endpoint will return an HTTP response with a status code 401 which indicates the email and or password entered is not valid. )

_example:_

{

  message: &quot;Oops, username or password is incorrect&quot;

}



**500 (Bad Request)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while logging in&quot;

}









#

**GET USER**

**Get user profile by user id**

_Method Url:_ /api/user/:id

_HTTP method:_**[GET]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| id | Integer | Yes | ID of a specific applicant |

**Response**

**200 (OK)**

( If the user profile is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.)

_example:_

{

&quot;Id&quot;:&quot;25&quot;,

&quot;username&quot;:&quot;BigMuscle456&quot;,

&quot;Password&quot;:&quot; TokenEncrypted:&quot;J67cvcjcbchcj74kF-hash12-hyJR578iKxI&quot;,

&quot;email&quot;:&quot;bigmuscles@befit.com&quot;,

&quot;gender&quot;:&quot;M&quot;,

&quot;weight&quot;:&quot;100lbs&quot;,

&quot;Height&quot;:&quot;30cm&quot;,

&quot;User\_level&quot;: &quot;Intermediate&quot;,

&quot;Created\_at&quot;: &quot;2019/08/18&quot;,

&quot;Updated\_at&quot;: &quot;2019/08/19&quot;

}

**404 (Not Found)**

( If the provided userId doesn&#39;t have a profile, the endpoint will return an HTTP response with a status code 404 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Sorry, but that profile doesn&#39;t exist&quot;

}

**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.)

_example:_

{

  &quot;message&quot;: &quot;Sorry, but something went wrong while getting that profile&quot;

}

**ADD USER / CREATE**

_Method Url:_ /api/user

_HTTP method:_**[POST]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| username | String | Yes | Cannot be an empty field |
| password | String | Yes | Cannot be an empty field |
| email | String | Yes | Cannot be an empty field |
| gender | String | Yes | Cannot be an empty field |
| weight | Integer | Yes | Cannot be an empty field |
| height | Integer | Yes | Cannot be an empty field |
| user\_level | integer | Yes | Cannot be an empty field |
| created\_at | timestamp |   |   |
| updated\_at | timestamp |   |   |

_example:_

{

&quot;Id&quot;:&quot;25&quot;,

&quot;username&quot;:&quot;BigMuscle456&quot;,

&quot;Password&quot;:&quot; TokenEncrypted:&quot;J67cvcjcbchcj74kF-hash12-hyJR578iKxI&quot;,

&quot;email&quot;:&quot;bigmuscles@befit.com&quot;,

&quot;gender&quot;:&quot;M&quot;,

&quot;weight&quot;:&quot;100lbs&quot;,

&quot;Height&quot;:&quot;30cm&quot;,

&quot;User\_level&quot;: &quot;Intermediate&quot;,

&quot;Created\_at&quot;: &quot;2019/08/18&quot;,

&quot;Updated\_at&quot;: &quot;2019/08/19&quot;

}







**Response**

**201 (Created)**

( If you successfully create a user profile, the endpoint will return an HTTP response with a status code 201 and a body as below. )

_example:_

{

&quot;Id&quot;:&quot;25&quot;,

&quot;username&quot;:&quot;BigMuscle456&quot;,

&quot;Password&quot;:&quot; TokenEncrypted:&quot;J67cvcjcbchcj74kF-hash12-hyJR578iKxI&quot;,

&quot;email&quot;:&quot;bigmuscles@befit.com&quot;,

&quot;gender&quot;:&quot;M&quot;,

&quot;weight&quot;:&quot;100lbs&quot;,

&quot;Height&quot;:&quot;30cm&quot;,

&quot;User\_level&quot;: &quot;Intermediate&quot;,

&quot;Created\_at&quot;: &quot;2019/08/18&quot;,

&quot;Updated\_at&quot;: &quot;2019/08/19&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while creating your profile&quot;

}





**UPDATE USER**

**Update user by user id**

_Method Url:_ /api/user/:id

_HTTP method:_**[PUT]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Parameters**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| id | Integer | Yes | ID of a specific applicant |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Id | Integer | Yes | Cannot be an empty field |
| username | String | Yes | Cannot be an empty field |
| password | String | Yes | Cannot be an empty field |
| email | String | Yes | Cannot be an empty field |
| gender | String | Yes | Cannot be an empty field |
| weight | Integer | Yes | Cannot be an empty field |
| height | Integer | Yes | Cannot be an empty field |
| user\_level | integer | Yes | Cannot be an empty field |
| created\_at | timestamp |   |   |
| updated\_at | timestamp |   |   |

_example:_

{

&quot;Id&quot;:&quot;25&quot;,

&quot;username&quot;:&quot;BigMuscle456&quot;,

&quot;Password&quot;:&quot; TokenEncrypted:&quot;J67cvcjcbchcj74kF-hash12-hyJR578iKxI&quot;,

&quot;email&quot;:&quot;bigmuscles@befit.com&quot;,

&quot;gender&quot;:&quot;M&quot;,

&quot;weight&quot;:&quot;100lbs&quot;,

&quot;Height&quot;:&quot;30cm&quot;,

&quot;User\_level&quot;: &quot;Intermediate&quot;,

&quot;Created\_at&quot;: &quot;2019/08/18&quot;,

&quot;Updated\_at&quot;: &quot;2019/08/19&quot;

}

**Response**

**200 (OK)**

( If user with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code 200 and a body as below. )

_example:_

{

&quot;Id&quot;:&quot;25&quot;,

&quot;username&quot;:&quot;BigMuscle456&quot;,

&quot;Password&quot;:&quot; TokenEncrypted:&quot;J67cvcjcbchcj74kF-hash12-hyJR578iKxI&quot;,

&quot;email&quot;:&quot;bigmuscles@befit.com&quot;,

&quot;gender&quot;:&quot;M&quot;,

&quot;weight&quot;:&quot;105lbs&quot;,

&quot;Height&quot;:&quot;30cm&quot;,

&quot;User\_level&quot;: &quot;Advanced&quot;,

&quot;Created\_at&quot;: &quot;2019/08/18&quot;,

&quot;Updated\_at&quot;: &quot;2019/08/15&quot;

}



**404 (Not Found)**

( If the applicant profile for the specified id can&#39;t be found in the database, the endpoint will return an HTTP response with a status code 404 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, doesn&#39;t look like that profile exists&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while updating this profile&quot;

}



**DELETE USER / ACCOUNT**

**Delete user by user id**

_Method Url:_ /api/user/:id

_HTTP method:_**[DELETE]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Parameters**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| id | Integer | Yes | ID of a specific applicant |

**Response**

**200 (OK)**

( If user with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code 200 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;User successfully deleted&quot;

}

**404 (Not Found)**

( If the applicant profile for the specified id can&#39;t be found in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.)

_example:_

{

  &quot;message&quot;: &quot;Oops, doesn&#39;t look like that profile exists&quot;

}



**500 (Bad Request)**

( If you send in invalid fields, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while deleting this profile }



**GET WORKOUTS**

**Get workout by user id**

_Method Url:_ /api/user/workouts/:id

_HTTP method:_**[GET]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Response**

**200 (OK)**

( If workout is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below. )

_example:_

[

  {

&quot;Id&quot;:  &quot;1&quot;

&quot;workout\_name&quot;:&quot;Abs&quot;,

&quot;workout\_description&quot;: &quot;These proven exercises, demonstrated by a certified personal trainer, target all major abdominal muscles. Spending just minutes a day can strengthen your core and tone your abs. The routine&#39;s simple interface, complete with video and timer, allows you to easily follow along and understand each exercise&quot;,

&quot;Image\_url&quot;: &quot;https//something.abs/muscle.png&quot; ,

&quot;created\_at&quot;: &quot;2019/08/22&quot; ,

&quot;updated\_at&quot;: &quot;2019/08/24&quot;,

  },

]



**404 (Not Found)**

( A 404 (Not Found) response has two possible outcomes one if the user doesn&#39;t have any workouts or if the provided user doesn&#39;t have a profile, the endpoint will return an HTTP response with a status code 404 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, this user doesn&#39;t have workout yet&quot;

}



or

{

  &quot;message&quot;: &quot;Oops, doesn&#39;t look like that workout exists&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while fetching this workout&quot;

}







**ADD WORKOUTS**

**Add workout**

_Method Url:_ /api/user/workout

_HTTP method:_**[POST]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| workoukID | Integer | Yes | Must match a user&#39;s id in the database |
| workout\_name | String | Yes | Cannot be an empty field |
| workout\_description | String | Yes | Cannot be an empty field |
| image\_url | String | Yes | Cannot be an empty field |
| created \_at | timestamps | Yes | Cannot be an empty field |
| updated\_at | timestamps | Yes | Cannot be an empty field |

_example:_

{

  &quot;userId&quot;: 1,

  &quot;UserWorkout&quot;: [

    {

&quot;workout\_name&quot;:&quot;Abs&quot;,

&quot;workout\_description&quot;: &quot;These proven exercises, demonstrated by a certified personal trainer, target all major abdominal muscles. Spending just minutes a day can strengthen your core and tone your abs. The routine&#39;s simple interface, complete with video and timer, allows you to easily follow along and understand each exercise&quot;,

&quot;Image\_url&quot;: &quot;https//something.abs/muscle.png&quot; ,

&quot;created\_at&quot;: &quot;2019/08/22&quot; ,

&quot;updated\_at&quot;: &quot;2019/08/24&quot;  },

  ]

}



**Response**

**201 (Created)**

( If you successfully create applicant workout, the endpoint will return an HTTP response with a status code 201 and a body as below. )

_example:_

[

  {

&quot;Id&quot;:  &quot;1&quot;

&quot;workout\_name&quot;:&quot;Abs&quot;,

&quot;workout\_description&quot;: &quot;These proven exercises, demonstrated by a certified personal trainer, target all major abdominal muscles. Spending just minutes a day can strengthen your core and tone your abs. The routine&#39;s simple interface, complete with video and timer, allows you to easily follow along and understand each exercise&quot;,

&quot;Image\_url&quot;: &quot;https//something.abs/muscle.png&quot; ,

&quot;created\_at&quot;: &quot;2019/08/22&quot; ,

&quot;updated\_at&quot;: &quot;2019/08/24&quot;,

  },

]

**404 (Not Found)**

 ( If  we can&#39;t manage to add the work out to the database or to our list, the endpoint will return an HTTP response with a status code 404 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Oops, could not add workout&quot;

}



**400 (Bad Request)**

( If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code 400 and a body as below relating to the missing field(s). )

_example:_

{

  &quot;message&quot;: &quot;Please provide a workout\_name&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Sorry, but something went wrong while trying to add abs&quot;

}



**UPDATE WORKOUT**

**Update individual workout using workout by id**

_Method Url:_ /api/user/workout/:id

_HTTP method:_**[PUT]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Parameters**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| id | Integer | Yes | ID of a specific education object |

**Body**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| workoukID | Integer | Yes | Must match a user&#39;s id in the database |
| workout\_name | String | Yes | Cannot be an empty field |
| workout\_description | String | Yes | Cannot be an empty field |
| image\_url | String | Yes | Cannot be an empty field |
| created \_at | timestamps | Yes | Cannot be an empty field |
| updated\_at | timestamps | Yes | Cannot be an empty field |

_example:_

[

  {

&quot;Id&quot;:  &quot;1&quot;

&quot;workout\_name&quot;:&quot;Arms&quot;,

&quot;workout\_description&quot;: &quot;Lorem ipsum arms instead of Abs a certified personal trainer, target all major abdominal muscles. Spending just minutes a day can strengthen your core and tone your abs. The routine&#39;s simple interface, complete with video and timer, allows you to easily follow along and understand each exercise&quot;,

&quot;Image\_url&quot;: &quot;https//something.abs/muscle.png&quot; ,

&quot;created\_at&quot;: &quot;2019/08/22&quot; ,

&quot;updated\_at&quot;: &quot;2019/08/24&quot;,

  },

]



**Response**

**200 (OK)**

( If the workout object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.)

_example:_

{

  [

  {

&quot;Id&quot;:  &quot;23&quot;

&quot;workout\_name&quot;:&quot;Arms&quot;,

&quot;workout\_description&quot;: &quot;Lorem ipsum arms instead of Abs a certified personal trainer, target all major abdominal muscles. Spending just minutes a day can strengthen your core and tone your abs. The routine&#39;s simple interface, complete with video and timer, allows you to easily follow along and understand each exercise&quot;,

&quot;Image\_url&quot;: &quot;https//something.abs/muscle.png&quot; ,

&quot;created\_at&quot;: &quot;2019/08/22&quot; ,

&quot;updated\_at&quot;: &quot;2019/08/24&quot;,

  },

]

}



**404 (Not Found)**

( If the workout object for the specified id can&#39;t be found in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.)

_example:_

{

  &quot;message&quot;: &quot;Oops, doesn&#39;t look like that workout doesnt exists&quot;

}



**400 (Bad Request)**

( If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code 400 and a body as below relating to the missing field(s).)

_example:_

{

  &quot;message&quot;: &quot;Please provide a workou\_name&quot;

}



**500 (Internal Server Error)**

( If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.)

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while updating this workout&quot;

}



**DELETE WORKOUT**

**Delete workout by id**

_Method Url:_ /api/user/workout/:id

_HTTP method:_**[DELETE]**

**Headers**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| Content-Type | String | Yes | Must be application/json |
| Authorization | String | Yes | JSON Web Token |

**Parameters**

| **name** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| id | Integer | Yes | ID of workout |

**Response**

**200 (OK)**

( If the workout object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code 200 and a body as below. )

_example:_

{

  &quot;message&quot;: &quot;Workout successfully deleted&quot;

}



**404 (Not Found)**

( If the Workout object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.)

_example:_

{

  &quot;message&quot;: &quot;Oops, doesn&#39;t look like this workout exists&quot;

}



**500 (Bad Request)**

( If you send in invalid fields, the endpoint will return an HTTP response with a status code 500 and a body as below.) 

_example:_

{

  &quot;message&quot;: &quot;Oops, something went wrong while deleting this workout&quot;

}

