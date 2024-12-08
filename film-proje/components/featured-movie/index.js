import React from 'react'
import styles from "@/components/featured-movie/styles.module.css";
import Link from 'next/link';
import Image from 'next/image';

function FeaturedMovie({ movie = {}, isCompact = true}) {
  const { poster_path, title, overview, vote_average, vote_count, release_date} = movie;

  return (
  <div className={styles.moviePoster}>
    <div className={styles.moviePosterOverlay}>
    </div>
    <Image 
      unoptimized
      src={`https://image.tmdb.org/t/p/original${poster_path}`} 
      alt={title}
      fill
    />
    <div className={styles.movieOverview}>
      <h1 className={styles.movieTitle}>
        {title}
      </h1>
      <div className={styles.movieInfo}>
        <div className={styles.infoLeft}>
          <div className={styles.infoBox}>
            IMDb
          </div>
          <div className={styles.boxDetail}>
            {vote_average} <span>({vote_count})</span>
          </div>
        </div>
      </div>
      <div className={styles.releaseDate}>
        {release_date}
      </div>
      <div className={`${styles.movieSummary} ${
        isCompact ? styles.shortSummary: ""
      }`}>
      {overview}
      </div>
      <Link href={`/movie/${movie.id}`}>
        <div className={styles.movieWatch}>
          <div className={styles.watchPlay}>
            <Image 
              src="/images/play.png"
              width={18}
              height={18}
            />
          </div>
          <div className={styles.watchText}>
            Watch Now
          </div>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default FeaturedMovie