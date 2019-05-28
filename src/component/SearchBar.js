import React, { Component } from 'react'


export default class SearchBar extends Component {

    state ={term:' '};



    handleChangeTerm =(e)=>{
       this.setState({term:e.target.value});
    }


    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.TermSubmit(this.state.term);
        this.setState({
          term:''
        });
        
    }

  render() {
    return (
          <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
            <div className='field'>
                <label>Video Search</label>
                <input value={this.state.term} onChange={this.handleChangeTerm} type='text'/>
            </div>
            </form>
          </div>
    )
  }
}
