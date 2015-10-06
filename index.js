// Bootstrap wants jQuery global =(
window.jQuery = $ = require('jquery')

// Bootstrap doesn't have a "main" field / export anything =(
var bootstrap = require('bootstrap/dist/js/bootstrap')

// Get Bootstrap styles with cssify
var bootstrapStyle = require('./node_modules/bootstrap/dist/css/bootstrap.css')
var customStyle = require('./site/assets/css/main.css')
