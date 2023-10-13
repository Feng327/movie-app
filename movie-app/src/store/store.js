import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import favsSlice from "./favsSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        favs: favsSlice,
    },
   
});
