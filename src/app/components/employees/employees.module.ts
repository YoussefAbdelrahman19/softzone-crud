import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PrimengImportsModule } from 'src/app/shared/modules';
import { TableModule } from 'primeng/table';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AddComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengImportsModule,
    TableModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
})
export class EmployeesModule {}
