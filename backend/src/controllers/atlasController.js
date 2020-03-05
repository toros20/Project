import Atlas from '../models/Atlas'
import AtlasAccount from '../models/AtlasAccount'


//codigo para obtener los RESULTADOS ATLAS , de codigo 0
export async function atlas_resultados(req,res){
    
    try {
       
        const atlas_resultados =await  Atlas.findAll({
           
            where:{
                code_atlas:'0'
            }
        });
        res.json({
            atlas_resultados
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR La Categorias de resultados de AtLAS:"+error);
    }
   
} 

//codigo para obtener los productos dado el codigo de resultado atlas
export async function atlas_productos(req,res){
    const { id } = req.params;
        
        try {
       
            const productos_atlas =await  Atlas.findAll({
               
                where:{
                    code_atlas:id
                } 
            });
            res.json({
                productos_atlas
            })
          
        } catch (error) {
            console.log("ERROR AL QUERE LISTAR Los PRoductos ATLAS:"+error);
        }
   
}

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
export async function atlas_accounts(req,res){
    
    try {
       
        const atlas_accounts =await  AtlasAccount.findAll({
           
            where:{
                code_atlas:'Atlas'
            }
        });
        res.json({
            atlas_accounts
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR LAS CUENTAS de AtLAS:"+error);
    }
   
} 

//codigo para obtener las sub categorias de un id atlas dado
export async function atlas_sub_accounts(req,res){
    const { id } = req.params;
        
        try {
       
            const sub_accounts =await  AtlasAccount.findAll({
               
                where:{
                    code_atlas:id
                } 
            });
            res.json({
                sub_accounts
            })
          
        } catch (error) {
            console.log("ERROR AL QUERE LISTAR Los PRoductos ATLAS:"+error);
        }
   
}
