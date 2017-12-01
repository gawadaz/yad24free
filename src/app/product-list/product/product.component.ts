import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() title: string = "123";
  @Input() photoURL: string;
  @Input() cost: string;
  @Input() desc: string;
  @Input() isNew: boolean = false;
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
