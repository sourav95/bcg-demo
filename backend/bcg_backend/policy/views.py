from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection


# Create your views here.

def fetch_policy_details(request):
    cursor = connection.cursor()
    query = """SELECT *
                FROM policy_records pr
                JOIN
                policy_customer_map_records pcmr
                ON pr."policyId"=pcmr."policyId_id"
                JOIN
                customer_records cr
                ON cr."customerId"=pcmr."customerId_id";"""
    query2= """SELECT T.month, count("policyId") FROM
            (SELECT TO_CHAR(TO_TIMESTAMP("dateOfPurchase",'MM/DD/YYY'),'MON') as month,"policyId"
            FROM policy_records pr
            JOIN
            policy_customer_map_records pcmr
            ON pr."policyId"=pcmr."policyId_id"
            JOIN
            customer_records cr
            ON cr."customerId"=pcmr."customerId_id") T
            GROUP BY T.month;"""
    cursor.execute(query)
    row = cursor.fetchall()
    print(row)
    return HttpResponse("Hello")
