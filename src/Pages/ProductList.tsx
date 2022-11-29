import Fragrances from "../Comppnents/Fragrances";
import Groceries from "../Comppnents/Groceries";
import HomeDecore from "../Comppnents/HomeDecore";
import Laptops from "../Comppnents/Laptops";
import Skincare from "../Comppnents/Skincare";
import Smartphones from "../Comppnents/Smartphones";

const ProductList = () => {
  return (
    <>
      <div className="">
        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200">
            Smartphone
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Smartphones />
          </div>
        </div>

        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200 mt-5">
            Laptops
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Laptops />
          </div>
        </div>

        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200 mt-5">
            Fragrances
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Fragrances />
          </div>
        </div>

        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200 mt-5">
          Skincare
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Skincare />
          </div>
        </div>

        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200 mt-5">
          Groceries
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Groceries />
          </div>
        </div>

        <div>
          <div className="text-3xl font-mono font-bold tracking-wide text-center underline align-bottom bg-slate-200 mt-5">
          HomeDecore
          </div>
          <div className="grid grid-cols-3 gap-4">
            <HomeDecore />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
