import React from 'react';

const jobs = [
  { id: 1, title: 'Front-end Developer', company: 'Acme Inc.', location: 'Remote' },
  { id: 2, title: 'Back-end Developer', company: 'Beta Corp.', location: 'Remote' },
  { id: 3, title: 'Full-stack Developer', company: 'Gamma LLC', location: 'Remote' },
  { id: 4, title: 'UI/UX Designer', company: 'Delta Co.', location: 'Remote' },
  { id: 5, title: 'Project Manager', company: 'Epsilon LLC', location: 'Remote' },
  { id: 6, title: 'Data Analyst', company: 'Zeta Inc.', location: 'Remote' },
  { id: 7, title: 'Marketing Specialist', company: 'Eta Corp.', location: 'Remote' },
  { id: 8, title: 'Content Writer', company: 'Theta LLC', location: 'Remote' },
];

const JobGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p className="text-gray-500">{job.company}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">{job.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobGrid;
