/* eslint-disable react/jsx-key */
import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import dojosData from '../data/dojos.json'

export async function getStaticProps(context) {
  
  const sdk = require('api')('@fsq-docs/v1.0#14d4602hl16yojbt');

  sdk['place-search']({Authorization: 'fsq3KYThaPlJVMyHp4+tqwcoxEptNk/qEhv7so/6RPB3q8o='})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  return {
    props: {
      dojos: dojosData,
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


