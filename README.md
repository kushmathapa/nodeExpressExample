# expressjs-template-project

##Install dependencies:

```console
$ npm install
```

Start the server:

```console
$ npm start
```

### Usage

- Run npm start:dev to start the application.
- Connect to the API using Postman on port 5000.

User Registration

```console
curl --location --request POST 'http://localhost:5000/register' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AljDmXKbstAT0PWNljQF0AVz7nzt5342O.04TymrShtIC5B56RCqXDWlquV0vqVqvhtZRND9bDat8' \
--data-raw '{
    "username": "{username}",
    "password": "{password}"
}'
```

User login

```console
curl --location --request POST 'http://localhost:5000/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AljDmXKbstAT0PWNljQF0AVz7nzt5342O.04TymrShtIC5B56RCqXDWlquV0vqVqvhtZRND9bDat8' \
--data-raw '{
    "username": "{username}",
    "password": "{password}"
}'
```

Get Friends

```console
curl --location --request GET 'http://localhost:5000/friends' \
--header 'Cookie: connect.sid=s%3AljDmXKbstAT0PWNljQF0AVz7nzt5342O.04TymrShtIC5B56RCqXDWlquV0vqVqvhtZRND9bDat8'
```

Get Friends by Email Id

```console
curl --location --request GET 'http://localhost:5000/friends/andysmith@gamil.com'
```

Add Friends:

```console
curl --location --request POST 'http://localhost:5000/friends' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "andysmith@gamil.com",
    "firstName": "Andy",
    "lastName": "Smith",
    "DOB": "1/1/1987"
}'
```

Update Friend

```console
curl --location --request PUT 'http://localhost:5000/friends/andysmith@gmil.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Andy",
    "lastName": "Smith",
    "DOB": "1/1/1987"
}'
```

Delete Friend

```console
curl --location --request DELETE 'http://localhost:5000/friends/andysmith@gamil.com'
```
