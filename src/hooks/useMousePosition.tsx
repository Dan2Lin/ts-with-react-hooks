import { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [ position, setPosition ] = useState({x: 0, y: 0})
    useEffect(() => {
     const recordMousePosition = (e: MouseEvent) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
     }

     document.addEventListener('mousemove', recordMousePosition)

     return () => {
        document.removeEventListener('mousemove', recordMousePosition)
     }   
    }, [])

    return position
}

export default useMousePosition