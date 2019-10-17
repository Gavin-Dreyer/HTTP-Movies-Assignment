import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []

}
const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialMovie)

    const handleChanges = e => {
        e.persist()
        let value = e.target.value
        if(e.target.name === 'metascore'){
            value = Number(value)
        }
        setMovie({
            ...movie, 
            [e.target.name]: value
        })
    }

    return (
        <div>
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
            type='text'
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
        </div>
        
    )
}

export default UpdateMovie