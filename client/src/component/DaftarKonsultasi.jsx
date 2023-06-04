import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DaftarKonsultasi = ({ img, nama, pengalaman, ratings }) => {
  return (
    <Row className="conselor-box">
      <Col xs={4}>
        <img className="conselor-photo" src={img} alt="konselor1" style={{ width: "100%", maxWidth: "180px" }} />
      </Col>
      <Col xs={8}>
        <h4 className="font-weight-bold fs-4">{nama}</h4>
        <p className="  fs-5">{pengalaman}</p>
        <div className="rating-group fs-4">
          {ratings.map((rating, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="mr-1" style={{ fontSize: "23px", color: rating === "yellow" ? "yellow" : "gray" }} />
          ))}
        </div>
        <Button className="btn mt-3 rounded-pill px-4 py-2" style={{ backgroundColor: "#54BCA4" }}>
          <Link to="/chat">Konsultasi</Link>
        </Button>
      </Col>
    </Row>
  );
};

export default DaftarKonsultasi;
