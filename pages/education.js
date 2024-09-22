import Head from 'next/head';

const Education = () => {
  const educationList = [
    {
      institution: 'University X',
      degree: 'M.Sc. in Data Science',
      period: '2018 - 2020',
      description: 'Focused on machine learning and big data technologies.',
    },
    // Add more education entries as needed
  ];

  return (
    <>
      <Head>
        <title>Education - Your Name</title>
        <meta name="description" content="Educational background of Your Name" />
      </Head>
      <section className="content-section">
        <h1>Education</h1>
        {educationList.map((edu, index) => (
          <div className="education-entry" key={index}>
            <h2>{edu.degree}</h2>
            <p>{edu.institution}</p>
            <p>{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Education;