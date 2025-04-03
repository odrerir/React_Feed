import styles from './Post.module.css';

import { Comment } from "./Comment";
import { Avatar } from './Avatar';

export function Post({author, publishedAt, content}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='11 de maio as 15:00' dateTime='2022-05-11 08:15:00'>
                    {publishedAt}
                </time>
            </header>
            <form className={styles.commentForm}>
                <strong>Deixe seu FeedBack</strong>

                <textarea
                    placeholder='Deixe seu Comentario'>
                </textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}