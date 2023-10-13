import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { appTitle } from '../../components/globals/globalVariables';
import { useSelector, useDispatch } from "react-redux";
import { deleteFav, addFav } from "../../store/favsSlice";
import MovieCard from "../../components/movieCard/MovieCard"; 
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.scss";

function Favorite() {
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `${appTitle} - Favorite Movies`;
  }, []);

  const toggleFavorite = (movie) => {
    if (favs.some((fav) => fav.id === movie.id)) {
      dispatch(deleteFav(movie));
    } else {
      dispatch(addFav(movie));
    }
  };

  return (
    <div className="favPage">
       <h2 className="pageTitle">Favorite Movies</h2>
       <ContentWrapper>
        
        <div >
          {favs.length < 1 || favs == null ? (
            <p className="noFav">
              No favorite movies. Return to the <Link to="/" >home</Link> page to
              add some favorite movies.
            </p>
          ) : (
            <section className="content">
              {favs.map((movie, i) => (
                <MovieCard
                  key={i}
                  data={movie}
                  mediaType={movie.media_type || "movie"}
                  onClick={() => navigate(`/${movie.media_type || "movie"}/${movie.id}`)} 
                />
              ))}
            </section>
          )}
        </div>
       </ContentWrapper>
    </div>
  );
}

export default Favorite;