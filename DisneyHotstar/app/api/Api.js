const fetchMovies = async () => {
  try {
    const resp = await fetch("https://api.sampleapis.com/movies/horror");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export { fetchMovies };
