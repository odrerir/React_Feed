import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img src="https:github.com/odrerir.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Deeloper</span>
                    </div>
                </div>

                <time datetime="2022-05-11  00:15:30"></time>
            </header>

        </article>
    )
}