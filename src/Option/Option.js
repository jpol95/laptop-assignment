import React from 'react'
import ReactDOM from 'react-dom'
import slugify from 'slugify';
import '../App.css'
import './Option.css'
import USCurrencyFormat from '../Currency'

class Option extends React.Component{
  

    render(){
      let {itemHash, category, name, cost, selected} = this.props
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(category)}
              checked={name === selected[category].name}
              onChange={e => this.props.updateFeature(category, {name, cost})}
            />
            <label htmlFor={itemHash} className="feature__label">
              {name} ({USCurrencyFormat.format(cost)})
            </label>
          </div>
        )    
}
    

}

export default Option