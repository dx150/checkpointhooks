import { useState, useRef } from "react"
import './App.css';
import MovieList from './components/MovieList/MovieList';


// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.

function App() {
  const [list, setList] = useState([
    {
      id: '1',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Uncharted_Official_Poster.jpg/220px-Uncharted_Official_Poster.jpg',
      title: 'Uncharted',
      description: 'Treasure hunter Victor "Sully" Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand',
      rating: '5'
    },
    {
      id: '2',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Batman_Infobox.jpg/220px-Batman_Infobox.jpg',
      title: 'Batman',
      description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
      rating: '5'
    }

  ])
  const title = useRef();
  const desc = useRef();
  const rating = useRef();
  const imgLink = useRef();


  const handleAdd = (e) => {
    e.preventDefault();

    const movie = {
      title: title.current.value,
      description: desc.current.value,
      rating: rating.current.value,
      posterURL: imgLink.current.value
      
    }

    setList(prevList => [...prevList, movie])

  }

  return (
    <div className="App">
      <MovieList list={list}/>

      <form onSubmit={handleAdd}>
            <label>
                Title
                <input type="text" placeholder='title' ref={title}/>
            </label>
            <label>
                Description
                <input type="text" placeholder='description' ref={desc}/>
            </label>
            <label>
                Image Link
                <input type="text" placeholder='description' ref={imgLink}/>
            </label>
            <label>
                Rating
                <input type="number" ref={rating} />
            </label>
            <button type='submit'>ADD</button>
        </form>
    </div>
  );
}

export default App;
