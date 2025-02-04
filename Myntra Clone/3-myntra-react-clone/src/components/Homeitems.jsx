import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagItemsSlice";
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

const Homeitems = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bagitems);
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!bagitems.find((bagItem) => bagItem.id === item.id) ? (
        <button
          className="btn-add-bag"
          onClick={() => {
            dispatch(bagAction.addInitialBagItems(item));
          }}
        >
          <FaCartPlus className="" />
          Add to Bag
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-danger"
          onClick={() => {
            dispatch(bagAction.removeBagItem(item));
          }}
        >
          <MdRemoveShoppingCart />
          Remove from Bag
        </button>
      )}
    </div>
  );
};

export default Homeitems;
