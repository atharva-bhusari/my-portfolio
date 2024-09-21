import Layout from '../components/Layout';
// import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => (
  <Layout title="Contact">
    <section className="content-section">
      <h1>Contact Me</h1>
      <p>
        Email:{' '}
        <a href="mailto:atharvabhusari99@gmail.com">atharvabhusari99@gmail.com</a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/atharva-bhusari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/atharva-bhusari
        </a>
      </p>
      {/* Add more contact methods if needed */}
      <p>
        Mobile No:{' '}
          +1 (848) 391-5780
      </p>
      <p>
        Github:{' '}
        <a
            href="https://github.com/atharva-bhusari"
            target="_blank"
            rel="noopener noreferrer"
          >
          github.com/atharva-bhusari
        </a>
      </p>
    </section>
  </Layout>
);

export default Contact;