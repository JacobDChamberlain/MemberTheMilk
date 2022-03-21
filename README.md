# MemberTheMilk
<p>Remember The Milk (MVP Clone).<br>
MemberTheMilk is inspired by RememberTheMilk a to-do list task tracker.</p>

# Live Site
https://rememberthismilk.herokuapp.com/

# Features

Logged in users can:

* Add/Create Tasks
* Update/Delete Tasks
* Add/Create Lists
* Update/Delete Lists
* Able to view a summary of their selected List
* Able to search for Tasks

# How to start the development enviornment

* Clone this repository: git clone `git@github.com:JacobDChamberlain/MemberTheMilk.git`
* Install dependencies: `npm install`
* Create a .env file based on the .env.example given
* Setup your username and database based on what you wrote for your .env
* Migrate and Seed Models by running:
  * `npx dotenv sequelize db:migrate`
  * `npx dotenv sequelize db:seed:all`
* Start the app using: `npm start`


# Technologies Used:

* Git
* Javascript
* NodeJS
* Pug
* Express
* Heroku
* CSS
* bcryptjs
* Postgresql

# Create, Read, Update and Delete Tasks
img goes here

# Database Schema
![Database Schema](/public/images/grpMod4DbSchema.png "Project's Database Schema")

# Wiki Docs
https://github.com/JacobDChamberlain/MemberTheMilk/wiki