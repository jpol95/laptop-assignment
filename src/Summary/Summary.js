import React from "react";
import SummaryItem from "../SummaryItem/SummaryItem";
import "../App.css";
import "./Summary.css";
import SummaryTotal from "../SummaryTotal/SummaryTotal";

class Summary extends React.Component {
  summary = () =>
    Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <SummaryItem
          category={feature}
          key={featureHash}
          selectedName={selectedOption.name}
          selectedCost={selectedOption.cost}
        />
      );
    });

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.summary()}
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default Summary;
