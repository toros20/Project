import Archivo from '../models/Archivo'

export async function createFile(req, res){

    //console.log(req.body);

    const {id,archivo,nombre_archivo,fase_archivo } = req.body;
   /* try {
        let newFile = await Archivo.create({
            filename: nombre_archivo,
            //filedir:  ,
            fase : fase_archivo,
            budgetlineatlas_id:id
        },{
            fields:['filename' , 'file_dir' , 'fase' , 'budgetlineatlas_id']
        });

        if (newFile){
            return res.json({
                message:"Archivo Creado Exitosamente",
                data:newBudget
            });
        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Archivo",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crear nuevo File",
                data:{}
        });
    }*/

}