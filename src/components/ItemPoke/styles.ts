import styled from 'styled-components';

export const Container = styled.div`
    background-color: #050B1A;
    position: relative;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 3.2rem;
    position: relative;
    border: 1px solid #585858;
    /* overflow: hidden; */
    &.loading{
        width: 28rem;
        height: 39rem;
        overflow: hidden;
    }
    .loading{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(-90deg, #000, #585858, #000);
        background-size: 400%;
        animation: loading 2s linear infinite;
    }

    @keyframes loading{
        0%{background-position: 0%}
        50%{background-position: 100%}
        100%{background-position: 0%}
    }

    .ref{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    button{
        padding: 1rem 0;
        width: 70%;
        border-radius: 10px;
        background-color: rgba(0,0,0,.7);
        border: 1px solid #585858;
        font-size: 1.6rem;
        font-weight: 700;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .img-pokemon{
        height: 28rem;
        margin-top: -11rem;
        z-index: 2;
    }
    .content{
        /* background-color: blue; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        z-index: 2;
    }
    .name{
        display: flex;
        gap: .6rem;
        align-items: center;
        h1{
            font-size: 2.8rem;
        }
        .ball{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #fff;
        }
    }
    .types{
        display: flex;
        padding: 0;
        justify-content: space-between;
        gap: 2rem;
        li{
            display: flex;
            background-color: yellow;
            padding: .6rem 1.2rem;
            gap: .6rem;
            border-radius: 6px;
            align-items: center;
        }
        li img{
            height: 15px;
            /* align-items: flex-end; */
            /* justify-content: flex-end; */
        }
        li p{
            font-size: 1.6rem;
            font-weight: 700;
        }
    }

    .info{
        display: flex;
        gap: 6rem;
        .altura, .peso{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .2rem;
        }
        .altura div, .peso div{
            display: flex;
            align-items: center;
        }
        div p:first-child{
            font-size: 2rem;
            font-weight: 700;
        }
        div p{
            font-size: 1.8rem;
        }
    }

    @media screen and (min-width: 1440px) {
        &.loading{
            width: 34rem;
            height: 42rem;
            overflow: hidden;
        }
        .img-pokemon{
            height: 420px;
        }
    }
    @media screen and (max-width: 428px){
        .img-pokemon{
            height: 70vw;
        }
    }
`;

export const Gradient = styled.div<{ $background: string | undefined}>`
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    border-radius: 0 0 10% 10%;
    z-index: 1;
    opacity: .4;
    
    /* filter: blur(20px); */
    background: linear-gradient(
        180deg, 
        #050B1A 0%, 
        ${props => props.$background} 100%
    );
`

export const LogoPokebola = styled.img`
position: absolute;
    height: 300px;
    top: calc(100%/8);
    left: -150px;
    z-index: 1;
    opacity: .1;
` 