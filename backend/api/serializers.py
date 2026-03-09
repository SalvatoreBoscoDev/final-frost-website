from rest_framework import serializers
from .models import NewsletterSignup, DevlogPost


class NewsletterSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSignup
        fields = ['email']

    def validate_email(self, value):
        if NewsletterSignup.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already subscribed.")
        return value


class DevlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DevlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'cover_image_url', 'published_at']
