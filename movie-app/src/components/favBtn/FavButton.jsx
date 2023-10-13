import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../store/favsSlice";
import favoriteIcon from "../../assets/heart-red.jpeg";
import favoriteIconWhite from "../../assets/heart-white.jpeg";
import "./style.scss";

function FavButton({ characterObj }) {
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (favs.some((fav) => fav.id === characterObj.id)) {
      dispatch(deleteFav(characterObj));
    } else {
      dispatch(addFav(characterObj));
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {favs.some((fav) => fav.id === characterObj.id) ? (
        <img className="heart-button" src={favoriteIcon} alt="Favorite"/>
      ) : (
        <img className="heart-button" src={favoriteIconWhite} alt="Favorite"/>
      )}
    </button>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
