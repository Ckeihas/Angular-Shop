import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = {items: [{
    product: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    name: "Nike",
    price: 139,
    quantity: 1,
    id: 1
  }]}
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void{
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  constructor(private cartService: CartService){}
  onRemoveQuantity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }
  onAddQuantity(item: CartItem): void{
    this.cartService.addToCart(item);
  }
  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
  onClearCart(): void{
    this.cartService.clearCart();
  }
  onRemoveFromCart(item: CartItem): void{
    this.cartService.removeFromCart(item);
  }
  onCheckout(){}
}
