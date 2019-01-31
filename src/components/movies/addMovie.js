import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';
import {Link} from "react-router-dom";

class AddAlbum extends Component {
    state = {
        title: '',
        genre: '',
        year: '',
        errors: {}
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const {title, genre, year} = this.state;

        //Check For Errors
        if (title === '') {
            this.setState({errors: {Title: 'Title is required'}});
            return;
        }

        if (genre === '') {
            this.setState({errors: {genre: 'Genre is required'}});
            return;
        }

        if (year === '') {
            this.setState({errors: {year: 'Year is required'}});
            return;
        }
        
        const newMovie = {
            title: this.state.title,
            genre: this.state.genre,
            year: this.state.year,
        };

        await axios.post('https://movieapi2018.herokuapp.com/api/movies', newMovie)
            .then(res => {
                console.log(newMovie);
                console.log(res);
                console.log(res.data);
            });

        //Clear form after submit
        this.setState({
            title: '',
            genre: '',
            year: '',
            errors: {}
        });

        this.props.history.push('/');// after submit go to home
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {title, genre, year, errors} = this.state;

        return (
            <div className="card" style={{margin: 30, backgroundColor: 'white'}}>
                <div className="card-header" style={{padding: 30, backgroundColor: 'white'}}>
                    <h2>Add a movie</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="card-title">
                        <TextInputGroup label="Title" name="title" placeholder="Title" value={title} onChange={this.onChange} error={errors.title}/>
                        </div>
                        <div className="card-title">
                        <TextInputGroup label="Genre" name="genre" placeholder="Genre" value={genre} onChange={this.onChange} error={errors.genre}/>
                        </div>
                        <div className="card-title">
                        <TextInputGroup label="Year" name="year" placeholder="Year" value={year} onChange={this.onChange} error={errors.year}/>
                        </div>
                        <input style={{float: 'right'}} type="submit" value="Add Album" className="btn btn-dark"/>
                        <Link to={`/`}><button style={{float: 'right', marginRight: '10px'}} type="button" className="btn btn-danger">Cancel</button></Link>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddAlbum;