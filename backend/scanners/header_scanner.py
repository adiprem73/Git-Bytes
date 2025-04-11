import requests

CATEGORY_HEADERS = {
    "Blog": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "E-commerce": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Banking": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ]
}

def check_headers(url):
    try:
        response = requests.get(url)
        headers = response.headers

        security_headers = [
            "Content-Security-Policy",
            "X-Frame-Options",
            "Strict-Transport-Security",
            "X-Content-Type-Options",
            "Referrer-Policy"
        ]

        missing_headers = []
        for header in security_headers:
            if header not in headers:
                missing_headers.append(header)

        return {
            "url": url,
            "missing_headers": missing_headers
        }
    except Exception as e:
        return {
            "error": str(e)
        }