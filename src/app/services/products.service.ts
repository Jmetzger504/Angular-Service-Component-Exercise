import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  appName:string = "My Shopping app";



  productList = [
    {pId:101,pName:"Pepsi",pCategory:"Dank Cola",pPrice:5,pIsInStock:true},
    {pId:102,pName:"Coke",pCategory:"Dank Cola",pPrice:5,pIsInStock:true},
    {pId:103,pName:"My house",pCategory:"NFT",pPrice:5,pIsInStock:true},
    {pId:104,pName:"George Carlin",pCategory:"Gladiator",pPrice:5,pIsInStock:true},
    {pId:105,pName:"iPhone 4",pCategory:"Electronic Waste",pPrice:5,pIsInStock:true}
  ]

  addProduct(newProduct:any) {
    this.productList.push(newProduct);
  }

  addAProduct(newProduct:any) {

      this.productList.push(newProduct);
  }

  greetUser():string {
    return "Hello, welcome to " + this.appName + ".";
  }
  constructor() { }
}
