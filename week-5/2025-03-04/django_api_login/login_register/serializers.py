from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class LoginsSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()