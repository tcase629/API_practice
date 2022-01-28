import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Tweets from "./Tweets";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [visible, setVisible] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/api/tweets")
      .then((res) => {
        setTweets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    updateVisible();
  };

  const updateVisible = () => {
    if (search.length === 0) {
      setVisible(tweets);
    } else if (search.length > 3) {
      axios
        .get(`/api/search?term=${search}`)
        .then((res) => setVisible(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Search
            </InputGroup.Text>
            <FormControl
              value={search}
              onChange={handleChange}
              icon={{ name: "search", circular: true }}
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Col>
        <Col xs={12} md={8}>
          <Tweets tweets={visible} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
