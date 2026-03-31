import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create categories from lab5
smartphones = Category.objects.create(name="Smartphones")
laptops = Category.objects.create(name="Laptops")
headphones = Category.objects.create(name="Headphones")
tablets = Category.objects.create(name="Tablets")

# Create products from lab5
products_data = [
    {
        "name": "Apple iPhone 15 Pro 256GB",
        "description": "Titanium body, 48MP camera and A17 Bionic. The true flagship for photo and video.",
        "price": 699990,
        "rating": 4.9,
        "image": "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg",
        "link": "https://kaspi.kz/shop/p/apple-iphone-15-pro-256-gb-serebryanyy-106377215/?c=750000000",
        "count": 10,
        "category": smartphones,
    },
    {
        "name": "Samsung Galaxy S24 Ultra 512GB",
        "description": "Dynamic AMOLED 2X 120Hz display and 200MP camera for professional shooting.",
        "price": 599990,
        "rating": 4.8,
        "image": "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzthskz_thx_68_200_5_galaxy_s24_ultra_5g_512gb_titanium_gray_277518_1.jpg",
        "link": "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512-gb-chernyi-65124710/?c=750000000",
        "count": 8,
        "category": smartphones,
    },
    {
        "name": "Xiaomi Redmi Note 13 Pro 256GB",
        "description": "OLED 120Hz, 200MP camera and 5500mAh battery — excellent price-performance balance.",
        "price": 199990,
        "rating": 4.5,
        "image": "https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg",
        "link": "https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-256-gb-chernyi-108048811/?c=750000000",
        "count": 15,
        "category": smartphones,
    },
    {
        "name": "OnePlus 12 256GB",
        "description": "Powerful Snapdragon, 120W charging, and elegant design for advanced users.",
        "price": 259990,
        "rating": 4.6,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdc/hdd/66898062171678/oneplus-12-256gb-cernyi-108191346-1.jpg",
        "link": "https://kaspi.kz/shop/p/oneplus-12-256-gb-cernyi-108191346/?c=750000000",
        "count": 12,
        "category": smartphones,
    },
    {
        "name": "Vivo X100 Pro 512GB",
        "description": "Flagship with Zeiss optics, MediaTek Dimensity 9300, and 120Hz display.",
        "price": 299990,
        "rating": 4.5,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/hb3/66877997569086/vivo-x100-pro-512gb-almazno-belyi-107515877-1.jpg",
        "link": "https://kaspi.kz/shop/p/vivo-x100-pro-512gb-almazno-belyi-107515877/?c=750000000",
        "count": 7,
        "category": smartphones,
    },
    {
        "name": "Apple MacBook Air 13 M2 512GB",
        "description": "Сверхтонкий ноутбук с M2, Retina дисплей и длительным временем автономной работы.",
        "price": 449990,
        "rating": 4.8,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf5/h13/62973953448062/apple-macbook-air-13-m2-512gb-serebryanyj-105895531-1.jpg",
        "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-m2-512gb-serebryanyj-105895531/?c=750000000",
        "count": 6,
        "category": laptops,
    },
    {
        "name": "Asus TUF Gaming A16",
        "description": "Мощный игровой ноутбук с RTX 4060 и частотой обновления 165 Гц.",
        "price": 399990,
        "rating": 4.4,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h72/h11/63745250428254/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645-1.jpg",
        "link": "https://kaspi.kz/shop/p/asus-tuf-gaming-a16-fv001w-90nr0hl1-m09u00-107183645/?c=750000000",
        "count": 5,
        "category": laptops,
    },
    {
        "name": "Lenovo Legion 5 16IAH7",
        "description": "Игровой универсал с Intel Core i7 и NVIDIA RTX 4060, для требовательных задач.",
        "price": 329990,
        "rating": 4.6,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h21/hf3/63201165902398/lenovo-legion-5-16iah7-82nt000sru-chernyi-106735511-1.jpg",
        "link": "https://kaspi.kz/shop/p/lenovo-legion-5-16iah7-82nt000sru-cernyi-106735511/?c=750000000",
        "count": 9,
        "category": laptops,
    },
    {
        "name": "Apple AirPods Pro 2",
        "description": "Наушники с адаптивным шумоподавлением, пространственным звуком и LTE.",
        "price": 189990,
        "rating": 4.7,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h37/h11/50387209274398/apple-airpods-pro-2-belye-103046935-1.jpg",
        "link": "https://kaspi.kz/shop/p/apple-airpods-pro-2-103046935/?c=750000000",
        "count": 20,
        "category": headphones,
    },
    {
        "name": "Sony WH-1000XM5",
        "description": "Лучшее шумоподавление, комфорт и качество звучания для долгого прослушивания.",
        "price": 299990,
        "rating": 4.6,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2c/h77/61461389575102/sony-wh-1000xm5-chernyj-104954492-1.jpg",
        "link": "https://kaspi.kz/shop/p/sony-wh-1000xm5-104954492/?c=750000000",
        "count": 11,
        "category": headphones,
    },
    {
        "name": "Apple iPad 10 64GB",
        "description": "10.9\" Liquid Retina, A14 Bionic и поддержка Apple Pencil для учебы и творчества.",
        "price": 329990,
        "rating": 4.7,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h3b/54576807237182/apple-ipad-10-10-9-64gb-ruzhevyj-100350118-1.jpg",
        "link": "https://kaspi.kz/shop/p/apple-ipad-10-10-9-64gb-serebryanyj-100350118/?c=750000000",
        "count": 8,
        "category": tablets,
    },
    {
        "name": "Samsung Galaxy Tab S9 128GB",
        "description": "Premium-планшет для мультимедиа с 120 Гц, S Pen и съемной клавиатурой.",
        "price": 429990,
        "rating": 4.8,
        "image": "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8d/hbd/65106694556606/samsung-galaxy-tab-s9-128gb-serebryanyj-108276573-1.jpg",
        "link": "https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128-gb-serebryanyj-108276573/?c=750000000",
        "count": 6,
        "category": tablets,
    },
]

Product.objects.bulk_create([Product(**p) for p in products_data])
for product in Product.objects.all():
    if not product.images:
        product.images = [product.image] if product.image else []
    if product.likes is None:
        product.likes = 0
    product.save()
print(f"✓ Added 4 categories and {len(products_data)} products")

