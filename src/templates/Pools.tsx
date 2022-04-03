import { PoolCard } from '../card/card';
import { Section } from '../layout/Section';

const Pools = () => (
  <Section>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
      <PoolCard />
      <PoolCard />
      <PoolCard />
    </div>

  </Section>
);

export { Pools };
