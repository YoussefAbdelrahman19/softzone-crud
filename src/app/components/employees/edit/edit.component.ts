import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ValidationAfterSubmit } from 'src/app/shared/plugins';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService],
})
export class EditComponent implements OnInit {
  submitted = false;
  Employee = new Employee();
  EmployeeForm!: FormGroup;
  showData:any;
  id:any;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private isFormValid: ValidationAfterSubmit,
    private messageService: MessageService,
    public config: DynamicDialogConfig
  ) {
    console.log(config.data);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.EmployeeForm = this.fb.group({
      empName: [null, Validators.required],
      empEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3}$'
          ),
        ],
      ],
      empPhone: [
        null,
        [Validators.required, Validators.pattern('01(0|1|2|5)[0-9]{8}$')],
      ],
      empAddress: [null, Validators.required],
      empId: null,
    });
    if (this.config.data.id) {
      this.showDataForm(this.config.data.id);
    }
  }
  get f() {
    return this.EmployeeForm?.controls;
  }
  showDataForm(id:any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      this.showData = data;
      this.EmployeeForm.patchValue({
        empName: this.showData.empName,
        empAddress: this.showData.empAddress,
        empEmail: this.showData.empEmail,
        empPhone: this.showData.empPhone,
        empId: this.showData.empId,
      });
    });
  }
  editEmployee() {
    this.Employee = this.EmployeeForm.value;
    this.isFormValid.afterSubmit(this.EmployeeForm);
    this.submitted = true;

    if (this.EmployeeForm.valid == true) {
      this.employeeService.editEmployee(this.Employee).subscribe((res) => {
        // if (res.status == 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Employee Updated Successfully',
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        // }

        // else {
        // this.sweetAlert.afterSubmit('false', 'Please Check Your Feild Again')

        // }
      });
    }
  }
}
