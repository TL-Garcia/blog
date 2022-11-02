import * as React from 'react'
import styles from './hamburguer.module.scss'

export const Hamburguer = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(prev => !prev)

  return (
    <nav  className={styles.menu}>
      {isVisible ? 
        (<ul onClick={toggleVisibility}>
          <li>Home</li>
          <li>About</li>
        </ul>) 
        :
        <button className={styles['menu__hamburguer']} onClick={toggleVisibility}></button>
      }
    </nav>
  )
}
