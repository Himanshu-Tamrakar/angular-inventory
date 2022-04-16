import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() { 
    this.currentProduct = new Product('', '', '', [], 0);
    this.productList = [];
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    console.log('row clicked');
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    console.log('selected clicked');
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit(): void {
  }

}
