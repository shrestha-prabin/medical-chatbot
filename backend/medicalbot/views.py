from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .core.llamav3 import chat  # llama from inference api

# from .core.bot import chat  # fine tuned model
from .models import Message
from .serializers import MessageSerializer


class MessageView(APIView):
    permission_classes = [
        AllowAny,
    ]
    serializer_class = MessageSerializer

    def get(self, request):
        user = request.user

        if not user.is_authenticated:
            return Response(
                {"detail": "Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED
            )

        messages = Message.objects.filter(user=user)

        serializer = self.serializer_class(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        query = request.data.get("query")

        response = chat(query)

        if user.is_authenticated:
            message = Message(user=user, user_prompt=query, model_response=response)
            message.save()
        else:
            message = Message(user=None, user_prompt=query, model_response=response)

        serializer = self.serializer_class(message)

        return Response(serializer.data, status=status.HTTP_200_OK)
