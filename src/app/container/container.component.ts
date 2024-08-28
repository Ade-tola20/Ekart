import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Sarah']

  searchText: string = ''

   @ViewChild('ProductListComponent') productListComponent: ProductListComponent

  setSearchText(value: string) {
    console.log(value)
    this.searchText = value
  }
}
