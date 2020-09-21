import React, { useEffect } from 'react';
import { useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import { getAll } from './actions';

const Models = (props) => {

  const dispatch = useDispatch()
  // const [select, setSelect] = useState("");

  useEffect(() => {
    dispatch(getAll());
  }, [getAll])

 

  return (
<Link to={`/datamodels/${props.id}`}>
    <div class="card" style={{ width: "300px" }}>
      <h4>{props.name}</h4>
      <p>{props.year} | ${props.price} </p>
      <img class="card-img-top"
        src={props.photo}
        style={{ height: "300px" }}
      />
    </div>
    </Link>
  )

}

export default Models;