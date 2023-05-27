import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from './Header.module.css'

import igniteLogo from '../assets/logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo ToDo List" />

            <form className={styles.newTaskForm}>
                <input placeholder="Adicione uma nova tarefa" type="text" />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}