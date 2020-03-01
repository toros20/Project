import Atlas from '../models/Atlas'

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
                    code:id
                } 
            });
            res.json({
                productos_atlas
            })
          
        } catch (error) {
            console.log("ERROR AL QUERE LISTAR Los PRoductos ATLAS:"+error);
        }
   
}