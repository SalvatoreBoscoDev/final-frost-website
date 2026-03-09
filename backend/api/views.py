from rest_framework import generics, status
from rest_framework.response import Response
from .models import NewsletterSignup, DevlogPost
from .serializers import NewsletterSignupSerializer, DevlogPostSerializer


class NewsletterSignupView(generics.CreateAPIView):
    serializer_class = NewsletterSignupSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Successfully subscribed! Stay frosty."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DevlogPostListView(generics.ListAPIView):
    serializer_class = DevlogPostSerializer
    queryset = DevlogPost.objects.filter(published=True)
