import Image from 'next/image'

const Banner = (props) => {
    return (
    <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl font-baloo-2 tracking-wide font-extrabold sm:text-5xl md:text-6xl">
                            <span className="text-purple block xl:inline">WHY MEDITATE?</span>{' '}
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <button className="rounded-md shadow" onClick={props.handleOnClick}>
                                <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-desert-storm hover:bg-silver md:py-4 md:text-lg md:px-10"
                                >
                                {props.buttonText}
                                </a>
                            </button>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city" id='city-input'>
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
            src="/static/hero-1-img.svg"
            alt="Main Image"
            width={600}
            height={500}
            />
        </div>
    </div>
    );
};

export default Banner;