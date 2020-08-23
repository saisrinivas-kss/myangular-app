import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Covid19infoComponent } from './components/covid-19info.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { The24spokesComponent } from './components/the24spokes.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CovidcasesComponent } from './components/covidcases/covidcases.component';
import { BreakingnewsComponent } from './components/breakingnews/breakingnews.component';
import { SigninComponent } from './components/signin/signin.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AllindianewsComponent } from './components/allindianews/allindianews.component';

@NgModule({
  declarations: [
    AppComponent,
    Covid19infoComponent,
    The24spokesComponent,
    NavigationComponent,
    CovidcasesComponent,
    BreakingnewsComponent,
    SigninComponent,
    AllindianewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    MatCardModule,MatIconModule,MatButtonModule,MatGridListModule,MatInputModule,MatToolbarModule,MatSidenavModule,MatListModule,MatSortModule,MatMenuModule,MatTableModule,MatTooltipModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
