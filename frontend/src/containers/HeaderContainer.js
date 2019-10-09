import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTextFromServer } from './../actions'
import { Header } from './../components/Layout'

export const HeaderContainer = () => {
  const dispatch = useDispatch()

  const onSelectText = text => {
    dispatch(fetchTextFromServer(text))
  }

  return <Header onSelectMenu={onSelectText} />
}