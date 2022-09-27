import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImPlay3, ImPlus } from "react-icons/im";

const apiKey = "0a466394db088f6124899323291c722f";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => {
  return <img className="pic" src={img} alt="movie" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="rows">
      <h2>{title}</h2>

      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Tvshows = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    fetchData();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: popularMovies[2]
            ? `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${`${imgUrl}/${popularMovies[2].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="banner">
                {popularMovies[2] && <h1>{popularMovies[2].original_title}</h1>}
                {popularMovies[2] && <p>{popularMovies[2].overview}</p>}
                <button type="button" className="btn btn-light">
                  Play <ImPlay3 size={15} />
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-light">
                  My List <ImPlus size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row title="Upcoming tvshows" arr={upcomingMovies} />
      <Row title="Now Playing" arr={nowPlayingMovies} />
      <Row title="Popular" arr={popularMovies} />
      <Row title="Top Rated" arr={topRatedMovies} />
    </>
  );
};

export default Tvshows;
