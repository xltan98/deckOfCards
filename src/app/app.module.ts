import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatedeckComponent } from './component/createdeck.component';
import { DrawdeckComponent } from './component/drawdeck.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes:Routes=[
  {path:'create',component:CreatedeckComponent},
  {path:'draw/:deckid',component:DrawdeckComponent},
  {path:'**',redirectTo:'/create'}
]
@NgModule({
  declarations: [
    AppComponent,
    CreatedeckComponent,
    DrawdeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
