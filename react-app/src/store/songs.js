const STORE_SONG = "songs/STORE_SONG";

const storeSong = (song) => {
  return {
    type: STORE_SONG,
    song,
  };
};

export const uploadSong = (inputSong) => async (dispatch) => {
  const response = await fetch(`/api/songs/upload`, {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(inputSong),
    body: inputSong,
  });

  if (response.ok) {
    console.log('okaaayyyyy')
    console.log(response.json(), 'my responnnnseeeeeee')
    const song = await response.json();
    await dispatch(storeSong(song));
    return song
  }

  const errorData = await response.json();
  console.log(errorData)
  return errorData
};

const initialState = { allSongs: {} };
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_SONG: {
      const newSong = action.song;
      return {
        ...state,
        allSongs: { ...state.allSongs, [newSong.id]: newSong },
      };
    }

    default:
      return state;
  }
};

export default songsReducer;
