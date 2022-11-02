import styles from './main-article.module.scss'

type Article = {
  title: string,
  date: string,
  description: string,
  link: string,
  url: string,
}


interface IMainArticle  {
  article: Article
}

export const MainArticle = ({article: {title, date, description, link, url}}: IMainArticle) => {
 return (
    <main className={styles['main-article']}>
      <h2 className={styles['main-article__title']}>{title}</h2>
      <small className={styles['main-article__date']}>{date}</small>
      <p>{description}</p>
      <a href={url}> {link}</a>
    </main>
 ) 
}
