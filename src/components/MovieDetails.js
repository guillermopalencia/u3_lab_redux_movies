import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ detailsState }) => {
  return { detailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
    console.log(id)
  }, [id])

  const title = props.detailsState.details.original_title
  const overview = props.detailsState.details.overview
  const rating = props.detailsState.details.vote_average
  const image = props.detailsState.details.backdrop_path

  return (
    <div>
      <h4>{title}</h4>
      <h5>{overview} </h5>
      <h5>Rating: {rating}</h5>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
