//------ Imports ------//
import styled from "styled-components";
import ChatIcon from "../../assets/icon-chat.png";
import MoneyIcon from "../../assets/icon-money.png";
import SecurityIcon from "../../assets/icon-security.png";
import BankTree from "../../assets/bank-tree.jpeg";

export default function Home() {
    return (
        <Main>
            <HeroDiv className="hero">
                <HeroSection className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees</p>
                    <p className="subtitle">No minimun deposit</p>
                    <p className="subtitle">High interest rates</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </HeroSection>
            </HeroDiv>
            <FeaturesSection className="features">
                <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <FeatureIcon
                        src={ChatIcon}
                        alt="Chat Icon"
                        className="feature-icon"
                    />
                    <FeatureItemTitle className="feature-item-title">
                        You are our #1 priority
                    </FeatureItemTitle>
                    <p>
                        Need to talk to a representative? You can get in touch
                        through our 24/7 chat or through a phone call in less
                        than 5 minutes.
                    </p>
                </div>
                <div className="feature-item">
                    <FeatureIcon
                        src={MoneyIcon}
                        alt="Money Icon"
                        className="feature-icon"
                    />
                    <h3 className="feature-item-title">
                        More savings means higher rates
                    </h3>
                    <p>
                        The more you save with us, the higher your interest rate
                        will be!
                    </p>
                </div>
                <FeatureItem className="feature-item">
                    <FeatureIcon
                        src={SecurityIcon}
                        alt="Security Icon"
                        className="feature-icon"
                    />
                    <h3 className="feature-item-title">
                        Security you can trust
                    </h3>
                    <p>
                        We use top of the line encryption to make sure your data
                        and money is always safe.
                    </p>
                </FeatureItem>
            </FeaturesSection>
        </Main>
    );
}

/**
 * Home Style
 */

const Main = styled.main`
    flex: 1;
`;

const HeroDiv = styled.div`
    background-image: url(${BankTree});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    
    @media (min-width: 920px) {
          height: 400px;
          background-position: 0% 33%;
        
`;

const HeroSection = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }
    .subtitle {
        font-weight: bold;
        font-size: 1rem;
        margin: 0;

        @media (min-width: 920px) {
            font-size: 1.5rem;
        }
    }
    .text {
        margin-bottom: 0;
        font-size: 0.9rem;

        @media (min-width: 920px) {
            font-size: 1.2rem;
        }
    }
`;
const FeaturesSection = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 920px) {
        flex-direction: row;
    }
`;
const FeatureIcon = styled.img`
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
`;

const FeatureItem = styled.div`
    flex: 1;
    padding: 2.5rem;
`;

const FeatureItemTitle = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;
