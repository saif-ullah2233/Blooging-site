import React from "react";
import { Hero } from '../components/Heor'
import { Getstarted } from '../components/Getstarted'
import { Hikingassintials } from '../components/Hikingassintials'
import { Mapunderstanding } from '../components/Understandmap'
import { Footer } from '../components/Footer'


export const Home = () =>{
    return(
       <>
         <div>
              <div className='bg-black w-screen h-full'>
                 <Hero />
              </div>
              <div>
               <Getstarted />
              </div>
              <div>
               <Hikingassintials />
              </div>
              <div>
               <Mapunderstanding />
              </div>
              <div>
               <Footer />
              </div>
        </div>
       </>
    )
}