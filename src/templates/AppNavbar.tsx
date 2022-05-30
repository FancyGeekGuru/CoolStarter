import Link from 'next/link';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const AppNavBar = () => (
  <Background color="">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <Link href="/app/pools">
          <li>
            <a className='text-white hover:text-cyan' href="#about">Pools</a>
          </li>
        </Link>
        <Link href="/app/account">
          <li>
            <a className='text-white hover:text-cyan' href="#roadmap">Account</a>
          </li>
        </Link>
        <li>
          <button className="enterAppBtn text-white">Connect Wallet </button>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { AppNavBar };
