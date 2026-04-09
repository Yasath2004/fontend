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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Job Portal</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;