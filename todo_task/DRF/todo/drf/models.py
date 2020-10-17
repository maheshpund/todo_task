from django.db import models

# Create your models here.


class TODO(models.Model):
    task = models.CharField(max_length=100)
    date = models.DateField()
    done = models.BooleanField(default=False)

