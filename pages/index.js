import Image from 'next/image';
import Layout from '../components/Layout';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => (
  <Layout title="Home">
    <section className="home-section">
      <div className="profile-container">
        <Image
          src="/my-photo.jpg"
          alt="Your Name"
          width={200}
          height={200}
          unoptimized
          className="profile-photo"
        />
        <h1>Hi, I&apos;m Atharva Harshavardhan Bhusari</h1>
        <p>
          I&apos;m a Data Scientist specializing in machine learning and data analysis.
          I have a passion for turning data into actionable insights and developing
          predictive models that drive business value.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

        </div>
      </div>
    </section>
  </Layout>
);

export default Home;