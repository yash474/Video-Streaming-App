import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';



export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV </Feature.Title>
                    <Feature.Title>shows and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time 😎</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try It Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch ? Enter your email to create or restart your membership</OptForm.Text>
                        {/* <OptForm.Break /> */}
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />


        </>
    )
}
