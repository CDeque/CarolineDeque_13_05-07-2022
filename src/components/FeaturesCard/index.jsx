import styled from "styled-components";
import { PropTypes } from "prop-types";
/**
 *
 * @param {img} icon
 * @param {string} alt
 * @param {string} title
 * @param {string} text
 * @returns
 */
export default function FeaturesCard(feature) {
    return (
        <FeatureItem className="feature-item">
            <FeatureIcon
                src={feature.icon}
                alt={feature.altContent}
                className="feature-icon"
            />
            <FeatureItemTitle className="feature-item-title">
                {feature.title}
            </FeatureItemTitle>
            <p>{feature.text}</p>
        </FeatureItem>
    );
}

/**
 * propTypes
 */
FeaturesCard.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
/**
 * FeaturesCard style
 */
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
