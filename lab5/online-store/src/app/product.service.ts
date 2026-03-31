import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 256GB',
      description: 'Титановый корпус, камера 48 МП и A17 Bionic. Настоящий флагман для фото и видео.',
      price: 699990,
      rating: 4.9,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg',
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg',
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-pro-blue/iphone-15-pro-blue-srtifocat.jpg/iphone-15-pro-blue-srtifocat.jpg/veonmarket%3Alarge',
        'https://e-katalog.kz/jpg_zoom1/2533891.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256-gb-serebryanyy-106377215/?c=750000000',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Экран Dynamic AMOLED 2X 120 Гц и камера 200 МП для профессиональной съемки.',
      price: 599990,
      rating: 4.8,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzthskz_thx_68_200_5_galaxy_s24_ultra_5g_512gb_titanium_gray_277518_1.jpg',
      images: [
        'https://static.shop.kz/upload/resize_cache/iblock/d67/1npizgkp355q1wcnxnx4gl4fmufxt7b2/450_450_1/184182n1.webp',
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzthskz_thx_68_200_5_galaxy_s24_ultra_5g_512gb_titanium_gray_277518_1.jpg',
        'https://forcecom.kz/upload/iblock/098/q0he4kf2j018w95p0prgeuqh35aj1yud.webp',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512-gb-chernyi-65124710/?c=750000000',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro 256GB',
      description: 'OLED 120 Гц, 200 МП камера и батарея 5500 мА·ч — отличный баланс цены и возможностей.',
      price: 199990,
      rating: 4.5,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg',
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/products/76/08/876/images/2614/2614.970.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/products/12/09/912/images/2622/2622.970.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-256-gb-chernyi-108048811/?c=750000000',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'OnePlus 12 256GB',
      description: 'Мощный Snapdragon, 120 Вт зарядка и аккуратный дизайн для продвинутых пользователей.',
      price: 259990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdc/hdd/66898062171678/oneplus-12-256gb-cernyi-108191346-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdc/hdd/66898062171678/oneplus-12-256gb-cernyi-108191346-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h81/h0f/66898062237214/oneplus-12-256gb-cernyi-108191346-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h06/h2f/66898062302750/oneplus-12-256gb-cernyi-108191346-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-256-gb-cernyi-108191346/?c=750000000',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Vivo X100 Pro 512GB',
      description: 'Флагман с оптикой Zeiss, процессором MediaTek Dimensity 9300 и 120 Гц дисплеем.',
      price: 299990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/hb3/66877997569086/vivo-x100-pro-512gb-almazno-belyi-107515877-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/hb3/66877997569086/vivo-x100-pro-512gb-almazno-belyi-107515877-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hb1/h9f/66877997634622/vivo-x100-pro-512gb-almazno-belyi-107515877-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h38/h9f/66877997635518/vivo-x100-pro-512gb-almazno-belyi-107515877-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/vivo-x100-pro-512gb-almazno-belyi-107515877/?c=750000000',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 M2 512GB',
      description: 'Сверхтонкий ноутбук с M2, Retina дисплей и длительным временем автономной работы.',
      price: 449990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf5/h13/62973953448062/apple-macbook-air-13-m2-512gb-serebryanyj-105895531-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf5/h13/62973953448062/apple-macbook-air-13-m2-512gb-serebryanyj-105895531-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf1/h1e/62973953579678/apple-macbook-air-13-m2-512gb-serebryanyj-105895531-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf2/h87/62973953711390/apple-macbook-air-13-m2-512gb-serebryanyj-105895531-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-512gb-serebryanyj-105895531/?c=750000000',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 7,
      name: 'Asus TUF Gaming A16',
      description: 'Мощный игровой ноутбук с RTX 4060 и частотой обновления 165 Гц.',
      price: 399990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h72/h11/63745250428254/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h72/h11/63745250428254/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h71/hb7/63745250593278/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdd/hbd/63745250758302/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645/?c=750000000',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 8,
      name: 'Lenovo Legion 5 16IAH7',
      description: 'Игровой универсал с Intel Core i7 и NVIDIA RTX 4060, для требовательных задач.',
      price: 329990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h21/hf3/63201165902398/lenovo-legion-5-16iah7-82nt000sru-chernyi-106735511-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h21/hf3/63201165902398/lenovo-legion-5-16iah7-82nt000sru-chernyi-106735511-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/h1d/63201165967934/lenovo-legion-5-16iah7-82nt000sru-chernyi-106735511-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0c/h57/63201166033470/lenovo-legion-5-16iah7-82nt000sru-chernyi-106735511-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16iah7-82nt000sru-cernyi-106735511/?c=750000000',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 9,
      name: 'HP Pavilion 15-eh1014ur',
      description: 'Офисный/multimedia ноутбук с Ryzen 7, 16 ГБ RAM и SSD 512 ГБ.',
      price: 219990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h76/hf3/63457017204734/hp-pavilion-15-eh1014ur-serebryanyj-112093065-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h76/hf3/63457017204734/hp-pavilion-15-eh1014ur-serebryanyj-112093065-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h17/h8c/63457017270270/hp-pavilion-15-eh1014ur-serebryanyj-112093065-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3b/h4b/63457017335806/hp-pavilion-15-eh1014ur-serebryanyj-112093065-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh1014ur-2z0u5ea-chernyi-112093065/?c=750000000',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 10,
      name: 'Dell Inspiron 16 5625',
      description: 'Стильный 16-дюймовый ноутбук для работы с Ryzen 7 и Full HD экраном.',
      price: 249990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0e/h1f/63448814418974/dell-inspiron-16-5625-2qjd2-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0e/h1f/63448814418974/dell-inspiron-16-5625-2qjd2-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hff/h27/63448814551102/dell-inspiron-16-5625-2qjd2-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hec/h0d/63448814616862/dell-inspiron-16-5625-2qjd2-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/dell-inspiron-16-5625-2qjd2-112042214/?c=750000000',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 11,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники с адаптивным шумоподавлением, пространственным звуком и LTE.',
      price: 189990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h37/h11/50387209274398/apple-airpods-pro-2-belye-103046935-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h37/h11/50387209274398/apple-airpods-pro-2-belye-103046935-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h62/h0d/50387209339934/apple-airpods-pro-2-belye-103046935-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/hc1/50387209405470/apple-airpods-pro-2-belye-103046935-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-103046935/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Лучшее шумоподавление, комфорт и качество звучания для долгого прослушивания.',
      price: 299990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2c/h77/61461389575102/sony-wh-1000xm5-chernyj-104954492-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2c/h77/61461389575102/sony-wh-1000xm5-chernyj-104954492-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h54/h0d/61461389640638/sony-wh-1000xm5-chernyj-104954492-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h35/h69/61461389706174/sony-wh-1000xm5-chernyj-104954492-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-104954492/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 13,
      name: 'Bose QuietComfort Earbuds',
      description: 'Комфортные вкладыши с активным шумоподавлением и фирменным Bose-звуком.',
      price: 209990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h68/h77/61060160707742/bose-quietcomfort-earbuds-chernye-104185043-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h68/h77/61060160707742/bose-quietcomfort-earbuds-chernye-104185043-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7d/h04/61060160773378/bose-quietcomfort-earbuds-chernye-104185043-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h6a/hfc/61060160838914/bose-quietcomfort-earbuds-chernye-104185043-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-earbuds-chernye-104185043/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 14,
      name: 'JBL Tune 760NC',
      description: 'Беспроводные наушники с шумоподавлением, долгим временем работы и легким звуком.',
      price: 31990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h54/h8e/53175187138558/jbl-tune-760nc-chernye-101087579-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h54/h8e/53175187138558/jbl-tune-760nc-chernye-101087579-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfe/h31/53175187169086/jbl-tune-760nc-chernye-101087579-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h83/53175187200126/jbl-tune-760nc-chernye-101087579-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-inchernye-101087579/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 15,
      name: 'Beats Studio3 Wireless',
      description: 'Активное шумоподавление, элитный дизайн и устойчивость к поту для спорта.',
      price: 189990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h90/h07/10072319630814/beats-studio3-wireless-chernye-98438348-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h90/h07/10072319630814/beats-studio3-wireless-chernye-98438348-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfe/h27/10072319696350/beats-studio3-wireless-chernye-98438348-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h29/h26/10072319761886/beats-studio3-wireless-chernye-98438348-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/beats-studio3-wireless-chernye-98438348/?c=750000000',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 16,
      name: 'Apple iPad 10 64GB',
      description: '10.9" Liquid Retina, A14 Bionic и поддержка Apple Pencil для учебы и творчества.',
      price: 329990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h3b/54576807237182/apple-ipad-10-10-9-64gb-ruzhevyj-100350118-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h3b/54576807237182/apple-ipad-10-10-9-64gb-ruzhevyj-100350118-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/h30/54576807302718/apple-ipad-10-10-9-64gb-ruzhevyj-100350118-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2b/h14/54576807368254/apple-ipad-10-10-9-64gb-ruzhevyj-100350118-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-10-9-64gb-serebryanyj-100350118/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 128GB',
      description: 'Premium-планшет для мультимедиа с 120 Гц, S Pen и съемной клавиатурой.',
      price: 429990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8d/hbd/65106694556606/samsung-galaxy-tab-s9-128gb-serebryanyj-108276573-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8d/hbd/65106694556606/samsung-galaxy-tab-s9-128gb-serebryanyj-108276573-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd7/h71/65106694622142/samsung-galaxy-tab-s9-128gb-serebryanyj-108276573-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdb/h3c/65106694687678/samsung-galaxy-tab-s9-128gb-serebryanyj-108276573-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128-gb-serebryanyj-108276573/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 18,
      name: 'Huawei MatePad 11',
      description: '11" ЖК экран 120 Гц, HarmonyOS, мощный звук и поддержка стилуса.',
      price: 249990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd7/h5d/63455554186718/huawei-matepad-11-64gb-serebryanyj-111285508-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd7/h5d/63455554186718/huawei-matepad-11-64gb-serebryanyj-111285508-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3f/hbc/63455554252254/huawei-matepad-11-64gb-serebryanyj-111285508-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3a/h76/63455554317790/huawei-matepad-11-64gb-serebryanyj-111285508-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-64-gb-serebryanyj-111285508/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 19,
      name: 'Lenovo Tab P11 Pro 2022',
      description: 'OLED 2K, Dolby Atmos, 120 Гц и 4 динамика для просмотра фильмов в качестве.',
      price: 269990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc9/hca/62475345423870/lenovo-tab-p11-pro-2022-128gb-seryj-107059952-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc9/hca/62475345423870/lenovo-tab-p11-pro-2022-128gb-seryj-107059952-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/h4c/62475345489406/lenovo-tab-p11-pro-2022-128gb-seryj-107059952-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h79/h81/62475345554942/lenovo-tab-p11-pro-2022-128gb-seryj-107059952-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-pro-2022-128gb-seryy-107059952/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 20,
      name: 'Xiaomi Pad 6 256GB',
      description: '10.61" 120 Гц, Snapdragon, стереозвук и большой аккумулятор.',
      price: 229990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hac/h6f/64496004738078/xiaomi-pad-6-256gb-chernyj-107190036-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hac/h6f/64496004738078/xiaomi-pad-6-256gb-chernyj-107190036-1.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h29/h2d/64496004803614/xiaomi-pad-6-256gb-chernyj-107190036-2.jpg',
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hb3/hdf/64496004869150/xiaomi-pad-6-256gb-chernyj-107190036-3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-256gb-chernyj-107190036/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
  ];

  constructor() {
    this.loadLikesFromStorage();
  }

  private loadLikesFromStorage(): void {
    const storedLikes = localStorage.getItem('productLikes');
    console.log('Loading likes from storage:', storedLikes);
    if (storedLikes) {
      const likesMap: { [key: number]: number } = JSON.parse(storedLikes);
      console.log('Parsed likes map:', likesMap);
      this.products.forEach(product => {
        if (likesMap[product.id] !== undefined) {
          product.likes = likesMap[product.id];
          console.log(`Set likes for product ${product.id}: ${product.likes}`);
        }
      });
    }
  }

  private saveLikesToStorage(): void {
    const likesMap: { [key: number]: number } = {};
    this.products.forEach(product => {
      likesMap[product.id] = product.likes;
    });
    console.log('Saving likes to storage:', likesMap);
    localStorage.setItem('productLikes', JSON.stringify(likesMap));
  }

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    console.log('Deleting product:', productId);
    this.products = this.products.filter((p) => p.id !== productId);
    this.saveLikesToStorage();
  }

  likeProduct(productId: number): void {
    console.log('Liking product:', productId);
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.likes += 1;
      console.log(`Product ${productId} likes: ${product.likes}`);
      this.saveLikesToStorage();
    } else {
      console.log('Product not found:', productId);
    }
  }
}
