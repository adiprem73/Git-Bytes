import requests
from utils import category

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
    "News & Media": [
        "X-Frame-Options",
        "Referrer-Policy",
        "X-Content-Type-Options"
    ],
    "Technology": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Entertainment": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "Education": [
        "X-Frame-Options",
        "Referrer-Policy",
        "X-Content-Type-Options"
    ],
    "Health & Wellness": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Finance": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Government": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Sports": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "Other": [
        "X-Frame-Options",
        "Referrer-Policy"
    ]
}
def check_headers(url):
    try:
        # Fetch the response headers from the URL
        response = requests.get(url)
        headers = response.headers

        # Determine the category of the site
        cat = category(response)  # Assuming `category()` returns {"category": "News & Media"}
        category_name = cat["category"].strip()

        # Find missing headers based on the category
        missing_headers = []
        for header in CATEGORY_HEADERS[category_name]:
            if header not in headers:
                missing_headers.append(header)

        # Generate the response with zone-based feedback
        return generate_response(category_name, missing_headers)

    except Exception as e:
        return {"error": str(e)}


def generate_response(category_name, missing_headers):
    # Determine the overall score based on the number of missing headers
    if not missing_headers:
        overall_score = 10
    elif len(missing_headers) <= 2:
        overall_score = 6
    else:
        overall_score = 3

    # Determine the zone based on the score
    if overall_score >= 8:
        zone = "Green Zone"
    elif 5 <= overall_score <= 7:
        zone = "Orange Zone"
    else:
        zone = "Red Zone"

    # Define hardcoded feedback and suggestions for each zone
    feedback_data = {
        "Green Zone": {
            "feedback": [
                f"This site follows good security practices.",
                "You can safely browse and interact with this site.",
                "Keep enjoying the secure experience!"
            ],
            "technical_suggestions": [
                "Consider adding optional headers like X-XSS-Protection for enhanced protection.",
                "Regularly audit your security policies to stay ahead of potential threats."
            ]
        },
        "Orange Zone": {
            "feedback": [
                f"This site has some security gaps.",
                "Avoid downloading files or sharing sensitive information.",
                "The site owners should address these issues to improve security."
            ],
            "technical_suggestions": [
                "Add the X-Frame-Options header to prevent clickjacking attacks. Example: X-Frame-Options: DENY",
                "Implement Referrer-Policy to control referrer information. Example: Referrer-Policy: no-referrer"
            ]
        },
        "Red Zone": {
            "feedback": [
                f"This site has significant security vulnerabilities.",
                "Avoid entering sensitive information like passwords or credit card details.",
                "We recommend not using this site until the issues are resolved."
            ],
            "technical_suggestions": [
                "Add a Content-Security-Policy header to restrict resource loading. Example: Content-Security-Policy: default-src 'self'",
                "Enable Strict-Transport-Security (HSTS) to enforce HTTPS. Example: Strict-Transport-Security: max-age=31536000",
                "Add X-Frame-Options to prevent clickjacking attacks. Example: X-Frame-Options: DENY"
            ]
        }
    }

    # Generate the response
    response = {
        "overall_score": overall_score,
        "zone": zone,
        "feedback": feedback_data[zone]["feedback"],
        "missing_headers": missing_headers,
        "technical_suggestions": feedback_data[zone]["technical_suggestions"]
    }

    return response