import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import { fetchDojos } from '../../lib/dojos';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const dojos = await fetchDojos();
  const findDojosById = dojos.find((dojo) => {
    return dojo.id.toString() === params.id
  });

  return {
    props: {
      dojo: findDojosById ? findDojosById : {},
    },
  };
}

export async function getStaticPaths() {
  const dojos = await fetchDojos();
  const paths = dojos.map((dojo) => {
    return {
      params: {
        id: dojo.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false // false or 'blocking'
  }
}

const Dojo = (props) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>
  } 
  
  const { location, name, neighborhood, imgUrl} = props.dojo;

  return (
    <>
     <Link href="/">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-20 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </Link>
    <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl capitalize tracking-tight font-Libre-Bodoni text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{name}</span>{' '}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {location.formatted_address}
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Neighborhood: {location.neighborhood}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            src='https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2386&q=80'
            alt="image"
            width={'700'}
            height={'700px'}
          />
        </div>
      </main>
    </>
  );
};

export default Dojo;

