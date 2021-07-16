import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

const Header = ({ spotify }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [{ user }, dispatch] = useDataLayerValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEACRHTERM", searchTerm);

    spotify
      .searchTracks(searchTerm)
      .then((response) => console.log("response", response));
  };
  return (
    <div className="header">
      <form className="header__left" onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          placeholder=" Search for Artists, Songs, or Playlists"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="header__center"></div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
