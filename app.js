var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controllers/SiteController.js")

// Routes
app("/", SiteController.Index)
app("/about", SiteController.About)
app("/contact", SiteController.Contact)

module.exports = app
