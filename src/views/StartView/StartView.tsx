import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { CODE_LENGTH } from '../../utils/utils';
import CodeInput from './components/CodeInput';

const PageTitle = styled.h1`
    font-size: 40pt;
    line-height: 50px;
    text-align: center;
    color: var(--color-white);
`;

const PageSubTitle = styled.p`
    color: var(--color-white);
`;

const HorizontalDivider = styled.div`
    width: 2rem;
    height: 0.25rem;
    margin: 0 auto;
`;

const emptyCodeArray = new Array(CODE_LENGTH).fill('');

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
        <Container color="primary">
            <div>LOGO</div>
            <PageTitle>Der Schlüssel zum Glück</PageTitle>
            <HorizontalDivider />
            <PageSubTitle>
                Gib hier den Hochzeichts-Code ein oder erstelle eine Testkarte
            </PageSubTitle>
            <CodeInput code={code} setCode={setCode} loginButtonRef={loginButtonRef} />
            <Button ref={loginButtonRef} onClick={submitHandler} disabled={!isCodeValid}>
                Login
            </Button>
            <Button secondary>Testversion</Button>
        </Container>
    );
};

export default StartView;
