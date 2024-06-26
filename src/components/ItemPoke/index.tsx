import React, { useState } from 'react';
import { PiRuler } from "react-icons/pi";
import { TbWeight } from "react-icons/tb";

import { Container, Gradient, LogoPokebola } from './styles';
import logoPokebola from '../../assets/logo-pokebola.png';
import { typesPokemon } from '../Tipagem/types';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

type Props = {
    item: any,
    click: () => void
}

export function ItemPoke({ item, click }: Props) {

    const [loading, setLoading] = useState(false);

  return (
    <Container className={loading ? "": 'loading'}>
        <img className='img-pokemon' src={item.sprites.other.home.front_default} onLoad={() => setLoading(true)} alt="img-pokemon"/>
        {loading ? 
            <>
                <div className='ref'>

                    <Gradient $background={typesPokemon.find(t => t.type === item.types[0].type.name)?.color} />
                    
                    <LogoPokebola src={logoPokebola} alt="" />
                </div>
                
                <div className='content'>
                    <div className='name'>
                        <div className='ball' />
                        <h1 translate='no'>
                            {item.name[0].toUpperCase() 
                                + 
                            item.name.substring(1)}
                        </h1>
                        <div className='ball' />
                    </div>

                    <ul className='types'>
                        {item.types.map((type: any) => (
                            <>
                                {typesPokemon?.map((tt) => {
                                    if (tt.type === type.type.name) {
                                        return(
                                            <li style={{ background: tt.gradient }}>
                                                <img src={tt.simbol} alt="" />
                                                <p translate='no'>
                                                    {type.type.name.toUpperCase()}
                                                </p>
                                            </li>
                                        );
                                    }
                                    else{return null}
                                })}
                            </>
                        ))}
                    </ul>

                    <div className='info'>
                        <div className='altura'>
                            <p translate='no'>{
                                item.height*0.1 >= 1 ? 
                                (item.height*0.1) % 1 !== 0 && !isNaN((item.height*0.1) % 1) ? 
                                    (item.height*0.1).toFixed(1) : 
                                    (item.height*0.1).toFixed(0) : 
                                (item.height*0.1).toFixed(1)} M
                            </p>
                            <div>
                                <PiRuler size={20} />
                                <p translate='no'>Altura</p>
                            </div>
                        </div>

                        <div className='peso'>
                                <p translate='no'>{(item.weight*0.1).toFixed(1)} KG</p>
                            <div>
                                <TbWeight size={20} />
                                <p translate='no'>Peso</p>
                            </div>
                        </div>
                    </div>

                    <button translate='no' onClick={click}>
                        <AiTwotoneThunderbolt color='#fff' size={20} />
                            &nbsp;
                        Mais Detalhes
                    </button>
                </div>
            </>
        :
            <div className="loading"></div>
        }
    </Container>
  );
}