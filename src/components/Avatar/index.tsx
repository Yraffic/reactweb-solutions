import './styles.scss'
import yuriPng from '../../assets/yuri.webp'

export const Avatar = ()=>{
    return (
        <div className='
            avatar
            flex
            align-items
            justify-content
            flex-direction
        '>
            <div className='container-avatar flex align-items justify-content flex-direction'>
                <img 
                className='avatar-image'
                src={yuriPng} 
                alt="foto ceo yuri" 
                />
                <p>Sou um desenvolvedor de software com experiência em JavaScript, TypeScript, HTML, CSS e frameworks como React.js, Next.js e Node.js. Também tenho conhecimento em construção de APIs, bancos de dados como Postgres e MySQL</p>
                <p className='name-avatar'>Yuri Raffic</p>
                <p className='name-function'>
                    CEO e Dsenvolvedor full Stack
                </p>
            </div>
        </div>
    )
}