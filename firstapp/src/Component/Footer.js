import React, { Fragment } from 'react';

const Footer = (props) => {
    return(
        <Fragment>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.month} {props.year}</h2>
            </center>
        </Fragment>
    )
}

export default Footer;