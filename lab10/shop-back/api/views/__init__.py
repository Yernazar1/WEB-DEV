# Switch between implementations by changing this import.
# - from .fbv import *
# - from .generic import *
# - from .viewset import *
from .viewset import *

__all__ = [
    "CategoryViewSet",
    "ProductViewSet",
    "use_router",
    "CategoryList",
    "CategoryDetail",
    "CategoryProducts",
    "ProductList",
    "ProductDetail",
]
