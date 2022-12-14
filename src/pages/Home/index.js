import React, { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";


export default function Home() {
    const [path, pushLocation] = useLocation()
    console.log(path)

    const { gifs } = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])
    
    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}