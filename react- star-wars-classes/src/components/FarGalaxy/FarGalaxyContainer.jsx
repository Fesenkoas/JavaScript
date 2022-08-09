import FarGalaxy from './FarGalaxy'
import {base_url} from '../../utils/constants'
import Preloader from '../common/Preloader/Preloader'
import { useEffect } from 'react';
import { useState } from 'react';

const FarGalaxyContainer = () =>{
   
    const[isLoading, setIsLoading] = useState(true)
    const[openingCrawl, setOpeningCrawl] = useState('')
    
     useEffect ( () =>{
          const text = sessionStorage.getItem('opening_crawl')
          if(text){
              setOpeningCrawl(text)
              setIsLoading(false)
          }else{
          const episode = Math.floor(1 + Math.random()*6);
          fetch(`${base_url}/v1/films/${episode}`)
          .then(response =>response.json())
          .then(data => {
              
              setOpeningCrawl(data.opening_crawl)
              setIsLoading(false)
              sessionStorage.setItem('opening_crawl', data.opening_crawl)
          });
          }
      },[])
 
    return (
      <>
        {isLoading?<Preloader/>:<FarGalaxy openingCrawl={openingCrawl}/>}
      </>
    )
}


export default  FarGalaxyContainer;