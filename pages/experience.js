import Head from 'next/head';

const Experience = () => {
  const experiences = [
    {
      company: 'Company A',
      role: 'Data Scientist',
      period: 'Jan 2020 - Present',
      description: 'Worked on developing predictive models for customer segmentation.',
    },
    // Add more experiences as needed
  ];

  return (
    <>
      <Head>
        <title>Experience - Your Name</title>
        <meta name="description" content="Professional experience of Your Name" />
      </Head>
      <section className="content-section">
        <h1>Experience</h1>
        {experiences.map((exp, index) => (
          <div className="experience-entry" key={index}>
            <h2>
              {exp.role} at {exp.company}
            </h2>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;