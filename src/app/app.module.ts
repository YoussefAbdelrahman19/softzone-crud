import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { EmployeesModule } from './components/employees/employees.module';
import { HttpErrorInterceptor } from './interceptors/httpError.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoadingService } from './services/loading.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeesModule,
    ProgressSpinnerModule
  ],
  providers: [
    ConfirmationService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
