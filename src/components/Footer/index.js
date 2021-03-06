import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H1, H4} from '../Typography'



const SectionContainer = styled.div`
  max-width: 100vw;
  padding: max(40px,${theme.space.s1}) 0;
  padding-left: ${theme.space.site};
  
`

const HeadingContainer = styled.div`
  margin-bottom: max(24px,${theme.space.s3});
  width: 80vw;
`
const BodyContainer = styled.div`
    padding-top: ${theme.space.s3};
    padding-bottom: ${theme.space.s2};
    width: 70vw;
`
const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `
    margin-bottom: max(24px,${theme.space.s3});

`

const Footer = () => {
    return (
        <footer>
            <SectionContainer>
                <HeadingContainer>
                    <H1>Say hello</H1>
                </HeadingContainer>
                <BodyContainer>
                    <ArticleUL>
                        <ArticleLI>
                            <H4><a href="mailto:marco.pacifico@gmail.com" target="_blank" rel="noreferrer">Email</a></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><a href="https://www.linkedin.com/in/marcopacifico/" target="_blank" rel="noreferrer">LinkedIn</a></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><a href="https://twitter.com/marcopacifico" target="_blank" rel="noreferrer">Twitter</a></H4> 
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><a href="https://dribbble.com/marcopacifico" target="_blank" rel="noreferrer">Dribbble</a></H4>
                        </ArticleLI> 
                        <ArticleLI> 
                            <H4><a href="https://www.instagram.com/marcopacifico" target="_blank" rel="noreferrer">Instagram</a></H4>
                        </ArticleLI> 
                    </ArticleUL>
                </BodyContainer>
            </SectionContainer>
        </footer>
    )
}

    
export default Footer


