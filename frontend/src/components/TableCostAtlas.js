import React, { Component } from 'react'
import axios from 'axios'
import RowCardsProjects from '../components/RowCardsProjects'
import ModalVerFiles from '../components/ModalVerFiles'

export default class TableCost extends Component {
    
    constructor() {
        super();
        this.state = {
            budgetLinesAtlas:[],
            budgetLinesCat:[],
            projects:[],
            
            total_disponible:0.0,
            total_ejecutado:0.0,
            total_inicial:0.0,
            total_rembolsos:0.0,

            porcentaje_disponible:0.0,
            porcentaje_ejecutado:0.0,
            porcentaje_rembolsos:0.0,
            total_solicitado:0.0,

            //para el modal
            code:'',
            name:'',
            project_id:0,
            //category_id:0,
            user_id:1,
            status:'Solicitado',
            supplier_id : 1,
            startdate:'',
            enddate:'',
            account_id:0,
            budgetstart:0.0,
            budgeupdate:0.0,
            budgetfinal:0.0,
            balance:0.0,

            /* INICIAL categories:[],
            clasificaciones:[],*/
            cuentas:[],

            /****atlas */
            resultados_atlas:[],
            result_atlas:'',

            products_atlas:[],
            product_atlas:'',

            activities_atlas:[],
            activity_atlas:0,

            accounts_atlas:[],
            account_atlas:'',

            sub_accounts_atlas:[],
            sub_account_atlas:'',

            suppliers:[],
            supplier:0,
            details:'',

            aprobar:0,

            archivo:[],
            nombre_archivo:'',
            fase_archivo:''

         
        }
    }
    
    async componentDidMount(){

        const res = await axios.post('http://localhost:4000/api/budgetlines/atlas/project/'+this.props.idProject);
        this.setState({budgetLinesAtlas:res.data.budgetLines_atlas});

        /*const res2 = await axios.post('http://localhost:4000/api/budgetlines/atlas/cat_project/'+this.props.idProject);
        this.setState({budgetLinesCat:res2.data.budgetCategories}); */

        const res3 = await axios.get('http://localhost:4000/api/projects/');
        this.setState({projects:res3.data.projects});

        /* INICIAL const res4 = await axios.get('http://localhost:4000/api/categories/categories_parents/');
        this.setState({categories:res4.data.categories}); */

        const res6 = await axios.get('http://localhost:4000/api/accounts/');
        this.setState({cuentas:res6.data.cuentas});

        const res_atlas = await axios.get('http://localhost:4000/api/atlas/resultados');
        this.setState({resultados_atlas:res_atlas.data.atlas_resultados});

        const res_account_atlas = await axios.get('http://localhost:4000/api/atlas/accounts');
        this.setState({accounts_atlas:res_account_atlas.data.atlas_accounts});

        const res_suppliers = await axios.get('http://localhost:4000/api/suppliers/');
        this.setState({suppliers:res_suppliers.data.suppliers});

        this.setState({project_id: this.props.idProject})
       
    }

    calculo(){ // para realizar el calculo de la suma de presupuestos

        this.state.total_inicial=0.0;this.state.total_ejecutado=0.0; this.state.total_disponible=0.0; this.state.total_solicitado =0.0;
        for (let index = 0; index < this.state.budgetLinesAtlas.length; index++) {
            
            
            if (this.state.budgetLinesAtlas[index].status == 'Solicitado') {
               this.state.total_solicitado = this.state.total_solicitado + this.state.budgetLinesAtlas[index].budgetstart;
              
            }
            if (this.state.budgetLinesAtlas[index].status == 'Aprobado') {
              this.state.total_inicial +=  this.state.budgetLinesAtlas[index].budgetstart;
              this.state.total_ejecutado +=  this.state.budgetLinesAtlas[index].budgetfinal;
              this.state.total_disponible += this.state.budgetLinesAtlas[index].balance;
            }
            
        }

       this.state.porcentaje_ejecutado = (this.state.total_ejecutado * 100 )/this.state.total_inicial;
       this.state.porcentaje_disponible = (this.state.total_disponible * 100 )/this.state.total_inicial;
       this.state.porcentaje_rembolsos = (this.state.total_rembolsos * 100 )/this.state.total_inicial;

    }

