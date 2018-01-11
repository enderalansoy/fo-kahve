/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',

  attributes: {

    isim: {
      type: 'string',
      required: 'true',
    },

    aciklama: {
      type: 'string',
      defaultsTo: 'Açıklama yok.',
    },

    fiyat: {
      type: 'float',
      required: 'true',
    },

    resim: {
      type: 'string',
      defaultsTo: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=139064916',
    },

    orders: {
      model: 'orders',
      via: 'products',
    },

  },

};

