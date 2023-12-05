const fetchMovies = async (page)=>{
const response = await fetch(`https://test.create.diagnal.com/data/page${page}.json`);
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
 return data
}

export {fetchMovies}