import NavbarSipenting from "../component/Navbar";
import HeroCekKonsul from "../component/HeroKonsul";
import { Stack, Alert } from "react-bootstrap";
import DaftarKonsultasi from "../component/DaftarKonsultasi";

function Konsultasi(params) {
  return (
    <>
      <div>
        <Stack>
          <NavbarSipenting />
          <HeroCekKonsul
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"}
            title={"Pilih Teman Konsultasimu !"}
            descrip={"Dapatkan konsultasi medis anak yang cepat dan mudah dari dokter kami yang berpengalaman. Konsultasi medis anak yang nyaman dan aman dari rumah Anda sendiri. "}
          />
          <Alert className="mx-5 py-1 text-center  konsul" variant="success">
            Karena masih dalam tahap pengembangan, maka fitur konseling masih digratiskan.
          </Alert>
          <div>
            <div className="d-flex justify-content-between mb-5 conselor-sections">
              <div className="left">
                <h4 className="font-weight-bold">Daftar konselor kami</h4>
              </div>
            </div>
            <Container>
              <Row>
                <Col lg={6} className="mb-5">
                  <DaftarKonsultasi />
                </Col>
                <Col lg={6} className="mb-5">
                  <DaftarKonsultasi />
                </Col>
                <Col lg={6} className="mb-5">
                  <DaftarKonsultasi />
                </Col>
              </Row>
            </Container>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Konsultasi;
