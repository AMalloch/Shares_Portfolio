import React from "react";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import StockMarketSearch from "../Components/StockMarketSearch";
import NewPortfolioStock from "../Components/NewPortfolioStock";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePortfolioSelected = this.handlePortfolioSelected.bind(this);
    this.handleStockSelected = this.handleStockSelected.bind(this);
    this.handleSectorSelected = this.handleSectorSelected.bind(this);
    this.handleSelectedSector = this.handleSelectedSector.bind(this);
    this.updateWallet = this.updateWallet.bind(this);
    this.portfolioRunner = this.portfolioRunner.bind(this);
    this.state = {
      stock: [],
      portfolio: [],
      sectorStock: [],
      currentShare: null,
      currentStock: null,
      sector: null,
      wallet: "10000000"
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/stock_market_search")
      .then(response => response.json())
      .then(json => this.setState({ stock: json }));

    fetch("http://localhost:3001/portfolio")
      .then(response => response.json())
      .then(json => this.setState({ portfolio: json }));
  }

  portfolioRunner() {
    fetch("http://localhost:3001/portfolio")
      .then(response => response.json())
      .then(json => this.setState({ portfolio: json }));
  }

  handlePortfolioSelected(index) {
    const selectedShare = this.state.portfolio[index];
    this.setState({ currentShare: selectedShare });
  }

  handleSectorSelected(sector) {
    this.setState({ currentSector: sector });
  }

  handleStockSelected(index) {
    const selectedStock = this.state.stock[index];
    this.setState({ currentStock: selectedStock });
  }

  handleSelectedSector(index) {
    const newArray = [];
    this.state.stock.map(item => {
      if (item.sector === index) {
        newArray.push(item);
      }
    });
    this.setState({ sectorStock: newArray });
  }

  updateWallet(balance) {
    this.setState({ wallet: balance });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route
            path="/portfolio"
            render={() => (
              <Portfolio
                portfolio={this.state.portfolio}
                onCurrentShare={this.handlePortfolioSelected}
                selectedShare={this.state.currentShare}
                wallet={this.state.wallet}
                handleWallet={this.updateWallet}
                portfolioRunner={this.portfolioRunner}
                stock={this.state.stock}
              />
            )}
          />
          <Route exact path="/" component={Home} stock={this.state.stock} />
          <Route
            path="/stock_market_search"
            render={() => (
              <StockMarketSearch
                stock={this.state.stock}
                onStockSelected={this.handleStockSelected}
                newStock={this.state.currentStock}
                currentStock={this.state.currentStock}
                onSectorSelected={this.handleSectorSelected}
                currentSector={this.state.sector}
                wallet={this.state.wallet}
                handleWallet={this.updateWallet}
                sectorStock={this.state.sectorStock}
                portfolioRunner={this.portfolioRunner}
                onSelectedBySector={this.handleSelectedSector}
              />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default MainContainer;
