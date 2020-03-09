//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';
import Account from './Account';
import Project from './Project';
import Category from './Category';
import Atlas from './Atlas';
import AtlasAccount from './AtlasAccount';

//import connection object
import { sequelize } from '../database/database';

const BudgetLineAtlas = sequelize.define('budgetlines_atlas',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_resultado:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    code_producto:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    code_activity:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    code_atlas:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    code_sub_atlas:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    code:{
        type: Sequelize.STRING, 
    },
    
    date_start:{
        type: Sequelize.DATEONLY, 
    },
    date_end:{
        type: Sequelize.DATEONLY, 
    },
    
    account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Account,
          key: 'id',
         }
    },
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Project,
          key: 'id',
         }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    supplier_id: {
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
        allowNull: true,
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

BudgetLine.belongsTo(Project, {foreignKey: 'project_id'});
BudgetLine.belongsTo(Category, {foreignKey: 'category_id'});
BudgetLine.belongsTo(Person, {foreignKey: 'supplier_id'});
//BudgetLine.belongsTo(Person, {foreignKey: 'approvalby_id'});
//Budget.hasMany(Project);
//Project.belongsTo(Budget, {foreignKey: 'budget_id'});

export default BudgetLineAtlas;