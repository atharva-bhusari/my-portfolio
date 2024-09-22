import Head from 'next/head';

const Contact = () => (
  <>
    <Head>
      <title>Contact - Your Name</title>
      <meta name="description" content="Contact information for Your Name" />
    </Head>
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
  </>
);

export default Contact;