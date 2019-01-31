import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';
import {Link} from "react-router-dom";

class Updatemovie extends Component {

    state = {
        movies: []
    };

    async componentDidMount() {
        const { match: { params } } = this.props;
        const res = await axios.get(`https://movieapi2018.herokuapp.com/api/movies/${params._id}`);
        this.setState({movies: res.data});
    }

    onUpdate = async (e) => {

        e.preventDefault();

        const uploadMovie = {
            title: this.state.title,
            genre: this.state.genre,
            year: this.state.year
        };

        const { match: { params } } = this.props;
        await axios.patch(`https://movieapi2018.herokuapp.com/api/movies/${params._id}`, uploadMovie)
            .then(res => {
            });

        //Clear form after submit
        this.setState({
            title: '',
            genre: '',
            year: '',
        });

        this.props.history.push('/');
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const movies = this.state.movies;
        const {title, genre, year} = this.state;

        return (
                <div className="card" style={{margin: 30, backgroundColor: 'white'}}>
                    <div className="card-header" style={{padding: 30, backgroundColor: 'white'}}>
                        <h2>{movies.title}</h2>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.onUpdate.bind(this)}>
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <input className="form-control" name="title" placeholder={movies.title} onChange={this.onChange}/>
                        {/*<TextInputGroup label="Title" name="title" placeholder={movies.title} value={title} onChange={this.onChange}/>*/}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Genre</h5>
                            <input className="form-control" name="genre" placeholder={movies.genre} onChange={this.onChange}/>
                        {/*<TextInputGroup label="Artist" name="artist" placeholder={movies.genre} value={genre} onChange={this.onChange}/>*/}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Year</h5>
                            <input className="form-control" name="year" placeholder={movies.year} onChange={this.onChange}/>
                        {/*<TextInputGroup label="Year" name="year" placeholder={movies.year} value={year} onChange={this.onChange}/>*/}
                        </div>
                        <input style={{float: 'right'}} type="submit" value="Update movie" className="btn btn-dark"/>
                        <Link to={`/`}><button style={{float: 'right', marginRight: '10px'}} type="button" className="btn btn-danger">Cancel</button></Link>
                    </form>
                </div>
                </div>


            // <div className="card mb-3">
            //     <div className="card-header" style={{backgroundColor: '#DCDCDC'}}>
            //         <h3 style={{ color: '#696969', textAlign: 'center'}}>{movies.title}</h3>
            //     </div>
            //     <div className="card-header">
            //         <form onSubmit={this.onUpdate.bind(this)}>
            //             <TextInputGroup label="Title" name="title" placeholder={movies.title} value={title} onChange={this.onChange}/>
            //             <TextInputGroup label="Artist" name="artist" placeholder={movies.genre} value={genre} onChange={this.onChange}/>
            //             <TextInputGroup label="Year" name="year" placeholder={movies.year} value={year} onChange={this.onChange}/>
            //             <input style={{float: 'right'}} type="submit" value="Update movie" className="btn btn-success"/>
            //             <Link to={`/`}><button style={{float: 'right', marginRight: '10px'}} type="button" className="btn btn-danger">Cancel</button></Link>
            //         </form>
            //     </div>
            // </div>
        );
    }
}

export default Updatemovie;