'use strict'

var path = require('path')

/* ------ Bootstrap bower hack ----start */
const editJsonFile = require("edit-json-file")
let file = editJsonFile(`${__dirname}/libs/bootstrap/bower.json`)

file.data.main[0] = "dist/css/bootstrap.css"
file.set("main", file.data.main)
file.save()

console.log("paths for bower auto include:", file.data.main)
/* ------ Bootstrap bower hack ------end */

module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config')
  })
}
