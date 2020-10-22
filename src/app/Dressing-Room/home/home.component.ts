import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  selectedCate: string;

  // prod có dc chỉ trong hàm tryCloth, nên tạo object để hứng
  selectedProducts: any = {

  }

  ngOnInit(): void {
  }

  selectCate(type: string){
    this.selectedCate = type;
    console.log('this.selectedCate',this.selectedCate)
  }

  tryCloth(prod: {type: string, img: string}){
    // Bỏ vào [] để lấy thuộc tính trong mảng
    // var student = {name: 'hieu', age: 12};
    // var a = "name";
    // student[a]
    this.selectedProducts[prod.type] = prod.img;
    console.log(this.selectedProducts)
  }

}
