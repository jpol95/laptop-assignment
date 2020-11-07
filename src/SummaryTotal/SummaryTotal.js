import React from 'react'
import USCurrencyFormat from '../Currency'
import './SummaryTotal.css'


class SummaryTotals extends React.Component{
    total = () => Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );
    render(){
       return <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(this.total())}
              </div>
            </div>
    }
}

export default SummaryTotals