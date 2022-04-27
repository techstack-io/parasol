import PageHeading from "../components/PageHeading";
import Card from '../components/Card'


export default function Dojos() {
  return (
    <>
      <PageHeading />
      <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
      <Card 
        name='Shambhala Meditation Center' 
        imgUrl='/static/shambhala.jpeg'
        href='dojo/shambhala-chicago-meditation-center' 
      />
      <Card 
        name='Meditation Center of Chicago' 
        imgUrl='/static/chimed.png'
        href='dojo/shambhala-chicago-meditation-center'
      />
      <Card 
        name='Tiny Place To Breath' 
        imgUrl='/static/logohorizontal-black.png'
        href='dojo/shambhala-chicago-meditation-center' 
      />
      <Card 
        name='Trancendental Meditation' 
        imgUrl='/static/logo-b.png'
        href='dojo/shambhala-chicago-meditation-center' 
      />
      
      </div>
      </div>
    </>
  );
}
