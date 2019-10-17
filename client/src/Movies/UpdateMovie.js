import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []

}
const UpdateMovie = (props) => {
    const [movie, setMovie] = useState(initialMovie)
    console.log(movie)

    useEffect(() => {
        const editThisMovie = props.movies.find(
            item => `${item.id}` === props.match.params.id
        )

        if(!editThisMovie) {
            return
        } else {
            setMovie(editThisMovie)
        }
        
    }, [props.movies, props.match.params.id])

    const handleChanges = e => {
        e.persist()
        let value = e.target.value
        if(e.target.name === 'metascore'){
            value = parseInt(value, 10)
        }
        setMovie({
            ...movie, 
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {

                const updatedList = props.movies.map(item => {
                    if(item.id === movie.id) {
                        return item = res.data
                    } else {
                        return item
                    }
                })
                props.setMovies(updatedList)
            })
            .catch(err => console.log(err))

        props.history.push('/');
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text' 
                name='title'
                value={movie.title}
                onChange={handleChanges}
                placeholder='title'
                className='updateForm'
            />
            <input
                type='text' 
                name='director'
                value={movie.director}
                onChange={handleChanges}
                placeholder='director'
                className='updateForm'
            />
            <input 
                type='number'
                name='metascore'
                value={movie.metascore}
                onChange={handleChanges}
                placeholder='metascore'
                className='updateForm'
            />
            <input
                type='text' 
                name='stars'
                value={movie.stars}
                onChange={handleChanges}
                placeholder='stars'
                className='updateForm'
            />
            <button className='updateForm'>Update</button>
        </form>
        </div>
        
    )
}

export default UpdateMovie