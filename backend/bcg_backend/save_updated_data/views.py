from django.shortcuts import render
import json
from django.http import HttpResponse
from django.db import connection


# Create your views here.

def save_updated_data(request):
    print(request.GET)
    try:
        cursor = connection.cursor()
        query = """UPDATE policy_records
                    SET "dateOfPurchase"={}, "fuel"={}, "vehicleSegment"={}, "premium"={}, "bodyInjuryLiability"={},
                    "personalInjuryProtection"={}, "propertyDamageLiability"={}, "collision"={}, "comprehension"={}
                    WHERE policy_records."policyId" = '{}'
                    ;""".format(request.GET["dateOfPurchase"][0],request.GET["fuel"][0],request.GET["vehicleSegment"][0],request.GET["premium"][0],request.GET["bodyInjuryLiability"][0],request.GET["personalInjuryProtection"][0],request.GET["propertyDamageLiability"][0],request.GET["collision"][0],request.GET["comprehension"][0],request.GET["policyId"][0])
        cursor.execute(query)

    except Exception as e:
        print(e)
    else:
        print("Done")
    return HttpResponse("Hello")
