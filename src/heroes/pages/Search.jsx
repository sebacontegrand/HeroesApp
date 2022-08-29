import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";


export const Search = () => {

  const navigate =useNavigate();
  const location=useLocation();
  const {q = ""} =queryString.parse(location.search)


  const {searchText,onInputChange }=useForm({
    searchText:q
  });

  const onSearchSubmit=(e)=>{
e.preventDefault();
if(searchText.trim().length<=1) return;
navigate(`?q=${searchText}`)
  }

  const heroes = getHeroesByName(q);


  return (
    <>
    <div  className="row">
    <h1>Search..</h1>
    <hr/>
    <div className="col-5">
<h4>searching</h4>
<hr/>
<form onSubmit={onSearchSubmit}>
  <input
  type="text" 
  placeholder="Search a Hero"
  name="searchText"
  autoComplete="off"
  value={searchText}
  onChange={onInputChange}
  />
  <button className="btn btn-outline-primary mt-1">
    Search
  </button>
</form>
    </div>
    <div className="col-7">
<h4>Results</h4>
<hr/>
{(q ==="")? <div className="alert alert-primary">
  Searh a Hero
</div>
: (heroes.length ===0) && <div className="alert alert-danger">
  No Hero with: <b>{q}</b>
</div>
}


{ heroes.map(hero=> (
<HeroCard key={hero.id}{...hero}/>
  
  ))}
    </div>
    </div>
    </>
  )
}
