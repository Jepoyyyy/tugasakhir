import React, {useEffect, useState} from "react"
import "./tvList.css"
import { useParams } from "react-router-dom"
import Cards from "../cardTv/cardTv"

const TvList = () => {
    
    const [tvList, setTvList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=dfa29fd2b83b6c1b368f0ccc2be4f143&language=en-US`)
        .then(res => res.json())
        .then(data => setTvList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    tvList.map(tv => (
                        <Cards tv={tv} />
                    ))
                }
            </div>
        </div>
    )
}

export default TvList