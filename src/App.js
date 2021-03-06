import { useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //  const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({ type: "SET_TOKEN", token: _token });
    }

    //spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      dispatch({ type: "SET_USER", user });
    });
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({ type: "SET_PLAYLISTS", playlists: playlists.items });
    });

    spotify
      .getPlaylist("37i9dQZEVXcRJTNZHvJV6J")
      .then((response) =>
        dispatch({ type: "SET_SELECTED_PLAYLIST", selectedPlaylist: response })
      );
  }, []);

  return (
    <div className="app">
      {/* Login With Spotify Button */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
