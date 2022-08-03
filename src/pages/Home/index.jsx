//------ Imports ------//
import styled from "styled-components";
import { features } from "../../data/data";
import BankTree from "../../assets/bank-tree.jpeg";
import FeaturesCard from "../../components/FeaturesCard";

/**
 *
 * @returns  HomePage
 */
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
                {features.map((feature, index) => (
                    <FeaturesCard
                        key={index}
                        icon={feature.icon}
                        alt={feature.altContent}
                        title={feature.title}
                        text={feature.text}
                    />
                ))}
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
    }
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
