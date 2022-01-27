import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [tweets, setTweets] = useState([])

  useEffect( () => {
    axios.get('/api/tweets')
      .then( res => {
        setTweets(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h1>Tweets</h1>
          {
            tweets.map( tweet =>
              <div key={tweet.id}>
                <img src={tweet.user.profile_image_url} alt=''/>
                <h3>{tweet.user.name}</h3>
                <p>{tweet.text}</p>
              </div>
            )
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
