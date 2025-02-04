import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";

const Bag = () => {
  const bagitems = useSelector((store) => store.bagitems);
  const bagSummaryDetails = {
    totalItem: bagitems.length,
    totalMRP: bagitems.reduce((total, item) => total + item.original_price, 0),
    totalDiscount: bagitems.reduce((total, item) => {
      const discount = item.original_price - item.current_price;
      return total + discount;
    }, 0),
    totalPayment:
      bagitems.reduce((total, item) => total + item.current_price, 0) + 99,
  };
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagitems.map((item) => (
            <Bagitem key={item.id} item={item}></Bagitem>
          ))}
        </div>
        <div className="bag-summary">
          <Bagsummary bagSummary={bagSummaryDetails}></Bagsummary>
        </div>
      </div>
    </main>
  );
};

export default Bag;
