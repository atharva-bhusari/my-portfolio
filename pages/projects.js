import Layout from '../components/Layout';

const Projects = () => {
  const projects = [
    {
      title: 'Project A',
      description: 'Developed a machine learning model to predict housing prices.',
      link: 'https://github.com/yourusername/project-a',
    },
    // Add more projects as needed
  ];

  return (
    <Layout title="Projects">
      <section className="content-section">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Projects;