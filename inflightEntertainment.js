
const flightTime = 120
const flightMovies = [100,2,45,89]

const flightMoviesChecker = (flightTime, flightMovies) => {
    
    const moviesSeen = new Set()

    for(let i = 0; i < flightMovies.length; i++){
        let firstMovie = flightMovies[i]
        let secondMovie = flightTime - firstMovie

        if(moviesSeen.has(secondMovie)){
            return true 
        } else {
            moviesSeen.add(firstMovie)
        }
    }
    return false
}

console.log(flightMoviesChecker(flightTime,flightMovies))
