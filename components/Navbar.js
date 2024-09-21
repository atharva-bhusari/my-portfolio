import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/skills' ? 'active' : ''}>
          <Link href="/skills">Skills</Link>
        </li>
        <li className={router.pathname === '/experience' ? 'active' : ''}>
          <Link href="/experience">Experience</Link>
        </li>
        <li className={router.pathname === '/education' ? 'active' : ''}>
          <Link href="/education">Education</Link>
        </li>
        <li className={router.pathname === '/projects' ? 'active' : ''}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={router.pathname === '/publications' ? 'active' : ''}>
          <Link href="/publications">Publications</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;