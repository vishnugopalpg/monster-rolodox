import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    console.log(props);
    console.log(props.monsters.length);
    if (props.monsters.length > 0) {
        return <div className='card-list'>
            {
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))
            }

        </div>;
    } else {
        return <div>
            <h1>No Data Found</h1>
        </div>
    }
};