# Pet-app-backend

######## Token valid till 24hrs

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Register the user:- 

Request Type :- POST

API :- http://localhost:3000/api/auth/signup

Body Parameters in x-www-form-urlencoded :-
1) name: ""
2) username: ""
3) email: ""
4) password: ""

Response :- 

if successful :

  Status : 200
  {
    msg: "User registered successfully!"
  }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Signin the user:- 

Request Type :- POST

API :- http://localhost:3000/api/auth/signin

Body Parameters in x-www-form-urlencoded
1) email: ""
2) password: ""

Response :- 

if successful :

  Status : 200
  {
    auth: true, 
    accessToken: token
  }  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Signout the user:- 

Request Type :- POST

API :- http://localhost:3000/api/auth/signout

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Response :- 

if successful :

  Status : 200
  {
    msg : 'You have been Logged Out'
  }  


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Get the current profile of the user:- 

Request Type :- GET

API :- http://localhost:3000/api/getprofile

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Response :- 

if successful :

  Status : 200
  {
    "name": "",
    "username": "",
    "email": "",
    "doorNo": "",
    "streetName": "",
    "city": "",
    "phone": ""
  }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Update the profile of the user:- 

Request Type :- POST

API :- http://localhost:3000/api/updateprofile

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Body Parameters in x-www-form-urlencoded
1) name: ""
2) doorNo: ""
3) streetName: ""
4) city: ""
5) phone: ""

Response :- 

if successful :

  Status : 200
  {
    msg: 'Profile Updated Successfully.'
  }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Change the password the user account:- 

Request Type :- POST

API :- http://localhost:3000/api/changepassword

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Body Parameters in x-www-form-urlencoded
1) password: ""

Response :- 

if successful :

  Status : 200
  {
    msg: 'Password Updated Successfully.'
  }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Send the random generated password to the registered emailid

Request Type :- POST

API :- http://localhost:3000/api/forgotpasswordmail

Body Parameters in x-www-form-urlencoded
1) email: ""

Response :- 

if successful :

  Status : 200
  {
    msg : 'Email sent'
  }


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Set the device information the user scanned device :- 

Request Type :- POST

API :- http://localhost:3000/api/setdeviceinfo

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Body Parameters in x-www-form-urlencoded
1) deviceid: ""
2) petname: ""
3) MSISDN: ""
4) geofence: ""

Response :- 

if successful :

  Status : 200
  {
    msg : "Data Added Successfully"
  }


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Get the device information the user scanned device :- 

Request Type :- GET

API :- http://localhost:3000/api/getdeviceinfo

Headers :- 
1) authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDc4OTcxLCJleHAiOjE2MjgxNjUzNzF9.N6FdBB050mZUVUyN-EDaKiDuh7AYIinzNAEclxbsw6w"

Body Parameters in x-www-form-urlencoded
1) deviceid: ""

Response :- 

if successful :

  Status : 200
  {
    "deviceid": result.deviceid,
    "petname": result.petname,
    "MSISDN": result.MSISDN,
    "geofence": result.geofence
  }


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
