import React from "react"
import { GiSnake,GiFrog,GiPencil} from "react-icons/gi"

const Icon=({name})=>{
    switch (name){
    case 'snake':
        return <GiSnake className='icon'/>
    case 'frog':
        return<GiFrog className='icon'/>
    default :
        return<GiPencil className='icon'/>
    }

}

export default Icon