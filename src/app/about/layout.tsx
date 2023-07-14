import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'About us | Test Next App'
};

const AboutLayout = ({ children }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">About Us Layout</h2>
      <ul>
        <li>
          <Link className="text-xs" href={'/about/contacts'}>
            Contacts
          </Link>
        </li>
      </ul>
      <div className="pt-5">{children}</div>
    </div>
  );
};

export default AboutLayout;
