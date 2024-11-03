from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from .models import Category, Information
from django.db import models

class InformationAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)


admin.site.register(Category)
admin.site.register(Information, InformationAdmin)