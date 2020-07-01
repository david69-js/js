import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/projects.services';
import { ServiceUpload } from '../../services/upload.service';
import { Global } from '../../services/global';
import { ActivatedRoute, Router, Params} from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: '../create-projects/create-projects.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, ServiceUpload]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  public save_project;
  
  constructor(
    private _projectService: ProjectService,
    private _serviceUpload: ServiceUpload,
    private _route: ActivatedRoute,
    private _router: Router
  ){
  
    this.title = "Editar proyecto";
    this.url = Global.url
  }
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
        let id = params.id;
        
        this.getProject(id);
    });
  }

  getProject(id){
  
  this._projectService.getProject(id).subscribe(
    response =>{
      this.project = response.project;
    }, err =>{
        console.log(<any>err)
    }
    );
}
onSubmit(form){
  this._projectService.updateProject(this.project).subscribe(
    response  =>{
      if(response){
    
    //Subir la imagen
    if(this.filesToUpload){
     
      this._serviceUpload.uploadService(Global.url+"upload-image/"+response.project._id, [],this.filesToUpload, 'image' )
      .then((result:any)=>{
        this.save_project = result;
        this.status = 'success'
        console.log(result);

      });
        }else{
          this.save_project = response;
          this.status = 'success'
    }
    
        }else{
          this.status = 'failed';
      }
  }, 
  error  =>{
    console.log(<any>error)
  });
}

  fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;
}

}
