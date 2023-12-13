import React from "react";
import axios from 'axios';
import SearchInput from "./Searchinput";
import ImageList from "./ImageList";

class App extends React.Component {

    constructor (props){
        super(props)

        this.state = { images: [] }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry) {
        const respons = await axios.get(`https://pixabay.com/api/?key=41237333-12d69d41e5a36cdfcdc6723f6&q=${entry}&image_type=photo`)
        console.log(respons.data.hits)

        this.setState({ images: respons.data.hits })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div>
        );
    }

}

export default App;
