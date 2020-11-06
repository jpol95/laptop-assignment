import React from 'react'
import ReactDOM from 'react-dom'
import '../App.css'
import './SummaryItem.css'
import USCurrencyFormat from '../Currency'



class SummaryItem extends React.Component{
    render(){
        let {category, selectedName, selectedCost} = this.props
          
return <div className="summary__option" >
            <div className="summary__option__label">{category} </div>
            <div className="summary__option__value">{selectedName}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedCost)}
            </div>
          </div>
    }
}

export default SummaryItem