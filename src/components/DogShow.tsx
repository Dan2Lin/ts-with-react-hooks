import React from 'react'

export interface IShowResult {
    message : string,
    status: string
}

const DogShow: React.FC<{data: IShowResult}> = ({ data }) => {
    return (
        <>
            <h2>Dog Show: {data.status}</h2>
            <img src={data.message} alt=""/>
        </>
    )
}
export default DogShow