import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  private _product!: Product;
  @Input()
  set product(value: Product) {
    this._product = value;
    this.selectedImage = value.image;
  }
  get product(): Product {
    return this._product;
  }

  selectedImage!: string;

  selectImage(image: string) {
    this.selectedImage = image;
  }

  stars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }

  get ratingStars(): string[] {
    const stars = Math.round(this.product.rating);
    const result: string[] = [];
    for (let i = 1; i <= 5; i++) {
      result.push(i <= stars ? '★' : '☆');
    }
    return result;
  }

  get whatsappUrl(): string {
    const encoded = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${encoded}`;
  }

  get telegramUrl(): string {
    const encodedLink = encodeURIComponent(this.product.link);
    const encodedText = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;
  }
}

