var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controllers/SiteController.js")
const PhotosController = require("./controllers/PhotosController.js")
// Routes
app("/", SiteController.Index)
app("/about", SiteController.About)
app("/contact", SiteController.Contact)
app("/photos", PhotosController.Index)
app("/photos/:id", PhotosController.Show)
app("/photos/new", PhotosController.New)
app("/photos/create", PhotosController.Create)


module.exports = app
