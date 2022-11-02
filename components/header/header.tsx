import styles from './header.module.scss'

import {Hamburguer} from './hamburguer'


type HeaderContent = {
  title: string,
}


interface IHeader {
  content: HeaderContent
}

export const Header = ({content: {title}}: IHeader) => {
  return (
    <header className={styles.header}>
     <h1 className={styles['header__title']}>{title}</h1> 
     <Hamburguer />
    </header>
  )
}
