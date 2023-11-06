# BrewLabs Assignment (Nov - 2023)

A Nodejs Application using MongoDB that exposes RESTful API for managing books

## Table of Contents

<!-- - [Introduction](#introduction)
- [Features](#features) -->
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment Details](#deployment)
- [API Endpoints](#api-endpoints)

<!-- ## Introduction

Provide an introduction to your project. Explain what your project does and why it's useful.

## Features

List the key features of your project. For example:
- Basic CRUD operations: GET, POST, PATCH, DELETE
- Get data by ID -->

## Prerequisites

- Node.js (v21.1.0 Used)
- MongoDB Connection String 

## Installation

- Install Node Dependencies 
```bash
npm install
```
- Add your mongoDB connection string in config/development.json

## Usage
```bash
npm run dev
```

## Deploymnet Details
Deployment Details :

1> Launched An Ec2 Instance from AWS Console
2> Created a Security Group for the instance to allow traffic from ALL IPs to port 9000 of the server 
3> Installed GIT 
```bash
sudo yum install git
```
4> Installed Node
```bash
sudo yum install -y nodejs
```
5> Installed Pm2 
```bash
npm i pm2 -g
```
6> Created a user brewlabs
```bash
sudo adduser brewlabs
```
7> Switched to user brewlabs
```bash
sudo su - brewlabs
```
8> Cloned git repo
```bash
git clone https://github.com/Nalin-Gupta/brewlabs-assignment.git
```
9> Start Up a instance using pm2
```bash
NODE_ENV=development pm2 start app.js --name "BookShelf"
```



## API Endpoints

```http
POST /books HTTP/1.1
Host: 54.226.89.144:9000
Content-Type: application/json

{
"title" : "Title Of the Book",
"author" : "Author Of the Book",
"summary" : "Summary Of the Book"
}
```

```http
HTTP/1.1 201 OK
Content-Type: application/json

{
    "message": "Successful",
    "data": {
        "acknowledged": true,
        "insertedId": <id>
    }
}
```

```http
GET /books HTTP/1.1
Host: 54.226.89.144:9000
Content-Type: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "Successful",
    "result": [
        {
            "_id": "654942630577d66166dc6934",
            "title": "Lorem Ipsum",
            "author": "Lorem Ipsum 1",
            "summary": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
        }
    ]
}
```

```http
GET /books/:id HTTP/1.1
Host: 54.226.89.144:9000
Content-Type: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "Successful",
    "result": {
        "_id": "654942630577d66166dc6934",
        "title": "Lorem Ipsum",
        "author": "Lorem Ipsum 1",
        "summary": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
    }
}
```

```http
PATCH /books/:id HTTP/1.1
Host: 54.226.89.144:9000
Content-Type: application/json

{
"title" : "Title Of the Book",
"author" : "Author Of the Book",
"summary" : "Summary Of the Book"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "Successful",
    "result": {
        "_id": <id>,
        "title": "title",
        "author": "author",
        "summary": "summary"
    }
}
```

```http
DELETE /books/:id HTTP/1.1
Host: 54.226.89.144:9000
Content-Type: application/json
```

```http
HTTP/1.1 201 OK
Content-Type: application/json

{
    "message": "Successful",
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

