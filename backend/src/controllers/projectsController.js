import Project from '../models/Project'

export async function createProjects(req, res){

    const {code ,name , description ,category_id ,startdate ,enddate ,department_id, status , location ,budget_id  , team_id ,priority ,color } = req.body;
   try {
        let newProject = await Project.create({
            code ,
            name ,
            description ,
            category_id ,
            startdate ,
            enddate ,
            department_id, 
            status ,
            location ,
            budget_id  ,
            team_id ,
            priority ,
            color 
        },{
            fields:['code','name','description','category_id','startdate','enddate','department_id','status','location','budget_id','team_id','priority','color']
        });

        if (newProject){
            res.json({
                message:"Projecto Creado Exitosamente",
                data:newProject
            });
        }

   } catch (error) {
       console.log(error);
       res.estatus(500).json({
            message:"Error al crar nuevos projectos",
            data:{}
       });
   }
    console.log(req.body);
    res.send('Recibido');
}