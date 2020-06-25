import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.services';
import { Project } from '../../models/projects';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[
    ProjectService
  ]
})
export class DetailComponent implements OnInit {
    public project:Project;
    public url: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 

    this.url = Global.url;
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
      });
  }
}
