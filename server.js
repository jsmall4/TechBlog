const express = require("express");
const session = require("express-session");
const path = require("path");
const handlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
