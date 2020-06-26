import { combineReducers } from 'redux';

//Reducer
const songsReducer = () => {
    //Return static list of songs in this case
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '3:35'},
        { title: 'All Star', duration: '4:15'},
        { title: 'I want it that way', duration: '2:55'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    //We need to consider that inside the reducer we will have many possible actions, 
    //that is why we put a if statement here anyway, even if in this case it is just one
    if (action.type === 'SONG_SELECTED') {
        //Return the selected song
        return action.payload;
    }
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});