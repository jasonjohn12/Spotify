import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Search from "@material-ui/icons/Search";
import { useDataLayerValue } from "../DataLayer";
const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="/spotifylogo.png"
        alt="spotify logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.map((playlist) => (
        <SidebarOption
          spotify={spotify}
          key={playlist.id}
          title={playlist.name}
          playlist={playlist}
        />
      ))}
      {/* <SidebarOption title="Hip Hop" />
      <SidebarOption title="Alternative" />
      <SidebarOption title="Rock" /> */}
    </div>
  );
};

export default Sidebar;
