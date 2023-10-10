import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = "desc"
  itemsShowCount = 12

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsCountUpdate(count: number): void {
    this.itemsShowCount = count
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }
}
