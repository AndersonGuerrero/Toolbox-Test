import React from 'react';
import { useSelector } from 'react-redux';
import { Home } from './../components/Home'

export const HomeContainer = ()=> {
  const text = useSelector(state => state.home.textdisplay)
  const loading = useSelector(state => state.home.textPending)
  
  return(
    <Home textdisplay={text} isLoading={loading} />
  )
}