/**
 * ExtrasController
 *
 * @description :: Server-side logic for managing extras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
  }
};

