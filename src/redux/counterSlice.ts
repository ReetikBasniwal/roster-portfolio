import { BasicInfo, Portfolio } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PortfolioState {
    profile: null | Portfolio
}

const initialState: PortfolioState = {
    profile: null,
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addProfile: (state, action: PayloadAction<Portfolio | null>) => {
            state.profile = action.payload
        },
        updateBasicInfo: (state, action: PayloadAction<BasicInfo>) => {
            if (state.profile) {
                state.profile = {
                    ...state.profile,
                    extractedData: {
                        ...state.profile.extractedData,
                        basicInfo: action.payload,
                        employers: state.profile.extractedData.employers,
                        videos: state.profile.extractedData.videos
                    }
                }
            }
        }
    },
})

export const { addProfile, updateBasicInfo } = portfolioSlice.actions

export default portfolioSlice.reducer