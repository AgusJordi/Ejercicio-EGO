
// import './catalogo.css'
import Models from './models';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { getAll } from './actions';

const Catalogo = () => {

    const modelo = useSelector(state => state.models)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAll());
    }, [getAll])



    return (
        <div >

            <div style={{ display: "flex" }, { justifyContent: "center" }, { margin: "10vh" }}>
                <h1 style={{ marginBottom: "5vh" }}>Descubrí todos los modelos </h1>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Filtrar por</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Todos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Autos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Pickups y Comerciales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">SUVs y Crossovers</a>
                    </li>
                </ul>

                <div className="card-deck" style={{ display: 'flex' }, { justifyContent: 'flex-start' }, { flexWrap: 'wrap' }}>
                    {modelo && modelo.map(m =>
                        <Models
                            id={m.id}
                            name={m.name}
                            year={m.year}
                            price={m.price}
                            photo={m.photo}

                        />)}
                </div>
            </div>


        </div>

    )
}

export default Catalogo;