from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from ..models import Category, Product
from ..serializers import CategorySerializer, ProductSerializer

use_router = False


@api_view(["GET", "POST"])
def categories_list(request):
    if request.method == "GET":
        serializer = CategorySerializer(Category.objects.all(), many=True)
        return Response(serializer.data)

    serializer = CategorySerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, pk):
    category = get_object_or_404(Category, pk=pk)

    if request.method == "GET":
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = CategorySerializer(category, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    category.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def category_products(request, pk):
    category = get_object_or_404(Category, pk=pk)
    serializer = ProductSerializer(category.products.all(), many=True)
    return Response(serializer.data)


@api_view(["GET", "POST"])
def products_list(request):
    if request.method == "GET":
        serializer = ProductSerializer(Product.objects.all(), many=True)
        return Response(serializer.data)

    serializer = ProductSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)

    if request.method == "GET":
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = ProductSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    product.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


CategoryList = categories_list
CategoryDetail = category_detail
CategoryProducts = category_products
ProductList = products_list
ProductDetail = product_detail
