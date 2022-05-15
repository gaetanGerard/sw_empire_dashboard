import React, { ReactNode } from 'react';

// Import utility functions
import { starwars, aurebesh } from '../../utils/utility';

type TypoProps = {
    HTMLElement: any,
    className?: string,
    children: ReactNode,
}

const Typography = (props: TypoProps): JSX.Element => {

    const Component = props.HTMLElement ? props.HTMLElement : "p";

    return (
        <Component className={`typography-${props.HTMLElement} ${props.className ? props.className : ""}`} onMouseEnter={starwars} onMouseLeave={aurebesh}>{props.children}</Component>
    )
}

export default Typography