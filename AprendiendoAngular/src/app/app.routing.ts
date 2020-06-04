// Primero importamos los modulos
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Segundo importamos los comoponentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

// Array de rutas, compuesta de Json's
const appRoutes: Routes =[
    {path: '', component: HomeComponent}, //solo importar nuestras rutas 
    {path: 'zapatillas', component: ZapatillasComponent},//solo importar nuestras rutas 
    {path: 'videojuego', component:VideojuegoComponent},//solo importar nuestras rutas 
    {path: 'cursos', component: CursosComponent},//solo importar nuestras rutas 
    
    {path: 'cursos/:nombre/:seguidores', component: CursosComponent}, // Esta sirve para poder ingresar datos por la url
    
    {path: '**', component: HomeComponent}//solo importar nuestras rutas 

]

// Exportar las variables
export const appRoutingProviders:any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);























/*/ Primero debemos importar los modulos 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"

// Importar los comoponentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import {CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component'

// Array de las rutas, se configura las rutas
const appRoutes: Routes =[
    {path:'', component: HomeComponent },
    {path:'zapatillas', component: ZapatillasComponent },
    {path:'videojuego', component: VideojuegoComponent },
    {path:'cursos', component: CursosComponent },
    {path: '**', component: HomeComponent}
]

// Exportar variables
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
*/