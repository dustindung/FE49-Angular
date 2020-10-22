import { AfterViewInit, Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {

  categoryList = [
    { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
  ];

  @Output() cateEmitter = new EventEmitter();

  selectCate(type: string){
    this.cateEmitter.emit(type);
  }

  constructor() {}

  //Lifecycle chạy lúc đầu
  ngOnInit(): void {
    this.cateEmitter.emit('topclothes');
    //thường để call API, lúc chạy lần đầu
  }

  //Để tránh trường hợp gõ sai, implements interface để dùng lifecycle
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    document.getElementById(''); //phải đặt ở đây, vì giao diện chưa lên thì k DOM dc, 
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

}
