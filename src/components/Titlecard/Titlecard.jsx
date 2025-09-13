import React, { useEffect, useRef, useState } from 'react'
import './titlecard.css'
import { cards_data } from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const Titlecard = ({title, category}) => {

const cardsRef = useRef();

const [apiData,setApiData] = useState([])



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmMxOTgxZTYzZmViMDFkMTQ3NzIyMGNkM2YwYjg5NSIsIm5iZiI6MTc0NjAwNzE5OS4wMzIsInN1YiI6IjY4MTFmNDlmM2RhOWE3ZmQzMTRkMjc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8lo-Re2JBUDq5VKczzo3fA9STYbE60MG48Eqp9T2_Fc'
  }
};










const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}












useEffect (()=>{


  fetch(`https://api.themoviedb.org/3/movie/${category?category: "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));







  cardsRef.current.addEventListener('wheel', handleWheel)

},[])


  return (
    <div className='titlecards'>

    <h2>{title?  title:"Popular on Netflix"}</h2>
    
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className='card' key={index}>
<img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path } alt="" />
<p>{card.original_title}</p>
        </Link>
      })}
    </div>

    </div>
  )
}

export default Titlecard