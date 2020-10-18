import { Component, OnInit } from '@angular/core';
import { IStudent } from '../Models/Student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {

  studentList: IStudent[] = [
    { name: 'Đặng Trung Hiếu', age: 13, className: '13vlh1' },
    { name: 'Nguyễn Đình Dũng', age: 15, className: '15vlh2' },
    { name: 'Phan Đình Tiến', age: 20, className: '14KTH1' },
    { name: 'Lệ Thị Thuý Hiền', age: 16, className: '16KTH2' },
  ];

  selectedStudent: IStudent[] = [

  ];

  chooseStudent(student: IStudent) {
    console.log('get data from student item', student);

    const studentIdx = this.selectedStudent.findIndex((item) => item.name === student.name);
    
    studentIdx === -1 && this.selectedStudent.push(student);
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
