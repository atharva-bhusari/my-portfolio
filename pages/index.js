import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from '../public/my-photo.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => (
  <Layout title="Home">
    <section className="home-section no-box">
      <div className="profile-container">
        <Image
          src="/my-photo.jpg"
          alt="Your Name"
          width={300}
          height={300}
          unoptimized
          className="profile-photo"
        />
        <h1>Hi, I'm Atharva Harshavardhan Bhusari</h1>
        <p>
          I'm a Data Scientist specializing in machine learning and data analysis.
          I have a passion for turning data into actionable insights and developing
          predictive models that drive business value.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/atharva-bhusari/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/atharva-bhusari" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          {/* <!-- Add more social links if needed --> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;