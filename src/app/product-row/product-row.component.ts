import { Input, HostBinding, Component, OnInit } from '@angular/core';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { 
    this.product = new Product('', '', '', [], 0);
  }

  ngOnInit(): void {
  }

}
