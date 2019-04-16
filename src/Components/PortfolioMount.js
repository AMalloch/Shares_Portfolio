import React from "react";
import Portfolio from "./Portfolio";
import _ from "lodash";

const PortfolioMount = props => {
  const options = props.portfolio.map((share, index) => {
    return (
      <option key={index} value={index}>
        {share.companyName}
      </option>
    );
  });

  const handleChange = event => {
    let index = event.target.value;
    props.handleStockSelected(index);
  };

  return (
    <React.Fragment>
      <div className="child-div">
        <select
          onChange={handleChange}
          id="Stock-selector"
          defaultValue="default"
        >
          <option disabled value="default">
            {" "}
            search market
          </option>
          {options}
        </select>
        <Portfolio
          portfolio={props.portfolio}
          wallet={props.wallet}
          handleWallet={props.updateWallet}
          portfolioRunner={props.portfolioRunner}
          stock={props.stock}
        />
        }/>
      </div>
    </React.Fragment>
  );
};

export default PortfolioMount;
