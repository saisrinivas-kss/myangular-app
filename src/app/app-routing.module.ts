import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The24spokesComponent } from './components/the24spokes.component';
import { Covid19infoComponent } from './components/covid-19info.component';

const routes: Routes = [
  // {path:'', redirectTo:'the24spokes', pathMatch:'full'},
  // {path:'the24spokes', component:The24spokesComponent},
  {path:'', redirectTo:'/the24spokes', pathMatch:'full'},
  {path:'the24spokes', component:The24spokesComponent},
  {path:'covid-19info', component:Covid19infoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
