import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id: number]: number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor(private cartService: CartService){}

  onColumnsCountChange(num: number): void {
    this.cols = num
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory
  }

  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
