import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setToggle] = useState(true) 
    //render后执行，不用考虑是第一次render还是update render
    useEffect(() => {
        document.title = `click ${like} times`
    })
    return (
        <>
            <button onClick={() => { setLike(like + 1) }}>❤ {like}</button>
            <button onClick={() => { setToggle(!on) }}>
                {on ? 'ON' : 'OFF'}
            </button>
        </>
    )
}

export default LikeButton