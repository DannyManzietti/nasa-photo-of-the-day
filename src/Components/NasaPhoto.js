import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";
import { Container, Row } from "reactstrap";

export default function NasaPhoto() {
  const [data, setData] = useState([]);
  const [date, setDates] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt&date=${date}`
      )
      .then(response => {
        const info = response.data;
        console.log(info);
        setData(info);
      })
      .catch(error => {
        console.log("Error! Error!", error);
      });
  }, [date]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt`
      )
      .then(response => {
        const info = response.data;
        console.log(info);
        setData(info);
      })
      .catch(error => {
        console.log("Error! Error!", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <div>
          <form>
            <input
              className="cal"
              onChange={event => setDates(event.target.value)}
              type={"date"}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            ></input>
          </form>
          <NasaCard
            title={data.title}
            date={data.date}
            copyright={data.copyright}
            hdurl={data.hdurl}
            explanation={data.explanation}
          />
        </div>
      </Row>
    </Container>
  );
}
