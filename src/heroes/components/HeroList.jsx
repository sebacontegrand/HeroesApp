import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const Heroes = getHeroesByPublisher(publisher);



    return (
        
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {Heroes.map((e) => (
                        <HeroCard key={e.id} {...e}/>
                    )
                )}
            </div>

        


    )
}
