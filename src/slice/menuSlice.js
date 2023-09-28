import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        activeMenuItem: MENU_ITEMS.PENCIL,
        actionMenuItem: null
    },
    reducers: {
        menuItemClick: (state, actions) => {
            state.activeMenuItem = actions.payload
        },
        actionItemClick: (state, action) => {
            state.actionMenuItem = action.payload
        }
    }
})

export const {menuItemClick, actionItemClick} = menuSlice.actions
export default menuSlice.reducer;