import React from "react";
import SearchInput from "./Searchinput";

class App extends React.Component{
    constructor(props){
        super(this.props)

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }


    onSearchSubmit(entery){

    }


    render(){
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App; 