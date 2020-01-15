//para modelar datos 
import Sequelize from 'sequelize';
import Category from './Category';
import Person from './Person';
import Account from './Account';

//import connection object
import { sequelize } from '../database/database';

const Budget = sequelize.define('budgets',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: Sequelize.STRING, 
    },
    name:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    description:{
        type:Sequelize.TEXT
    },
    excercise:{
        type: Sequelize.STRING, 
    },
    account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Account,
          key: 'id',
         }
    },
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    buddgetstart:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    buddgeupdate:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    buddgetfinal:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    balance:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    returns:{
        type:Sequelize.DOUBLE,
    },
    deviation:{
        type:Sequelize.DOUBLE,
    },
    status:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    approval:{
        type:Sequelize.BOOLEAN,
    },
    approvalby_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    dateapproval:{
        type:Sequelize.DATEONLY,
    },
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    }

},{timestamps:true });

export default Budget;