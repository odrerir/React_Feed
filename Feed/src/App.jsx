import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './Global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.Wrapper}> 
        <Sidebar>
          sidebar
        </Sidebar>

        <main>
          <Post 
            author= "Diego"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error blanditiis cum itaque quasi temporibus dolorem, illum quo! Est corrupti et commodi fuga libero, molestias fugiat temporibus. Labore, quasi doloribus!"
          />
          
          <Post 
            author= "Pedro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error blanditiis cum itaque quasi temporibus dolorem, illum quo! Est corrupti et commodi fuga libero, molestias fugiat temporibus. Labore, quasi doloribus!"
          />

        </main>
      </div>
    </div>
  )
} 