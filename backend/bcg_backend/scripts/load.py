import csv
import os
from policy.models import Records as PolicyRecords
from customer.models import Records as CustomerRecords
from policy_customer_map.models import Records as MapRecords

def run():

    file = open("/Users/souravhazra/Documents/BCGDemo/backend/bcg_backend/scripts/data.csv")
    read_file = csv.reader(file)

    count = 1
    dict_customer_id = {}
    for record in read_file:
        if count == 1:
            pass
        else:
            MapRecords.objects.create(customerId=CustomerRecords(record[2]), policyId=PolicyRecords(record[0]))
            """if dict_customer_id.get(record[2]) is None:
                print(record)
                #CustomerRecords.objects.create(customerId=record[2], gender=record[11], incomeGroup=record[12], region=record[13], martialStatus=record[14])
                #PolicyRecords.objects.create(policyId=record[0], dateOfPurchase=record[1], fuel=record[3], vehicleSegment=record[4], premium=record[5], bodyInjuryLiability=record[6], personalInjuryProtection=record[7], propertyDamageLiability=record[8], collision=record[9], comprehension=record[10])
                dict_customer_id[record[2]] = 1
            else:
                dict_customer_id[record[2]] += 1"""
        count += 1
