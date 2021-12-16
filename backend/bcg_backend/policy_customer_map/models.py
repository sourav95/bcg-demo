from django.db import models
from customer.models import Records as CustomerRecords
from policy.models import Records as PolicyRecords

# Create your models here.
class Records(models.Model):
    policyId = models.ForeignKey(PolicyRecords, to_field="policyId", on_delete=models.CASCADE)
    customerId = models.ForeignKey(CustomerRecords, to_field="customerId", on_delete=models.CASCADE)

    def __str__(self):
        return self.policyId
