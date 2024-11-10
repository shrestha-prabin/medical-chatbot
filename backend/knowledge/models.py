from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Information(models.Model):
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.SET_NULL)
    subcategory = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200)
    text = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
