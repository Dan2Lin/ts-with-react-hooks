import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import useURLLoader from '../hooks/useURLLoader'
import { IShowResult} from '../components/DogShow'

const LikeButton: React.FC = () => {
    const [ like, setLike ] = useState(0)
    const [ on, setToggle ] = useState(true) 
    const position = useMousePosition()
    const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [on])
    const dogResult = data as IShowResult
   
    //render后执行，不用考虑是第一次render还是update render
    useEffect(() => {
        document.title = `click like ${like} times`
    }, [like])
    return (
        <>
            <h1> X: {position.x}, Y: {position.y} </h1>
            <button onClick={() => { setLike(like + 1) }}>❤ {like}</button>
            <button onClick={() => { setToggle(!on) }}>
                refresh dog image
            </button>

            <h2>----------Usehook to load dog image--------- </h2>
            { loading ? <p>dog is loading...</p> :
                <img src={dogResult && dogResult.message} />
            }
        </>
    )
}

export default LikeButton