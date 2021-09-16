import Image from 'next/image'
import logotip from '../../public/logo.png'
import styles from '../../styles/loader.module.scss'

export default function CustomLoader() {
  return <div className={styles.loader}>
      <Image src={logotip} alt="Идёт загрузка контента..." /> 
    </div>
}