    /**********************LLENADO PARA EL SAVE********* */
    //onChanceProject = (e) => {this.setState({project_id: e.target.value})}
    /* INICIAL onChanceClasificacion = async (e) => {
        this.setState({code: e.target.value});
        const res7 = await axios.get('http://localhost:4000/api/categories/child/'+e.target.value);
        this.setState({name:res7.data.child.name});
    } */

    onChangeStartDate = (e) => {this.setState({startdate: e.target.value})}
    onChangeEndDate = (e) => {this.setState({enddate: e.target.value})}
    onChanceBudget = (e) => {this.setState({budgetstart: e.target.value});this.setState({balance: e.target.value});}
    /**********************fINAL DEL LLENADO PARA EL SAVE********* */

   /* ININIAL  onChanceCategory = async (e) => {
        this.setState({category_id: e.target.value });
        const res5 = await axios.get('http://localhost:4000/api/categories/categories_childs/'+e.target.value);
        this.setState({clasificaciones:res5.data.clasificaciones});
    } */

    onChanceResultAtlas = async (e) => {
        this.setState({result_atlas: e.target.value });
        const res_prod_atlas = await axios.get('http://localhost:4000/api/atlas/productos/'+e.target.value);
        this.setState({products_atlas:res_prod_atlas.data.productos_atlas});
    }

    onChanceProductAtlas = async (e) => {
        this.setState({product_atlas: e.target.value });
        const res_activity_atlas = await axios.get('http://localhost:4000/api/atlas/productos/'+e.target.value);
        this.setState({activities_atlas:res_activity_atlas.data.productos_atlas});
    }

    onChanceActivityAtlas = async (e) => {
        this.setState({activity_atlas: e.target.value });
    }

    onChanceAccountAtlas = async (e) => {
        this.setState({account_atlas: e.target.value });
        const res_sub_atlas = await axios.get('http://localhost:4000/api/atlas/sub_accounts/'+e.target.value);
        this.setState({sub_accounts_atlas:res_sub_atlas.data.sub_accounts});

    }

    onChanceSubAccountAtlas= async (e) => {
        this.setState({sub_account_atlas: e.target.value });
    }

    onChanceSupplier= async (e) => {
        this.setState({supplier: e.target.value });
    }

    onChanceDetails= async (e) => {
        this.setState({details: e.target.value });
    }

    onChanceAccount= async (e) => {
        this.setState({account_id: e.target.value });
    }

    onChanceCode= async (e) => {
        this.setState({code: e.target.value });
    }

    onchangeSelectAprobar= async (e) => {
        this.setState({aprobar: e.target.value });
    }

