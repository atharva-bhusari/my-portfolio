// pages/publications.js

import Layout from '../components/Layout';

const Publications = () => {
  const publications = [
    {
      title: 'Paper A',
      journal: 'Journal of Data Science',
      year: 2021,
      link: 'https://doi.org/yourdoi',
    },
    // Add more publications as needed
  ];

  return (
    <Layout title="Publications">
      <section>
        <h1>Publications</h1>
        {publications.map((pub, index) => (
          <div key={index}>
            <h2>{pub.title}</h2>
            <p>
              {pub.journal}, {pub.year}
            </p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              Read Publication
            </a>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Publications;
