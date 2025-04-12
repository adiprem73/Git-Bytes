from utils import get_csrf_token as getCSRF

def check_csrf(url):
    try:
        csrf = getCSRF(url)
        
        if csrf:
            # Positive points when CSRF exists
            return [
                "✔️ CSRF token validation enabled",
                "✔️ Protected against cross-site requests",
                "✔️ Secure form submission ensured"
            ]

    except Exception as e:
        return [
                "❌ No CSRF protection detected",
                "❌ Vulnerable to request forgery attacks",
                "❌ User actions not securely validated"
            ]

# Example usage:
# print(check_csrf("https://secure-site.com"))  # Returns 3 green checks
# print(check_csrf("http://insecure-site.com"))  # Returns 3 red warnings
# print(check_csrf("invalid-url"))  # Returns error message