import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '.views/home/home.component';
import { ProductCrudComponent } from '.views/home/home.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },{
        path: "/products",
        component: ProductCrudComponent
    }
];

@NgModule({
    imports: [RouterModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
