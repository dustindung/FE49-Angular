import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() prod: any;
  @Output() productEmitter = new EventEmitter();

  constructor() { }

  tryCloth(){
    this.productEmitter.emit({
      type: this.prod.type,
      img: this.prod.imgSrc_png,
    })
  }

  ngOnInit(): void {
  }

}
