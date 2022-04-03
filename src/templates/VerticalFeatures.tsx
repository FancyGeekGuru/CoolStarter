import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id ="about"
    title="Launch your project"
    description="The initial blockchains supported will be Ethereum & Binance Smart Chain.
    The second release will allow supporting Cardano, Solana, and Polkadot via the Moonbeam Parachain.    
    The final planned release will include Cosmos & Tron unless the community, through our governance system, has decided otherwise and will depend on the development of the ecosystems at the moment."
  >
    <VerticalFeatureRow
      title="MEET THE COOL TEAM"
      description="
      Supported by industry-leading decision makers
      Ideas that launch on CoolStarter are not only highly-vetted by our team of expert analysts, but also by industry-leading expertise."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
