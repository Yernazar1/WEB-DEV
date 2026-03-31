import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 256GB',
      description: 'iPhone 15 Pro с A17 Bionic, сверхбыстрой съемкой и ProMotion. Титановый корпус, мощная камера и чуть больше автономности.',
      price: 699990,
      rating: 4.9,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg',
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg',
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-pro-blue/iphone-15-pro-blue-srtifocat.jpg/iphone-15-pro-blue-srtifocat.jpg/veonmarket%3Alarge',
        'https://e-katalog.kz/jpg_zoom1/2533891.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256-gb-serebryanyy-106377215/?c=750000000',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Флагман Samsung S24 Ultra с Dynamic AMOLED 2X, 200 МП камерой и стилусом S Pen для творчества и продуктивности.',
      price: 599990,
      rating: 4.8,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzthskz_thx_68_200_5_galaxy_s24_ultra_5g_512gb_titanium_gray_277518_1.jpg',
      images: [
        'https://static.shop.kz/upload/resize_cache/iblock/d67/1npizgkp355q1wcnxnx4gl4fmufxt7b2/450_450_1/184182n1.webp',
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzthskz_thx_68_200_5_galaxy_s24_ultra_5g_512gb_titanium_gray_277518_1.jpg',
        'https://forcecom.kz/upload/iblock/098/q0he4kf2j018w95p0prgeuqh35aj1yud.webp',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512-gb-chernyi-65124710/?c=750000000',
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro 256GB',
      description: 'Redmi Note 13 Pro с 200 МП камерой, дисплеем OLED 120 Гц и батареей 5000 мА·ч, оптимально для фото и игр.',
      price: 199990,
      rating: 4.5,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg',
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/products/76/08/876/images/2614/2614.970.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/products/12/09/912/images/2622/2622.970.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-256-gb-chernyi-108048811/?c=750000000',
    },
    {
      id: 4,
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники AirPods Pro 2 c активным шумоподавлением и адаптивным эквалайзером для качественного звука.',
      price: 189990,
      rating: 4.7,
      image: 'https://www.techhive.com/wp-content/uploads/2023/04/AirPods-Pro-2nd-gen-hero.jpg?quality=50&strip=all',
      images: [
        'https://www.techhive.com/wp-content/uploads/2023/04/AirPods-Pro-2nd-gen-hero.jpg?quality=50&strip=all',
        'https://store123.ru/upload/rbs.moyskladstocks/files/c07710e9-e73f-4378-ab20-bf8c50588edb/68fa81c3639eb91112e7fa72c2821950/1f4/lve145n3kuv0t5vt4f71zuzybk2tqlue.jpg',
        'https://белоеяблоко.рф/upload/dev2fun.imagecompress/webp/resize_cache/iblock/293/800_800_1/yvuzfcrsm5w5oww2wlw39g6wogq40hme.webp',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-103046935/?c=750000000',
    },
    {
      id: 5,
      name: 'Apple MacBook Air 13 M2 512GB',
      description: 'MacBook Air на M2: легкий, тихий, с Retina дисплеем и до 18 часов работы. Идеален для работы и учебы.',
      price: 449990,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoK6-mN_1TfMsHSSRXfBCAy5phlHNh7Wv83Q&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoK6-mN_1TfMsHSSRXfBCAy5phlHNh7Wv83Q&s',
        'https://gadgetstore.kz/wa-data/public/shop/products/95/04/495/images/1813/1813.970.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQ9w7kt-k2Fg1rbUpFX3ZGC79R1-Ll78yxg&s',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-512gb-serebryanyj-105895531/?c=750000000',
    },
    {
      id: 6,
      name: 'Sony WH-1000XM5',
      description: 'Премиальные наушники Sony WH-1000XM5 с лучшим шумоподавлением, динамическим звуком и удобной посадкой.',
      price: 299990,
      rating: 4.6,
      image: 'https://sonycenter.md/wp-content/uploads/2022/05/wh1000xm5-multicolor.jpg',
      images: [
        'https://sonycenter.md/wp-content/uploads/2022/05/wh1000xm5-multicolor.jpg',
        'https://asiastore.kg/image/cache/catalog/1newpage/sony/xm5/blue/51w%2Bsytlbal._ac_sy879_-1200x1200.jpg',
        'https://sonycenter.kz/image/cache/catalog/products/new_img/audio/wh1000xm5/naushniki-sony-wh1000xm5-06-600x600.png',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-104954492/?c=750000000',
    },
    {
      id: 7,
      name: 'Asus TUF Gaming A16',
      description: 'Игровой ноутбук Asus TUF A16 с AMD Ryzen 7, RTX 4060 и 165 Гц экраном для плавного гейминга и создания контента.',
      price: 399990,
      rating: 4.4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7WHUlJaqnkC_UV5sop7MPuEmPD1107cQDw&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7WHUlJaqnkC_UV5sop7MPuEmPD1107cQDw&s',
        'https://m.media-amazon.com/images/I/71WfYj45H6L._AC_UF894,1000_QL80_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mHMtXFAQ6_p6aYcC-xW7H9j9GLoFKaDCkQ&s',
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645/?c=750000000',
    },
    {
      id: 8,
      name: 'Nike Air Force 1 Low',
      description: 'Классические кроссовки Nike Air Force 1 Low с удобной амортизацией и стильным дизайном для повседневного образа.',
      price: 35990,
      rating: 4.3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVeBfUzXaYG4mm65CFZ-4ApUZizkDQ5s9zQ&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVeBfUzXaYG4mm65CFZ-4ApUZizkDQ5s9zQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOWVyukzWN1fWy1Fua1t3C71XEAW62UZDSQ&s',
        'https://media.cdn.kaufland.de/product-images/1024x1024/6221d4f136600449558ddb9c993bda52.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/nike-air-force-1-low-106104135/?c=750000000',
    },
    {
      id: 9,
      name: 'Tefal Talent Pro Frying Pan',
      description: 'Сковорода Tefal Talent Pro 28 см с антипригарным покрытием и технологией Thermo-Spot для равномерного нагрева.',
      price: 22990,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPfRw-WzyekVqwWlA1lOFJJNQ3M3rTPc8fA&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPfRw-WzyekVqwWlA1lOFJJNQ3M3rTPc8fA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-y0BV03zVV5rSf5mSl9R25dS6NWqJuHQ4A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaYmgPku8WO55ihlrsvw-959mteSlyOkLGQ&s',
      ],
      link: 'https://kaspi.kz/shop/p/tefal-talent-pro-28-sm-chernyy-100588541/?c=750000000',
    },
    {
      id: 10,
      name: 'Huawei Watch GT 4',
      description: 'Умные часы Huawei Watch GT 4 с большим экраном AMOLED, GPS и 2-недельным временем работы от батареи.',
      price: 129990,
      rating: 4.4,
      image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/sec5/huawei-watch-gt4-14-day-battery-life.png',
      images: [
        'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/sec5/huawei-watch-gt4-14-day-battery-life.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQpOvcfwgU4dc7KqCNisu0PMikv7EdBUanw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-y0BV03zVV5rSf5mSl9R25dS6NWqJuHQ4A&s',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-107462193/?c=750000000',
    }
  ];
}

