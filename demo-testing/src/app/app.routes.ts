import { Routes } from '@angular/router';
import { ProductRouter } from '../feature/product-features/product-router/product-router';
import { ProductList } from '../feature/product-features/product-list/product-list';
import { ProductAdd } from '../feature/product-features/product-add/product-add';
import { ProductDetails } from '../feature/product-features/product-details/product-details';
import { ProductUpdate } from '../feature/product-features/product-update/product-update';
import { Homepage } from '../feature/homepage/homepage';
import { LoginComponent } from '../feature/auth/login-component/login-component';
import { RegisterComponent } from '../feature/auth/register-component/register-component';

export const routes: Routes = [
    {path : '' , component : Homepage},
    { 
        path : 'product',
        component : ProductRouter,
        children : [
            {path : '' , component : ProductList},
            {path : 'add' , component : ProductAdd},
            {path : 'details/:id' , component : ProductDetails},
            {path : 'update/:id' , component : ProductUpdate},
        ]
    },
    { path : 'login' , component : LoginComponent },
    { path : 'register' , component : RegisterComponent }
];