    formatMoney(number) {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'HNL' });
    }

    onClickAprobar = async (id) =>{
        //e.preventDefault();
        if ( await axios.post('http://localhost:4000/api/budgetlines/aprobar_atlas/'+id+'/'+this.state.aprobar)){
            window.location.href = 'http://localhost:3000/project/'+this.props.idProject
        } 
    }

    onClickArchivo = async (e) =>{
        this.setState({archivo: e.target.value });
    }
    onClickNombreArchivo = async (e) =>{
        this.setState({nombre_archivo: e.target.value });
    }
    onClickFaseArchivo = async (e) =>{
        this.setState({fase_archivo: e.target.value });
    }
    onClickSubirArchivo = async (id) =>{
         await axios.post('http://localhost:4000/api/files/'+id,{
            nombre_archivo:this.state.nombre_archivo,
            fase_archivo:this.state.fase_archivo,
            file:this.state.archivo,
         })

        // window.location.href = 'http://localhost:3000/project/'+this.props.idProject
        
    }

        //codigo para crear un nuevo renglon presupuestario
    onSubmit  = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/budgetlines/budgetlineatlas',{
            code_resultado:this.state.result_atlas,
            code_producto:this.state.product_atlas,
            code_activity:this.state.activity_atlas,
            code_atlas:this.state.account_atlas,
            code_sub_atlas:this.state.sub_account_atlas,
            
            code:this.state.code,
            details:this.state.details,
           // name:this.state.name,
            status:this.state.status,
            //project_id:this.state.project_id,
            project_id:this.props.idProject,
            user_id:this.state.user_id,
            supplier_id : this.state.supplier,
            date_start:this.state.startdate,
            date_end:this.state.enddate,
            account_id:this.state.account_id,
            budgetstart:this.state.budgetstart,
            budgeupdate:this.state.budgeupdate,
            budgetfinal:this.state.budgetfinal,
            balance:this.state.balance,
            category_id:this.state.category_id

            /***atlas result_atlas, product_atlas ,account_atlas */
        })
        window.location.href = 'http://localhost:3000/project/'+this.props.idProject
       
    }

    render() {

      this.calculo();
      
        return (
            <div>
               
                <RowCardsProjects 
                    inicial={this.state.total_inicial} 
                    ejecutado={this.state.total_ejecutado}
                    disponible={this.state.total_disponible}
                    rembolsos={this.state.total_rembolsos}
                    porcentaje_ejecutado={this.state.porcentaje_ejecutado}
                    porcentaje_disponible={this.state.porcentaje_disponible}
                    porcentaje_rembolsos={this.state.porcentaje_rembolsos}
                />

                {/* Page body start */}
                <div className="page-body">
                <div className="row">
                    <div className="col-sm-12">
                    {/* Product list card start */}
                    <div className="card product-add-modal">
                        <div className="card-header">
                            <h5>Renglones Presupuestarios  </h5>
                            
                            <button type="button" className="btn btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-toggle="modal" data-target="#modal-13"><i className="icofont icofont-plus m-r-5" /> Crear Nuevo</button>
                        </div>
                        
                        <div className="card-block">
                        <div className="table-responsive">
                            <div className="table-content">
                            <div className="dt-responsive table-responsive">
                                <table id="e-product-list" className="table table-striped table-bordered nowrap">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Sub-Cuenta Atlas</th>
                                        <th>Inicial</th>
                                        <th>Ejecutado</th>
                                        <th>Disponible</th>
                                        <th>Estado</th>
                                        <th>Rembolsar</th>
                                        <th>Archivos</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.budgetLinesAtlas.map( budgetLinesAtlas =>   
                                           
                                            <tr key= {budgetLinesAtlas.id} >                             
                                                {/* {this.suma(budgetLinesAtlas.buddgetstart, budgetLinesAtlas.buddgetfinal,budgetLinesAtlas.balance)}  */}
                                                
                                                <td className="pro-name">
                                                    <label className="text-danger">{budgetLinesAtlas.code}</label>
                                                </td>
                                                <td className="pro-name">
                                                    <h6>{budgetLinesAtlas.atlas_account.name}</h6>
                                                </td>
                                                <td>
                                                    <label className="text-info"> {this.formatMoney( budgetLinesAtlas.budgetstart)}</label>
                                                </td>
                                                <td>
                                                    <label className="text-danger"> {this.formatMoney(budgetLinesAtlas.budgetfinal)}</label>
                                                </td>
                                                <td>
                                                    <label className="text-success"> {this.formatMoney(budgetLinesAtlas.balance)}</label>
                                                </td>
                                                                                        
                                                {budgetLinesAtlas.status == 'Solicitado' 
                                                     
                                                ?<td><button type="button" class="btn btn-success waves-effect" data-toggle="modal" data-target={'#aprobar_'+budgetLinesAtlas.id}>Decidir</button> </td>
                                                :<td><label >{budgetLinesAtlas.status}</label></td>
                                                }

                                                {budgetLinesAtlas.status == 'Aprobado' 
                                                     
                                                ?<td><button type="button" class="btn btn-warning waves-effect" data-toggle="modal" data-target={'#rembolsar_'+budgetLinesAtlas.id}>Rembolsar</button></td>
                                                :<td align="center"><label >---</label></td>
                                                }

                                                <td>
                                                    <button type="button" class="btn btn-primary waves-effect" data-toggle="modal" data-target={'#ver_archivos_'+budgetLinesAtlas.id}>Ver</button> 
                                                    <button type="button" class="btn btn-success waves-effect" data-toggle="modal" data-target={'#archivos_'+budgetLinesAtlas.id}>Subir</button>
                                                </td>
                                                <td align="center" className="action-icon"> 
                                                    <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                                                    <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                                                </td>

                         
                                                <div class="modal fade" id={'aprobar_'+budgetLinesAtlas.id} tabindex="-1" role="dialog">
                                                    <div class="modal-dialog modal-lg" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">{budgetLinesAtlas.name}-{this.formatMoney(budgetLinesAtlas.budgetstart)} </h4>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>  
                                                            <form >

                                                                <div class="modal-body">                                                                
                                                                    <select onChange={this.onchangeSelectAprobar} name="select" className="form-control mt-3">
                                                                            <option value="0">Seleccion Opción</option>
                                                                            <option value="1">SI APROBAR</option>
                                                                            <option value="2">NO APROBAR</option>
                                                                    </select>
                                                                   
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Cerrar</button>
                                                                    <button type="button" onClick={ () =>this.onClickAprobar(budgetLinesAtlas.id )} class="btn btn-primary waves-effect waves-light ">Guardar</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                <ModalVerFiles  
                                                    budgetlineatlas={budgetLinesAtlas.id}  
                                                    budgetlineatlasName={budgetLinesAtlas.atlas_account.name}
                                                />

                                                 {/* SUBIR Archivos */}
                                                <div class="modal fade" id={'archivos_'+budgetLinesAtlas.id} tabindex="-1" role="dialog">
                                                    <div class="modal-dialog modal-lg" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">{budgetLinesAtlas.atlas_account.name}-{this.formatMoney(budgetLinesAtlas.budgetstart)} </h4>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>  
                                                            <form action = {'http://localhost:4000/api/files/'+budgetLinesAtlas.id} method="post" enctype="multipart/form-data">

                                                                <div class="modal-body">                                                                
                                                                    <div className="form-control mt-3">
                                                                        <input onChange={this.onClickArchivo} type="file" name="archivo"></input>
                                                                    </div>
                                                                    <input value={budgetLinesAtlas.id} name="budget_id" type="hidden" className="form-control" />
                                                                    <input value={this.props.idProject} name="project_id" type="hidden" className="form-control" />
                                    
                                                                    
                                                                    <div className="form-control mt-3">
                                                                        <input name="file_name" onChange={this.onClickNombreArchivo} type="text" className="form-control" placeholder="Ingrese Nombre de Archivo " />
                                                                    </div>
                                                                    <div >
                                                                    <select onChange={this.onClickFaseArchivo} name="fase" className="form-control mt-3">
                                                                            <option value="0">Seleccion Fase</option>
                                                                            <option value="Fase 1">Fase 1</option>
                                                                            <option value="Fase 2">Fase 2</option>
                                                                            <option value="Fase 3">Fase 3</option>
                                                                    </select>
                                                                    </div>

                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Cerrar</button>
                                                                    {/* <button type="button" onClick={ () =>this.onClickSubirArchivo(budgetLinesAtlas.id )} class="btn btn-primary waves-effect waves-light ">Guardar</button> */}
                                                                     <button type="submit" class="btn btn-primary waves-effect waves-light ">Guardar</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* FINAL DE SUBIR ARCHIVOS */}


                                                <div class="modal fade" id={'rembolsar_'+budgetLinesAtlas.id} tabindex="-1" role="dialog">
                                                    <div class="modal-dialog modal-lg" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">Rembolsar {budgetLinesAtlas.name}-{this.formatMoney(budgetLinesAtlas.budgetstart)} </h4>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body" align="center">
                                                                
                                                                <div>
                                                                    <label htmlFor="">Descripción del Rembolso</label>
                                                                    <textarea className="form-control" style={{width:'100%'}} id="" cols="30" rows="10">

                                                                    </textarea>
                                                                </div>
                                                                <input type="hidden" name={"input_rembolsar_"+budgetLinesAtlas.id}  value={budgetLinesAtlas.id}/>
                                                                <div className="mt-3">
                                                                    <button type="button" className="btn btn-primary waves-effect waves-light ">Reembolsar</button>
                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Cerrar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </tr>
                                        )
                                    }
                                    
                                    <tr>
                                        <td align="center" className="pro-name">
                                            <label className="text-danger">---</label>
                                        </td>
                                        <td className="pro-name">
                                            <h6>Total de Prespuesto APROBADO</h6>
                                            <span>Suma de los Totales</span>
                                        </td>
                                        
                                        <td>
                                            <label className="text-info">{this.formatMoney(this.state.total_inicial)}</label>
                                        </td>
                                        <td>
                                            <label className="text-danger">{this.formatMoney(this.state.total_ejecutado)}</label>
                                        </td>
                                        <td>
                                            <label className="text-success">{this.formatMoney(this.state.total_disponible)}</label>
                                        </td>
                                        <td align="center">
                                            <label >---</label>
                                        </td>
                                        <td align="center">
                                            <label  >---</label>
                                        </td>
                                        <td align="center">
                                            <label  >---</label>
                                        </td>
                                    
                                        <td className="action-icon"> 
                                          
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" className="pro-name">
                                            <label className="text-danger">---</label>
                                        </td>
                                        <td className="pro-name">
                                            <h6>Total de Prespuesto SOLICITADO</h6>
                                            <span>Suma de los Totales</span>
                                        </td>
                                        
                                        <td>
                                             <label>{this.formatMoney(this.state.total_solicitado)}</label> 
                                        </td>
                                        <td align="center">
                                            <label className="text-info">---</label>
                                        </td>
                                        <td align="center">
                                            <label className="text-warning">---</label>
                                        </td>
                                        <td align="center">
                                            <label >---</label>
                                        </td>
                                        <td align="center">
                                            <label  >---</label>
                                        </td>
                                        <td align="center">
                                            <label  >---</label>
                                        </td>
                                    
                                        <td className="action-icon"> 
                                          
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                                
                            </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    {/* Product list card end */}
                    </div>
                </div>
                </div>

                {/* Add Contact Start Model */}
                <div>
                {/* Modal large*/}
              
                <div className="modal fade" id="modal-13" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Crear Nuevo Renglón Presupuestario</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            
                            <form onSubmit={this.onSubmit}>
                                {/* <select onChange={this.onChanceProject} name="select" className="form-control mt-3">
                                    <option value="#">Seleccione Proyecto</option>
                                    {
                                        this.state.projects.map(project => 
                                            <option value={project.id}>({project.code})-{project.name} </option>
                                        )
                                    }
                                </select> */}
                                <input name="" type="hidden" className="form-control mt-3" value={this.props.idProject} />
                                <div style={{width:'50%', display:'inline-block'}}>
                                     {/* Select de Resultados Atlas */}
                                    <select onChange={this.onChanceResultAtlas} name="select_result_atlas" className="form-control mt-3">
                                        <option value="#">Seleccione Resultado Atlas</option>
                                        {
                                            this.state.resultados_atlas.map(resultado_atlas => 
                                                <option value={resultado_atlas.code}>({resultado_atlas.code})-{resultado_atlas.name} </option>
                                            )
                                        }
                                    </select>
                                {/* FIn del Select de Resultados Atlas */}
                                </div>

                                <div style={{width:'50%', display:'inline-block'}}>
                                     {/* Select de Productos Atlas */}
                                    <select onChange={this.onChanceProductAtlas} name="select_product_atlas" className="form-control mt-3">
                                        <option value="#">Seleccione Producto Atlas</option>
                                        {
                                            this.state.products_atlas.map(product_atlas => 
                                                <option value={product_atlas.code}>({product_atlas.code})-{product_atlas.name} </option>
                                            )
                                        }
                                    </select>
                                 {/* FIn del Select de Productos Atlas */}
                                </div>

                                <div>
                                     {/* Select de Productos Atlas */}
                                    <select onChange={this.onChanceActivityAtlas} name="select_activity_atlas" className="form-control mt-3">
                                        <option value="#">Seleccione Actividad Atlas</option>
                                        {
                                            this.state.activities_atlas.map(activity_atlas => 
                                                <option value={activity_atlas.code}>({activity_atlas.code})-{activity_atlas.name} </option>
                                            )
                                        }
                                    </select>
                                 {/* FIn del Select de Productos Atlas */}
                                </div>
                               
                                <div style={{width:'50%', display:'inline-block'}}>
                                     {/* Select de Cuentas Atlas */}
                                    <select onChange={this.onChanceAccountAtlas} name="select_account_atlas" className="form-control mt-3">
                                        <option value="#">Seleccione Cuenta Atlas</option>
                                        {
                                            this.state.accounts_atlas.map(account_atlas => 
                                                <option value={account_atlas.id}>{account_atlas.name} </option>
                                            )
                                        }
                                    </select>
                                {/* FIn del Select de Cuentas Atlas */}
                                </div>

                                <div style={{width:'50%', display:'inline-block'}}>
                                     {/* Select de Sub-Cuentas Atlas */}
                                    <select onChange={this.onChanceSubAccountAtlas} name="select_sub_account_atlas" className="form-control mt-3">
                                        <option value="#">Seleccione Sub-Cuenta Atlas</option>
                                        {
                                            this.state.sub_accounts_atlas.map(sub_account_atlas => 
                                                <option value={sub_account_atlas.id}>{sub_account_atlas.name} </option>
                                            )
                                        }
                                    </select>
                                {/* FIn del Select de Sub-Cuentas Atlas */}
                                </div>
                               
                                
                                {/* <select onChange={this.onChanceCategory} name="select" className="form-control mt-3">
                                    <option value="#">Seleccione Categoría</option>
                                   {  
                                        this.state.categories.map(category => 
                                            <option value={category.code}>({category.code})-{category.name} </option>
                                        )
                                    } 
                                </select> */}

                                {/* <select onChange={this.onChanceClasificacion} name="select" className="form-control mt-3">
                                    <option value="#">Seleccione Clasificación de Renglón</option>
                                    {  
                                         this.state.clasificaciones.map(clasificacion => 
                                            <option value={clasificacion.code}>({clasificacion.code})-{clasificacion.name} </option>
                                        )
                                    } 
                                </select> */}
                                <div style={{width:'50%', display:'inline-block'}} >
                                    <select onChange={this.onChanceAccount} name="select_account_money" className="form-control mt-3">
                                        <option value="#">Seleccione Cuenta de Origen</option>
                                        {  
                                            this.state.cuentas.map(cuenta => 
                                                <option value={cuenta.id}>({cuenta.coin}-{cuenta.actualbalance})-{cuenta.name} </option>
                                            )
                                        } 

                                    </select>
                                    </div>
                                <div style={{width:'50%', display:'inline-block'}} >
                                <select onChange={this.onChanceSupplier} name="select_suppliers" className="form-control mt-3">
                                        <option value="#">Seleccione Beneficiario/Proveedor</option>
                                        {  
                                            this.state.suppliers.map(supplier => 
                                                <option value={supplier.id}>{supplier.contact_name} </option>
                                            )
                                        } 

                                    </select>
                                </div>

                                <div className="input-group mt-3">
                                    <textarea onChange={this.onChanceDetails} placeholder="Breve Descripción para el informe ATLAS" className="form-control" name="details" cols="30" rows="3"></textarea>
                                </div>

                                <div style={{width:'50%', display:'inline-block'}}>
                                    <input name="buddgetstart" onChange={this.onChanceBudget} type="text" className="form-control" placeholder="Ingrese El valor Solicitado : 0,000.00 " />
                                </div>
                                <div style={{width:'50%', display:'inline-block'}} >
                                    <input name="code" className="form-control" onChange={this.onChanceCode} type="text" className="form-control" placeholder="Ingrese Codigo de Identificación: 01-101-01 " />
                                </div>
                               
                                <div style={{width:'50%', display:'inline-block'}} >
                                    <input onChange={this.onChangeStartDate} class="form-control mt-3" type="date" placeholder="Fecha de Inicio" />
                                    <label htmlFor="">Fecha de Inicio</label>
                                </div>
                                <div style={{width:'50%', display:'inline-block'}} >
                                    <input onChange={this.onChangeEndDate} class="form-control mt-3" type="date" placeholder="Fecha de Final" />
                                    <label htmlFor="">Fecha de Finalización</label>
                                </div>

                            
                       
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default waves-effect " data-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary waves-effect waves-light ">Guardar</button>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Add Contact Ends Model*/}

                {/* Page body end */}

            </div>
        )
    }
}
