import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import HorizontalDivider from '../../components/HorizontalDivider';
import { CODE_LENGTH } from '../../utils/utils';
import CodeInput from './components/CodeInput';
import logo from '../../assets/logos/logo.svg';
import styled from 'styled-components';

const emptyCodeArray = new Array(CODE_LENGTH).fill('');

const Logo = styled.img`
    display: block;
    width: 100%;
    max-width: 246.76px;
    height: auto;
`;

const StartView = () => {
    const navigate = useNavigate();

    const loginButtonRef = React.useRef<HTMLButtonElement>(null);
    const [code, setCode] = useState<string[]>(emptyCodeArray);

    const validateCode = () => {
        if (!code) return false;
        if (code.length !== CODE_LENGTH) return false;
        if (code.some((value) => !value)) return false;
        return true;
    };

    const isCodeValid = validateCode();

    const submitHandler = () => {
        if (isCodeValid) {
            navigate('/photo-upload');
        }
    };

    return (
        <PageContainer color="primary">
            <Logo src={logo} alt="52 MEMORIES logo" className="mt-4 mb-6 mx-auto" />
            <h1 className="color-white text-center">Der Schlüssel zum Glück</h1>
            <HorizontalDivider color="white" className="my-4" />
            <div className="color-white text-center mb-4">
                Gib hier den Hochzeichts-Code ein oder erstelle eine Testkarte
            </div>
            <CodeInput
                code={code}
                setCode={setCode}
                loginButtonRef={loginButtonRef}
                className="mb-5"
            />
            <Button
                ref={loginButtonRef}
                onClick={submitHandler}
                disabled={!isCodeValid}
                className="mb-2"
            >
                Login
            </Button>
            <Button secondary>Testversion</Button>
        </PageContainer>
    );
};

export default StartView;
