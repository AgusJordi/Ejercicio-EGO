import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getOne } from '../components/action/actions';


const Datamodel = ({ custom }) => {

    const modelo = useSelector(state => state.model)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getOne(custom));
    }, [getOne])


    return (
        <div>
            <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image"
                    style={{ width: "100vh" }}
                />
                <div class="media-body" style={{ marginRight: "20vh" }}>
                    <h3>{modelo.name}</h3>
                    <h3 >Description</h3>
                    <p>{modelo.description}</p>
                </div>


            </div>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={modelo.photo} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={modelo.photo} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={modelo.photo} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true">aaaaaaaaaaaaaaaaaaaaaaa</span>
                        <span class="sr-only">Previoussssssssssssssssssssssssss</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image"
                    style={{ width: "100vh" }}
                />
                <div class="media-body" style={{ marginRight: "20vh" }}>
                    <h4>{modelo.name}</h4>
                    <p >{modelo.description}</p>

                </div>
            </div>
            <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image"
                    style={{ width: "100vh" }}
                />
                <div class="media-body" style={{ marginRight: "20vh" }}>
                    <h3>{modelo.name}</h3>
                    <p >{modelo.description}</p>

                </div>
            </div>
        </div>
    )


}

export default Datamodel;