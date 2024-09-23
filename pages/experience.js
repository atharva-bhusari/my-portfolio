import Head from 'next/head';
import styles from '../styles/Experience.module.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Entertainment Technologists',
      role: 'Data Science Intern',
      period: 'Aug 2024 - Present',
      description:
        'Collaborated with cross-functional teams to develop predictive models for customer segmentation, improving marketing efficiency by 20%.',
      logo: '/logos/entertainment_technologists_inc_logo.jpeg', // Place the logo in the public/logos directory
    },
    {
      company:
        'Rutgers Institute for Health, Health Care Policy and Aging Research',
      role: 'Data Science Research Intern',
      period: 'June 2023 - Oct 2023',
      description:
        'Analyzed healthcare datasets to identify trends in patient outcomes, contributing to a publication in a peer-reviewed journal.',
      logo: '/logos/rutgersifh_logo.jpeg', // Place the logo in the public/logos directory
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Programmer Analyst',
      period: 'Nov 2020 - Aug 2022',
      description:
        'Developed software solutions for client projects, optimizing system performance by 15% and reducing operational costs.',
      logo: '/logos/cognizant_logo.jpeg', // Place the logo in the public/logos directory
    },
    // Add more experiences as needed
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Experience - Your Name</title>
        <meta
          name="description"
          content="Professional experience of Your Name"
        />
      </Head>
      <section className="content-section">
        <h1>Experience</h1>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              className={styles.timelineItem}
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent}>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={styles.companyLogo}
                  />
                )}
                <h2>
                  {exp.role} at {exp.company}
                </h2>
                <p className={styles.period}>{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;