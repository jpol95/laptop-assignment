import React from 'react'
import ReactDOM from 'react-dom'
import SummaryItem from '../SummaryItem/SummaryItem'
import '../App.css'
import './Summary.css'

class Summary extends React.Component{

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
     summary = () => Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
   return <SummaryItem category={feature} key={featureHash} selectedName={selectedOption.name} selectedCost={selectedOption.cost}/>
    
     })
  
      total = () => Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );

render(){
return <section className="main__summary">
            <h2>Your cart</h2>
            {this.summary()}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.USCurrencyFormat.format(this.total())}
              </div>
            </div>
          </section>
}
}

export default Summary