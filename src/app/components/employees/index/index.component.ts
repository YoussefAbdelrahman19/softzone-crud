// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Table } from 'primeng/table';
// import { ConfirmationService, MessageService, Message } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';
// import { AddComponent } from '../add/add.component';
// import { EditComponent } from '../edit/edit.component';
// import { Employee } from 'src/app/models/employee.model';
// import { EmployeeService } from 'src/app/services/employee.service';

// @Component({
//   selector: 'app-index',
//   templateUrl: './index.component.html',
//   styleUrls: ['./index.component.css'],
//   providers: [ConfirmationService, MessageService, DialogService],
// })
// export class IndexComponent implements OnInit {
//   @ViewChild('dt') table!: Table;

//   list!: Employee[];
//   msgs: Message[] = [];
//   selectedEmployees!: Employee[] | null;
//   displayBasic!: boolean;
//   employees: Employee[] = [];
//   displayAddDialog: boolean = false;
//   displayEditDialog: boolean = false;

//   constructor(
//     private service: EmployeeService,
//     public dialogService: DialogService,
//     private employeeService: EmployeeService,
//     private confirmationService: ConfirmationService,
//     private messageService: MessageService
//   ) {}

//   ngOnInit(): void {
//     this.getAllEmployees();
//     this.loadEmployees();
//   }

//   getAllEmployees() {
//     this.service.getAllEmployees().subscribe((res) => {
//       this.list = res;
//     });
//   }

//   deleteSelectedEmployees() {
//     this.confirmationService.confirm({
//       message: 'Are you sure you want to delete the selected Employees?',
//       header: 'Confirm',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.list = this.list.filter(
//           (val) => !this.selectedEmployees?.includes(val)
//         );
//         this.selectedEmployees = null;
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'Employees Deleted',
//           life: 3000,
//         });
//       },
//     });
//   }

//   deleteEmployee(id: any) {
//     this.confirmationService.confirm({
//       message: 'Do you want to delete this employee?',
//       header: 'Delete Confirmation',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.service.deleteEmployee(id).subscribe((res) => {
//           let index = this.list.findIndex((e) => e.empId === id);
//           if (index !== -1) {
//             this.list.splice(index, 1);
//           }
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Successful',
//             detail: 'Employee Deleted',
//           });
//         });
//       },
//     });
//   }

//   addEmployeeDialog() {
//     this.displayBasic = true;
//     const ref = this.dialogService.open(AddComponent, {
//       header: 'Add Employee',
//       width: '30%',
//     });
//   }

//   editEmployeeDialog(id: any) {
//     const ref = this.dialogService.open(EditComponent, {
//       header: 'Edit Employee',
//       width: '30%',
//       data: { id: id },
//     });
//   }

//   handleInput(event: any) {
//     const value = (event.target as HTMLInputElement).value;
//     this.table.filterGlobal(value, 'contains');
//   }

//   openAddEmployeeDialog(): void {
//     const ref = this.dialogService.open(AddComponent, {
//       header: 'Add Employee',
//       width: '30%',
//     });

//     ref.onClose.subscribe(() => {
//       this.loadEmployees();
//     });
//   }

//   openEditEmployeeDialog(id: string): void {
//     const ref = this.dialogService.open(EditComponent, {
//       header: 'Edit Employee',
//       width: '30%',
//       data: { id: id },
//     });

//     ref.onClose.subscribe(() => {
//       this.loadEmployees();
//     });
//   }

//   private loadEmployees(): void {
//     this.employeeService.getAllEmployees().subscribe((employees) => {
//       this.employees = employees;
//       this.list = employees;
//     });
//   }

//   confirmDeleteSelected(): void {
//     this.confirmationService.confirm({
//       message: 'Are you sure you want to delete the selected employees?',
//       header: 'Confirm',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.deleteSelectedEmployees();
//       },
//     });
//   }

//   confirmDeleteEmployee(id: string): void {
//     this.confirmationService.confirm({
//       message: 'Do you want to delete this employee?',
//       header: 'Delete Confirmation',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.deleteEmployee(id);
//       },
//     });
//   }

//   private showMessage(severity: string, summary: string, detail: string): void {
//     this.messageService.add({ severity, summary, detail });
//   }
//   deleteSelectedEmployees() {
//     this.confirmationService.confirm({
//       message: 'Are you sure you want to delete the selected Employees?',
//       header: 'Confirm',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.list = this.list.filter(
//           (val) => !this.selectedEmployees.includes(val)
//         );
//         this.selectedEmployees = null;
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'Employees Deleted',
//           life: 3000,
//         });
//       },
//     });
//   }

//   deleteEmployee(id) {
//     this.confirmationService.confirm({
//       message: 'Do you want to delete this employee?',
//       header: 'Delete Confirmation',
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.service.deleteEmployee(id).subscribe((res) => {
//           // if(res.status==200){
//           let index = this.list.findIndex((e) => e.empId === id);
//           if (index !== -1) {
//             this.list.splice(index, 1);
//           }
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Successful',
//             detail: 'Employee Deleted',
//           });
//           // }
//         });
//       },
//     });
//   }
//   addEmployeeDialog() {
//     this.displayBasic = true;
//     const ref = this.dialogService.open(AddComponent, {
//       header: 'Add Employee',
//       width: '30%',
//     });
//   }
//   editEmployeeDialog(id) {
//     const ref = this.dialogService.open(EditComponent, {
//       header: 'Edit Employee',
//       width: '30%',
//       data: { id: id },
//     });
//   }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class IndexComponent implements OnInit {
  list: Employee[];
  totalRecords: number;
  msgs: Message[] = [];
  selectedEmployees: Employee[];
  displayBasic: boolean;
  @ViewChild('dt') table!: Table;

  constructor(
    private service: EmployeeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.service.getAllEmployees().subscribe((res) => {
      this.list = res;
    });
  }

  handleInput(event: any) {
    const value = (event.target as HTMLInputElement).value;
    this.table.filterGlobal(value, 'contains');
  }
  deleteSelectedEmployees() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Employees?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.list = this.list.filter(
          (val) => !this.selectedEmployees.includes(val)
        );
        this.selectedEmployees = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Employees Deleted',
          life: 3000,
        });
      },
    });
  }

  deleteEmployee(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this employee?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteEmployee(id).subscribe((res) => {
          // if(res.status==200){
          let index = this.list.findIndex((e) => e.empId === id);
          if (index !== -1) {
            this.list.splice(index, 1);
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Employee Deleted',
          });
          // }
        });
      },
    });
  }
  addEmployeeDialog() {
    this.displayBasic = true;
    const ref = this.dialogService.open(AddComponent, {
      header: 'Add Employee',
      width: '40%',
    });
  }
  editEmployeeDialog(id) {
    const ref = this.dialogService.open(EditComponent, {
      header: 'Edit Employee',
      width: '40%',
      data: { id: id },
    });
  }
}
