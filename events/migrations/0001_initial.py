# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-17 17:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('source', models.CharField(max_length=100)),
                ('custom_id', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('image_url', models.CharField(blank=True, max_length=400, null=True)),
                ('url', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('summary', models.CharField(max_length=1000)),
                ('free', models.BooleanField()),
                ('description', models.TextField(blank=True, null=True)),
                ('start_date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_date', models.DateField()),
                ('end_time', models.TimeField(blank=True, null=True)),
                ('create_date', models.DateField(auto_now_add=True)),
                ('create_time', models.TimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventQuery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('create_date', models.DateField(auto_now_add=True)),
                ('create_time', models.TimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='query',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.EventQuery'),
        ),
    ]
