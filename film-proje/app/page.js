import HomeContainer from "@/container/home";

const getData = async () => {
  const apiKey = '9a2ffa63bf8fcded3b3a9f59d0b521d5';
  const page = 1;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed:', error);
  }
}

export default async function Home() {
  const data = await getData();
  
  if (!data) {
    return <div>Failed to load data</div>;
  }

  return (
    <>
      <HomeContainer data={data.results} />
    </>
  );
}
