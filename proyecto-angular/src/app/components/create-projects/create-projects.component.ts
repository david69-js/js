import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/projects.services';


@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers:[ProjectService, ]
})
export class CreateProjectsComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  
  constructor(
    private _projectService: ProjectService
  ){
  
    this.title = "Crea tu nuevo Proyecto"
    this.project = 
      new Project('','','','','',2020,'')
    
  }

  ngOnInit(){
    
  }

  onSubmit(form){
    form.value
  console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response)
      },
      err => {
      console.log(<any>err)  
      })
    
  }

}
