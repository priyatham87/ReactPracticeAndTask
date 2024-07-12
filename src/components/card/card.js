import { Heading3, Heading4 } from "../heading/heading"
import { Image } from "../image/image"
import "./card.css"


export const Customcard=(prop)=>{
    const {team,cups,jerseyimg}=prop.data
    return(
       <div className='card'>
        <Heading3 title={team}></Heading3>
        <Image source={jerseyimg} 
            altText="ipldata"
            width={300} 
            height={250}>
        </Image>
        <Heading4 cups={cups}></Heading4>
       </div>
    )
}