import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
      {articles.map((article) => (
        <div className="col-md-4" key={article.id}>
          <Card className="mb-4 shadow-sm mb-md-5" style={{ width: "440px" }}>
            <Card.Img src={article.gambar} alt={article.judul} style={{ objectFit: "cover", width: "100%", height: "250px" }} />
            <Card.Body className="artikel">
              <Card.Title className="jenis-artikel fs-18 fw-semibold" style={{ color: "#54BCA4" }}>
                {article.jenisArtikel}
              </Card.Title>
              <Card.Title>{article.judulArtikel}</Card.Title>
              <Card.Text>{article.rangkuman}</Card.Text>
              <div className="text-end linkaertikel d-flex justify-content-end">
                <Button href={`isianArtikel.html?id=${article.id}`} className="btn fs-5 selengkapnya fw-semibold" style={{ backgroundColor: "#54BCA4", color: "#ffffff" }}>
                  Selengkapnya
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
