import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css";

function Home() {
const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title:"HeeJin", release_date:"2016"},
        {id: 2, title:"HyunJin", release_date:"2016"},
        {id: 3, title:"HaSeul", release_date:"2017"},
        {id: 4, title:"YeoJin", release_date:"2017"},
        {id: 5, title:"ViVi", release_date:"2017"},
        {id: 6, title:"KimLip", release_date:"2017"},
        {id: 7, title:"JinSoul", release_date:"2017"},
        {id: 8, title:"Choerry", release_date:"2017"},
        {id: 9, title:"Yves", release_date:"2017"},
        {id: 10, title:"Chuu", release_date:"2018"},
        {id: 11, title:"Gowon", release_date:"2018"},
        {id: 12, title:"HyeJu", release_date:"2018"},
    ]
    const handleSearch =(e) =>{
        e.preventDefault
        alert(searchQuery)
        setSearchQuery("")

    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
            
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>(
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={(movie.id)}/>
                )
            ))}
        </div>
    </div>
}

export default Home