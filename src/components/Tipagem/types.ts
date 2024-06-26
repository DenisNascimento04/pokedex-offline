import logoGrass from '../../assets/img-types/grass.png';
import logoEletric from '../../assets/img-types/eletric.png';
import logorRock from '../../assets/img-types/rock.png';
import logoWater from '../../assets/img-types/water.png';
import logoFire from '../../assets/img-types/fire.png';
import logoFairy from '../../assets/img-types/fairy.png';
import logoBug from '../../assets/img-types/inseto.png';
import logoPoison from '../../assets/img-types/poison.png';
import logoFlying from '../../assets/img-types/flying.png';
import logoGhost from '../../assets/img-types/ghost.png';
import logoDark from '../../assets/img-types/dark.png';
import logoIce from '../../assets/img-types/ice.png';
import logoNormal from '../../assets/img-types/normal.png';
import logoDragon from '../../assets/img-types/dragon.png';
import logoGround from '../../assets/img-types/ground.png';
import logoPsychic from '../../assets/img-types/psychic.png';
import logoFigthing from '../../assets/img-types/fighting.png';
import logoSteel from '../../assets/img-types/steel.png';

import simbolGrass from '../../assets/simbol-types/grass.png';
import simbolEletric from '../../assets/simbol-types/eletric.png';
import simbolRock from '../../assets/simbol-types/rock.png';
import simbolWater from '../../assets/simbol-types/water.png';
import simbolFire from '../../assets/simbol-types/fire.png';
import simbolFairy from '../../assets/simbol-types/fairy.png';
import simbolBug from '../../assets/simbol-types/inseto.png';
import simbolPoison from '../../assets/simbol-types/poison.png';
import simbolFlying from '../../assets/simbol-types/flying.png';
import simbolGhost from '../../assets/simbol-types/ghost.png';
import simbolDark from '../../assets/simbol-types/dark.png';
import simbolIce from '../../assets/simbol-types/ice.png';
import simbolNormal from '../../assets/simbol-types/normal.png';
import simbolDragon from '../../assets/simbol-types/dragon.png';
import simbolGround from '../../assets/simbol-types/ground.png';
import simbolPsychic from '../../assets/simbol-types/psychic.png';
import simbolFigthing from '../../assets/simbol-types/fighting.png';
import simbolSteel from '../../assets/simbol-types/steel.png';


import PokemonIvysaur from '../../assets/ivysaur-home.png'
import PokemonVenusaur from '../../assets/venusaur-home.png'
import PokemonBulbasaur from '../../assets/bulbasaur-home.png'
import PokemonCharizard from '../../assets/charizard-home.png'

