import Category from '../models/Category'

export async function categoriesbyid(req,res){
    const { id } = req.params;
    try {
       
        const  category =await  Category.findOne({
           
            where:{
                id:id
            }
        });
        res.json({
            category
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR La Categoria por Id:"+error);
    }
   
} 
