import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.svg';
import Button from '../../components/Button';
import HorizontalDivider from '../../components/HorizontalDivider';
import PageContainer from '../../components/PageContainer';
import CodeInput from './components/CodeInput';
import { useCode } from './hooks/useCode';

const Logo = styled.img`
    display: block;
    width: 100%;
    max-width: 246.76px;
    height: auto;
`;

const StartView = () => {
    const {
        code,
        isCodeValid,
        submitHandler,
        inputRefs,
        loginButtonRef,
        codeInputFieldChangeHandler,
    } = useCode();

    return (
        <PageContainer color="primary">
            <Logo src={logo} alt="52 MEMORIES logo" className="mt-5 mb-6 mx-auto" />
            <h1 className="color-white text-center">Der Schlüssel zum Glück</h1>
            <HorizontalDivider color="white" className="my-4" />
            <div className="color-white text-center mb-4">
                Gib hier den Hochzeichts-Code ein oder erstelle eine Testkarte
            </div>
            <CodeInput
                code={code}
                className="mb-6"
                inputRefs={inputRefs}
                codeInputFieldChangeHandler={codeInputFieldChangeHandler}
            />
            <Button
                ref={loginButtonRef}
                onClick={submitHandler}
                disabled={!isCodeValid}
                className="mb-4"
            >
                Login
            </Button>
            <Button secondary>Testversion</Button>
        </PageContainer>
    );
};

export default StartView;
