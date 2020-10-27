import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background: #f7f3f7;
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

export const Content = styled.div`
  width: 95%;
  height: 100%;
  margin-top: 120px;

  margin-bottom: 120px;
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #fff;
`;
