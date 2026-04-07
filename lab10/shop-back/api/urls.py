from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views


def maybe_view(view):
    return view.as_view() if hasattr(view, "as_view") else view


if getattr(views, "use_router", False):
    router = DefaultRouter()
    router.register("categories", views.CategoryViewSet, basename="category")
    router.register("products", views.ProductViewSet, basename="product")
    urlpatterns = router.urls
else:
    urlpatterns = [
        path("categories/", maybe_view(views.CategoryList), name="categories_list"),
        path("categories/<int:pk>/", maybe_view(views.CategoryDetail), name="category_detail"),
        path("categories/<int:pk>/products/", maybe_view(views.CategoryProducts), name="products_by_category"),
        path("products/", maybe_view(views.ProductList), name="products_list"),
        path("products/<int:pk>/", maybe_view(views.ProductDetail), name="product_detail"),
    ]
