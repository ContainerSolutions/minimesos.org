// Bootstrap wants jQuery global =(
window.jQuery = $ = require('jquery')
var fs = require('fs')
var bootstrap = require('./node_modules/bootstrap/dist/js/bootstrap')

// Get Bootstrap styles with cssify
var bootstrapStyle = require('./node_modules/bootstrap/dist/css/bootstrap.css')
var customStyle = require('./site/assets/css/main.css')

var ver = fs.readFileSync('./site/version', 'utf-8')

$(function () {
    $(".download-area > span").html("Latest version: " + ver)
})
