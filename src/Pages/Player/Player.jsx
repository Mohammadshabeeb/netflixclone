import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Player = () => {




const {id} = useParams ();


const navigate = useNavigate();






  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmMxOTgxZTYzZmViMDFkMTQ3NzIyMGNkM2YwYjg5NSIsIm5iZiI6MTc0NjAwNzE5OS4wMzIsInN1YiI6IjY4MTFmNDlmM2RhOWE3ZmQzMTRkMjc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8lo-Re2JBUDq5VKczzo3fA9STYbE60MG48Eqp9T2_Fc",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img onClick={() => { navigate(-2) }} src={back_arrow_icon} alt="" />

      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        all
        width="90%"
        height="90%"
      ></iframe>

<div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  );
};

export default Player;
