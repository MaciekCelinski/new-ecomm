import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/global.css";
import "../../styles/SwiperCustomStyles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductCarouselReact = ({
  category,
  color = "",
  sideText = false,
}: {
  category: string;
  color?: string;
  sideText?: boolean;
}) => {
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  if (products?.products?.length > 0) {
    return (
      <div className="mx-auto max-w-full flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div
          className={`space-y-4 rounded-lg border border-gray-200 ${
            color ? "bg-" + color : "bg-white"
          } p-4 shadow-sm sm:px-6 sm:pb-2 ms:pt-4`}
        >
          <div className="flex justify-between my-8">
            <p className="text-3xl">{category}</p>
            <a href={`/listing/${category}`} className="underline">
              Zobacz więcej
            </a>
          </div>
          <div className={`${sideText ? "grid grid-cols-[35%_65%]" : "grid"}`}>
            {sideText && (
              <div className="p-4">
                <h4 className="text-2xl">Lorem Ipsum</h4>
                <p className="pt-4">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>
            )}
            <Swiper
              slidesPerView={sideText ? 3 : 5}
              spaceBetween={30}
              // pagination={true}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full h-full"
            >
              {products?.products &&
                products?.products.map((product: any, index: any) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center text-center"
                  >
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCarouselReact;
