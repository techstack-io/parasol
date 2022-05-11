/* eslint-disable react/jsx-key */
import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import { fetchDojos } from "../lib/dojos";

// export async function getStaticProps() {
//   const profiles = await getAllBusinessProfiles();
//   const allProfiles = JSON.stringify(profiles)

//   return {
//       props: {
//            allProfiles
//       }
//  };
// }

export async function getStaticProps(context) {
  
const dojos = await fetchDojos();
// const allDojos = JSON.stringify(dojos)

  return {
    props: {
      dojos,
    }, 
  };
}

export default function Dojos(props) {
    return(
      <>
      <PageHeading />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {props.dojos.length > 0 &&
            <>
            <h1 className="text-2xl">Meditate in Chicago</h1>
              <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {props.dojos.map((dojo) => {
                  return (
                    <Card
                    key={dojo.id}
                    name={dojo.name}
                    imgUrl={dojo.imgUrl}
                    href={`/dojo/${dojo.id}`}
                  />
                  );
                  })
                }
              </div> 
            </>
            }
        </div>
      </div>
      </>
    // return
    );
}


