const InfoCard = () => (

  <div className="pl-8 pr-8 p-4 flex-col flex bg-gray-900 card rounded-md text-white" style={{ border: "1px solid gray" }}>
    <div>
      <h1 className="pb-4 text-lg">POOL INFORMATION</h1>
      <hr aria-orientation="horizontal" className="pt-4"></hr>
    </div>
    <div>
      <span className="pb-4">Tier round opens</span>
      <span className="pb-4 float-right">TBD</span>
    </div>
    <div>
      <span className="pb-4">FCFS round opens</span>
      <span className="pb-4 float-right">TBD</span>
    </div>
    <div>
      <span className="pb-4">Airdrop date</span>
      <span className="pb-4 float-right">TBD</span>
    </div>
    <div>
      <span className="pb-4">Total raise</span>
      <span className="pb-4 float-right">100,000 BUSD</span>
    </div>
    <div className="grid grid-cols-2">
      <span className="pb-4">Vesting</span>
      <span className="float-right">10% at TGE followed by monthly unlocks of 10%</span>
    </div>
  </div>
);

export { InfoCard };