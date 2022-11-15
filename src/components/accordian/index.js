import { useState, useContext, createContext } from "react"
import React from 'react'
import { Container, Inner,  Title, Header, Body, Item } from './styles/accordian'

const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};


Accordian.Item = function AccordianItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }} >
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordian.Header = function AccordianHeader({ children, ...restProps }) {
    //eslint-disable-next-line no-unused-vars
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            {toggleShow ? <img src="/images/icons/close-slim.png" alt="Close" /> : <img src="/images/icons/add.png" alt="Open" />
            }
        </Header>
    );
    // setToggleShow((toggleShow) => !toggleShow) :: we are writing it like this because we want to get rid of react batch behaviour , otherwise we would have write it like this setToggleShow(!toggleShow)
}


Accordian.Body = function AccordianBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}

