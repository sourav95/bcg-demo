from django.shortcuts import render
from django.http import HttpResponse
import json
from django.db import connection


# Create your views here.

def fetch_all_details(request):
    result = []
    try:
        cursor = connection.cursor()
        query = """SELECT *
                    FROM policy_records pr
                    JOIN
                    policy_customer_map_records pcmr
                    ON pr."policyId"=pcmr."policyId_id"
                    JOIN
                    customer_records cr
                    ON cr."customerId"=pcmr."customerId_id";"""
        cursor.execute(query)
        rows = cursor.fetchall()
    except Exception as e:
        print(e)
    else:

        for row in rows:
            bodyInjuryLiability = "Yes"
            personalInjuryProtection = "Yes"
            propertyDamageLiability = "Yes"
            collision = "Yes"
            comprehension = "Yes"
            martialStatus = "Married"
            if row[5] == 0:
                bodyInjuryLiability = "No"
            if row[6] == 0:
                personalInjuryProtection = "No"
            if row[7] == 0:
                propertyDamageLiability = "No"
            if row[8] == 0:
                collision = "No"
            if row[9] == 0:
                comprehension = "No"
            if row[17] == 0:
                martialStatus = "Unmarried"
            result.append({
                "policyId": row[0],
                "dateOfPurchase": row[1],
                "fuel": row[2],
                "vehicleSegment": row[3],
                "premium": row[4],
                "bodyInjuryLiability": bodyInjuryLiability,
                "personalInjuryProtection": personalInjuryProtection,
                "propertyDamageLiability": propertyDamageLiability,
                "collision": collision,
                "comprehension": comprehension,
                "customerId": row[13],
                "gender": row[14],
                "incomeGroup": row[15],
                "region": row[16],
                "martialStatus": martialStatus
            })
    return HttpResponse(json.dumps(result))
