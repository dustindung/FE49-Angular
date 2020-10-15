import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  isFine = false;
  month = 1;

  monthOptions = [
    { value: '1', title: 'Tháng 1' },
    { value: '2', title: 'Tháng 2' },
    { value: '3', title: 'Tháng 3' },
    { value: '4', title: 'Tháng 4' },
    { value: '5', title: 'Tháng 5' },
  ];


  makeDecision(val: boolean) {
    this.isFine = val;
  }

  selectMonth(e) {
    this.month = e.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
