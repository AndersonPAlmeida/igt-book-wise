'use client'
import { useContext } from 'react'
import { ContextHome } from '../contexts/ContextHome'

export const useHome = () => useContext(ContextHome)
