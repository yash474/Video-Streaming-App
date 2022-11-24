import React from 'react';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';
import selctionFilter from '../utils/selection-filter';

export default function Browse() {

    // pull the series and films pull the slides to browse container
    const { series } = useContent( "series") ;
    const { films } = useContent( "films") ;
    // console.log(series)
    // console.log(films)
    const slides = selctionFilter( { series , films }) ;
    // console.log("object")
    // console.log(slides );


    return (
        <BrowseContainer slides={slides} />
    )
}
