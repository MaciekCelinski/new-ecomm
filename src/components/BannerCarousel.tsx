import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const ImageCarousel = () => {
  let [current, setCurrent] = useState(0);

  const slides = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?t=st=1739443839~exp=1739447439~hmac=b8a1078ad68dcf30a1c065abebda7e3226ffc4c31d5aa7cba461f2d7c6449b4d&w=1800",
      pageUrl: "/",
      message: "Banner 1",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-132679.jpg?t=st=1739447522~exp=1739451122~hmac=f09c1de5415c4c45c5d2e9a9b4a09fff81bb275cea4b699ffd6546b8cd571ac8&w=1800",
      pageUrl: "/",
      message: "Banner 2",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/lovely-romantic-cute-redhead-woman-prepared-gift-valentines-day-wrapped-present-pink-pape_1258-132697.jpg?t=st=1739444038~exp=1739447638~hmac=9f2870fadd95fa403e3f385794dc8abfd24d5c4bbd88692a78ca50087fa06129&w=1800",
      pageUrl: "/",
      message: "Banner 3",
    },
  ];

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative items">
      <div className="flex transition ease-out duration-400 ">
        <img className="flex w-full min-h-80" src={slides[current].imageUrl} />
      </div>

      <div className="hidden md:flex absolute top-0 h-full w-full justify-between items-center text-white px-5 text-3xl">
        <button onClick={previousSlide}>
          <FaAngleLeft className="cursor-pointer" />
        </button>
        <button onClick={nextSlide}>
          <FaAngleRight className="cursor-pointer" />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-8 h-2 cursor-pointer  ${
                i == current ? "bg-gray-100" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
