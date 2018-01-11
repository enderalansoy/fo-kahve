/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',

  attributes: {

    sicil: {
      type: 'string',
      required: 'true',
      unique: 'true',
    },

    parola: {
      type: 'string',
      required: 'true',
    },
    
    ad: {
      type: 'string',
      required: 'true',
    },

    soyad: {
      type: 'string',
      required: 'true',
    },

    varsayilan_konum: {
      type: 'string',
      required: 'true',
    },

    orders: {
      collection: 'orders',
      via: 'users',
    },

  }
};

