import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { Category } from '../../category.model';
import { ProductItemComponent } from '../product-item/product-item';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  categories: Category[] = [];
  selectedCategoryId = 0;
  displayProducts: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.selectedCategoryId = this.categories?.[0]?.id ?? 0;
    this.refreshProducts();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.refreshProducts();
  }

  refreshProducts(): void {
    this.displayProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
    this.refreshProducts();
  }

  onLiked(productId: number): void {
    this.productService.likeProduct(productId);
    this.refreshProducts();
  }
}
