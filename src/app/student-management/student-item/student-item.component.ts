import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from 'src/app/Models/Student';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @Input() item: IStudent; //bắt buộc phải giống tên item của cha truyền vào

  @Output() studentEmitter = new EventEmitter; //EventEmitter phải import từ angular core

  constructor() {}

  chooseStudent(){
    this.studentEmitter.emit(this.item) //mặc định 1 lần chỉ dc đẩy 1 
  }

  ngOnInit(): void {
  }

}
