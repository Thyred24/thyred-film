"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/category/styles.module.css"

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const apiKey = '9a2ffa63bf8fcded3b3a9f59d0b521d5';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
        if (!categoryResponse.ok) {
          throw new Error('Kategorileri alma başarısız');
        }
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.genres);
      } catch (error) {
        console.error('Kategorileri alma hatası:', error);
      }
    };

    const fetchMoviesByCategory = async () => {
      try {
        const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        if (!moviesResponse.ok) {
          throw new Error('Filmleri alma başarısız');
        }
        const moviesData = await moviesResponse.json();
        const moviesByCategory = {};

        moviesData.results.forEach(movie => {
          movie.genre_ids.forEach(genreId => {
            if (!moviesByCategory[genreId]) {
              moviesByCategory[genreId] = [];
            }
            moviesByCategory[genreId].push(movie);
          });
        });

        setMoviesByCategory(moviesByCategory);
      } catch (error) {
        console.error('Filmleri alma hatası:', error);
      }
    };

    fetchCategories();
    fetchMoviesByCategory();
  }, []);

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h1 className={styles.categoryName}>{category.name}</h1>
          <div className={styles.categoryGroup}>
            {moviesByCategory[category.id] ? (
              moviesByCategory[category.id].slice(0, 5).map(movie => (
                <div className={styles.movie} key={movie.id}>
                  <Link href={`/movie/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={300}
                      height={400}
                    />
                    <div className={styles.movieInfoOverlay}>
                        <div className={styles.innerBox}>
                            {movie.title}
                        </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>THIS CATEGORY MOVIES WILL BE UPLOADED TO OUR PAGE AS SOON AS POSSIBLE</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
