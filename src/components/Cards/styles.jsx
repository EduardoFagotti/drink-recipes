import styled from "styled-components";

export const Content = styled.div`
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media screen and (max-width: 890px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  li {
    width: 26%;
    background-color: white;
    margin-top: 15px;
    margin-bottom: 15px;

    @media screen and (max-width: 890px) {
      display: flex;
      width: 90%;
      img {
        height: 150px;
      }

      @media screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
        width: 70%;
      }

      @media screen and (max-width: 300px) {
        width: 90%;
      }
    }
  }
  img {
    width: 100%;
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  h1 {
    padding-left: 5px;
    font-size: 20px;
    color: black;
  }
  p {
    font-size: 16px;
    color: #808080;
    padding: 5px;
    position: relative;

    @media screen and (max-width: 890px) {
      margin-top: -20px;
    }
  }
`;
