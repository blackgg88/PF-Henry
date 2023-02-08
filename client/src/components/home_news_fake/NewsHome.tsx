import React from 'react'
import { NavLink } from 'react-router-dom';

export const NewsHome = () => {
const imagesNews=[
  "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/26-noticias-tecnologia-comenzar-manana-informado-ultimo-2024411.jpg",
  "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/09/25-noticias-tecnologia-comenzar-manana-informado-ultimo-2058681.jpg",
  "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/29-noticias-tecnologia-comenzar-manana-informado-ultimo-2822215.jpg",
  "https://ichef.bbci.co.uk/news/640/cpsprodpb/17DEE/production/_117347779_tumundo_opcion2copy.png",
  "https://www.semana.com/resizer/g5TukiBvL6oC5_REJWhV5GPXgrc=/arc-anglerfish-arc2-prod-semana/public/FP6C4T7ROFE37PQRVGRNXPLRAU.jpeg",
  "https://itpeers.com/wp-content/uploads/2020/10/3570310-copy-scaled.jpg"
]

const titles=[
  "productos que han revolucionado el mercado",
  "IOT la migracion de la nueva Era tecnologica",
  "Gatgets mas vendidos en el 2022",
  "Como Afectan las redes y la Tecnologica al mundo",
  "Comienzo de la Nueva era Tecnologica IA",
  "Que se espera para el 2023 en el desarrollo tecnologico",
]

  return (
    <div className="news_fake_container" >
        {imagesNews.map((img:string,index:number)=>{
            return(
                <NavLink  to="/news"  className='news_fake_card'>
                    <img src={img} alt="news_image" />
                    <p>{titles[index]}</p>
              </NavLink>
            )
        })}
    </div>
  )
}
