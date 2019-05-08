'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = require('@adonisjs/lucid/src/Lucid/Model')

class CustomModel extends Model {
  static boot () {
    debugger
    super.boot()
    console.log("custom model call");
  }
}

module.exports = CustomModel