export const typesPokemon = [
     {
        id: 0,
        type: "poison",
        color: "rgba(194,97,212,1)",
        gradient: "linear-gradient(90deg, rgba(194,97,212,1) 0%, rgba(168,100,199,1) 100%)",
        shadow: "rgba(163,107,203,0.7)",
        simbol: simbolPoison,
        logo: logoPoison
    },
    {
        id: 1,
        type: "rock",
        color: "#AB9153",
        gradient: "linear-gradient(90deg, #D7CD90 0%, #C5B489 100%)",
        shadow: "rgba(203,193,148,0.7)",
        logo: logorRock,
        simbol: simbolRock
    },
    {
        id: 2,
        type: "bug",
        color: "#2E5C1A",
        gradient: "linear-gradient(90deg, #AFC836 0%, #92BC2C 100%)",
        shadow: "rgba(152,195,47,0.7)",
        logo: logoBug,
        simbol: simbolBug
    },
    {
        id: 3,
        type: "fire",
        color: "#E27221",
        gradient: "linear-gradient(90deg, #FBAE46 0%, #FB9B51 100%)",
        shadow: "rgba(254,158,84,0.7)",
        logo: logoFire,
        simbol: simbolFire
    },
    {
        id: 4,
        type: "water",
        color: "#0067AB",
        gradient: "linear-gradient(90deg, #6CBDE4 0%, #4A90DD 100%)",
        shadow: "rgba(85,158,223,0.7)",
        logo: logoWater,
        simbol: simbolWater
    },
    {
        id: 5,
        type: "grass",
        color: "#68C748",
        gradient: "linear-gradient(90deg, #5AC178 0%, #5FBC51 100%)",
        shadow: "rgba(100,185,84,.7)",
        logo: logoGrass,
        simbol: simbolGrass
    },
    {
        id: 6,
        type: "electric",
        color: "#E7D113",
        gradient: "linear-gradient(90deg, #FBE273 0%, #EDD53E 100%)",
        shadow: "rgba(244,213,86,0.7)",
        logo: logoEletric,
        simbol: simbolEletric
    },
    {
        id: 7,
        type: "fairy",
        color: "#F37DB8",
        gradient: "linear-gradient(90deg, #F3A7E7 0%, #EC8CE5 100%)",
        shadow: "rgba(243,148,233,0.7)",
        logo: logoFairy,
        simbol: simbolFairy
    },
    {
        id: 8,
        type: "flying",
        color: "#648ABC",
        gradient: "linear-gradient(90deg, #A6C2F2 0%, #90A7DA 100%)",
        shadow: "rgba(157,181,228,0.7)",
        logo: logoFlying,
        simbol: simbolFlying
    },
    {
        id: 9,
        type: "ghost",
        color: "#594593",
        gradient: "linear-gradient(90deg, #7773D4 0%, #516AAC 100%)",
        shadow: "rgba(101,108,198,0.7)",
        logo: logoGhost,
        simbol: simbolGhost
    },
    {
        id: 10,
        type: "dark",
        color: "#593123",
        gradient: "linear-gradient(90deg, #593123 0%, #8C6E64 100%)",
        shadow: "rgba(89,49,35,0.35)",
        logo: logoDark,
        simbol: simbolDark
    },
    {
        id: 11,
        type: "ice",
        color: "#38A3C4",
        gradient: "linear-gradient(90deg, #8CDDD4 0%, #70CCBD 100%)",
        shadow: "rgba(126,212,201,0.7)",
        logo: logoIce,
        simbol: simbolIce
    },
    {
        id: 12,
        type: "normal",
        color: "#9298A4",
        gradient: "linear-gradient(90deg, #A3A49E 0%, #9298A4 100%)",
        shadow: "rgba(93,89,106,0.7)",
        logo: logoNormal,
        simbol: simbolNormal
    },
    {
        id: 13,
        type: "dragon",
        color: "#7B6FA6",
        gradient: "linear-gradient(90deg, #7B6FA6 0%, #A199BF 100%)",
        shadow: "rgba(123,111,166,0.65)",
        logo: logoDragon,
        simbol: simbolDragon
    },
    {
        id: 14,
        type: "ground",
        color: "#D9A13B",
        gradient: "linear-gradient(90deg, #D9A13B 0%, #D99543 100%)",
        shadow: "rgba(217,161,59,0.85)",
        logo: logoGround,
        simbol: simbolGround
    },
    {
        id: 15,
        type: "psychic",
        color: "#D95592",
        gradient: "linear-gradient(90deg, #D95592 0%, #D97EA8 100%)",
        shadow: "rgba(217,85,146,0.85)",
        logo: logoPsychic,
        simbol: simbolPsychic
    },
    {
        id: 16,
        type: "fighting",
        color: "#D94E41",
        gradient: "linear-gradient(90deg, #D94E41 0%, #D9736A 100%)",
        shadow: "rgba(217,78,65,0.85)",
        logo: logoFigthing,
        simbol: simbolFigthing
    },
    {
        id: 17,
        type: "steel",
        color: "#8FA1A6",
        gradient: "linear-gradient(90deg, #8FA1A6 0%, #AEBABF 100%)",
        shadow: "rgba(143,161,166,0.85)",
        logo: logoSteel,
        simbol: simbolSteel
    },
]

