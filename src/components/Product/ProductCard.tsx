import PageLoader from "../PageLoader";
import AddToFavoritesBtn from "../AddToFavoritesBtn";
import AddToCartBtn from "../AddToCartBtn";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="relative flex w-full justify-self-center max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl">
        <a href={`/product/${product.id}`}>
          <div className="absolute top-[45%] left-[45%]">
            <PageLoader />
          </div>
          <img
            className="relative z-10 text-white"
            src={product.images[0]}
            alt="product image"
          />
        </a>
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white z-20">
          {product.discountPercentage}% OFF
        </span>
        <span className="absolute top-0 right-0 m-2 px-2 text-center text-sm font-medium z-20">
          <AddToFavoritesBtn product={product} />
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href={`/product/${product.id}`}>
          <h5 className="text-lg tracking-tight truncate text-slate-900">
            {product.title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 mr-1">
              $
              {Math.floor(
                (product.price -
                  (product.price * product.discountPercentage) / 100) *
                  100
              ) / 100}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${product.price}
            </span>
          </p>
        </div>

        <AddToCartBtn product={product}>
          <div
            role="status"
            className="flex justify-center items-center animate-pulse"
            slot="fallback"
          >
            <div className="mt-2 mb-5 w-full h-10 bg-gray-200 rounded-md"></div>
          </div>
        </AddToCartBtn>
      </div>
    </div>
  );
};

export default ProductCard;
