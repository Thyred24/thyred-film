
import React from 'react';
import styles from "@/components/movies-section/styles.module.css";
import Image from 'next/image';
import Link from 'next/link';

function MovieSection({ title, movies }) {
  return (
    <div className={styles.movieSection}>
      <div className={styles.myFavorites}>
        <div className={styles.topSection}>
          <h2>
            {title}
          </h2>
          <Link href={`/category`}>
            <div className={styles.moreText}>
              See More
            </div>
          </Link>
        </div>
        <div className={styles.myFavoritesFilmGroup}>
          {movies.map((data) => (
            <div className={styles.movie} key={data.id}>
              <Link href={`/movie/${data.id}`}>
                <Image
                  width={280}
                  height={400}
                  unoptimized
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt={data.title}
                />
                <div className={styles.movieInfoOverlay}>
                  <div className={styles.innerBox}>
                    {data.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
