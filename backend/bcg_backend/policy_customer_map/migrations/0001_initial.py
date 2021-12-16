# Generated by Django 4.0 on 2021-12-12 14:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('policy', '0003_alter_records_bodyinjuryliability_and_more'),
        ('customer', '0005_remove_records_policyid_alter_records_customerid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Records',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.records')),
                ('policyId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='policy.records')),
            ],
        ),
    ]
