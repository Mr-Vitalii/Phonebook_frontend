import React from 'react'
import { HomeContainer } from './Home.styled'

export const Home = () => {
  return (
    <HomeContainer>
      <h1>
        Contacts welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          ☎
        </span>
      </h1>
    </HomeContainer>
  );
}
