import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() liked = new EventEmitter<number>();

  likeProduct(): void {
    this.product.likes += 1;
    this.liked.emit(this.product.id);
  }

  deleteProduct(): void {
    this.delete.emit(this.product.id);
  }

  get whatsappUrl(): string {
    const encodedLink = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${encodedLink}`;
  }

  get telegramUrl(): string {
    const encodedLink = encodeURIComponent(this.product.link);
    const encodedText = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;
  }
}
