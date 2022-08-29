import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";


export const Hero = () => {

const navigate=useNavigate()

  const { id }=useParams();
const hero = getHeroById(id);

const onNavigateBack=()=>{
  navigate(-1)
}

if(!hero){
  return (
    navigate (to="/marvelPage")
  )
}
return(
  <>
  <div className="row mt-5 ">
<div className="col-5 animate__animated animate__bounceInLeft">
<img src={`/assets/heroes/${id}.jpg`}
alt={hero.superhero}
className="img-thumnail"
  />
  </div>
  <div className="col-7 animate__animated animate__bounceInRight">
<h3>{hero.superhero}</h3>
<ul className="list-droup list-group-flush">
  <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
  <hr/>
  <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
  <hr/>
  <li className="list-group-item"><b>First Appearance:</b>{hero.first_appearance}</li>
</ul>
<h5 className="mt-3">Characters:</h5>
<p>{hero.characters}</p>
<button className="btn btn-outline-prmary"
onClick={onNavigateBack}>
  Back
</button>
</div>

</div>
  </>
  
)
}