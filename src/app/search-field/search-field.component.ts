import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Output() searchInput = new EventEmitter<string>();

  search(event: any) {
    const inputValue = event.target.value.toLowerCase();
    this.searchInput.emit(inputValue);
  }
}

