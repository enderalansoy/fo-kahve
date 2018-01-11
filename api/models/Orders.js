/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    siparis_konum: {
      type: 'string',
      required: 'true',
    },
  
    indirim: {
      type: 'float',
      defaultsTo: 0,
    },
  
    products: {
      collection: 'products',
      via: 'orders',
      dominant: true,
    },

    users: {
      model: 'users',
      via: 'products',
      required: 'true',
    },

  }
};

