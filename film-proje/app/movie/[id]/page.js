import React from 'react';
import MovieContainer from '@/container/movies';

const getData = async (params) => {
  const { id } = params;
  const apiKey = '9a2ffa63bf8fcded3b3a9f59d0b521d5';
  const genreId = 99;

  try {
    const par = {
      

    }
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    const rgenResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);

    if (!response.ok || !rgenResponse.ok) {
      throw new Error('Ağ yanıtı iyi değil');
    }

    const movie = await response.json();
    const rgen = await rgenResponse.json();

    console.log(rgen);

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error('Verilerin getirilmesi başarısız oldu:', error);
    return {
      notFound: true,
    };
  }
};

const MovieDetail = async ({ params }) => {
  const data = await getData(params);

  return (
    <>
      <MovieContainer data={data.props.movie} />
      <div>
        See More
      </div>
    </>
  )
};

export default MovieDetail;
