from django.http import JsonResponse, Http404
from django.forms.models import model_to_dict
from .models import Product, Category
import json


def products_list(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "rating": p.rating,
            "image": p.image,
            "images": p.images,
            "link": p.link,
            "likes": p.likes,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        })
    return JsonResponse(data, safe=False, json_dumps_params={"ensure_ascii": False, "indent": 2})


def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
    except Product.DoesNotExist:
        raise Http404("Product not found")
    data = {
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "price": p.price,
        "rating": p.rating,
        "image": p.image,
        "images": p.images,
        "link": p.link,
        "likes": p.likes,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category_id,
    }
    return JsonResponse(data, json_dumps_params={"ensure_ascii": False, "indent": 2})


def categories_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False, json_dumps_params={"ensure_ascii": False, "indent": 2})


def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
    except Category.DoesNotExist:
        raise Http404("Category not found")
    return JsonResponse({"id": c.id, "name": c.name}, json_dumps_params={"ensure_ascii": False, "indent": 2})


def products_by_category(request, id):
    try:
        c = Category.objects.get(id=id)
    except Category.DoesNotExist:
        raise Http404("Category not found")
    products = c.products.all()
    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "rating": p.rating,
            "image": p.image,
            "images": p.images,
            "link": p.link,
            "likes": p.likes,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        })
    return JsonResponse(data, safe=False, json_dumps_params={"ensure_ascii": False, "indent": 2})

# Create your views here.
