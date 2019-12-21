# Go-Hire-App RESTful Api
---
## Introduction
A Hiring partner app for company scouting and hiring an available Engineer based on preference (skill, location, etc).

---

#### Starting App
```js
npm run backend
``` 
---
## APP Route

##### Company Route (Required company token)
Get All Engineer
```
route               : /engineer/
route with sort     : /engineer/?id=asc
route with filter   : /engineer/?name=iqbal
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