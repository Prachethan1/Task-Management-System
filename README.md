# Task Management System


This project is a Task Management API built using Node js. The API allows users to manage tasks with basic CRUD operations. Each task has properties such as title, description, status and timestamps. 

## Features

1.CRUD Operations on Tasks:

* Create, Retrieve, Update, and Delete tasks.

2.Task Model:

* id: Unique identifier.

* title: Task title.

* description: Task details.

* status: Task status ("Pending", "In Progress", "Completed").

* createdAt: Timestamp when the task was created.

* updatedAt: Timestamp when the task was last updated.

3.Endpoints:

* POST /api/tasks: Create a task.

* GET /api/tasks: Get all tasks (supports pagination and search).

* GET /api/tasks/:id: Get a specific task by ID.

* PUT /api/tasks/:id: Update a task by ID.

* DELETE /api/tasks/:id: Delete a task by ID.

4.Authentication:

* User registration and login using JWT.

5.Optional Enhancements:

* Task search by title or description.

* Pagination support for retrieving tasks.

## Installation :
1.Clone the repository : 
```bash
$ git clone https://github.com/Prachethan1/Task-Management-System.git
```
2.Install dependencies
```bash
npm install
```
3.Start the server:
```bash
npm start
```
The server will run at http://localhost:3000

4.Use tools like Postman to test the API.

## API Reference

- Open postman for checking each api for TaskManagementSystem.

#### Get all tasks

```bash
  GET
  http://localhost:3000/api/tasks
```
![tasks](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t2.png?raw=true)

#### Get a task

```bash
  GET
  http://localhost:3000/api/task/${task_id}
```
![task](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t3.png?raw=true)

#### Create a task

```bash
  POST 
  http://localhost:3000/api/tasks
```

Creation of task:
![create](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t1.png?raw=true)

#### Update a task

```bash
  PUT 
  http://localhost:3000/api/updateTask/${task_id}
```
![update](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t4.png?raw=true)

#### Delete a task

```bash
  DELETE 
  http://localhost:3000/api/deleteTask/${task_id}
```
![delete](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t5.png?raw=true)


#### Register

```bash
  POST 
  http://localhost:3000/api/auth/register
```

![create](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t6.png?raw=true)


#### Login

```bash
  POST 
  http://localhost:3000/api/auth/login
```

![create](https://github.com/Prachethan1/Task-Management-System/blob/main/Screenshots/t7.png?raw=true)

### Dependencies

* bcryptjs: For hashing passwords.

* dotenv: For environment variable management.

* express: For building the API.

* jsonwebtoken: For token-based authentication.

* mongoose: For MongoDB interactions.

* morgan: For logging HTTP requests.



## Tech Stack

**Backend:** Nodejs, Expressjs

**Database:** MongoDB
