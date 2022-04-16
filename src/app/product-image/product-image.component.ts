import { Input, HostBinding, Component, OnInit } from '@angular/core';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {
    this.product = new Product('', '', '', [], 0);
  }

  ngOnInit(): void {
  }

}
