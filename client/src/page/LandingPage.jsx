import { Container, Row, Col, Stack } from "react-bootstrap";
import NavbarSipenting from "../component/Navbar";
import LayananKami from "../component/LayananKami";
import ArticleList from "../component/ListArtikel";

function LandinngPage() {
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />

          <ArticleList />
        </Stack>
      </div>
    </>
  );
}

export default LandinngPage;
