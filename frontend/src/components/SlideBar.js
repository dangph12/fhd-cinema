import React from 'react'

function SlideBar() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="img/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-13.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="img/d01da503e99955ab7e8.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/z5613022018407_76fddb90fa1896ff5317324ca73f97b8.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/d01da503e99955ab7e8.jpg" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/z5613171762164_5c6451cbc2e353eed46a4b819ab386b8.jpg" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/z5639242205108_12db8cc10b81f6c9deba248ca68bdecf.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

           

        </div>

    )
}

export default SlideBar