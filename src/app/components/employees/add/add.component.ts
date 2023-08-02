
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/services/employee.service';
import { ValidationAfterSubmit } from 'src/app/shared/plugins';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService],
})
export class AddComponent implements OnInit {
  submitted = false;
  employee: Employee = new Employee();
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private isFormValid: ValidationAfterSubmit,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.employeeForm = this.fb.group({
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
    },{ updateOn: 'blur' });
  }

  get f() {
    return this.employeeForm.controls;
  }

  addEmployee() {
    this.employee = this.employeeForm.value;
    this.isFormValid.afterSubmit(this.employeeForm);
    this.submitted = true;

    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employee).subscribe((res) => {
        this.employeeForm.reset();
        this.submitted = false;

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Employee added Successfully',
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }
  }
}

