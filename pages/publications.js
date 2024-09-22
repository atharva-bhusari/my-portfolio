import Head from 'next/head';

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
    <>
      <Head>
        <title>Publications - Your Name</title>
        <meta name="description" content="Publications by Your Name" />
      </Head>
      <section className="content-section">
        <h1>Publications</h1>
        {publications.map((pub, index) => (
          <div key={index}>
            <h2>{pub.title}</h2>
            <p>
              {pub.journal}, {pub.year}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              Read Publication
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Publications;