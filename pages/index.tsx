import type { NextPage } from 'next'
import styles from  './index.module.scss'

import {Header, MainArticle} from '../components'

const MAIN_ARTICLE = {
  title: 'This is the title of the article',
  date: '22/08/2022',
  description: 'This can be a little short introduction on what the article is about. It would be best if it wrapped the text in several lines :)' ,
  link: 'read about it',
  url: 'google.com'
}

const HEADER_CONTENT = {
  title: 'my blog'
}

const Home: NextPage = () => {
  return (
    <div className={styles['main-container']}>
      <Header content={HEADER_CONTENT}/>
      <MainArticle article={MAIN_ARTICLE}/>
    </div>
  )
}

export default Home
