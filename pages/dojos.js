/* eslint-disable react/jsx-key */
import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import dojos from '../data/dojos.json'

export async function getStaticProps(context) {
  return {
    props: {
      dojos,
    }, 
  };
}


export default function Dojos(props) {
  console.log('props', props);
    return(
      <>
      <PageHeading />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {dojos.map((dojo) => {
            return (
              <Card
              key={dojo.id}
              name={dojo.name}
              imgUrl={dojo.imgUrl}
              href={`/dojo/${dojo.id}`}
            />
            );
          })}
         
          </div>
        </div>
      </div>
      </>
    );
}


