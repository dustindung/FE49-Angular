import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {

  name = 'Dang Trung Hieu';
  email: string;
  isDisabled = false;
  imgSrc='https://static01.nyt.com/images/2020/07/04/books/review/12PictureThis-01/12PictureThis-01-superJumbo.jpg';
  changeName(){
    this.name = "Edward Dang";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
