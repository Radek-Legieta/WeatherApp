import './css/Options.css'
import React from 'react';





    const unitsArray = ['Units', 'Metric', 'Imperial']
    const langArray = ['Language', 'English', 'Polish']
    const styleArray = ['Style', 'Day', 'Night']

    const createItemsInMenu = (value, item) => { 

        const newElement = document.createElement('p')
        newElement.innerHTML = value
        item.replaceWith(newElement)
    }


    class OptionsMenu extends React.Component {
        state = {units: '', language: '', style: ''}
            onClickElement = (event) => {
                const value = event.target.innerHTML
                const item = event.target.parentNode.parentNode.children[1]
                
                if (item.innerText === value) {return}
                const menuItemClass = event.target.parentNode.parentNode.className
                createItemsInMenu(value, item)
                
                if (menuItemClass === unitsArray[0]) {this.setState({units: value})}
                if (menuItemClass === langArray[0]) {this.setState({language: value})}
                if (menuItemClass === styleArray[0]) {this.setState({style: value})}
                
            }


            componentDidUpdate(prevProps, prevState) {
                if (prevState.units !== this.state.units) {
                    this.props.onClick(this.state.units, 'units')
                }
                if (prevState.language !== this.state.language) {
                    this.props.onClick(this.state.language, 'lang')
                }
                if (prevState.style !== this.state.style) {
                    this.props.onClick(this.state.style, 'style')
                }
               
            }


        render() {
            return (
                <div className='container-menu'>
                    <ul className='main-menu'>
                        <li className = {unitsArray[0]}> 
                            <p>{unitsArray[0]}: </p> <p>{unitsArray[1]}</p>
                            <ul>
                                <li onClick = {this.onClickElement}>{unitsArray[1]}</li>
                                <li onClick = {this.onClickElement}>{unitsArray[2]}</li>
                            </ul>
                        </li>
                        <li className = {langArray[0]}> 
                            <p>{langArray[0]}: </p> <p>{langArray[1]}</p>
                            <ul>
                                <li onClick = {this.onClickElement}>{langArray[1]}</li>
                                <li onClick = {this.onClickElement}>{langArray[2]}</li>
                            </ul>
                        </li>
                        <li className = {styleArray[0]}> 
                            <p>{styleArray[0]}: </p> <p>{styleArray[1]}</p>
                            <ul>
                                <li onClick = {this.onClickElement}>{styleArray[1]}</li>
                                <li onClick = {this.onClickElement}>{styleArray[2]}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
            )
        }
        
    }
    


export default OptionsMenu