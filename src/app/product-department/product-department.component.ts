import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Product } from '../product.modal';


@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;
  
  constructor() { 
    this.product = new Product('', '', '', [], 0);
  }

  ngOnInit(): void {
  }

}
