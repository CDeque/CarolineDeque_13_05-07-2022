import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TransactionCard from "../../components/TransactionCard";

/**
 *
 * @returns Transaction Page
 */
export default function Transactions() {
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth._id) {
            navigate("/login");
        }
    }, [auth._id, navigate]);
    return (
        <Main>
            <TransactionsHeader className="header">
                <p className="header_title">Argent Bank Checking (x8349)</p>
                <p className="header_balance">$2,082.79</p>
                <p className="header_text">Available Balance</p>
            </TransactionsHeader>
            <Section className="transaction_section">
                <TitleContainer className="title_container">
                    <TransactionTitle className="transaction-title">
                        <Date>DATE</Date>
                        <p>DESCRIPTION</p>
                        <p>AMOUNT</p>
                        <p>BALANCE</p>
                    </TransactionTitle>
                </TitleContainer>
                <TransactionCardsContainer className="transaction_cards_container">
                    <TransactionCard amount="$5.00" balance="$2082.79" />
                    <TransactionCard amount="$10.00" balance="$2087.79" />
                    <TransactionCard amount="$20.00" balance="$2097.79" />
                    <TransactionCard amount="$30.00" balance="$2117.79" />
                    <TransactionCard amount="$40.00" balance="$2147.79" />
                    <TransactionCard amount="`50.00" balance="$2187.79" />
                </TransactionCardsContainer>
            </Section>
        </Main>
    );
}
/**
 * return Transactions style
 */
const Main = styled.main`
    width: 100%;
    background-color: #12002b;
    flex: 1;
`;
const TransactionsHeader = styled.div`
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
`;
const Section = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const TransactionTitle = styled.div`
    width: 60%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15rem;
`;
const Date = styled.p`
    margin-left: -2rem;
    margin-right: 4rem;
`;
const TransactionCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
