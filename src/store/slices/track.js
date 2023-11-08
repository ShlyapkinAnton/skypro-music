import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTracks: [],
    activeTrack: {},
    indexActiveTrack: null,
    isPlaying: false,
    shuffle: false,
    shuffleAllTracks: [],
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
            state.allTracks = action.payload },
        setActiveTrack: (state, action) => { 
            const { track, indexActiveTrack } = action.payload;
            state.activeTrack = track;
            state.indexActiveTrack = indexActiveTrack;
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
            state.shuffleAllTracks = state.shuffle && getShuffleAllTracks(state.allTracks);
        }
    }
})

export const {setAllTracks,  setIsPlaying,  setActiveTrack,  setNextTrack,  setPrevTrack, setShuffleTrack} = playerSlice.actions;
export default playerSlice.reducer;