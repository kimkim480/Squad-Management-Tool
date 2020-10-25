import styled from 'styled-components';

export const Container = styled.div`

    width: 46vw;
    /* height: 100%; */

    margin-top: 120px;
    margin-left: 50px;

    border-radius: 15px;

    background: #FFF;
    border: 2px solid #eeeeee;
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

    > a {
        width: 40px;
        height: 40px;

        margin-right: 30px;
        border-radius: 10px;
        /* background: linear-gradient(0deg, rgba(83,45,140,1) 0%, rgba(242,41,91,1) 100%); */
        background: linear-gradient(0deg, #532d8c 0%, #980055 100%);
        box-shadow: 0px 5px 13px 2px rgba(255, 91, 226, 0.4);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
