import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchData: ""
}

const searchFilter = createSlice({
    name: "searchfilter",
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            let data = action.payload;
            state.searchData = data.toLowerCase();
        }
    }
});

export const {filterSearch} = searchFilter.actions;
export default searchFilter.reducer;