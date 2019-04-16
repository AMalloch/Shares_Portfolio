import React from "react";
import NewPortfolioStock from "./NewPortfolioStock";
import _ from "lodash";

const MarketStock = props => {
  const options = props.stock.map((stockItem, index) => {
    return (
      <option key={index} value={index}>
        {stockItem.companyName}
      </option>
    );
  });

  const handleChange = event => {
    let index = event.target.value;
    props.onStockSelected(index);
  };

  return (
    <React.Fragment>
      <div className="child-div">
        <h3>Global Stock Market</h3>
        <select
          onChange={handleChange}
          id="Stock-selector"
          defaultValue="default"
        >
          <option disabled value="default">
            SELECT A STOCK
          </option>
          {options}
        </select>
        <NewPortfolioStock
          wallet={props.wallet}
          currentStock={props.currentStock}
          onHandleWallet={props.handleWallet}
          portfolioRunner={props.portfolioRunner}
        />
        <h3 className="breakingNews">
          <i>Breaking News</i>
        </h3>
        <h5>
          <a href="https://www.theguardian.com/business/2018/apr/27/tsb-it-meltdown-banking">
            TSB has been referred to as a Totally Shambolic Bank by angry
            consumer Jonathan Cruickshank.
          </a>
        </h5>
      </div>
    </React.Fragment>
  );
};

export default MarketStock;
