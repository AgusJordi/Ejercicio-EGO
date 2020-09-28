import React from 'react';
import { Link } from 'react-router-dom';

const Models = (props) => {



  return (
    <div>
      <Link to={`/datamodels/${props.id}`}>
        <div class="card border-0 pt-2" style={{ width: "300px" }}>
          <h4>{props.name}</h4>
          <p>{props.year} | ${props.price} </p>
          <img class="card-img-top border-0"
            src={`https://challenge.agenciaego.tech${props.photo}`}
            style={{ height: "300px" }}
          />
        </div>
      </Link>

    </div>
  )

}

export default Models;