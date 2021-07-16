import "./SidebarOption.css";
import { useDataLayerValue } from "../DataLayer";
const SidebarOption = ({ title, playlist, spotify, Icon }) => {
  const [{}, dispatch] = useDataLayerValue();

  const onSelectPlayList = ({}) => {
    spotify
      .getPlaylist(playlist.id)
      .then((response) =>
        dispatch({ type: "SET_SELECTED_PLAYLIST", selectedPlaylist: response })
      );
  };
  return (
    <div className="sidebarOption" onClick={onSelectPlayList}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
