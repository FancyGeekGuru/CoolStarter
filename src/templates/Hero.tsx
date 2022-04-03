import Link from 'next/link';

import { Background } from '../background/Background';
// import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
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
					<Link href="/app">
						<button className="enterAppBtn text-white"> Enter App </button>
					</Link>
				</li>
			</NavbarTwoColumns>
		</Section>

		<Section yPadding="pt-20 pb-32 flex">
			<HeroOneButton
				title={
					<>
						<span className='text-white'>{'First Decentralized\n'}</span>
						<span className='text-cyan'>{' Multi-Chain'}</span>
						<span className='text-white'>{' IDO Launchpad\n'}</span>
					</>
				}
				description="Empower the most innovative crypto projects across all blockchains, using CoolStarter"				
			/>
			<img className="ml-10" src="assets/images/Blockchain-Enabled-Video-Streaming.png" style={{width: "40%"}}></img>
		</Section>
	</Background>
);

export { Hero };
