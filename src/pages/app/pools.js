import { PoolCard } from '../../card/card';
import { Section } from '../../layout/Section';
import { AppNavBar } from '../../templates/AppNavbar';
export default function FirstPost() {
  return (
    <>
      <AppNavBar />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h1 style={{ fontSize: "38px", fontWeight: "600", color: "white" }}>CoolStarter <span className="text-pink-600">Pools</span></h1>
          </div>
          <input class="inputSearch"></input>
        </div>
      </Section>
      <Section title="Active">
        <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white'>
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
        </div>
      </Section>

      <Section title="Upcoming">
        <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white'>
          <PoolCard />
          <PoolCard />
        </div>
      </Section>

      <Section title="Ended">
        <div className='gap-5 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white'>
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
          <PoolCard />
        </div>
      </Section>
    </>
  )
}