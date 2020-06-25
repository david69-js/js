import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.services';
import { Project } from '../../models/projects';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[
    ProjectService
  ]
})
export class ProjectsComponent implements OnInit {
    public projects: Project[];
    public url:String

  constructor(
    private _projectService: ProjectService

  ) {
    this.url = Global.url
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
      this._projectService.getProjects().subscribe(
        response =>{
            if(response.projects){
                this.projects = response.projects;
            }
        },
         err =>{
            console.log(<any>err)
         });
  }

}
