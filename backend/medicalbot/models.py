from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_prompt = models.TextField()
    model_response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_prompt


class Diagnosis(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    type = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Diagnosis"

    def __str__(self):
        return self.type