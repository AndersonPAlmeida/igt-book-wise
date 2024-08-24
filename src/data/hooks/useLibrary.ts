'use client'
import { useContext } from 'react'
import { ContextLibrary } from '../contexts/ContextLibrary'

export const useLibrary = () => useContext(ContextLibrary)
