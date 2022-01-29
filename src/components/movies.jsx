import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends React.Component {
    state={
        movies:getMovies()
    }

    handleDelete = movie =>{
        const movies = this.state.movies.filter(m=>m._id !== movie._id)
        this.setState({movies})
    }
    render() {
        const count = this.state.movies.length; 
        if (count===0) return <p className='m-2'>There is no movie in Database.</p>;
        return (
            <React.Fragment>
            <p className='m-2'>Showing { count } Movie in the Table.</p> 
            <table className="table">   
            <thead>
                <tr>
                    <th>Tilte</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(
                              <tr>
                                  <td>{movie.title}</td>
                                  <td>{movie.genre.name}</td>
                                  <td>{movie.numberInStock}</td>
                                  <td>{movie.dailyRentalRate}</td>
                                  <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                              </tr>
                ))}
            </tbody>
           </table>
        </React.Fragment>



        )
        
        
    }
}
 
export default Movies;

