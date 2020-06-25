import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/projects.services';
import { ServiceUpload } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers:[ProjectService, ServiceUpload]
})
export class CreateProjectsComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public imageToUpload: Array<File>;
  public url: string;
  public save_project;
  
  constructor(
    private _projectService: ProjectService,
    private _serviceUpload: ServiceUpload
  ){
  
    this.title = "Crea tu nuevo Proyecto";
    this.project = new Project('','','','',2019,'','');
    this.url = Global.url
  }

  ngOnInit(){
    
  }

  onSubmit(form){
    form.value
    console.log(this.project);
           // Guardar proyecto 
    this._projectService.saveProject(this.project).subscribe(
      response  =>{
          if(response.project){
        
        //Subir la imagen
        this._serviceUpload.uploadService(this.url+"upload-image/"+response.project._id, [],this.imageToUpload, 'image' )
            .then((result:any)=>{
              this.save_project = result;
              console.log(result);
              this.status = 'success';
              form.reset();
        })
        
          }else{
            this.status = 'failed';
          }
      }, 
      error  =>{
        console.log(<any>error)
      });
    }

  fileChangeEvent(fileInput: any){
        this.imageToUpload = <Array<File>>fileInput.target.files;
  }

}
