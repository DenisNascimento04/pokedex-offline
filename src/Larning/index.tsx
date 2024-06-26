import { useEffect, useState } from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { GoHome, GoPaste, GoSearch } from "react-icons/go";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { PiArrowFatLineRightFill, PiX } from "react-icons/pi";
import axios from 'axios';

import { Container, Inputs, Loading, Modal } from './styles';
import LogoPokemon from '../assets/logo-pokemon.png'
import LogoPokebola from '../assets/logo-pokebola.png'
// import LogoPokebola from '../../assets/pokebola-logo.png'
// import api from '../../server/api';
import { ItemPoke } from '../components/ItemPoke';
import { PropsPokemon, pokemonsHome, typesPokemon } from '../components/Tipagem/types';
// import { allData } from '../server/api';


export function Larning() {

    const innerWidth = window.innerWidth; 
    const indexHome = 1;
    const [limit, setLimit] = useState(0);
    const [pesquisa, setPesquisa] = useState("");
    const [filtro, setFiltro] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [pokemon, setPokemon] = useState<any>();
    const [pokeEvolve, setPokeEvolve] = useState<any>(false);
    const colorP = typesPokemon.find(t => t.type === pokemon?.types[0].type.name)?.color;

    const BackgroundHome = [
        {
            id: 5,
            background: `linear-gradient(70deg, #8BF066 0%, #66C648 30.99%, #3E9625 100%)`
        },
        {
            id: 3,
            background: `linear-gradient(70deg, #F4A973 0%, #E27221 100%)`
        },
    ]

    const url = 'https://pokeapi.co/api/v2/';
    const result = useQuery({
        queryKey: ['getPokemons'],
        queryFn: async () => {
            if (pesquisa !== "" && filtro.length !== 0) {

            } else {
                if (pesquisa !== "") {
                    const response = await axios.get(url + `pokemon?limit=1000000&offset=0`)
                    const resultAll = response.data.results;
                    
                    var result = [];
                    const filter = resultAll.filter((item: any) => {
                        if (item.name.includes(pesquisa)) {
                            return {...item};
                        }
                    });

                    for (let i = 0; i < filter.length; i++) {
                        let pokemon = await axios.get(filter[i].url);
                        result.push(pokemon.data);
                    }

                    return result.slice(limit, limit + 9);
                } else if (filtro.length !== 0) {

                    if (filtro.length === 1) {
                        var result = [];
                        const response1 = await axios.get(url + `type/${filtro}`);
                        const data = response1.data.pokemon;
                        console.log(data[0].pokemon.name);
                        for (let i = 0; i < data.length; i++) {
                            let pokemon = await axios.get(data[i].pokemon.url);
                            result.push(pokemon.data);
                        }
                    
                        return result.slice(limit, limit + 9);
                    }else{
                        var result = [];
                        var dataFiltro = [];
                        const response1 = await axios.get(url + `type/${filtro[0]}`);
                        const data1 = response1.data.pokemon;
                        const response2 = await axios.get(url + `type/${filtro[1]}`);
                        const data2 = response2.data.pokemon;
                        
                        const resultComp = data1.filter((item1: any) => {
                            for (let i = 0; i < data2.length; i++) {
                                if (item1.pokemon.name === data2[i].pokemon.name) {
                                    return {...item1}
                                }
                            }
                        })
                        dataFiltro = resultComp;
                        for (let i = 0; i < dataFiltro.length; i++) {
                            let pokemon = await axios.get(dataFiltro[i].pokemon.url);
                            result.push(pokemon.data);
                        }
                    
                        return result.slice(limit, limit + 9);
                    }
                    
                    

                } else {
                    const response = await axios.get(url + `pokemon?limit=9&offset=${limit}`)
                    const result1 = response.data.results;

                    var result2 = []
                    for (let i = 0; i < result1.length; i++) {
                        let pokemon = await axios.get(result1[i].url);
                        result2.push(pokemon.data);
                    }
                    return result2;
                }
            }
        }
    })

    const limitButton: number = result.data?.length!;

    const setColorBrackground = BackgroundHome.find((item) => item.id === pokemonsHome[indexHome].types[0]);

    function RemoverAddFiltro(text: string) {
        if (filtro.includes(text)) {
            var index = filtro.indexOf(text);
            const copy = filtro;
            copy.splice(index, 1);
            setFiltro([...copy]);
        } else {
            if (filtro.length !== 2) {
                setFiltro([...filtro, text]);
            }
        }
    }
    function ClearFilter() {
        setPesquisa('')
        setFiltro([]);
        setLimit(0);
    }
    function Next() {
        // setLoading(true);
        setLimit(limit + 9);

        window.location.href = "#search"
    }
    async function AddPokemon(item: any) {
        setModal(true);
        setPokemon(item);
        const response = await getEvolv(item.id);
        console.log(response);
        setPokeEvolve(response);
    }

    async function getEvolv(id: number) {
        const response = await axios.get(url + `pokemon-species/${id}`);
        const data = response.data;
        const desc = data.flavor_text_entries;
        const response2 = await axios.get(data.evolution_chain.url);
        const data2 = response2.data
        let arr = []; 
        let arrEvolves = []; 
        // return res.json(data2.chain);
        arr.push(data2.chain.species);
        if (data2.chain.evolves_to.length != 0) {
            arr.push(data2.chain.evolves_to[0].species);
            if (data2.chain.evolves_to[0].evolves_to.length != 0) {
                arr.push(data2.chain.evolves_to[0].evolves_to[0].species);
            }
        }
        arr.forEach((item) => {
            let t = item.url.lastIndexOf('species');
            let p1 = item.url.substring(0,t) 
            let p2 = item.url.substring(t+7,item.url.length)
            item.url = p1 + 'form' + p2;
        })
        // return res.json(arr);
        for (let i = 0; i < arr.length; i++) {
            const responseEvolvImg = await axios.get(arr[i].url);
            const sprite = responseEvolvImg.data.sprites.front_default;
            arrEvolves.push({
                name: arr[i].name,
                img: sprite
            })
        }
        const resultFinal = {
            evolvs: arrEvolves,
            desc: desc[7].flavor_text
        }
        return resultFinal;
    }

    function ResetEvolve() {
        setModal(false);
        setPokeEvolve(false)
    }

    useEffect(() => {
        result.refetch();
    }, [limit])
    useEffect(() => {
        setLimit(0);
        result.refetch();
    }, [filtro, pesquisa])

    return (
        <Container>
            <Modal className={modal ? "on" : "off"}>
                {!pokeEvolve ?
                    <Loading>
                        <span className="loader"></span>
                    </Loading>
                    :
                    <>
                        <button className='close' onClick={() => ResetEvolve()}>
                            <PiX size={32} color='#f2f2f2' />
                        </button>
                        <img
                            src={pokemon?.sprites.other.home.front_default}
                            alt="pokemon-img"
                            className='pokemon'
                        />
                        <div className='content'>
                            <div className='title'>
                                <h1 translate='no'>{pokemon?.name}</h1>
                                <ul className='types'>
                                    {pokemon?.types.map((type: any) => (
                                        <>
                                            {typesPokemon?.map((tt) => {
                                                if (tt.type === type.type.name) {
                                                    return (
                                                        <li style={{
                                                            background: tt.gradient,
                                                            boxShadow: `0px 0px 10px 0px ${tt.shadow}`
                                                        }}>
                                                            <img src={tt.simbol} alt="" />
                                                        </li>
                                                    );
                                                }
                                                else { return null }
                                            })}
                                        </>
                                    ))}
                                </ul>
                            </div>
                            <div className='desc'>
                                <h2 style={{ color: typesPokemon.find(t => t.type === pokemon?.types[0].type.name)?.color }}>
                                    Descrição:
                                </h2>
                                <p>
                                    {pokeEvolve?.desc}
                                </p>
                            </div>
                            <div className='evols'>
                                {pokeEvolve?.evolvs.map((item: any, index: number) => (
                                    <>
                                        <div
                                            className={item.name === pokemon?.name ? 'on' : 'off'}
                                            style={{
                                                backgroundColor: item.name === pokemon?.name ?
                                                    typesPokemon.find(t => t.type === pokemon?.types[0].type.name)?.color
                                                    :
                                                    'transparent'
                                            }}
                                        >
                                            <img src={item.img} alt="img-1" key={index} />
                                        </div>
                                        {index < pokeEvolve?.evolvs.length - 1 ?
                                            <PiArrowFatLineRightFill size={28} />
                                            :
                                            null
                                        }
                                    </>
                                ))}
                            </div>
                            <ul className='abilities'>
                                {pokemon?.stats.map((item: any) => (
                                    <li>
                                        <p>{item.stat.name.replace("-", " ")}</p>
                                        <div className='numb'
                                            style={{
                                                width: `${item.base_stat}%`,
                                                backgroundColor: colorP
                                            }}
                                        />
                                    </li>

                                ))}
                            </ul>
                        </div>
                        <div className="detalhe" style={{ backgroundColor: colorP }}>
                            <img src={LogoPokebola} alt='pokebola-1' className='pokebola-1' />
                            <img src={LogoPokebola} alt='pokebola-2' className='pokebola-2' />
                            <img src={LogoPokebola} alt='pokebola-3' className='pokebola-3' />
                            <img src={LogoPokebola} alt='pokebola-4' className='pokebola-4' />
                        </div>
                    </>
                }
            </Modal>

            <section className="head" style={{ background: `${setColorBrackground?.background}` }}>
                <img src={LogoPokemon} className='logo' alt="logo-pokemon" />
                <img src={LogoPokebola} className='back-pokebola1' alt="logo-pokebola1" />
                <img src={LogoPokebola} className='back-pokebola2' alt="logo-pokebola2" />
                <div className='home'>
                    <div className='content'>
                        <div style={{ 
                            display: innerWidth >= 390 ? "flex" : "block",
                            gap: innerWidth >= 390 ? 20 : 0,
                            alignItems: innerWidth >= 390 ? "center" : ""
                        }}>
                            <h1 translate='no'>{pokemonsHome[indexHome].nome}</h1>
                            <div className='types'>
                                {pokemonsHome[indexHome].types.map(i => (
                                    <div style={{ backgroundColor: `${typesPokemon[i].color}` }}>
                                        <img src={typesPokemon[i].simbol} alt="img-type" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p translate='no'>{pokemonsHome[indexHome].desc}</p>
                        <button>
                            <AiTwotoneThunderbolt color='#fff' size={20} />
                            &nbsp;
                            Mais detalhes
                        </button>
                    </div>
                    <div className="img-pokemon">
                        <img src={pokemonsHome[indexHome].img} alt="pokemon" />
                    </div>
                </div>
            </section>
            <section id="search">
                <Inputs>
                    <div className="types">
                        <div>
                            <GoPaste size={20} color='#fff' />
                            <p>Busque por tipo: </p>
                        </div>
                        <div className="select-type">
                            <button onClick={() => ClearFilter()}>
                                <GoHome size={ innerWidth >= 390 ? 32 : 24} color='#fff' />
                            </button>
                            <div className="container-tt">
                                {typesPokemon.map((item) => (
                                    <button
                                        className={`type-container ${filtro.includes(item.type) ? "active" : null}`}
                                        style={{ backgroundColor: `` }}
                                        onClick={() => RemoverAddFiltro(item.type)}
                                    >
                                        <img
                                            src={item.logo}
                                            alt={`logo-${item.type}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form className="input-search">
                        <div>
                            <GoSearch size={20} color='#fff' />
                            <p>Encontre seu pokemon: </p>
                        </div>
                        <div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder='Eu escolho você!'
                                    // className='teste'
                                    value={pesquisa}
                                    onChangeCapture={(e) => setPesquisa(e.currentTarget.value)}
                                />
                            </div>
                            <button onClick={() => setLoading(!loading)}>
                                <GoSearch size={24} color='#fff' />
                            </button>
                        </div>
                    </form>
                </Inputs>

                <div className="results">
                    {result.isLoading || result.isFetching ?
                        <Loading>
                            <span className="loader"></span>
                        </Loading>
                        :
                        <ul className='list-pokemons'>
                            {result.data?.map((item: any) => (
                                <li>
                                    <ItemPoke
                                        item={item}
                                        click={() => AddPokemon(item)}
                                    />
                                </li>
                            ))}
                        </ul>
                    }
                </div>

                <div className="pagination">
                    <button
                        disabled={limit === 0 ? true : false}
                        onClick={() => setLimit(limit - 9)}
                        className={limit === 0 ? "disabled" : ""}
                    >
                        Anterior
                    </button>
                    <button
                        disabled={limitButton === 9 ? false : true}
                        onClick={() => Next()}
                        className={limitButton === 9 ? "" : "disabled"}
                    >
                        Próximo
                    </button>
                </div>
            </section>
        </Container>
    );
}