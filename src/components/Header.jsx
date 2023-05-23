import styles from './Header.module.css'

import igniteLogo from '../assets/toDoList-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ToDo List" />
        </header>
    )
}