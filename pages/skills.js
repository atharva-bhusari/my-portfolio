import Layout from '../components/Layout';

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
    <Layout title="Skills">
      <section>
        <h1>Skills</h1>
        <ul>
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Skills;