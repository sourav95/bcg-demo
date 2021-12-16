from django.db import models


# Create your models here.
class Records(models.Model):
    policyId = models.CharField(max_length=10, primary_key = True)
    dateOfPurchase = models.CharField(max_length=10)
    fuel = models.CharField(max_length=6)
    vehicleSegment = models.CharField(max_length=1)
    premium = models.IntegerField()
    bodyInjuryLiability = models.IntegerField()
    personalInjuryProtection = models.IntegerField()
    propertyDamageLiability = models.IntegerField()
    collision = models.IntegerField()
    comprehension = models.IntegerField()

    def __str__(self):
        return self.policyId
