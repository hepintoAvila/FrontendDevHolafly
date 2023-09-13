// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import logoPuff from '../assets/images/logo.png';

/*
 * get options
 */

type SearchResultItem = {
    id: number,
    title: string,
    redirectTo: string,
    icon: string,
};

type TopbarSearchProps = {
    items: Array<SearchResultItem>,
};
/**
 * TopbarMenu
 */
const TopBar_alignItems = {
    row: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        zIndex: 10,
        flex: 1,
    },
    logo: {
        position: 'relative',
        right: 0,
        flex: 1,
        zIndex: 10
    }
};
const TopbarMenu = (props: TopbarSearchProps): React$Element<any> => {
    return (
        <>
            <React.Fragment>
                <div className="topnav">
                    <Col md={3} style={TopBar_alignItems.logo}>
                        <Link to="#">
                            <div className="navbar-dark">
                                <span className="topnav-logo-menu-sm">
                                    <img src={logoPuff} alt="logo" height="90" width="135" />
                                </span>
                            </div>
                        </Link>
                    </Col>
                </div>
            </React.Fragment>
        </>
    );
};

export default TopbarMenu;
