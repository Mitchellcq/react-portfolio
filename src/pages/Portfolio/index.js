import React from "react";

class Portfolio extends React.Component {
    render() {

        return (
            <div class="container">

                <div class="row d-flex justify-content-center">
                    <div class="col-8">
                        <div class="card">

                            <h1 class="card-header">
                                Portfolio
                        </h1>

                            <div class="card-body">

                                <div class="card-columns">

                                    <div class="card">
                                        <a href="https://skyeli96.github.io/Project_1_API/" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/94781686-8527dc00-040d-11eb-92c2-e16214bd9ed6.png"
                                            alt="Recipe finder app" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Recipe finder app</p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://mitchellcq.github.io/Mitchellcq-assignment-wk-5/" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/92989334-f06d4500-f516-11ea-8df8-bc28efaabc48.png"
                                            alt="Business day planner" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Business day planner</p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://guarded-river-60808.herokuapp.com/" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/101127770-579c2080-3652-11eb-83e6-b08f85275d43.png"
                                            alt="Weather forecast app" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Hotel booking website</p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://stormy-earth-96588.herokuapp.com/" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/101337595-faad9e00-38cf-11eb-9536-828d2ab1d725.png"
                                            alt="Weather forecast app" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Burger eater</p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://obscure-coast-22805.herokuapp.com/notes" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/101338067-96d7a500-38d0-11eb-8296-9ce576192f35.png"
                                            alt="Weather forecast app" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Note taker app</p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://mitchellcq.github.io/Mitchellcq-assignment-wk-6/" target="_blank" rel="noreferrer"><img class="card-img-top"
                                            src="https://user-images.githubusercontent.com/68998298/93878397-59c23480-fd1d-11ea-9720-3c01da30241d.png"
                                            alt="Weather forecast app" /></a>
                                        <div class="card-body text-center">
                                            <p class="card-text">Weather forecast app</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Portfolio