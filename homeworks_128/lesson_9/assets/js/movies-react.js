function MyApp() {
  const API_KEY = '2bef09b5';
  const [moviesList, setMoviesList] = React.useState([]);
  const searchHandler = async (search) => {
    console.log('Search by: ' + search);
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
    );
    const json = await response.json();
    setMoviesList(json.Search);
  };
  return (
    <main className="container">
      <SearchForm onSearch={searchHandler} />
      <MoviesList movies={moviesList} />
    </main>
  );
}

function SearchForm({ onSearch }) {
  const [search, setSearch] = React.useState('Batman');

  function submitHandler(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div className="card mb-4">
      <div class="card-body">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div class="col-10">
              <input
                type="text"
                id="search"
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <div class="col-2">
              <button type="submit" className="btn btn-info" id="search-btn">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function MoviesList({ movies }) {
  return;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
