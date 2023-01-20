import React from 'react'
// IMAGE ="https://www.codedimension.com.ar/public/images/noticias/318-tecnologia-5g-que-son-las-redes-de-comunicacion-inalambrica.jpg"
export const NewsHome = () => {
const imagesNews=["1","2","3","4","5","6"]

  return (
    <div className="news_fake_container">
        {imagesNews.map((img:string)=>{
            return(
                <div className='news_fake_card'>
                    <img src={img} alt="news_image" />
                </div>
            )
        })}
    </div>
  )
}
