
import json
import os
import urllib.request
import urllib.error
import boto3

cloudwatch = boto3.client("cloudwatch")

WEBSITE_URL = os.environ["WEBSITE_URL"]
TIMEOUT = 10


def lambda_handler(event, context):
    status_code = 0
    health_status = 0

    try:
        request = urllib.request.Request(
            WEBSITE_URL,
            headers={"User-Agent": "E-Digital-Pakistan-Health-Check"}
        )

        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            status_code = response.status

        health_status = 1 if status_code == 200 else 0

    except urllib.error.HTTPError as error:
        status_code = error.code

    except Exception as error:
        print(f"Website health check failed: {error}")

    # Publish website health to CloudWatch
    cloudwatch.put_metric_data(
        Namespace="EDigitalPakistan/WebsiteMonitoring",
        MetricData=[
            {
                "MetricName": "WebsiteHealth",
                "Value": health_status,
                "Unit": "None"
            }
        ]
    )

    result = {
        "website": WEBSITE_URL,
        "status_code": status_code,
        "healthy": health_status == 1
    }

    print(json.dumps(result))

    return result
