import React from "react";
import ReactDOM from "react-dom";
import Option from "../Option/Option";
import "../App.css";
import "./Feature.css";
import slugify from "slugify";

class Feature extends React.Component {
  options = () =>
    this.props.options.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          name={item.name}
          category={this.props.name}
          cost={item.cost}
          itemHash={itemHash}
          key={itemHash}
        />
      );
    });

  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {this.options()}
      </fieldset>
    );
  }
}

export default Feature;
