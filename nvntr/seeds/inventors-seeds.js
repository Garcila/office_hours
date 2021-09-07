const { Inventor } = require( '../models' );

const inventorData = [
  {
    inventor_name: 'Maria E. Beasley',
    country: 'United States',
  },
  {
    inventor_name: 'Stephanie L. Kwolek',
    country: 'United States',
  },
  {
    inventor_name: 'Ann Tsukamoto',
    country: 'United States',
  },
  {
    inventor_name: 'Ada Lovelace',
    country: 'England',
  },
  {
    inventor_name: 'Grace Hopper',
    country: 'United States',
  },
  {
    inventor_name: 'Rosalind Elsie Franklin',
    country: 'England',
  },
];

const seedInventors = () => Inventor.bulkCreate( inventorData );

module.exports = seedInventors;