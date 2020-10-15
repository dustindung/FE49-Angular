import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  prodName: string;
  prodId: string;
  price: string;

  selectedProd:{MaSP: number, TenSP: string, Gia: string};

  products = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 },
  ];

  addProduct() {
    const newProd = {
      // thêm toán tử +, chuyển từ chuỗi sang số
      MaSP: +this.prodId,
      TenSP: this.prodName,
      Gia: +this.price
    };
    this.products.push(newProd);

    this.clearForm();
  }

  clearForm(){
    this.prodId = '';
    this.prodName = '';
    this.price = '';
  }

  deleteProd(id: number){
    const index = this.products.findIndex(item => item.MaSP === id);
    this.products.splice(index, 1);
  }

  selectProduct(prod: {MaSP: number, TenSP: string, Gia: string}){
    this.selectedProd = prod;
    console.log('this.selectedProd',this.selectedProd);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
