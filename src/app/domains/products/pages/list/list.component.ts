import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
ProductComponent
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  fromChild(event:string){
    console.log("este mensaje es desde el padre")
    console.log(event)

  }
}
