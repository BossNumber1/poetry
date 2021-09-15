import React from 'react'
import styles from '../../styles/signature.module.scss'

interface DescriptionLocalProps {
  name: string
  role: string
}

export default function Signature({name, role}: DescriptionLocalProps) {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.content__container}>
                    <div className={styles.content__container__list}>
                        <div className={styles.content__container__list__item}>{name}</div>
                        <div className={styles.content__container__list__item}>{role}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
