// import { ReactNode } from 'react';
import Link from 'next/link'

const PoolCard = () => (

  <div className="p-8 hover:shadow-xl hover:bg-opacity-20 rounded-md hover:bg-gray-800 bg-dark2 border-bg-cyan h-full hover:-translate-y-2 transform transition relative overflow-hidden card" style={{ border: "1px solid gray" }}>

    <div className="absolute z-0 min-w-full transform scale-150 -bottom-16 -right-1/4 opacity-30">
      <img src="/assets/images/tpad-logo-img.svg" className="opacity-5 w-full h-full" alt="Bg" />
    </div>
    <Link href="/app/pools/details">
      <a className="absolute top-0 left-0 h-full w-full z-10"></a>
    </Link>
    <div className="space-y-6 flex flex-col justify-between card-body">
      <div className="space-y-3">
        <div className="flex justify-between gap-2"><div>
          <h2 className="text-2xl font-semibold font-sans">Avania</h2>
          <p className="text-secondary leading-none text-sm">$NOVA</p></div>
          <div className="relative">
            <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-mainDark flex items-center justify-center">
              <img className="w-full" src="/assets/images/avania.jpg" alt="Avania" />
              <div className="absolute bg-dark1 rounded-full -bottom-1 -right-1">
                <div className="rounded-full h-7 w-7 flex items-center justify-center bg-opacity-70 bg-acc">
                  <img src="/assets/images/bnb.svg" alt="BNB Chain" className="h-full w-full" />
                </div>
              </div>
              <div className="absolute top-[-5px] right-0">
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pb-3">
          <ul className="flex flex-wrap items-center text-main space-x-6 z-20 relative text-2xl">
            <li>
              <a href="https://t.me/drunkrobots_chat" target="_blank" className="text-main" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                  </path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/drunkrobots" target="_blank" className="text-main" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z">
                  </path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/drunk_robots" target="_blank" className="text-main" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
              </path>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://drunk-robots.medium.com/" target="_blank" className="text-main" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.drunk-robots.com/" target="_blank" className="text-main" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
                </path>
                </svg>
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="flex items-center space-x-3 flex-wrap">
          <span className="bg-gray-400 bg-opacity-20 text-gray-300 py-1 px-2 font-normal tracking-wider h-6 leading-4 uppercase badge badge-pill badge-secondary">Upcoming</span>
        </div>
        <div className="overflow-hidden h-[45px] poolCardDescription" >
          <div className="text-sm opacity-70">
            <p>
              Avania is a game where you can earn a token by contributing your talent to the game such as playing the game, awaken nexus, building community, supporting other players, supporting the game, etc. Avania will be a place to build the greatest GameFi community through well-designed gameplay. The key factor that makes Avania different from other traditional online games is the “Play to Earn” concept that takes advantage of blockchain technology. Everyone in the world can enjoy the game while also experiencing a new way of making some income.
            </p>
          </div>
        </div> */}
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>Total Raise</span>
          <span className="text-[1.5rem] -my-[1rem] text-main font-Rubik">$50 000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Starts</span>
          <span className="text-main">2 days</span>
        </div>
        <div className="flex items-center justify-between"><span>Price</span>
          <div className="text-main inline">
            <span>1 METAL = 0.01 BUSD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { PoolCard };