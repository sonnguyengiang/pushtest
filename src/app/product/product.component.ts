import { Component, OnInit } from '@angular/core';


class Product {
  name: string;
  price: number;
  img: string;

  constructor(name: string, price: number, img: string) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  name: string = '';
  img: string = '';
  price: number = 0;

  constructor() {
    this.products.push(new Product('iphone', 3500, 'https://hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png'));
    this.products.push(new Product('samsung', 15000, 'https://cdn.fptshop.com.vn/Uploads/Originals/2021/4/29/637553049638412708_ss-s20-fe-xanhla-dd.jpg'));
    this.products.push(new Product('nokia', 52000, 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/8/7/637007888894222572_nokia-105-2019-den-1.png'));
  }

  ngOnInit(): void {
  }


  deleteProduct(name:any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
        return;
      }
    }
  }

  createProduct() {
    this.products.push(new Product(this.name, this.price, this.img));
    this.name = '';
    this.img = '';
    this.price = 0;
  }

  showEdit(name:any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.img = this.products[i].img;
        this.price = this.products[i].price;
        return;
      }
    }
  }

  submitEdit(name:any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products[i] = new Product(this.name, this.price, this.img);
        this.name = '';
        this.img = '';
        this.price = 0;
        return;
      }
    }
  }

}
