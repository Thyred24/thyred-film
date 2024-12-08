'use client'

import React, { useState, useEffect } from 'react';
import FeaturedMovie from '@/components/featured-movie';
import MovieSection from '@/components/movies-section';
import styles from "@/container/home/styles.module.css";

function HomeContainer({ data }) {
  console.log(data)
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 300000);  

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <FeaturedMovie movie={data[currentMovieIndex]} />
        <MovieSection
          title="MY FAVORİTES"
          movies={data.slice(0, 10)}
        />
        <div className={styles.movieSection}>
        <MovieSection
          title="POPULAR FILMS"
          movies={data.slice(10, 20)}
        />
        </div>
    </>
  );
}

export default HomeContainer;