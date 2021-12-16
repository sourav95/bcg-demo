from django.shortcuts import render
import json
from django.http import HttpResponse
from django.db import connection


# Create your views here.

def group_data_by_month(request):
    result = []
    month_map = {
        "01": "JAN",
        "02": "FEB",
        "03": "MAR",
        "04": "APR",
        "05": "MAY",
        "06": "JUN",
        "07": "JUL",
        "08": "AUG",
        "09": "SEP",
        "10": 'OCT',
        "11": "NOV",
        "12": "DEC"
    }
    try:
        cursor = connection.cursor()
        query = """SELECT T.month, count("policyId") FROM
            (SELECT TO_CHAR(TO_TIMESTAMP("dateOfPurchase",'MM/DD/YYY'),'MM') as month,"policyId"
            FROM policy_records pr
            JOIN
            policy_customer_map_records pcmr
            ON pr."policyId"=pcmr."policyId_id"
            JOIN
            customer_records cr
            ON cr."customerId"=pcmr."customerId_id") T
            GROUP BY T.month
			ORDER BY T.month ASC;"""
        cursor.execute(query)
        rows = cursor.fetchall()
    except Exception as e:
        print(e)
    else:
        for row in rows:
            result.append({
                "month": month_map.get(row[0]),
                "policies": row[1]
            })
    print(result)
    return HttpResponse(json.dumps(result))
