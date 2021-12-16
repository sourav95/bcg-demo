from django.db import models
from policy.models import Records

# Create your models here.
class Records(models.Model):
    customerId = models.CharField(max_length=10, primary_key=True)
    gender = models.CharField(max_length=6)
    incomeGroup = models.CharField(max_length=10)
    region = models.CharField(max_length=50)
    martialStatus = models.IntegerField()



    def __str__(self):
        return self.customerId
