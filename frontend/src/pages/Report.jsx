// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";

// const Report = () => {
//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: "SQL Injection",
//       score: 8,
//       icon: "database",
//       items: [
//         { text: "Prepared statements used in most queries", status: "safe", issue: "No issues", location: "/search" },
//         { text: "Input validation on search form", status: "safe", issue: "No issues", location: "/login" },
//         { text: "Potential SQL injection in admin panel", status: "warning", issue: "Potential SQL injection", location: "/admin/users" }
//       ]
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />
      
//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard 
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>
        
//         <ChartSummary />
        
//         <div className="flex justify-center mt-8">
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </button>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Report;




// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";

// const Report = () => {
//   const [missingHeaders, setMissingHeaders] = useState([]);
//     const [url, setUrl] = useState("https://amazon.in");
//     useEffect(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       fetch("/api/header-scanner", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           },
//           body: JSON.stringify({url})
//       }). then((res)=>res.json()).then((data)=>{setMissingHeaders(data.feedback || []);}).catch((err)=>{
//         console.log(err);
//       });
//     }, [url]);
  

//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: " Missing Headers",
//       score: 8,
//       icon: "database",
//       items: missingHeaders,
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />

//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>

//         <ChartSummary />

//         <div className="flex justify-center mt-8">
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Report;




// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// import Chatbot from "../components/Chatbot";


// const Report = () => {
//   const [missingHeaders, setMissingHeaders] = useState([]);
//   const [url, setUrl] = useState("https://ide.codershub.live");
//   const [missingHeaderScore, setMissingHeaderScore] = useState(0);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("hello");
//     fetch("/api/header-scanner", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ url }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const feedback = data.feedback || [];
//         console.log(feedback);
//         setMissingHeaders(feedback);

//         // Dynamic score logic: 10 - number of missing headers (min 0, max 10)
//         const score = Math.max(0, 10 - feedback.length);
//         setMissingHeaderScore(score);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [url]);

   

//   useEffect(() => {
//     if (!url) return; // prevent fetch if url is empty
  
//     // Scroll to top when a new URL is scanned
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("Scanning SSL for:", url);
  
//     // Make POST request to your SSL Scanner API
//     fetch("/api/ssl_scanner", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ url }),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         const feedback = data.feedback || [];
//         console.log("Missing Security Headers:", feedback);
  
//         setMissingHeaders(feedback);
  
//         // Calculate score (max 10, min 0)
//         const score = Math.max(0, 10 - feedback.length);
//         setMissingHeaderScore(score);
//       })
//       .catch((err) => {
//         console.error("SSL Scanner Error:", err);
//       });
//   }, [url]);
  

//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: "Missing Headers",
//       score: missingHeaderScore,
//       icon: "database",
//       items: missingHeaders,
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "Subdomain Takeover",
//       score: 9, // Full score since there's no issue
//       icon: "network-wired",
//       items: [
//         {
//           text: "No unclaimed DNS entries found",
//           status: "safe",
//           issue: "No vulnerable subdomain records",
//           location: "DNS records"
//         },
//         {
//           text: "All subdomains correctly resolve to active services",
//           status: "safe",
//           issue: "All services actively used",
//           location: "example.subdomain.com"
//         },
//         {
//           text: "No dangling CNAMEs or external services detected",
//           status: "safe",
//           issue: "No unused third-party mappings",
//           location: "DNS configuration"
//         }
//       ]
//     },
//     {
//       title: "SSRF (Server-Side Request Forgery)",
//       score: 8,
//       icon: "exchange-alt",
//       items: [
//         {
//           text: "No internal IPs or localhost access detected via input fields",
//           status: "safe",
//           issue: "No SSRF vector through user input",
//           location: "/api/image-fetch"
//         },
//         {
//           text: "Strict allow-listing enforced for outbound requests",
//           status: "safe",
//           issue: "Only trusted domains allowed",
//           location: "Server-side request handling"
//         },
//         {
//           text: "Metadata URL access blocked by firewall or application logic",
//           status: "safe",
//           issue: "Instance metadata protection in place",
//           location: "AWS/GCP metadata endpoints"
//         }
//       ]
//     }
//     ,
    
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />

//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>

//         <ChartSummary />

//         <div className="flex justify-center mt-8">
//           <Link to="/"  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </Link>
//         </div>
//       </main>

//       <Footer />
//       <Chatbot/>
//     </div>
//   );
// };

// export default Report;

 



import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ScanStatus from "../components/ScanStatus";
import SecurityScore from "../components/SecurityScore";
import VulnerabilityCard from "../components/VulnerabilityCard";
import ChartSummary from "../components/ChartSummary";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import Chatbot from "../components/Chatbot";
 

