import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(x => <div>
        <MovieCard title={x.title} IMDBRating={x.IMDBRating} genres={x.genres} poster={x.poster} />
        
      </div>)
      
    
}

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()} 
      </div>
    )
  }
}

MovieCard.defaultProps = {
  title: 'Unknown',
  IMDBRating: null, 
  genres: ['No Genre(s) Found'],
  poster: 'default'
} 


