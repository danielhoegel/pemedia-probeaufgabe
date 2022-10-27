import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CODE_LENGTH } from '../../../utils/constants';
import { updateArrayAtIndex } from '../../../utils/utils';

const emptyCodeArray = new Array(CODE_LENGTH).fill('');

export const useCode = () => {
    const inputRefs = useRef<Array<HTMLDivElement | null>>([]);
    const loginButtonRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
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

    const focusNextElement = (index: number, value: string | undefined) => {
        const focusPreviousElement = !value;
        let focusElement: HTMLElement | null = null;

        if (focusPreviousElement) {
            if (index > 0) {
                focusElement = inputRefs.current?.[index - 1];
            }
        } else {
            if (index < CODE_LENGTH - 1) {
                focusElement = inputRefs.current?.[index + 1];
            } else {
                focusElement = loginButtonRef.current;
            }
        }

        if (focusElement) {
            focusElement.focus();

            if (focusElement instanceof HTMLInputElement) {
                focusElement.select();
            }
        }
    };

    const codeInputFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const nextValue = e.target.value.length > 1 ? e.target.value.at(-1) : e.target.value; // only allow one character per field
        setCode((code) => updateArrayAtIndex(code, nextValue, index));
        focusNextElement(index, nextValue);
    };

    return {
        code,
        isCodeValid,
        submitHandler,
        inputRefs,
        loginButtonRef,
        codeInputFieldChangeHandler,
    };
};
