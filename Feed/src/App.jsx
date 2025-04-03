import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';

import './Global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https:github.com/maykbrito.png",
      name: "Devon Fernandes",
      role: "Educator @Rockectseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉  jane.design/doctorcare'}
    ],
    publishedAt: new Date("2022-05-15  15:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https:github.com/odrerir.png",
      name: "Victor Caua",
      role: "Web Devoleper"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2022-05-11  15:00:00"),
  }
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.Wrapper}>
        <Sidebar>
          sidebar
        </Sidebar>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}