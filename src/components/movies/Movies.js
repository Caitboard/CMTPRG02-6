import React, {Component} from 'react';
import Movie from './Movie';
import axios from "axios";

class Movies extends Component {

    state = {
        movies: [],
    };

    refreshPage = async () => {
        const res =  await axios.get('https://movieapi2018.herokuapp.com/api/movies');
        this.setState({movies: res.data.items});
    };

    async componentDidMount() {
        const res = await axios.get('https://movieapi2018.herokuapp.com/api/movies');
        this.setState({movies: res.data.items});
    }

    render() {
        const movies = this.state.movies;
        return (
            <React.Fragment>
                <h3 className="display-4 mb-2 movieTitle" style={{textAlign: 'left'}}>
                    <span style={{color: 'white'}}>Movies</span>
                </h3>
                {movies.map(movie => (
                    <Movie key={movie._id} movie={movie} refreshPage = {this.refreshPage}/>
                ))}
            </React.Fragment>
        )
    }
}


export default Movies;