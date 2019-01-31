import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from "react-router-dom";

class Movie extends Component {
    state = {
        showMovieInfo: false,
    };

    onDeleteClick = async (_id) => {
        await axios.delete(`https://movieapi2018.herokuapp.com/api/movies/${_id}`);
        this.props.refreshPage();
    };

    render() {
        const {_id, title, genre, year} = this.props.movie;
        const {showMovieInfo} = this.state;

        return (
            <div className="card card-body mb-3">
                <h5 onClick={() => this.setState({showMovieInfo: !this.state.showMovieInfo})} style={{cursor: 'pointer', float: 'right', color: '#424242'}}>{title}
                <input onClick={() => this.onDeleteClick(_id)} style={{float: 'right', color: 'grey'}} type="submit" value="Delete Movie" className="btn btn-outline-dark"/>
                    <Link to={`/movies/${_id}`}> <input className="btn btn-outline-dark" value="Edit" style={{float: 'right', color: 'grey'}}/></Link>
                </h5>
                {showMovieInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item" style={{backgroundColor: '#f1f1f1'}}>Genre: {genre}</li>
                        <li className="list-group-item" style={{backgroundColor: '#f1f1f1'}}>Year: {year}</li>
                    </ul>
                ) : null}
            </div>
        )
    }
}

Movie
    .propTypes = {
    movie: PropTypes.object.isRequired
};

export default Movie;
