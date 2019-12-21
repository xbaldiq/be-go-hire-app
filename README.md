# Go-Hire-App RESTful Api
---
## Introduction
A Hiring partner app for company scouting and hiring an available Engineer based on preference (skill, location, etc).

---

## Feature
- Crud Company
- Crud Engineer
- Register and Login user
- Sort and filter engineer with multiple parameter
- Engineer Pagination
- Username and password validation (regex)
- Password Encryption (base64)
- Route Authorization
    -  Rescricted Data read (Based on token type)
    -  Rescricted Update Data Engineer

#### Starting App
```js
npm run backend
``` 
---
## APP Route

## How to use
1. Register as Company/Engineer
2. Login and get Token
3. Input Bearer Token in Authorization header in Postman
4. Enter desired route

##### Company Route (Required company token)
Get All Engineer
```
route                 : /engineer/
route with sort       : /engineer/?id=asc
route with limit      : /engineer/?limit=20
route with filter     : /engineer/?name=iqbal
route with pagination : /engineer/?page=1
route with combined   : /engineer/?sort=id&order=asc&limit=20&page=1&name=iqbal&skill=php
``` 
Get Individual Engineer
```js
route: /engineer/:id
``` 
Patch Company
```js
route: /engineer/:id
body: {
    key: value;
}
``` 
Delete Company
```js
route: /engineer/:id
``` 
##### Engineer Route (Required Engineer token)
Get Engineer Profile
```js
route: /engineer/
``` 
Patch Engineer
```js
route: /engineer/
body: {
    key: value;
}
``` 
Delete Engineer
```js
route: /engineer/:id
``` 
## Dependencies
|  Name | Version  |
|---|---|
|  bcryptjs |  2.4.3 |
|  body-parser | 1.19.0 |
|  express | 4.17.1  |
|  cors | 2.8.5  |
|  helmet | 3.21.2  |
|  jsonwebtoken | 8.5.1 |
|  jwt-decode | 2.2.0  |
|  mysql |2.17.1   |
|  dotenv |  8.2.0 |
---