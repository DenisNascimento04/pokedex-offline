import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background-color: #000;
    height: 100%;
    padding: 0;
    position: relative;
    .head{
        margin-bottom: 3.2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding: 5% 0;
        overflow: hidden;
        border-radius: 0 0 10% 10%;
        height: 510px;
        .logo{
            width: 300px;
            position: absolute;
            top: 1rem;
        }
        .back-pokebola1, .back-pokebola2{
            position: absolute;
            opacity: .2;
            width: 220px;
            top: 38%;
        }
        .back-pokebola1{
            right: -120px;
        }
        .back-pokebola2{
            left: -120px;
        }
        .home{
            flex: 2;
            z-index: 1;
            display: flex;
            height: 100%;
            padding: 0 10%;
            .content{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 1.4rem;
                
            }
            .content h1{
                font-size: 6.4rem;
                font-weight: 700;
            }
            .content .types{
                display: flex;
                gap: .5rem;
            }
            .content .types div{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .content .types div img{
                height: 60%;
            }
            .content p{
                font-size: 2rem;
                /* font-weight: 300; */
            }
            .content button{
                background-color: rgba(0,0,0,.7);
                border: 1px solid #585858;
                border-radius: 10px;
                padding: 1.4rem 0;
                font-size: 1.6rem;
                font-weight: 700;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            .img-pokemon{
                flex: 1;
                /* background-color: red; */
                display: flex;
                align-items: center;
            }
            .img-pokemon img{
                width: 95%;
                /* object-fit: cover; */
            }
        }
    }

    #search{
        /* display: flex; */
        padding: 0 10%;
        padding-bottom: 5%;
    }
    #search .results{}
    #search .results .list-pokemons{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; 
        padding: 0;
        row-gap: 10rem;
        padding: 8rem 0;
        width: 100%;
    }
    .pagination{
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        flex: 1;
    }
    .pagination button{
        border: 1px solid #fff;
        background-color: rgba(0,0,0,.4);
        padding: 1rem 2rem;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
    }
    .pagination button.disabled{
        opacity: .4;
        cursor: auto;
    }
    @media screen and (min-width: 1440px){
        .head{
            height: 690px;
        }
    }
    @media screen and (max-width: 390px){
        .head{
            height: auto;
            border-radius: 0 0 6% 6%;
            .logo{
                top: 0;
            }
            .home{
                flex-direction: column;
                padding-top: 12rem;
            }
            .home .content{
                h1{
                    font-size: 3.2rem;
                }
                .types div{
                    width: 32px;
                    height: 32px; 
                }
                p{
                    font-size: 1.8rem;
                }
            }
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
    z-index: 9999;
    backdrop-filter: blur(20px);
    padding-top: 4rem;
    transition: 500ms;
    &.off{
        /* display: none; */
        top: 100rem
    }
    &.on{
        top: 0
    }
    .close{
        position: absolute;
        right: 12rem;
        top: 2rem;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        width: 5rem;
        height: 5rem;
        background: linear-gradient(
            90deg, 
            #7F00CD 0%, 
            #6502BF 48.96%, 
            #4600CB 100%
        );
        border-radius: 50%;
        cursor: pointer;
    }
    .pokemon{
        position: absolute;
        bottom: 20%;
        right: 6rem;
        height: 52rem;
        z-index: 1;
        filter: drop-shadow(-10px 20px 10px  rgba(0, 0, 0, 0.7));
        pointer-events: none;
    }
    .content{
        padding-left: 8rem;
        .title{
            display: flex;
            align-items: center;
            justify-content: center;
            width: min-content;
            gap: 1rem;
            h1{
                font-size: 4rem;
                text-transform: capitalize;
                width: max-content;
            }
            .types{
                display: flex;
                padding: 0;
                justify-content: space-between;
                gap: 2rem;
            }
            .types li{
                display: flex;
                padding: 1.2rem ;
                gap: .6rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
            }
            .types li img{
                height: 2.2rem;
            }
        }
        .desc{
            margin-top: 1rem;
            h2{
                font-size: 2.2rem;
                margin-bottom: 1rem;
            }
            p{
                font-size: 2rem;
                max-width: 70rem;
            }
        }
        .evols{
            display: flex;
            align-items: center;
            justify-content: center;
            width: min-content;
            gap: 1rem;
            margin-bottom: 4rem;
            margin-top: 4rem;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            div.on{
                background-color: red;
                border-radius: 50%;
            }
            img{
                height: 10rem;
            }
        }
        .abilities{
            width: auto;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                width: 35rem;
                background-color: rgba(252,252,252,.2);
                position: relative;
                padding: .2rem 1rem;
                border-radius: 2rem;
                overflow: hidden;
            }
            li .numb{
                position: absolute;
                height: 100%;
                background-color: green;
                top: 0;
                left: 0;
                z-index: -1;
            }
            li p{
                /* z-index: 2; */
                color: #000;
                font-size: 1.2rem;
                text-transform: uppercase;
    
            }
        }
    }
    .detalhe{
        position: absolute;
        right: -28rem;
        top: 0;
        transform: rotate(41deg);
        width: 700px;
        height: 1200px;
        background-color: red;
        img{
            height: 6rem;
            position: absolute;
            bottom: 50%;
            transform: rotate(-41deg);
            left: 0;
            opacity: .4;
        }
        .pokebola-1{
            height: 16rem;
            left: 4rem;
            bottom: 16rem;
        }
        .pokebola-2{
            height: 10rem;
            left: 28rem;
            bottom: 30rem;
        }
        .pokebola-3{
            height: 10rem;
            left: 4rem;
            top: 20rem;
        }
        .pokebola-4{
            height: 12rem;
            left: 10rem;
            bottom: 45%;
        }
    }
    @media screen and (min-width: 1440px){
        .pokemon{            
            bottom: 25%;
            right: 10rem;
            /* height: 54rem; */
        }
        .detalhe{
            width: 800px;
            height: 1400px;
            .pokebola-1{
                height: 20rem;
                left: 4rem;
                bottom: 16rem;
            }
            .pokebola-2{
                height: 14rem;
                left: 28rem;
                bottom: 30rem;
            }
            .pokebola-3{
                height: 14rem;
                left: 4rem;
                top: 20rem;
            }
            .pokebola-4{
                height: 16rem;
                left: 10rem;
                bottom: 45%;
            }
        }
    }
    @media screen and (max-width: 390px){
        padding-top: 34rem;
        padding-bottom: 20rem;
        overflow-y: scroll;
        scroll-behavior: auto;
        height: 47vh;
        .pokemon{
            top: -3rem;
            right: 10%;
            height: 32rem;
        }
        .detalhe{
            /* display: none; */
            overflow: hidden;
            transform: rotate(0deg);
            height: 32rem;
            .pokebola-1{
                height: 16rem;
                left: 4rem;
                bottom: 24rem;
            }
            .pokebola-2{
                height: 10rem;
                left: 35rem;
                bottom: 16rem;
            }
            .pokebola-3{
                height: 10rem;
                left: 4rem;
                top: 20rem;
            }
            .pokebola-4{
                height: 12rem;
                left: 32rem;
                bottom: -8%;
            }
        }
        .close{
            right: 2rem;
            top: 1rem;
        }
        .content{
            padding: 0 2rem;
            .evols{
                img{
                    height: 8rem;
                }
            }
            .abilities{
                width: 100%;
                li{
                    width: 94%;
                }
            }
        }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex: 2;  
    gap: 2rem;
    margin-bottom: 4rem;

    .types{
        /* flex: 1; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        overflow: hidden;
        /* background-color: blue; */
        div:first-child{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        p{
            font-size: 1.6rem;
        }
        .select-type{
            display: flex;
            border: 1px solid #585858;
            padding: 1rem;
            border-radius: 12px;
            align-items: center;
            .container-tt{
                display: flex;
                overflow-y: visible;
                overflow-x: scroll;
            }
            .container-tt::-webkit-scrollbar{
                height: 3px;
                padding-left: 1rem;
                scroll-snap-stop: normal;
            }
            .container-tt::-webkit-scrollbar-thumb{
                background-color: #585858;
                border-radius: 10px;
            }
            button{
                background-color: transparent;
                border: 0;
                cursor: pointer;
            }
            .type-container{
                position: relative;
                display: flex;
                border: 0;
                cursor: pointer;
            }
            .type-container img{
                transition: .5s;
                height: 40px;
                opacity: .6;
            }
            .type-container.active img{
                opacity: 1;
            }
        }
    }
    .input-search{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        div:first-child{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        div:nth-child(2){
            display: flex;
        }
        p{
            font-size: 1.6rem;
        }
        .input{
            padding: 1rem;
            flex: 1;
            border-radius: 12px 0 0 12px;
            border: 1px solid #585858;
        }
        .input input{
            width: 100%;
            background-color: transparent;
            border: 0;
            color: #fff;
            font-size: 2rem;
        }
        .input input:focus{
            border: 0;
        }
        div:nth-child(2) button{
            color: #fff;
            border: 0;
            padding: 2rem 2.4rem;
            border-radius: 0 12px 12px 0;
            background: linear-gradient(
                90deg, 
                #7F00CD 0%, 
                #6502BF 48.96%, 
                #4600CB 100%
            );
        }
    }
    @media screen and (min-width: 1440px){
        .types{
            .select-type{
                .type-container img{
                    height: 55px;
                }
            }
        }
        .input-search{
            p{
                font-size: 1.8rem;
            }
            .input{
                /* padding: 1.6rem; */
            }
            div:nth-child(2) button{
                padding: 2.4rem 2.4rem;
            }
        }
    }

    @media screen and (max-width: 390px){
        flex-direction: column;
        .types{
            flex-wrap: wrap;
            width: 100%;
            .select-type{
                flex-direction: column;
                .container-tt{
                    flex-wrap: wrap;
                    column-gap: 1.4rem;
                    row-gap: .6rem;
                }
                .type-container img{
                    height: 50px;
                }
            }
        }
        .input-search{
            gap: 1rem;
            .input input{
                font-size: 1.6rem;
            }
            div:nth-child(2) button{
                padding: 1.6rem 2rem;
            }
        }
    }
`

export const Loading = styled.div`
    /* background-color: red; */
    width: 100%;
    height: 1000px;
    display: flex;
    padding-top: 15rem;
    align-items: flex-start;
    justify-content: center;
    .loader {
        width: 50px;
        height: 165px;
        position: relative;
    }
    .loader::before {
    content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50% , 0);
        width: 16px;
        height: 16px;
        background: #FF3D00;
        border-radius: 50%;
        animation: bounce 2s linear infinite;
    }
    .loader::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: 48px;
        width: 48px;
        background: #fff;
        border-radius: 4px;
        animation: rotate 2s linear infinite;
    }

    @keyframes bounce {
        0% , 50% , 100%{
            transform: translate(-50%, 0px);
            height: 20px;
        }
        20% {
            transform: translate(-25%, 85px);
            height: 28px;
        }
        25% {
            transform: translate(-25%, 110px);
            height: 12px;
        }
        70% {
            transform: translate(-75%, 85px);
            height: 28px;
        }
        75% {
            transform: translate(-75%, 108px);
            height: 12px;
        }
    }
    @keyframes rotate {
        0% , 50% , 100%{ transform: rotate(0deg)}
        25% { transform: rotate(90deg)}
        75%{ transform: rotate(-90deg)}
    }
  

`
