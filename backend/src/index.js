import app from './app';
import '@babel/polyfill';
import { sequelize } from './database/database';

async function main(){
    await app.listen(5000);
    console.log('Server on port 5000');

    sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
};

main();