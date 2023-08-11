const db = require('../config/connection');
const { Car } = require('../models');
const carSeeds = require('./carSeeds.json');

db.once('open', async () => {
  await Car.deleteMany({});
  await Car.create(carSeeds);

  console.log('all done!');
  process.exit(0);
});