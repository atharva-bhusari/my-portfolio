import Head from 'next/head';

const Skills = () => {
  const skillsList = [
    'Python',
    'R',
    'Machine Learning',
    'Data Visualization',
    'SQL',
    'Statistics',
    // Add more skills as needed
  ];

  return (
    <>
      <Head>
        <title>Skills - Atharva Harshavardhan Bhusari</title>
        <meta name="description" content="Skills of Your Name, Data Scientist" />
      </Head>
      <section className="content-section">
        <h1>Skills</h1>
        <ul>
          {skillsList.map((skill, index) => (
            <li key={index}>• {skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;