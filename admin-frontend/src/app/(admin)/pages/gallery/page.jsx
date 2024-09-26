import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import { Col, Row } from 'react-bootstrap';
import GlightBox from '@/components/GlightBox';
import cardImg1 from '@/assets/images/extra/card/img-1.jpg';
import cardImg2 from '@/assets/images/extra/card/img-2.jpg';
import cardImg3 from '@/assets/images/extra/card/img-3.jpg';
import cardImg4 from '@/assets/images/extra/card/img-4.jpg';
import cardImg5 from '@/assets/images/extra/card/img-5.jpg';
import cardImg6 from '@/assets/images/extra/card/img-6.jpg';
const Gallery = () => {
  const galleryImages = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6, cardImg2, cardImg1];
  return <>
      <PageMetaData title="Gallery" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <ComponentContainerCard title="Gallery">
            <Row id="grid" className="g-0 row-gap-1">
              {galleryImages.map((image, idx) => <Col md={4} lg={3} className="picture-item" key={idx}>
                  <GlightBox href={image} className="lightbox">
                    <img src={image} alt="card-image" className="img-fluid" />
                  </GlightBox>
                </Col>)}
            </Row>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default Gallery;