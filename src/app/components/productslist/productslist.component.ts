import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  
  _prodService:ProductsService;

  constructor(prodService:ProductsService) {
    this._prodService = prodService;
   }

  ngOnInit(): void {
  }

}
