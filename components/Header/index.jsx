import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import Favorite from "../../assets/images/favorite.svg";
import History from "../../assets/images/history.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.main_wrapper}>
        <div className={styles.header_logo}>
          <Link href="/" className={styles.header_title}>
            <div className={styles.header_actions_inner}>
              <Image src={Logo} width={28} height={28} alt="" />
              <p className={styles.main_logo_text}>ImageStock</p>
            </div>
          </Link>
        </div>
        {/*  УСЛОВНАЯ ОТРИСОВКА НЕ ЗАБЫТЬ */}
        <div className={styles.actions}>
          <div className={styles.header_search}>
            <Link href="/" className={styles.header_title}>
              <div className={styles.header_actions_inner}>
                <Image src={Search} width={31} height={31} alt="" />
                <p className={styles.inner_text}>Поиск</p>
              </div>
            </Link>
          </div>
          {/*  УСЛОВНАЯ ОТРИСОВКА НЕ ЗАБЫТЬ */}
          <div className={styles.header_fav}>
            <Link href="/favorites" className={styles.header_title}>
              <div className={styles.header_actions_inner}>
                <Image src={Favorite} width={23} height={21} alt="" />
                <p className={styles.inner_text}>Избранное</p>
              </div>
            </Link>
          </div>

          <div className={styles.header_history}>
            <Link href="/history" className={styles.header_title}>
              <div className={styles.header_actions_inner}>
                <Image src={History} width={26} height={26} alt="" />
                <p className={styles.inner_text}>История поиска</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header
