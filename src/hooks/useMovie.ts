import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext'

export function useMovie() {
  const value = useContext(MovieContext)

  return value;
}