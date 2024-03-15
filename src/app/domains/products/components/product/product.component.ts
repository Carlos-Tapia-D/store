import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() imagen:string=""
  @Input({required:true}) title:string=""
  @Input() price:number=0
  @Output() addToCart=new EventEmitter()


  addToCartHandler(){
    console.log('click from child')
    this.addToCart.emit("hola este es un mensaje desde el hijo")
  }
  //img=signal("https://picsum.photos/320/320?r=" + Math.random())
}
