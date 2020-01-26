import Budgetline from '../models/Budgetline'
import Person from '../models/Person'

export async function budgetLinesbyProjectId(req,res){
    const { id } = req.params;
    try {
        { }
       
        const  budgetLines =await  Budgetline.findAll({
            include: [ Person ],
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


