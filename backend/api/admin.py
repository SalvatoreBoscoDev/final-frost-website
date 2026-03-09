from django.contrib import admin
from .models import NewsletterSignup, DevlogPost


@admin.register(NewsletterSignup)
class NewsletterSignupAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at']
    readonly_fields = ['created_at']


@admin.register(DevlogPost)
class DevlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'published', 'published_at']
    list_filter = ['published']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title', 'content']