export const pokemonsHome = [
    {
        nome: "Bulbasaur",
        types: [5,0],
        img: PokemonBulbasaur,
        desc: `Bulbasaur é um Pokémon do tipo 
        Grama/Veneno que carrega um pequeno broto em suas costas que 
        cresce com um tempo, com ela ele pode utiliza habilidades 
        como Vine Whip para atacar. Bulbasaur é conhecimento 
        por sua lealdade, determinação e 
        temperamento equilibrado. Um parceiro confiável, 
        ideal para aqueles que buscam um Pokemon 
        versátil e capaz de enfrentar diversos desafios 
        com sua habilidades de planta e veneno.`
    },
    {
        nome: "Ivysaur",
        types: [5,0],
        img: PokemonIvysaur,
        desc: `Ivysaur é a evolução do Bulbasaur, um Pokémon do tipo 
        Grama/Veneno. Com sua semente em constante crescimento 
        nas costas,ele utiliza habilidadescomo Vine Whip para atacar. 
        Ivysaur é conhecimento por sua lealdade, determinação e 
        temperamento equilibrado. Sua evolução para Venusaur é 
        aguardada por treinadores, pois se torna ainda mais poderoso.
        Um parceiro confiável, ideal para aqueles que buscam um Pokemon 
        versátil e capaz de enfrentar diversos desafios com sua habilidades
        de planta e veneno.`
    },
    {
        nome: "Venusaur",
        types: [5,0],
        img: PokemonVenusaur,
        desc: `Venusaur é a ultima evolução do Bulbasaur, um Pokémon do tipo 
        Grama/Veneno. Agora com sua semente já tranformada em uma planta, 
        e seu corpo ainda maior, ganha muito mais força e resistência. 
        Venusaur se mantem leal, determinado e amável
        porém essa caracteristicas são ainda mais ampliadas.
        Com a planta em suas costas pode absorver energia solar para se regenerar
        ou para concentrar em um rajada enegética extremamente poderosa.`
    },
    {
        nome: "Charizard",
        types: [3],
        img: PokemonCharizard,
        desc: `Venusaur é a ultima evolução do Bulbasaur, um Pokémon do tipo 
        Grama/Veneno. Agora com sua semente já tranformada em uma planta, 
        e seu corpo ainda maior, ganha muito mais força e resistência. 
        Venusaur se mantem leal, determinado e amável
        porém essa caracteristicas são ainda mais ampliadas.
        Com a planta em suas costas pode absorver energia solar para se regenerar
        ou para concentrar em um rajada enegética extremamente poderosa.`
    }
]

export interface PropsPokemon {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
}
  
export interface Ability {
ability: Ability2
is_hidden: boolean
slot: number
}

export interface Ability2 {
name: string
url: string
}

export interface Cries {
latest: string
legacy: string
}

export interface Form {
name: string
url: string
}

export interface Index {
game_index: number
version: Version
}

export interface Version {
name: string
url: string
}

export interface HeldItem {
item: Item
version_details: VersionDetail[]
}

export interface Item {
name: string
url: string
}

export interface VersionDetail {
rarity: number
version: Version2
}

export interface Version2 {
name: string
url: string
}

export interface Mfe {
move: Move
version_group_details: VersionGroupDetail[]
}

export interface Move {
name: string
url: string
}

export interface VersionGroupDetail {
level_learned_at: number
move_learn_method: MoveLearnMethod
version_group: VersionGroup
}

export interface MoveLearnMethod {
name: string
url: string
}

export interface VersionGroup {
name: string
url: string
}

export interface Species {
name: string
url: string
}

export interface Sprites {
back_default: string
back_female: any
back_shiny: string
back_shiny_female: any
front_default: string
front_female: any
front_shiny: string
front_shiny_female: any
other: Other
versions: Versions
}

export interface Other {
dream_world: DreamWorld
home: Home
"official-artwork": OfficialArtwork
showdown: Showdown
}

export interface DreamWorld {
front_default: string
front_female: any
}

export interface Home {
front_default: string
front_female: any
front_shiny: string
front_shiny_female: any
}

export interface OfficialArtwork {
front_default: string
front_shiny: string
}

export interface Showdown {
back_default: string
back_female: any
back_shiny: string
back_shiny_female: any
front_default: string
front_female: any
front_shiny: string
front_shiny_female: any
}

export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
}

export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
}

export interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
}

export interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
}

export interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
}

export interface Emerald {
    front_default: string
    front_shiny: string
}

export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
}

export interface DiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface HeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface Platinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface GenerationV {
    "black-white": BlackWhite
}

export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface Animated {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
}

export interface OmegarubyAlphasapphire {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface XY {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export interface Icons {
    front_default: string
    front_female: any
}

export interface UltraSunUltraMoon {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface GenerationViii {
    icons: Icons2
}

export interface Icons2 {
    front_default: string
    front_female: any
}

export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
}

export interface Stat2 {
    name: string
    url: string
}

export interface Type {
    slot: number
    type: Type2
}

export interface Type2 {
    name: string
    url: string
}
  