import React from 'react';

function JobCard({ job }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '24px',
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    }}
    onMouseOut={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    }}
    >
      <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.5rem' }}>{job.title}</h3>
      <p style={{ margin: '5px 0', color: '#666', fontWeight: 'bold' }}><strong>Company:</strong> {job.company}</p>
      <p style={{ margin: '5px 0', color: '#666' }}><strong>Location:</strong> {job.location}</p>
      <p style={{ margin: '5px 0', color: '#28a745', fontWeight: 'bold' }}><strong>Salary:</strong> {job.salary}</p>
      <p style={{ margin: '15px 0', color: '#555', lineHeight: '1.5' }}>{job.description}</p>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;