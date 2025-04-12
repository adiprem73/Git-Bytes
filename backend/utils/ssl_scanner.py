import ssl
import socket
import certifi
from urllib.parse import urlparse
import sys
import json

def check_ssl_validation(url):
    try:
        parsed_url = urlparse(url)
        hostname = parsed_url.hostname
        port = parsed_url.port or 443

        context = ssl.create_default_context(cafile=certifi.where())

        with socket.create_connection((hostname, port)) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                cert = ssock.getpeercert()

        issuer = dict(x[0] for x in cert['issuer'])
        subject = dict(x[0] for x in cert['subject'])

        return {
            "status": "success",
            "message": "SSL certificate is valid and trusted.",
            "details": {
                "hostname": hostname,
                "issuer": issuer.get("organizationName", "Unknown Issuer"),
                "subject": subject.get("commonName", "Unknown Subject"),
                "not_before": cert.get("notBefore"),
                "not_after": cert.get("notAfter"),
            }
        }

    except ssl.SSLCertVerificationError as e:
        return {
            "status": "error",
            "message": "SSL certificate validation failed.",
            "details": str(e)
        }

    except Exception as e:
        return {
            "status": "error",
            "message": "An error occurred while checking SSL validation.",
            "details": str(e)
        }