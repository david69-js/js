//Importar los Modulos
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule,  } from '@angular/router';


// Importar Componentes
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { ExternoComponent} from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// La array de componentes

const appRoutes: Routes =[ // Todas son para poder utilarlas para realizar una verntana por cada componente
    { path:'', component:HomeComponent},
    { path:'cursos', component: CursosComponent},

    { path:'cursos/:nombre/:seguidores', component: CursosComponent},// Esta la podemos utilizar para recoger parametros por la url

    {path:'externo', component: ExternoComponent},
    { path:'videojuego', component: VideojuegoComponent},
    { path:'zapatillas', component: ZapatillasComponent},
    {path:'contacto', component: ContactoComponent},
    { path:"**", component:HomeComponent} //Estas es una de las mas importantes
];

export const appRoutesProviders:[] =[]
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes) 