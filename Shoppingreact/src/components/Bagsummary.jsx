function Bagsummary({boughtitems}) {

  let CONVENIENCE_FEES=0;

  if(boughtitems.length>0){
    CONVENIENCE_FEES=99;
  }
 
  let totalItem = boughtitems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  boughtitems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    return ( 
        <div className="bag-summary">
        <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
         <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
      </div>
     );
}

export default Bagsummary;