import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as plSongActions from '../../../store/playlist-songs';


const PlaylistDetails = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { playlist_id } = useParams()

  useEffect(() => {
    dispatch(plSongActions.get_playlist_songs(playlist_id))
  }, [dispatch]);

  const playlist = useSelector((state) => state.playlists[playlist_id])

  return (
    <>
      <h1>Playlist Details:</h1>
      <h2>--- {playlist.title} ---</h2>
    </>
  )
}

export default PlaylistDetails;
