import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-header', // đây là tên gọi của component, để gọi khi sử dụng
    // template: `
    //     <h1>Demo Component</h1>
    //     <span>This is a demo component</span>
    // `,
    templateUrl: './header.component.html',
    // styles: [
    //     `
    //     h1{
    //         color: red;
    //         background-color: green;
    //     }
    // `,
    // ],
    styleUrls: ['./header.component.scss']
})
export class Header { }