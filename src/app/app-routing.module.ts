import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The24spokesComponent } from './components/the24spokes.component';
import { Covid19infoComponent } from './components/covid-19info.component';
import { SigninComponent } from './components/signin/signin.component';
import { AllindianewsComponent } from './components/allindianews/allindianews.component';

const routes: Routes = [

  {path:'', redirectTo:'/the24spokes', pathMatch:'full'},
  {path:'the24spokes', component:The24spokesComponent},
  // {path:'allindianews', component:AllindianewsComponent},
  {path:'covid-19info', component:Covid19infoComponent},
  {path:'signin', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
