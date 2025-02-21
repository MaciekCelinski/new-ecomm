import { FaCartShopping } from "react-icons/fa6";
import { CgSpinnerTwo } from "react-icons/cg";
import { useState } from "react";
import { cartProductsCount } from "../stores/NavigationStore";

const AddToCartBtn = (product: any) => {
  const [adding, setAdding] = useState(false);

  const addToCartHandler = () => {
    setAdding(true);
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: product.product.id,
            quantity: 1,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setAdding(false);
        cartProductsCount.set(cartProductsCount.get() + 1);
      });
  };

  return (
    <>
      {adding ? (
        <button
          disabled
          type="button"
          className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white  cursor-progress"
        >
          <CgSpinnerTwo className=" text-xl animate-spin mr-2" /> Dodawanie...
        </button>
      ) : (
        <button
          className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer"
          onClick={addToCartHandler}
        >
          <FaCartShopping className="text-xl mr-4" /> Dodaj do koszyka
        </button>
      )}
    </>
  );
};
export default AddToCartBtn;

// ---
// import { CgSpinnerTwo } from "react-icons/cg";
// import { FaCartShopping } from "react-icons/fa6";

// const { product } = Astro.props;

// const sayHello = () => {
//   console.log("hello");
// };
// ---
// <div>
//   <button
//     disabled
//     type="button"
//     class="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white cursor-progress"
//   >
//     <CgSpinnerTwo className=" text-xl animate-spin mr-2" /> Dodawanie...
//   </button>
//   <button
//     class="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer"
//   >
//     <FaCartShopping className="text-xl mr-4" /> Dodaj do koszyka
//   </button>
//   <button
//     class="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer"
//     id="submit-button"
//     type="button"
//     value={JSON.stringify(product)}>hello</button
//   >
// </div>

// <script>
//   import { FaCartShopping } from "react-icons/fa6";
  
//   const submitBtns = document.querySelectorAll("#submit-button");
//   console.log("submitBtn", submitBtns);
//   submitBtns.forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//       const target = e.target as HTMLTextAreaElement;
//       const prod = JSON.parse(target.value);
//       console.log("prod", prod);
//       btn.innerHTML='<FaCartShopping className="text-xl mr-4" /> Dodaj do koszyka'
//     })
//   );
// </script>
