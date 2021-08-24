import { createContext, ReactNode, useEffect, useState, useCallback } from "react";
import { auth, firebase } from "../services/firebase";
import Router from 'next/router';
import cookie from 'js-cookie';

import api from '../services/api'

export interface MoviesProps {
  id: string
  backgroundImg: string,
  cardImg: string,
  description: string,
  subTitle: string,
  title: string,
  titleImg: string,
  type: string
}

type MovieContextType = {
  movies: MoviesProps[];
}

type MoviesContextProviderProps = {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextType);


export function MoviesContextProvider(props: MoviesContextProviderProps) {
  const [movies, setMovies] = useState<MoviesProps[]>([]);

  useEffect(() => {
      api.get('fc292de1-8f71-4f87-9cdf-92a5f3bb9bc5').then((response) => {
        setMovies(response.data.movies);
        });
  }, [])
  
  return (
    <MovieContext.Provider value={{ movies }}>
      {props.children}
    </MovieContext.Provider>
  );
}