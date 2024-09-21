import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title = 'My Portfolio' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;