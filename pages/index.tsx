import type { NextPage } from 'next'
import styles from  './index.module.scss'

const MAIN_ARTICLE: Article = {
  title: 'This is the title of the article',
  date: '22/08/2022',
  description: 'This can be a little short introduction on what the article is about. It would be best if it wrapped the text in several lines :)' ,
  link: 'read about it',
  url: 'google.com'
}

type Article = {
  title: string,
  date: string,
  description: string,
  link: string,
  url: string,
}

type MainArticleProps = {
  article: Article
}

const MainArticle = ({article: {title, date, description, link, url}}: MainArticleProps) => {
 return (
    <main className={styles['main-article']}>
      <h2 className={styles['main-article__title']}>{title}</h2>
      <small className={styles['main-article__date']}>{date}</small>
      <p>{description}</p>
      <a href={url}> {link}</a>
    </main>
 ) 
}

const Home: NextPage = () => {
  return (
    <>
      <div className={styles['main-container']}>
        <header className={styles.header}>
         <h1 className={styles['header__title']}>MY BLOG</h1> 
         <div className={styles.hamburguer}></div>
        </header>
        <MainArticle article={MAIN_ARTICLE}/>
      </div>
    </>    
  )
}

export default Home
