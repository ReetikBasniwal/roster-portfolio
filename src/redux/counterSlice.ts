import { BasicInfo, Employer, Portfolio } from '@/types'
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
        },
        updateEmployer: (state, action: PayloadAction<Employer>) => {
            if (state.profile && state.profile.extractedData.employers) {
                const updated_employers = state.profile.extractedData.employers.map(employer => 
                    employer.id === action.payload.id ? action.payload : employer
                );

                state.profile = {
                    ...state.profile,
                    extractedData: {
                        ...state.profile.extractedData,
                        employers: updated_employers,
                    }
                }
            }
        },
    },
})

export const { addProfile, updateBasicInfo, updateEmployer } = portfolioSlice.actions

export default portfolioSlice.reducer