import { Component, OnInit } from '@angular/core';
import { student } from '../model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Array<student> = []
  constructor(private studentsService: StudentsService) {

    console.log(this.studentList)
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.studentsService.getAllUser().subscribe((data) => {
      this.studentList = data
    })
  }
  deleteData(id: any) {
    this.studentsService.deleteUserById(id).subscribe((data) => {
      this.loadData()
    })
  }
}
