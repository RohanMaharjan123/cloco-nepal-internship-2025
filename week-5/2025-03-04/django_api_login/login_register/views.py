from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import Student
from .serializers import StudentSerializer, LoginsSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated


class StudentView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        print(request.user)
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response({
            "status": "True",
            "data": serializer.data
        })
    
class LoginView(APIView):
    def post(self, request):
        data = request.data
        serializer = LoginsSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status": False,
                "data": serializer.errors
            })
        
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        # secretkey = serializer.validated_data['secretkey']
        
        user = authenticate(username=username, password=password)

        if user:
            token = Token.objects.get(user=user)
            print(token)
            return Response({
                "status": True,
                "data": {'token': str(token)},
            })

        return Response({
            "status": False,
            "data": {},
            "message": "Invalid credentials"
        })