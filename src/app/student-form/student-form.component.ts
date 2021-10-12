import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup
  constructor(private studentsService: StudentsService, private router: Router) {
    this.studentForm = new FormGroup({
      'roll': new FormControl('', Validators.required),
      'batch': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'domain': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  ngOnInit(): void {
  }

  submitStudent() {
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      this.studentsService.saveStudent(this.studentForm.value).subscribe(() => {
        this.router.navigate(['/student-list'])
      }, () => {
        alert("Something Went Wrong")
      })

    }
  }

}
