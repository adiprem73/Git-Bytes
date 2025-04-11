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




import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ScanStatus from "../components/ScanStatus";
import SecurityScore from "../components/SecurityScore";
import VulnerabilityCard from "../components/VulnerabilityCard";
import ChartSummary from "../components/ChartSummary";
import Footer from "../components/Footer";

const Report = () => {
 
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  

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
      title: "SQL Injection",
      score: 8,
      icon: "database",
      items: [
        { text: "Prepared statements used in most queries", status: "safe", issue: "No issues", location: "/search" },
        { text: "Input validation on search form", status: "safe", issue: "No issues", location: "/login" },
        { text: "Potential SQL injection in admin panel", status: "warning", issue: "Potential SQL injection", location: "/admin/users" }
      ]
    },
    {
      title: "CSRF (Cross-Site Request Forgery)",
      score: 9,
      icon: "exchange-alt",
      items: [
        { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
        { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
        { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
      ]
    },
    {
      title: "SSL Misconfigurations",
      score: 7,
      icon: "lock",
      items: [
        { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
        { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
        { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <ScanStatus />
        <SecurityScore />

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
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back to Home
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
