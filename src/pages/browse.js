import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {

    // pull the series and films pull the slides to browse container
    const { series } = useContent( "series") ;
    const { films } = useContent( "films") ;
    
    return (

            
        <p> HAR HAR MAHADEV - browse</p>
    )
}
