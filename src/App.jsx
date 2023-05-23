import { Header } from './components/Header.jsx'

import styles from './App.module.css'

import './global.css'

export function App() {
   return (
      <div>
         <Header />
         <div className={styles.wrapper}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
         </div>
      </div>
   )
}

