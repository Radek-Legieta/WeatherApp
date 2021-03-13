import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onImputChange = event => {
        this.setState({term: event.target.value})
        
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
        this.setState({term: ''})
    }

    
    
    render() {
        
        
        return (
            <form onSubmit = {this.onSubmit}>
                <label>Search</label>
                <input
                    type='text'
                    value = {this.state.term}
                    onChange = {this.onImputChange}
                    placeholder = 'Search city'
                />
            </form>
        )
        
    }
}

export default SearchBar