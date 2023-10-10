import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() showCategory = new EventEmitter<string>()

  categories = ['Sports', 'Tech', 'Clothes']

  onShowCategory(category: string): void{
    this.showCategory.emit(category)
  }
}
