from django.urls import path
from .views import NewsletterSignupView, DevlogPostListView

urlpatterns = [
    path('newsletter/', NewsletterSignupView.as_view(), name='newsletter-signup'),
    path('devlog/', DevlogPostListView.as_view(), name='devlog-list'),
]
