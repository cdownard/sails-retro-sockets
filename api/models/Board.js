/**
 * Board.js
 *
 * @description :: A board contains many post its for a retrospective. It can
                   have many users
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 const Guid = require('guid')

module.exports = {

  attributes: {
    title: { type: 'string', unique: true },
    guid: { type: 'string', unique: true }
  },

  beforeCreate(values, cb) {
    values.guid = Guid.raw()
    cb()
  }
}
