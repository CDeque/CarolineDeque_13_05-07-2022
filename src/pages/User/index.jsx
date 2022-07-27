//------ Imports ------//

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BalanceCard from "../../components/BalanceCard";
import UserForm from "../../components/userForm";
import { userAccountData } from "../../data/data";
import { userProfile } from "../../services";

/**
 *
 * @returns profile page
 * @typedef {boolean} if !auth can't access profile
 */
export default function User() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!auth._id) {
            navigate("/login");
        } else {
            dispatch(userProfile());
        }
    }, [auth._id, navigate, dispatch]);

    console.log(auth, user);
    const [showEditForm, setShowEditForm] = useState(false);
    const showForm = () => {
        setShowEditForm(!showEditForm);
    };
    return (
        <Main className="main bg-dark">
            <Header className="header">
                <h1>
                    Welcome back <br />
                    {user.firstName + " " + user.lastName}
                </h1>
                {showEditForm ? (
                    <UserForm showForm={showForm} />
                ) : (
                    <EditButton className="edit-button" onClick={showForm}>
                        Edit Name
                    </EditButton>
                )}
            </Header>
            <H2 className="sr-only">Accounts</H2>
            {userAccountData.map((data, index) => (
                <BalanceCard
                    key={index}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </Main>
    );
}

/**
 * page style
 */
const Main = styled.main`
    background-color: #12002b;
    flex: 1;
`;

const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;
const EditButton = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`;
const H2 = styled.h2`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;
