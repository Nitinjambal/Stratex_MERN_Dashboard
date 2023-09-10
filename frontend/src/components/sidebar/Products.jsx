import { products } from "../../data/products";

export default function Products() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-gray-400 text-center border-b border-dotted border--500 border-2">
          All Products
        </h2>

        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative lg:h-120"  >
              <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="object-center lg:h-80 sm:h-200 lg:w-full" 
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white-500">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                
                <p className="text-sm font-medium text-gray-300 flex">
                  {  product.price}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
