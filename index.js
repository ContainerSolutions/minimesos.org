// Bootstrap wants jQuery global =(
window.jQuery = $ = require('jquery')

var bootstrap = require('bootstrap/dist/js/bootstrap')

// Get Bootstrap styles with cssify
var bootstrapStyle = require('./node_modules/bootstrap/dist/css/bootstrap.css')
var customStyle = require('./site/assets/css/main.css')
