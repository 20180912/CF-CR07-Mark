import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "blog", component: BlogComponent
  },{
    path: "travels", component: TravelsComponent
  },{
    path: 'travels/:destinationId', component: DestinationDetailsComponent
  },{
    path: "contact", component: ContactComponent
  },{
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
