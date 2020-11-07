import React from "react";
import "./FeatureSection.css";
import features from "../store";
import Feature from "../Feature/Feature";

class FeatureSection extends React.Component {
  featuresList = () =>
    Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <Feature
          featureHash={featureHash}
          key={idx}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          name={feature}
          options={features[feature]}
        />
      );
    });

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.featuresList()}
      </form>
    );
  }
}

export default FeatureSection;
