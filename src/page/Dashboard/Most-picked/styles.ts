import styled from "styled-components";

export const Container = styled.div`
  width: 46vw;
  height: 45%;

  border-radius: 15px;
  background: linear-gradient(180deg, #980055 0%, #532d8c 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MostPickedPlayer = styled.div`
  width: 620px;
  height: 249px;

  margin-left: 100px;

  > h1 {
    font-weight: 900;
    font-size: 22px;
    color: #ffffff;
  }

  > p {
    width: 55px;
    height: 24px;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  > div {
    width: 132px;
    height: 132px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(100, 46, 134, 0.5) 0%,
      rgba(100, 46, 134, 0.05) 100%
    );
    border-radius: 100px;
    border: 2px dashed rgba(255, 255, 255, 0.5);

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
      width: 120px;
      height: 120px;

      padding-top: 20px;

      font-size: 57px;
      line-height: 67px;

      background: #ffffff;
      color: #000;

      border-radius: 100px;
      border: 3px solid #a40662;
    }
  }
`;

export const LessPickedPlayer = styled.div`
  width: 620px;
  height: 249px;


  margin-left: 100px;

  > h1 {
    font-weight: 900;
    font-size: 22px;
    color: #ffffff;
  }

  > p {
    width: 55px;
    height: 24px;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  > div {
    width: 132px;
    height: 132px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(100, 46, 134, 0.5) 0%,
      rgba(100, 46, 134, 0.05) 100%
    );
    border-radius: 100px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
      width: 120px;
      height: 120px;

      padding-top: 20px;

      font-size: 57px;
      line-height: 67px;

      background: #ffffff;
      color: #000;

      border-radius: 100px;
      border: 3px solid #a40662;
    }
  }
`;

export const Line = styled.div`
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 100px;

  div {
    position: relative;
    top: 35%;
    right: 50%;
    width: 100px;
    height: 100px;

    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
