import styled from "styled-components";

export const Container = styled.div`
  width: 46vw;

  height: 55%;

  margin-top: 120px;
  margin-right: 50px;

  border-radius: 15px;

  background: #fff;

  margin-bottom: 20px;
  position: relative;
  border: 2px solid #eeeeee;
  border-radius: 15px;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ccc;

  > h1 {
    margin-left: 30px;
    font-size: 22px;
    color: #532d8c;
  }
`;
