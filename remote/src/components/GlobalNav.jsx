import * as React from 'react';
import styles from '../styles/page.module.css'

const GlobalNav = (d) => {
  return (

    <div className={styles.grid}>
      <a
        href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        {/* <p>
          Find in-depth information about Next.js features and API.
        </p> */}
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        {/* <p>Explore the Next.js 13 playground.</p> */}
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        {/* <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p> */}
      </a>
    </div>
  );
};

export default GlobalNav;
