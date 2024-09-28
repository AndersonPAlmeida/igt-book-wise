'use client'
import { useContext } from 'react'
import { ContextUser } from '../contexts/ContextUser'

export const useUser = () => useContext(ContextUser)
