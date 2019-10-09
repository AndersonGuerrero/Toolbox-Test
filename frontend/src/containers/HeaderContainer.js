import React from 'react'
import { useDispatch } from 'react-redux'
import { getTextFromServer } from './../actions'
import { Header } from './../components/Layout'

export const HeaderContainer = () => {
  const dispatch = useDispatch()

  const onSelectText = text => {
    dispatch(getTextFromServer(text))
  }

  return <Header onSelectMenu={onSelectText} />
}