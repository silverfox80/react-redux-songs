//Action Creator
export const selectSong = (song) => {
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//Named export is used instead of the default export, when we use a named export we must use the {} inside the import,
//like:  import { selectSong } from '../actions';
