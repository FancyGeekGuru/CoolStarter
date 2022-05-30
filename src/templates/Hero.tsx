import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a className='text-white' href="#about">About</a>
        </li>
        <li>
          <a className='text-white' href="#roadmap">RoadMap</a>
        </li>
        <li>
          <Link href="/docs">
            <a className='text-white'>Docs</a>
          </Link>
        </li>
        <li>
          <Link href="/app/pools">
            <button className="enterAppBtn text-white"> Enter App </button>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-10">
      <div className="flex flex-wrap">

        <div className="w-full sm:w-1/2">
          <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            <span className='text-white'>{'First Decentralized\n'}</span>
            <span className='text-cyan'>{' Multi-Chain'}</span>
            <span className='text-white'>{' IDO Launchpad\n'}</span>
          </h1>
          <div className="text-2xl mt-4 mb-16">{"Empower the most innovative crypto projects across all blockchains, using CoolStarter Empower the most innovative crypto projects across all blockchains, using CoolStarter Empower the most innovative crypto projects across all blockchains, using CoolStarter"}</div>

          <Button> Litepaper </Button>
        </div>

        <div className='w-full sm:w-1/2 p-6'>
          <img src="assets/images/feature3.svg"></img>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
