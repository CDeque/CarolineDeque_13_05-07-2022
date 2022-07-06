//------Imports------//
import styled from "styled-components";

/**
 *
 * @returns Footer component
 */

export default function Footer() {
    return (
        <FooterContainer className="footer">
            <FooterText className="footer-text">
                Copyright 2020 Argent Bank
            </FooterText>
        </FooterContainer>
    );
}

/**
 * Footer Style
 */
const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;
`;

const FooterText = styled.p`
    margin: 0;
    padding: 0;
`;
