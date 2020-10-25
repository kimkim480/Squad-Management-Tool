import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 16px;
    color: #8d8d8d;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  width: 70%;

  margin-top: 50px;
  margin-bottom: 150px;

  display: flex;
  justify-content: space-between;
`;

export const Field = styled.div`
  width: 427px;
  height: 630px;

  background: linear-gradient(179.98deg, #a6387c 0.02%, #7e2f80 129.89%);
  display: flex;
  flex-direction: column;

  > label {
    position: relative;
    bottom: 25px;

    font-weight: bold;
    font-size: 14px;
  }

  > select {
    position: relative;
    bottom: 53px;
    left: 100px;

    width: 145px;
    height: 30px;

    padding-left: 40px;
    /* border: 1px solid #dadada; */
  }

  > button {
    position: relative;
    top: 600px;

    width: 427px;
    height: 47px;

    color: #fff;
    background: linear-gradient(179.98deg, #a6387c 0.02%, #7e2f80 129.89%);

    border: 1px solid #c50341;

    border-radius: 6px;
    outline: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    width: 427px;
    height: 30px;

    margin: 10px 0;

    border: 1px solid #dadada;
  }
`;

export const Card = styled.div`
  width: 427px;
  height: 75px;

  background: linear-gradient(180deg, #ffffff 0%, #e5e5e5 100%);
  border: 1px dashed #e0e0e0;
  border-radius: 3px;

  display: flex;
  justify-content: space-between;
`;

export const Labels = styled.p`
  margin-right: 10px;
  font-weight: 500;
  font-size: 14px;
`;

export const Information = styled.p`
  font-size: 14px;
  color: #cb275c;
`;

export const Name = styled.div`
  margin-left: 16px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;


export const Age = styled.div`
  position: relative;
  left: 145px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Nacionality = styled.div`
  position: relative;
  right: 272px;
  top: 40px;
  display: flex;
  justify-content: space-between;
`;
