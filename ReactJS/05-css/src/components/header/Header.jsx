import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <h1>Ketan</h1>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
