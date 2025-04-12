# 🛡️ CyberShield: Security Testing Tool for Early-Stage Web Projects

CyberShield is a cybersecurity platform designed to help developers and users assess the security of websites. By scanning for vulnerabilities outlined in the OWASP Top 10, CyberShield provides actionable insights and user-friendly recommendations to ensure early-stage web projects are protected against common cyber threats.

---

## 🌟 Problem Statement

Many student developers and small teams deploy websites without assessing their security, leaving them vulnerable to threats like XSS, SQL Injection, CSRF, and insecure headers. Existing tools are often too complex or expensive for early-stage projects.

**CyberShield** solves this problem by offering an accessible platform where users can:
- Enter a URL and receive a detailed security report.
- Get a safety score and actionable recommendations.
- Learn about missed security best practices (e.g., missing headers, SSL misconfigurations).
- Determine if a site is safe to visit or develop further.

---

## 🚀 Features

- **Threat Detection**: Identify vulnerabilities like XSS, SQL Injection, CSRF, insecure headers, and more.
- **Safety Score**: Provide a clear safety score based on detected vulnerabilities.
- **AI-Powered Responses**: Generate user-friendly explanations and recommendations using a Large Language Model (LLM).
- **OWASP Compliance**: Scan for vulnerabilities outlined in the OWASP Top 10.
- **Developer Mode**: Highlight missed security practices and provide remediation steps.
- **Modern UI**: A clean, intuitive interface for both technical and non-technical users.

---

## 🧩 How It Works

1. **Input URL**: Enter the website URL you want to scan (e.g., `https://example.com`).
2. **Scan Process**: CyberShield analyzes the site for:
   - OWASP Top 10 vulnerabilities
   - Missing security headers (e.g., `Content-Security-Policy`, `X-Frame-Options`)
   - SSL/TLS misconfigurations
   - Directory traversal and other common threats
3. **Generate Report**: Receive a detailed, color-coded report with:
   - A safety score (e.g., 8/10)
   - Detected vulnerabilities and remediation steps
   - AI-powered recommendations for improving security

---

## 🛠️ Built With

- **Backend**:
  - Flask (Python framework)
  - Requests (HTTP requests)
  - BeautifulSoup (HTML parsing)
  - OWASP tools integration (e.g., ZAP API, Nikto)

- **Frontend**:
  - React.js
  - Tailwind CSS

- **AI/ML**:
  - FastAPI + LLM (Ollama)

---

## 💻 Environment Setup

Follow the steps below to set up CyberShield locally:

### 🔹 Frontend (React)

```bash
cd frontend
npm install
npm run dev

in backend cd backend
pip install -r requirements.txt
python app.py




for llm
cd llm
pip install -r requirements.txt
python main.py


