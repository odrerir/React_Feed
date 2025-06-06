import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

import {PencilLine } from 'phosphor-react'; // Importacao do site phosphor de icones

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className= {styles.cover} src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=50&w=400&=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.profile}>
                <Avatar src="https:github.com/odrerir.png" />

                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>  {/* Espessura do icone */}
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}