import Carousel from "react-bootstrap/Carousel";

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselFadeExample() {
  return (
    <div className="herosection">
      <Carousel fade>
        <Carousel.Item>
          <div className="bg1">
            <div className="bgdetails1">
              <p>Mercedes-Benz AMG GT 2017</p>
             <div className="herospan">
             <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  color: "orange",
                }}
              >
                $320
              </span>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                /MO
              </span>
            
             </div>
              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontWeight: "lighter",
                }}
              >
                FOR 36 MONTHS
              </p>
              <br />
              <button className="herobtn">TEST DRIVE</button>{" "}
              <button className="herobtn2">LEARN MORE</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="bg2">
          <div className="bgdetails2">
              <p>Mercedes-Benz AMG GT 2017</p>
             <div className="herospan">
             <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  color: "orange",
                }}
              >
                $320
              </span>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                /MO
              </span>
            
             </div>
              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontWeight: "lighter",
                }}
              >
                FOR 36 MONTHS
              </p>
              <br />
              <button className="herobtn">TEST DRIVE</button>
              <button className="herobtn2">LEARN MORE</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
