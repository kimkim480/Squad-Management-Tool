import styled from "styled-components";

export const HeadingBar = styled.div`
  width: 100vw;
  height: 6vh;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(230deg, #532d8c 0%, #f2295b 100%);

  > img {
    margin-left: 30px;
    width: 140px;
    height: 140px;
  }

  > h1 {
    position: fixed;
    left: 90px;
    color: #fff;

    font-weight: 800;
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  width: 130px;

  margin-right: 30px;

  color: #fff;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 40px;
    height: 40px;

    padding: 10px;

    text-align: center;
    color: #000;

    background: #fff;
    border-radius: 50px;
  }
`;
