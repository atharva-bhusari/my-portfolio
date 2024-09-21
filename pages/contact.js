import Layout from '../components/Layout';

const Contact = () => (
  <Layout title="Contact">
    <section className="content-section">
      <h1>Contact Me</h1>
      <p>
        Email:{' '}
        <a href="mailto:youremail@example.com">youremail@example.com</a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/yourprofile
        </a>
      </p>
      {/* Add more contact methods if needed */}
    </section>
  </Layout>
);

export default Contact;