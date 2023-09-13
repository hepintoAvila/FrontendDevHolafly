// @flow
import React from 'react';
// components
import TopbarMenu from '../components/TopbarMenu'
const Topbar = () => {
    return (
        <React.Fragment>
            <div className={`navbar-custom`}>

                {/* toggle for horizontal layout */}
                <TopbarMenu />
            </div>
        </React.Fragment>
    );
};
export default Topbar;
