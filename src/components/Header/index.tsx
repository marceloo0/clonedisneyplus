import Head from 'next/head';
import Image from 'next/image'
import { Button, ButtonWithIcon } from '../Buttons'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/useAuth'

import { Container, Login, Content, NavMenu, SignOut, UserImg, DropDown} from './styles'
import { useRouter } from 'next/router';

export interface HeaderProps {
  colorBlack?: string
}

export const Header: React.FC<HeaderProps> = ({ colorBlack }) => {
  const { user, signout } = useAuth()
  const router = useRouter()

  function handleNav(href: string) {
    router.push(`/${href}`)
  }

  return (
    <>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('disney-auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      <Container colorBlack={colorBlack}>
        <NavMenu>
          <Image src='/logo.svg' width={80} height={60} alt='logo' />
          <ButtonWithIcon 
            name='/images/home-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
            onClick={() => handleNav('dashboard')}
          >Home</ButtonWithIcon>

          <ButtonWithIcon 
            name='/images/search-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
          >search</ButtonWithIcon>

          <ButtonWithIcon 
            name='/images/watchlist-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
          >watchlist</ButtonWithIcon>

          <ButtonWithIcon 
            name='/images/original-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
          >originals</ButtonWithIcon>

          <ButtonWithIcon 
            name='/images/movie-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
          >movies</ButtonWithIcon>

          <ButtonWithIcon 
            name='/images/series-icon.svg' 
            color='#CACACA' 
            backgroundColor='transparent' 
          >series</ButtonWithIcon>
        </NavMenu>
        <SignOut>
          <Login>
            <Avatar 
              backgroundImage={ !user?.avatar ? (
                'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BC047E692DC768BDD446D83708CBBD5686FA64EE5D5D3D3C3B0A5A788BE1548/scale?width=280&format=png' 
                ) : (
                  `${user?.avatar}`
                )            
              }
              size='small' 
            />
            <DropDown>
              <span onClick={signout} >Sair</span>
            </DropDown>
          </Login>
        </SignOut>
      </Container>
    </>
  )
}