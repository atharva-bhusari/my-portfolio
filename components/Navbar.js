import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/skills">Skills</Link>
      </li>
      <li>
        <Link href="/experience">Experience</Link>
      </li>
      <li>
        <Link href="/education">Education</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/publications">Publications</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;