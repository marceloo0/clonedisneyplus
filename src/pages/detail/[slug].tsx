/* eslint-disable @next/next/no-img-element */
import next, { GetStaticPaths, GetStaticProps } from 'next';
import { Header, ButtonCircleIcon, ButtonWithIcon } from '../../components'
import api from '../../services/api'

import { HiUserGroup, HiPlus } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'

import { MoviesProps } from '../../contexts/MovieContext'

import { Container, Background, ContentMeta, Controls, Description, ImageTitle, SubTitle } from '../../styles/pages/detail'
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

interface DetailProps {
  movie: MoviesProps[];
}

const Detail = ({ movie }: DetailProps) => {
  const { loadingPage } = useAuth()

  useEffect(() => {
    loadingPage(false)
  }, [loadingPage])

  return (
    <Container>
      <Header colorBlack='transparent'  />
      <Background>
        <img src={movie[0].backgroundImg} alt={movie[0].title} />
      </Background>
      <ImageTitle>
        <img alt={movie[0].title} src={movie[0].titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <ButtonWithIcon icon={<FaPlay size={32} />} size='medium'>play</ButtonWithIcon>
          <ButtonCircleIcon color='#FFF' backgroundColor='#000' icon={<HiPlus size={32} />} />
          <ButtonCircleIcon color='#FFF' backgroundColor='#000' icon={<HiUserGroup size={32} />} />
        </Controls>
        <SubTitle>{movie[0].subTitle}</SubTitle>
        <Description>{movie[0].description}</Description>
      </ContentMeta>
    </Container>
  )
} 


export const getStaticPaths: GetStaticPaths = async () => {
  const result = await api.get('fc292de1-8f71-4f87-9cdf-92a5f3bb9bc5')
  const movies = result?.data?.movies as MoviesProps

  const paths = Object.values(movies).map(movie => {
    return {
      params: { slug: movie.id }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({ params }) => {
  const slug = params?.slug;

    const result = await api.get('fc292de1-8f71-4f87-9cdf-92a5f3bb9bc5')
    const movies = result.data.movies as MoviesProps
    const movie = Object.values(movies).filter(({ id }) => id === slug)

    return {
      props: {
        movie,
      }
    }
    
}

export default Detail