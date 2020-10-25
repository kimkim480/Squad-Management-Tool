import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 16px;
    color: #8d8d8d;
  }

  div + h1 {
    margin-top: 50px;
  }
`;

export const Form = styled.div`
  width: 70%;

  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    width: 427px;
    height: 30px;

    margin: 10px 0;

    border: 1px solid #dadada;
  }

  input + label {
      margin-top: 20px;
  }

  textarea {
    border: 1px solid #dadada;
  }
`;

export const SecondColumn = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    width: 427px;
    height: 30px;

    margin: 10px 0;

    border: 1px solid #dadada;
  }

  input + label {
      margin-top: 20px;
  }

  textarea {
    border: 1px solid #dadada;
  }
`;

export const Radio = styled.div`
  margin: 0;

  display: flex;

  justify-content: space-between;

  input {
    width: 18px;
  }

  label {
    color: #a9a9a9;
    font-weight: 400;
    margin-right: 130px;
    margin-top: 15px;
  }
`;
