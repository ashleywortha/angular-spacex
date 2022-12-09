import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {path:"", component: FilterComponent},
  {path:"filter/:filterName", component: FilterComponent},
  
  // {path:"not-found", component:PageNotFoundComponent},
  {path: "**", redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
