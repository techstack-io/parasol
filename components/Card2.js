import Link from "next/link";
import Image from "next/image";

const Card2 = (props) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {/* card-1 */}
        <Link href={props.href}>
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://lh3.googleusercontent.com/uooGQXe0KrSoJ2162phA6aBpYKi1TXgAMb5vtLl7eu7TnDAAlOo6gslDN8DJlw975PpjPP72FW06YzC6SgCuAa8Q0gQmZvVinR1DKgpD5A2CAFobrqKNo_1Z_jmPIg2yQzCMRDy3hQ=w2400"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
            <Link href={props.href}>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>
          </a>
          </Link>
          {/* card-2 */}
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://lh3.googleusercontent.com/_L7-AQC1kZZa8d3S5rc7q17hgVYc8hXn8MMaRO3ylaEYC3j8nOEHhO2Fg7nuVp-KTagppu-poZ0rWcA8EuBRy0IdbxFlSyTMgwuEvAnabEowpYmK3SXPEG3AeQw5cnwf74huK_6ZLA=s225-p-k"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>

          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>

          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Machined Mechanical Pencil
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
