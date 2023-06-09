import { Link } from "react-router-dom";
import SwiperProduct from "./SwiperProduct";
import {newProducts} from "./../../utils"
let Products = () => {
    
  return (
    <>
      <div className="relative container flex flex-col mx-auto px-2 tablet:px-0">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">New Products</h2>
          <Link to="/product">
            <h4 className="underline text-[#0156FF]">See All Products</h4>
          </Link>
        </div>

        {
          <SwiperProduct
            ItemList={newProducts}
            slidesPerView={2}
            spaceBetween={10}
          />
        }
      </div>
    </>
  );
};
export default Products;

