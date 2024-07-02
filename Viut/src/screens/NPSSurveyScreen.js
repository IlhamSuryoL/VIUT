import { View, Text } from 'react-native'
import React from 'react'
import SurveyDone from '../components/SurveyDone'
import ViewBlack from '../components/ViewBlack'
import Button from '../components/Button'

const NPSSurveyScreen = () => {
  return (
    <ViewBlack>
      <SurveyDone />
      <Button text={"SELESAI"} style={{ marginTop: 60, backgroundColor: '#F4B739' }} textStyle={{ color: '#000' }} />
    </ViewBlack>
  )
}

export default NPSSurveyScreen