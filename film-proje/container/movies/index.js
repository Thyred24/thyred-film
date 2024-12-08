'use client';
import FeaturedMovie from '@/components/featured-movie'
import React from 'react'

function MovieContainer({ data }) {
  return <FeaturedMovie movie={data} data={data} isCompact={false} />
}

export default MovieContainer