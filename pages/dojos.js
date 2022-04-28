import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import Card2 from "../components/Card2";

export default function Dojos() {
  return (
    <>
      <PageHeading />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card
              name="Shambhala Meditation Center"
              imgUrl="/static/shambhala.jpeg"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Meditation Center of Chicago"
              imgUrl="/static/chimed.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Tiny Place To Breath"
              imgUrl="/static/logohorizontal-black.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Trancendental Meditation"
              imgUrl="/static/logo-b.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Shambhala Meditation Center"
              imgUrl="/static/shambhala.jpeg"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Meditation Center of Chicago"
              imgUrl="/static/chimed.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Tiny Place To Breath"
              imgUrl="/static/logohorizontal-black.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
            <Card
              name="Trancendental Meditation"
              imgUrl="/static/logo-b.png"
              href="dojo/shambhala-chicago-meditation-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
