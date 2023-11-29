import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTracks: [],
    activeTrack: {},
    indexActiveTrack: null,
    isPlaying: false,
    shuffle: false,
    shuffleAllTracks: [],
    allFavoritesTracks: [],
    allCategory: [],
    currentPlaylist: [],
    currentPage: "",
}

const getShuffleAllTracks = (array) => {
    const arrayShuffleTracks = new Array(...array);
    return arrayShuffleTracks.sort(() => Math.random() - 0.5);
}

export const playerSlice = createSlice({
    name: "tracksReducer",
    initialState,
    reducers: {
        setAllTracks: (state, action) => { 
            state.allTracks = action.payload
        },
        setActiveTrack: (state, action) => { 
            const { track, indexActiveTrack } = action.payload;
            state.activeTrack = track;
            state.indexActiveTrack = indexActiveTrack;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist = action.payload;
        }, 
        setIsPlaying: (state, action) => { 
            state.isPlaying = action.payload },
        setNextTrack: (state, action) => {
            const {indexNextTrack, nextTrack} = action.payload;
            state.activeTrack = nextTrack;
            state.indexActiveTrack = indexNextTrack;
        },
        setPrevTrack: (state, action) => {
            const {indexPrevTrack, prevTrack} = action.payload;
            state.activeTrack = prevTrack;
            state.indexActiveTrack =  indexPrevTrack;
        },
        setShuffleTrack: (state, action) => {
            state.shuffle = action.payload;
            if (state.shuffled) {
                state.shuffleAllTracks = state.shuffle && getShuffleAllTracks(state.currentPlaylist);
            }
        },
        setAllFavoritesTracks: (state, action) => { 
            state.allFavoritesTracks = action.payload 
        },
        setAllCategory: (state, action) => {
            state.allCategory = action.payload;
        },    
    }
})

export const {setAllTracks,  setIsPlaying,  setActiveTrack, setCurrentPage, setCurrentPlaylist,  setNextTrack,  setPrevTrack, setShuffleTrack, setAllFavoritesTracks, setAllCategory} = playerSlice.actions;
export default playerSlice.reducer;