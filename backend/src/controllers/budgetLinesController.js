import Budgetline from '../models/Budgetline'
import Category from '../models/Category'
import Person from '../models/Person'
import sequelize from 'sequelize';

//funcion para obtener todos los renglones presupuestario de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
export async function budgetLinesbyProjectId(req,res){
    const { id } = req.params;
    try {
       
        const  budgetLines =await  Budgetline.findAll({
            include: [ Person ],
            order: [['category_id', 'ASC']],
            where:{
                project_id:id
            }
        });
        res.json({
            budgetLines
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Budgetline:"+error);
    }
   
} 

//Funcion para obtener los diferentes id de las categorias de los budgetlines
//nos ayuda en generar los TableCost
export async function budgetLinesCatgoriesByProjectId(req,res){
    const { id } = req.params;
    try {
       
    const  budgetCategories =await  Budgetline.findAll({
     
        attributes: [ [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'category_id'] ],
        where:{
            project_id:id
        }
    });
    res.json({
        budgetCategories
    })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR BudgetlineCategories:"+error);
    }
   
}

//funcion para mostar los renglones presupuestarios clasificados por projectos y categorias
//ayuda a desplegar las tablas de renglones
export async function budgetLinesbyProjectIdCategories(req,res){

    const { idPro, idCat } = req.params;
    try {
       
        const  budgetLinesCat =await  Budgetline.findAll({
            /* include: [
                { model: Category, where: { id: idCat }}
             ], */
             include:[Category, Person],
            // attributes: [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'categorias'],
             //attributes: [['category_id','categoria'] ],
         
            order: [['category_id', 'ASC']],
            where:{
                project_id:idPro,
                category_id:idCat
            }
        });
        res.json({
            budgetLinesCat
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Budgetline Category:"+error);
    }
}

//funion para crear nuevos renglones presupuestarios
export async function createBudgetLines(req, res){

    const {code , name , description , date_start , date_end ,category_id, account_id , project_id ,user_id,supplier_id, buddgetstart , buddgeupdate , buddgetfinal , balance , returns , deviation , status , approval , approvalby_id, dateapproval } = req.body;
    try {
        let newBudgetLine = await Budgetline.create({
            code ,
            name ,
            description ,
            date_start ,
            date_end ,
            category_id ,
            account_id ,
            project_id,
            user_id ,
            supplier_id,
            buddgetstart ,
            buddgeupdate ,
            buddgetfinal ,
            balance ,
            returns ,
            deviation ,
            status ,
            approval ,
            approvalby_id,
            dateapproval
            
        },{
            fields:['code' , 'name' , 'description' , 'date_start' , 'date_end' , 'category_id', 'account_id', 'project_id' , 'user_id' , 'supplier_id' , 'buddgetstart' , 'buddgeupdate' , 'buddgetfinal' , 'balance' , 'returns' , 'deviation' , 'status' , 'approval' , 'approvalby_id', 'dateapproval']
        });

        if (newBudgetLine){
            return res.json({
                message:"Renglon Presupuestario Creado Exitosamente",
                data:newBudgetLine
            });
        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Renglon Presupuestario",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crar nuevo Renglon Presupuestario",
                data:{}
        });
    }

}


