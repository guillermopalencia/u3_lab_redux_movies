const { GET_MOVIE_DETAILS, GET_MOVIES } = require('../types')

const iState = {
  details: {}
}

const MovieDetailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer
