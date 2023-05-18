import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidoComponent } from './bienvenido/pages/bienvenido.component';
import { AppHeaderComponent } from './sharedComponents/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
