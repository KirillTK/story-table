const dotenv = require('dotenv');

dotenv.config();

const a: number = 2;

console.log('asd', a, process.env.DATABASE_URL);
