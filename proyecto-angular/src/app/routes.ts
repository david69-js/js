// Importamos los componentes de angular 
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";



// Importamos los componentes creados 
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';




// Creamos las rutas 
const appRoutes: Routes= [
    {path:"", component:AboutComponent},
    {path:'about', component: AboutComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'create', component:CreateProjectsComponent},
    {path:'contact', component:ContactComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'edit-project/:id', component: EditComponent},
    {path:"**", component:ErrorComponent}
]
//Creamos nuestros modulos a exportar 
export const appRoutesProviders: [] =[]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
