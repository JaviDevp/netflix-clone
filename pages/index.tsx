import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Movie } from '../typings'
import requests from '../utils/request'
import useAuth from '../hooks/useAuth';
import { modalState } from '../atoms/modalAtom';
import Modal from '../components/Modal'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({netflixOriginals, trendingNow, topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries}:Props) => {

  const {loading} = useAuth();
  const showModal = useRecoilValue(modalState);

  if(loading) return null;
  return (
    <div className={`relative h-screen bg-gradient-to-b  lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'}`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Header/>
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals}/>
        <section className='space-y-5 md:space-y-10'>
          <Row title="trending now" movies={trendingNow}/>
          <Row title="Top Rated" movies={topRated}/>
          <Row title="Action Thrillers" movies={actionMovies}/>
          <Row title="Comedies" movies={comedyMovies}/>
          <Row title="Scary Movies" movies={horrorMovies}/>
          <Row title="Romance Movies" movies={romanceMovies}/>
          <Row title="Documentaries" movies={documentaries}/>
        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((resp) => resp.json()),
    fetch(requests.fetchTrending).then((resp) => resp.json()),
    fetch(requests.fetchTopRated).then((resp) => resp.json()),
    fetch(requests.fetchActionMovies).then((resp) => resp.json()),
    fetch(requests.fetchComedyMovies).then((resp) => resp.json()),
    fetch(requests.fetchHorrorMovies).then((resp) => resp.json()),
    fetch(requests.fetchRomanceMovies).then((resp) => resp.json()),
    fetch(requests.fetchDocumentaries).then((resp) => resp.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}
