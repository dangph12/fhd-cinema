import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "https://bhdstar.vn/wp-content/uploads/2024/08/d01da503e99955ab7e8.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-13.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613171744207_7d4285303094c19fd80de02beea34e0b.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613171762164_5c6451cbc2e353eed46a4b819ab386b8.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5639242205108_12db8cc10b81f6c9deba248ca68bdecf.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613022018407_76fddb90fa1896ff5317324ca73f97b8.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Example;