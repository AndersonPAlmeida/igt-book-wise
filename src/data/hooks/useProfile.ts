'use client'
import { useContext } from 'react'
import { ContextProfile } from '../contexts/ContextProfile'

export const useProfile = () => useContext(ContextProfile)
