import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editUser } from "../../services";

/**
 *
 * @param {*} props allows to close the Edit form when cancelling
 * @returns function to edit username
 *
 */
export default function UserForm(props) {
    const dispatch = useDispatch();
    const [editUserName, setEditUserName] = useState({
        firstName: "",
        lastName: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editUserName.firstName.trim().length !== 0) {
            dispatch(editUser(editUserName));
            props.showForm(false);
        } else {
            props.showForm(true);
        }
    };

    return (
        <UserFormContainer className="user_form_container">
            <Form onSubmit={handleSubmit}>
                <label htmlFor="firstName"></label>
                <EditInput
                    type="text"
                    placeholder="Tony"
                    onChange={(e) =>
                        setEditUserName({
                            ...editUserName,
                            firstName: e.target.value,
                        })
                    }
                    required
                />
                <label htmlFor="lastName"></label>
                <EditInput
                    type="text"
                    placeholder="Stark"
                    onChange={(e) =>
                        setEditUserName({
                            ...editUserName,
                            lastName: e.target.value,
                        })
                    }
                    required
                />
            </Form>
            <ButtonContainer className="button_container">
                <Button
                    className="save_button"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
                <Button className="cancel_button" onClick={props.showForm}>
                    Cancel
                </Button>
            </ButtonContainer>
        </UserFormContainer>
    );
}

/**UserForm style */
const UserFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`;
const EditInput = styled.input`
    border: solid 3px #b9c5ce;
    border-radius: 2.5px;
    height: 2rem;
    width: 150px;
    background-color: #fff;

    ::placeholder {
        opacity: 0.7;
        font-size: 16px;
        padding-left: 5px;
        color: #c4cfd9;
    }
`;
const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;
const Button = styled.button`
    width: 75px;
    height: 2rem;
    background-color: #776af6;
    border-color: #776af6;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
`;
