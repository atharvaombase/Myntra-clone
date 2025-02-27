const Bagsummary = ({ bagSummary }) => {
  // const bagSummary = {
  //   totalItem: 3,
  //   totalMRP: 12334,
  //   totalDiscount: 999,
  //   totalPayment: 345435,
  // };

  return (
    <main>
      <div className="bag-page">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({bagSummary.totalItem} Items){" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{bagSummary.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{bagSummary.totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{bagSummary.totalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div
            className="css-xjhrni"
            onClick={() => {
              console.log("Order Placed");
              console.log(bagSummary);
            }}
          >
            PLACE ORDER
          </div>
        </button>
      </div>
    </main>
  );
};
export default Bagsummary;
