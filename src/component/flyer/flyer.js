import React from 'react';
import { Favourite, isActive } from '../actions/Favourite';
import ImageComponent from '../image/image';

const Flyer = ({ flyer, modifyChoices }) => {
    const { retailer, title, category } = flyer;
    let persistent = window.localStorage.getItem('shopfully_favourite')
    if (!persistent) {
		persistent = []
	} else {
		persistent = JSON.parse(persistent)
	}
    const active = isActive(flyer, persistent)

    return (
        <>
            <div className="flyer">
                <ImageComponent width='100%' src='/images/placeholder.png' />
                <div className='detail'>
                    <h4>{retailer}</h4>
                    <h3>{title}</h3>
                    <h5>{category}</h5>
                </div>
            </div>
            <Favourite
                flyer={flyer}
                modifyChoices={modifyChoices}
                active={active}
            />
        </>
    );
};

export default Flyer;