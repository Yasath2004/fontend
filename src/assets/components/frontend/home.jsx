import React from "react";
import JobCard from "./JobCard";

function Home() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      salary: "$80,000 - $120,000",
      description: "Develop and maintain web applications using React and Node.js."
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Data Insights Inc",
      location: "San Francisco, CA",
      salary: "$70,000 - $100,000",
      description: "Analyze data sets and create reports using Python and SQL."
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Austin, TX",
      salary: "$60,000 - $90,000",
      description: "Design user interfaces and improve user experience for web applications."
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Welcome Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Welcome to JobHub
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '40px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Discover your dream job with our curated listings. Connect with top companies and advance your career today.
        </p>
        <button style={{
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Explore Jobs
        </button>
      </div>

      {/* Job Listings Section */}
      <div style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '40px',
          fontSize: '2.5rem'
        }}>
          Featured Job Opportunities
        </h2>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;