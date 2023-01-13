import { Carousel } from "react-bootstrap";

export default function ImageCarousel() {
  return (
    <Carousel style={{ marginTop: "1rem" }} fade interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src="images/entre.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/uteservering.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/insida.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}
