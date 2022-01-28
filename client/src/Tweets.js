import React from "react";
import { Image, ListGroup } from "react-bootstrap";

const Tweets = ({ tweets }) => (
  <ListGroup>
    {tweets.map((tweet) => (
      <ListGroup.Item key={tweet.id}>
        <Image fluid src={tweet.user.profile_image_url} />
        <ListGroup.Item>
          <ListGroup.Item as="h3">{tweet.user.name}</ListGroup.Item>
          <ListGroup.Item as="p">{tweet.text}</ListGroup.Item>
          <ListGroup.Item action href={tweet.user.url} target="_blank">
            @{tweet.user.screen_name}
          </ListGroup.Item>
        </ListGroup.Item>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default Tweets;
