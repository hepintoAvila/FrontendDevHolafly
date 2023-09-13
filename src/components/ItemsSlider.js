// @flow
import React from 'react';
// components;
import ButtonMensaje from '../components/ButtonMensaje';
type MenuItemType = {
    key: string,
    mensaje: string,
    images: string,
};
const ItemsSlider = ({ items }: MenuItemType): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <ButtonMensaje mensaje={items.mensaje} image={items.image} />
        </React.Fragment>
    );
};
export default ItemsSlider;