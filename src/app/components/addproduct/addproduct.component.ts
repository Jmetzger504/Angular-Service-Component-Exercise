import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  _productService:ProductsService;

  constructor(_productServiceRef:ProductsService) { 
    this._productService = _productServiceRef;
  }

  

  ngOnInit(): void {
  }

}
