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
    title = models.CharField(max_length=200)
    summary = models.CharField(max_length=500, blank=True, null=True, )
    thumbnail = models.ImageField(upload_to='uploads/', height_field=None, width_field=None, max_length=100, blank=True, null=True)
    text = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
