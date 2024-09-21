import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title = 'My Portfolio' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Data Scientist Portfolio" />
      <meta name="keywords" content="Data Science, Machine Learning, Portfolio" />
      <meta name="author" content="Atharva Harshavardhan Bhusari" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;