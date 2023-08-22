import React, { useEffect, useState } from "react";
import './home.css'

export default function Home() {
    const [food, setFood] = useState([]);
    const [places, setPlaces] = useState([]);

    const url = "http://localhost:8080/";

    function LoadFood() {
        fetch(url + 'get_all_food').then(response => response.json()).then(data => {
            setFood(data.data);
        })
    }

    function LoadPlaces() {
        fetch(url + 'get_all_places').then(response => response.json()).then(data => {
            setPlaces(data.data);
        })
    }


    useEffect(() => {
        LoadFood();
        LoadPlaces();
    }, []);

    return (
        <div>
            <div className="conatiner text-center  text-white p-1 custom">
                <nav class="navbar navbar-expand-lg bg-dark p-3">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                                <li class="nav-item ms-4">
                                    <i class="bi bi-house"></i>  Home
                                </li>
                                <li class="nav-item ms-4 text-white">
                                    <i class="bi bi-file-person-fill"></i>  About
                                </li>
                                <li class="nav-item ms-4 text-white">
                                    <i class="bi bi-telephone"></i>  Contact
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <li class="nav-item me-3">
                                    <i class="bi bi-envelope-exclamation"></i>
                                </li>
                                <li class="nav-item me-3">
                                    <i class="bi bi-facebook"></i>
                                </li>
                                <li class="nav-item me-3 text-white">
                                    <i class="bi bi-whatsapp"></i>
                                </li>
                                <li class="nav-item me-3 text-white">
                                    <i class="bi bi-telephone"></i>
                                </li>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {/* navbar close */}

            <div className="container">
                <div id="carouselExampleAutoplaying" className="carousel slide border-radius-4" data-bs-ride="carousel" data-bs-interval="4000">
                    <div className="carousel-inner">
                        {places.map((place, index) => (
                            <div key={place.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={place.place_img} className="d-block carousal-img" alt="..." />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* carousal close */}

            <div className="container mt-4 ">
                <h3 className="heading"> Pune Famous Places :</h3>
                <div className="d-flex flex-wrap mt-4">
                    {places.map(place => (
                        <div class="card m-4">
                            <img src={place.place_img} class="card-img-top custom-img " alt="..." />
                            <div class="card-body">
                                <p class="card-text"> <b>Place Name. :</b> {place.place_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-2">
                <h3 className="heading">Pune Famous Food :</h3>
                <div className="d-flex flex-wrap mt-4">
                    {food.map(food => (
                        <div class="card m-4 ">
                            <img src={food.food_img} class="card-img-top custom-img " alt="..." />
                            <div class="card-body">
                                <p class="card-text"> <b>Product Name :</b> {food.foood_name}</p>
                                <p class="card-text"><b>Creator Name :</b>{food.creator}  </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Footer">

                <footer className="bg-dark text-center text-white">

                    <div className="container p-4">

                        <section className="mb-4">

                            <a className="btn btn-outline-light btn-floating m-1 thick-border" href="#!" role="button"
                            ><i className="bi bi-facebook"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1  thick-border" href="#!" role="button"
                            ><i className="bi bi-twitter"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1  thick-border" href="#!" role="button"
                            ><i className="bi bi-google"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1  thick-border" href="#!" role="button"
                            ><i className="bi bi-instagram"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1  thick-border" href="#!" role="button"
                            ><i className="bi bi-linkedin"></i
                            ></a>


                        </section>

                        <section className="">
                            <form action="">

                                <div className="row d-flex justify-content-center">

                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>

                                    <div className="col-md-5 col-12">

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" class="form-control" placeholder="Email" />

                                        </div>
                                    </div>


                                    <div className="col-auto">

                                        <button type="submit" class="btn btn-outline-light mb-4  thick-border sweep-to-right">
                                            Subscribe
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </section>


                        <section className="">

                            <div className="container p-4">

                                <div className="row">

                                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                        <h3 className="text-uppercase">Footer Content</h3>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                        </p>
                                    </div>

                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h3 className="text-uppercase">My Account</h3>

                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a className="pointer text-white">My Account</a>
                                            </li>
                                            <li>
                                                <a className="pointer text-white">Order History</a>
                                            </li>
                                            <li>
                                                <a className="pointer text-white">Wish List</a>
                                            </li>
                                            <li>
                                                <a className="pointer text-white">Returns</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h3 className="text-uppercase ">Information</h3>

                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#!" class="text-white">Terms & Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#!" class="text-white">Delivery Information</a>
                                            </li>
                                            <li>
                                                <a href="#!" class="text-white">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#!" class="text-white">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </section>

                    </div>



                    <div className="text-center p-3" >
                        Pune © 2020 Copyright:

                        <span className="text-white"></span>
                    </div>

                </footer>

            </div>

        </div>
    );
}
