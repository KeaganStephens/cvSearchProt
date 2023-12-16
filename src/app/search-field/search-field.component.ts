import { Component, Output, EventEmitter, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements AfterViewInit {
  @Output() searchInput = new EventEmitter<string>();
  @ViewChildren('underDevelopmentButtons') underDevelopmentButtons!: QueryList<HTMLButtonElement>;

  ngAfterViewInit() {
    // Wait for the view to be initialized
  }

  search(event: any) {
    const inputValue = event.target.value.toLowerCase();
    this.searchInput.emit(inputValue);
  }

  // Listen for click events on buttons with the "underDevelopment" class
  handleClick(button: HTMLButtonElement) {
    const buttonText = button.textContent?.trim() || '';
    this.showPopup(`This feature is still under development: ${buttonText}`);
  }

  private showPopup(message: string) {
    alert(message);
  }
}
