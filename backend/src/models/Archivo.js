import BudgetLineAtlas from './BudgetLineAtlas'
//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Archivo = sequelize.define('archivos',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    filename:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    filedir:{
        type: Sequelize.STRING
       
    },
    fase:{
        type:Sequelize.STRING
    },

    budgetlineatlas_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: BudgetLineAtlas,
          key: 'id'
         }
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

Archivo.belongsTo(BudgetLineAtlas, {foreignKey: 'budgetlineatlas_id'});

export default Archivo;