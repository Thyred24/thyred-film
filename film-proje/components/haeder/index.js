import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from "@/components/haeder/styles.module.css"
function Header() {
  return (
    <hedaer className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.Logo}>
            <Link href="/">
              <Image
                src="/images/Logo.png"
                width={100}
                height={100}
                alt='logo'
              />
              <h2 className={styles.h2}>
                THYRED FILMS
              </h2>
            </Link>
          </div>
          <div className={styles.headerRight}>
          <nav className={styles.navigationMenu}>
              <Link href="/category">Categories</Link>
              <Link href="/">Series</Link>
              <Link href="/">Kids</Link>
          </nav>
          <div className={styles.aramaCubugu}>
            <Image 
              src="/images/aramaçubugu.png"
              width={30}
              height={30}
            />
          </div>
          </div>
        </div>
    </hedaer>
  )
}

export default Header