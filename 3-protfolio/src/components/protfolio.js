import React from "react";
import img1 from './assets/img/portfolio/cake.png'
import img2 from './assets/img/portfolio/cabin.png'
import img3 from './assets/img/portfolio/circus.png'
import img4 from './assets/img/portfolio/game.png'
import img5 from './assets/img/portfolio/safe.png'
import img6 from './assets/img/portfolio/submarine.png'

const Protfolio = () =>(

    <section className="page-section portfolio" id="portfolio">
        <div className="container">

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

            <div className="divider-custom">
                <div className="divider-custom-line"/>
                <div className="divider-custom-icon"><i className="fas fa-star"/></div>
                <div className="divider-custom-line"/>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img1} alt="..."/>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img2} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img3} alt="..."/>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img4} alt="..."/>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img5} alt="..."/>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
    className="fas fa-plus fa-3x"/></div>
                        </div>
                        <img className="img-fluid" src={img6} alt="..."/>
                    </div>
                </div>
            </div>
        </div>

    </section>

)
export default Protfolio