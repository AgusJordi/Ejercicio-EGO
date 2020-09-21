import Models from './models';
import React, { useEffect, Fragment } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { getAll } from '../components/action/actions';
import { Link } from 'react-router-dom';


const Segment = () => {



const modelo = useSelector(state => state.models)

const dispatch = useDispatch()

useEffect(() => {

    dispatch(getAll());
}, [getAll])
console.log(modelo.segment, "aaaaaaaaaaa")

    return (
        <div >

            <div style={{ display: "flex" }, { justifyContent: "center" }, { margin: "10vh" }}>
                <h1 style={{ marginBottom: "5vh" }}>Descubrí todos los modelos </h1>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Filtrar por</a>
                    </li>
                    <li class="nav-item">
              
                            <p class="nav-link disabled">Todos</p>
               
                    </li>

                    <li class="nav-item">
                 
                            <p class="nav-link disabled">Autos</p>
               
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Pickups y Comerciales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">SUVs y Crossovers</a>
                    </li>
                </ul>

                <div className="card-deck d-flex justify-content-around flex-wrap text-center mt-5">
                    {modelo.segment && modelo.segment.map((m, index) => {

                        const x = (index % 4) === 0;
                        if (modelo.length > 0) {
                            if (x) {
                                return <Fragment>
                                    <div className='w-100'>
                                    </div>
                                    <div className='col-2 pb-4 mr-5'>
                                        <Models
                                            id={m.id}
                                            name={m.name}
                                            year={m.year}
                                            price={m.price}
                                            photo={m.photo}

                                        />
                                    </div>
                                </Fragment>
                            }
                            return <div className='col-2 pb-4 mr-5'>
                                <Models
                                    id={m.id}
                                    name={m.name}
                                    year={m.year}
                                    price={m.price}
                                    photo={m.photo}
                                />
                            </div>
                        }

                    })

                    }

                </div>
            </div>


        </div>

)
}

export default Segment;