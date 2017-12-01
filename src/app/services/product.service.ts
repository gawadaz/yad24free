import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  products: Product[] = [
    {
      title: 'שמלת ערב',
      photoURL: 'https://bit.ly/1q4760r',
      description: 'מוצר זה הוא מוצר איכותי וכמו חדש, ממליץ מאוד עליו, מטופל בחברה, סתם כותב שטויות.',
      cost: 'free',
      isNew: true
    },
    {
      title: 'אייפון 6',
      photoURL: 'https://cnet2.cbsistatic.com/img/BBMgM1aXEgBvLfELWdg0-jDMYkM=/270x203/2014/11/25/3e125a37-7480-11e4-a0a6-d4ae52e95e57/apple-iphone-6-plus-64gb-review-a-classy-iphablet.jpg',
      description: 'מוצר זה הוא מוצר איכותי וכמו חדש, ממליץ מאוד עליו, מטופל בחברה, סתם כותב שטויות.',
      cost: 'free',
      isNew: true
    },
    {
      title: 'חתול',
      photoURL: 'http://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
      description: 'מוצר זה הוא מוצר איכותי וכמו חדש, ממליץ מאוד עליו, מטופל בחברה, סתם כותב שטויות.',
      cost: 'free',
      isNew: true
    },
    {
      title: 'מחשב נייד',
      photoURL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723422ld.jpg',
      description: 'מוצר זה הוא מוצר איכותי וכמו חדש, ממליץ מאוד עליו, מטופל בחברה, סתם כותב שטויות.',
      cost: 'free',
      isNew: true
    },
    {
      title: 'מחשב נייד',
      photoURL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723422ld.jpg',
      description: 'מוצר זה הוא מוצר איכותי וכמו חדש, ממליץ מאוד עליו, מטופל בחברה, סתם כותב שטויות.',
      cost: 'free',
      isNew: false
    }
  ];
  constructor() { }

  getProducts(){
    return this.products;
  }

}