const Report = () => {
  const { paramURL } = useParams();
  const url = paramURL ? decodeURIComponent(paramURL) : null;

  const [csrf_load,setCSRFLoad] = useState(false);

  const [missingHeaders, setMissingHeaders] = useState([]);
  const [missingHeaderScore, setMissingHeaderScore] = useState(0);
  const [sslFeedback, setSslFeedback] = useState([]);
  const [sslScore, setSslScore] = useState(0);
  const [csrf,setCsrf] = useState([]);

  useEffect(() => {
    console.log(url);
    if (!url) return;
  
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCSRFLoad(true);
    const getMissingHeaders = async () => {
      try {
        const res = await fetch("/api/header-scanner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
  
        const data = await res.json();
        const feedback = data.feedback || [];
        setMissingHeaders(feedback);
        const score = Math.max(0, 10 - feedback.length);
        setMissingHeaderScore(score);
      } catch (err) {
        console.error("Header Scanner Error:", err);
      }
    };
  
    const getSSL = async () => {
      try {
        const res = await fetch("/api/ssl-scanner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
  
        const data = await res.json();
        const sslIssues = data.feedback || [];
        setSslFeedback(sslIssues);
        const score = Math.max(0, 10 - sslIssues.length);
        setSslScore(score);
        console.log("SSL Scanner Data:", data);
      } catch (error) {
        console.error("SSL Scanner Error:", error);
      }
    };

    const getCSRF = async () => {
      try {
        const res = await fetch("/api/csrf-scanner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
  
        const data = await res.json();
        setCsrf(data);
      } catch (error) {
        console.error("CSRF Scanner Error:", error);
      }
    };
    
    getMissingHeaders();
    getSSL();
    getCSRF();
    setCSRFLoad(false);
  
  }, [url]);
  

  const vulnerabilities = [
    {
      title: "XSS (Cross-Site Scripting)",
      score: 6,
      icon: "code",
      items: [
        { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
        { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
        { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
      ]
    },
    {
      title: "Missing Headers",
      score: missingHeaderScore,
      icon: "database",
      items: missingHeaders.slice(1).map((text, index) => ({
        status: "warning",
        issue: text,
        location: "HTTP Response Headers"
      }))
    },
    {
      title: "CSRF (Cross-Site Request Forgery)",
      icon: "exchange-alt",
      items: csrf,
    },
    {
      title: "Subdomain Takeover",
      score: 9,
      icon: "network-wired",
      items: [
        {
          text: "No unclaimed DNS entries found",
          status: "safe",
          issue: "No vulnerable subdomain records",
          location: "DNS records"
        },
        {
          text: "All subdomains correctly resolve to active services",
          status: "safe",
          issue: "All services actively used",
          location: "example.subdomain.com"
        },
        {
          text: "No dangling CNAMEs or external services detected",
          status: "safe",
          issue: "No unused third-party mappings",
          location: "DNS configuration"
        }
      ]
    },
    {
      title: "SSRF (Server-Side Request Forgery)",
      score: 8,
      icon: "exchange-alt",
      items: [
        {
          text: "No internal IPs or localhost access detected via input fields",
          status: "safe",
          issue: "No SSRF vector through user input",
          location: "/api/image-fetch"
        },
        {
          text: "Strict allow-listing enforced for outbound requests",
          status: "safe",
          issue: "Only trusted domains allowed",
          location: "Server-side request handling"
        },
        {
          text: "Metadata URL access blocked by firewall or application logic",
          status: "safe",
          issue: "Instance metadata protection in place",
          location: "AWS/GCP metadata endpoints"
        }
      ]
    },
    {
      title: "SSL Misconfigurations",
      score: sslScore,
      icon: "lock",
      items: sslFeedback.map((text, index) => ({
        text,
        status: "warning",
        issue: text,
        location: "SSL Scanner"
      }))
    }
  ];

  const totalScore = vulnerabilities
  .map((v) => v.score)
  .filter((score) => typeof score === "number")
  .reduce((sum, score) => sum + score, 0);

const avgScore = Math.round(totalScore / vulnerabilities.length);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <ScanStatus />
        <SecurityScore score={avgScore} />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {vulnerabilities.map((vuln, index) => (
            <VulnerabilityCard
              key={index}
              title={vuln.title}
              score={vuln.score}
              icon={vuln.icon}
              items={vuln.items}
            />
          ))}
        </div>

        <ChartSummary />

        <div className="flex justify-center mt-8">
          <Link to="/" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back to Home
          </Link>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Report;
