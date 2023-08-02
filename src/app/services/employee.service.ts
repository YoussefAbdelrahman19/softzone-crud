import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAllEmployees(): Observable<Employee[]> {
    this.loadingService.show();
    return this.http
      .get<Employee[]>(`${this.apiUrl}/getAllEmployees`)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  getEmployeeById(empId: number): Observable<Employee> {
    this.loadingService.show();
    return this.http
      .get<Employee>(`${this.apiUrl}/getEmpByID/${empId}`)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    this.loadingService.show();
    return this.http
      .post<Employee>(`${this.apiUrl}/addEmployee`, employee)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  editEmployee(employee: Employee): Observable<Employee> {
    this.loadingService.show();
    return this.http
      .post<Employee>(`${this.apiUrl}/editEmployee`, employee)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  deleteEmployee(empId: number): Observable<void> {
    this.loadingService.show();
    return this.http
      .get<void>(`${this.apiUrl}/deleteEmpByID/${empId}`)
      .pipe(finalize(() => this.loadingService.hide()));
  }
}
