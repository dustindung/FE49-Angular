import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './Header/header.component';
import { Ex1HomeComponent } from './Excersie-1/ex1-home/ex1-home.component';
import { Ex1HeaderComponent } from './Excersie-1/ex1-header/ex1-header.component';


import { Ex1ContentComponent } from './Excersie-1/ex1-content/ex1-content.component';
import { Ex1SidebarComponent } from './Excersie-1/ex1-sidebar/ex1-sidebar.component';
import { Ex1FooterComponent } from './Excersie-1/ex1-footer/ex1-footer.component';
import { Ex2HomeComponent } from './Excersie-2/ex2-home/ex2-home.component';
import { Ex2HeaderComponent } from './Excersie-2/ex2-header/ex2-header.component';
import { Ex2CarouselComponent } from './Excersie-2/ex2-carousel/ex2-carousel.component';
import { Ex2ContentComponent } from './Excersie-2/ex2-content/ex2-content.component';
import { Ex2FooterComponent } from './Excersie-2/ex2-footer/ex2-footer.component';
import { Ex2CardItemComponent } from './Excersie-2/ex2-card-item/ex2-card-item.component';
import { DemoDataBindingComponent } from './data-binding/demo-data-binding/demo-data-binding.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './Change-Car-Color/car/car.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentItemComponent } from './student-management/student-item/student-item.component';
import { HomeComponent } from './Dressing-Room/home/home.component';
import { ProductListComponent } from './Dressing-Room/product-list/product-list.component';
import { ModelComponent } from './Dressing-Room/model/model.component';
import { ProductItemComponent } from './Dressing-Room/product-item/product-item.component';
import { CategoryComponent } from './Dressing-Room/category/category.component';




@NgModule({
  declarations: [
    AppComponent,
    Header,
    Ex1HomeComponent,
    Ex1HeaderComponent,
    Ex1SidebarComponent,
    Ex1FooterComponent,
    Ex1ContentComponent,
    Ex2HomeComponent,
    Ex2HeaderComponent,
    Ex2CarouselComponent,
    Ex2ContentComponent,
    Ex2FooterComponent,
    Ex2CardItemComponent,
    DemoDataBindingComponent,
    CarComponent,
    DemoDirectiveComponent,
    ProductManagementComponent,
    StudentManagementComponent,
    StudentItemComponent,
    HomeComponent,
    ProductListComponent,
    ModelComponent,
    ProductItemComponent,
    CategoryComponent,

    // Ex1ContentComponent,
    //đây là nơi add component
  ],
  imports: [
    BrowserModule,
    FormsModule
    //đây là nơi add module
  ],
  providers: [],
  bootstrap: [AppComponent] //AppComponent sẽ là component gốc
})
export class AppModule { }
