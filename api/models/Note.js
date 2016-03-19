/**
 * Note.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 const Guid = require('guid')

module.exports = {

  attributes: {
    name: { type: 'string' },
    message: { type: 'string' },
    guid: { type: 'string', unique: true },
    // Relationships
    board: { model: 'board' }
  },


  // Lifecycle
  beforeCreate(values, cb) {
    values.guid = Guid.raw()
    cb()
  }
}
