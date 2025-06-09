import React from 'react'
import { Button } from './ui/button'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import BasicInfoSection from './BasicInfoSection'
import NotFound from './NotFound'
import EmployersSection from './EmployersSection'
import { addProfile } from '@/redux/counterSlice'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

    const profile = useAppSelector(state => state.portfolio.profile);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBack = () => {
        dispatch(addProfile(null));
        navigate('/');
    }

    if(!profile || !profile.extractedData) {
        return <NotFound />
    }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Portfolio</h1>
          </div>
          <Button variant="outline" onClick={onBack}>
            ← Back to Upload
          </Button>
        </div>

        <div className="space-y-6">
          <BasicInfoSection 
            info={profile.extractedData.basicInfo}
          />
          
          <EmployersSection 
            employers={profile.extractedData.employers}
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio