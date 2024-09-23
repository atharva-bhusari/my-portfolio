
import Head from 'next/head';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaRProject, 
  FaJsSquare, 
  FaJava, 
  FaChartLine, 
  FaChartArea, 
  FaAws,
  FaNode 
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiPandas, 
  SiNumpy, 
  SiScipy, 
  SiTidyverse, 
  SiScikitlearn, 
  SiTensorflow, 
  SiKeras, 
  SiHuggingface, 
  SiLangchain, 
  SiPlotly, 
  SiPowerbi, 
  SiTableau, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiMicrosoftazure, 
  SiGooglecloud,
  SiOracle,
  SiFlask,
  SiDjango,
  SiStreamlit 
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'R', icon: <FaRProject /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C/C++', icon: <SiCplusplus /> }
      ],
    },
    {
      category: 'Data Analysis Libraries',
      technologies: [
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'SciPy', icon: <SiScipy /> },
        { name: 'Tidyverse', icon: <SiTidyverse /> }
      ],
    },
    {
      category: 'Machine Learning Frameworks',
      technologies: [
        { name: 'Scikit-learn', icon: <SiScikitlearn /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'Keras', icon: <SiKeras /> },
        { name: 'Hugging Face', icon: <SiHuggingface /> },
        { name: 'LangChain', icon: <SiLangchain /> }
      ],
    },
    {
      category: 'Data Visualization Tools',
      technologies: [
        { name: 'Matplotlib', icon: <FaChartLine /> },
        { name: 'Seaborn', icon: <FaChartArea /> },
        { name: 'Plotly', icon: <SiPlotly /> },
        { name: 'Power BI', icon: <SiPowerbi /> },
        { name: 'Tableau', icon: <SiTableau /> }
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Oracle SQL', icon: <SiOracle /> }
      ],
    },
    {
      category: 'Cloud Platforms',
      technologies: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Azure', icon: <SiMicrosoftazure /> },
        { name: 'Google Cloud', icon: <SiGooglecloud /> },
      ],
    },
    {
      category: 'Web Development Frameworks',
      technologies: [
        { name: 'Streamlit', icon: <SiStreamlit /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Node.js', icon: <FaNode /> },
      ],
    },
    // Add more categories and technologies as needed
  ];

  return (
    <>
      <Head>
        <title>Skills - Your Name</title>
        <meta
          name="description"
          content="Skills of Your Name, Data Scientist"
        />
      </Head>
      <section className="content-section">
        {/* <h1>Skills</h1> */}
        <div className={styles.tableContainer}>
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <ul className={styles.technologyList}>
                {category.technologies.map((tech, idx) => (
                  <li key={idx} className={styles.technologyItem}>
                    <span className={styles.icon}>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;