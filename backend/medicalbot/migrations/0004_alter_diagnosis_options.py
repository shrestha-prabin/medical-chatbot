# Generated by Django 5.1.2 on 2024-11-03 12:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medicalbot', '0003_diagnosis'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='diagnosis',
            options={'verbose_name_plural': 'Diagnosis'},
        ),
    ]