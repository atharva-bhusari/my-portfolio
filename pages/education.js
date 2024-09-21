import Layout from '../components/Layout';

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
    <Layout title="Education">
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
    </Layout>
  );
};

export default Education;