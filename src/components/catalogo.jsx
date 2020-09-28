
import Models from './models';
import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAll } from '../components/action/actions';



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
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Filtrar por</a>

                        <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Todos</a>

                        <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Autos</a>

                        <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Pickups y Comerciales</a>
                        <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">SUVs y Crossovers</a>
                    </div>
                </ul>

                <div className="card-deck d-flex justify-content-around flex-wrap text-center mt-5">
                    {modelo && modelo.map((m, index) => {

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
                                            photo={`https://challenge.agenciaego.tech${m.photo}`}

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

export default Catalogo;