# Generated by Django 4.1.7 on 2023-03-18 02:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('han_ji_dict', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hanji',
            name='freq',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='hanji',
            name='tiau',
            field=models.IntegerField(default=0),
        ),
    ]
