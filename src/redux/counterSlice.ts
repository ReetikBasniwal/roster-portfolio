import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PortfolioState {
    user: unknown
}

const initialState: PortfolioState = {
    user: null,
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      addUser: (state, action: PayloadAction<unknown>) => {
        state.user = action.payload
      }
    },
})

export const { addUser } = portfolioSlice.actions

export default portfolioSlice.reducer