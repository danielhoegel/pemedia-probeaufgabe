import React, { FC, FormEvent, useMemo, useState } from 'react';
import Button from '../../../components/Button';
import Checkbox from '../../../components/inputs/Checkbox';
import TextInput from '../../../components/inputs/TextInput';

type SubmitFormPropsType = {
    onSubmit: (values: { name: string; email: string; acceptTerms: boolean }) => void;
};

const SubmitForm: FC<SubmitFormPropsType> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [touched, setTouched] = useState<{ [fieldName: string]: boolean }>({});

    const errors = useMemo(() => {
        const errors: { [fieldName: string]: string } = {};

        if (!name || name.length === 0) {
            errors.name = 'Feld darf nicht leer sein';
        } else {
            errors.name = '';
        }

        if (!email || email.length === 0) {
            errors.email = 'Feld darf nicht leer sein';
        } else if (!email.includes('@') || !email.includes('.')) {
            errors.email = 'Keine gültige E-Mail-Adresse';
        } else {
            errors.email = '';
        }

        if (!acceptTerms) {
            errors.acceptTerms = 'Bitte akzeptieren Sie die AGB';
        } else {
            errors.acceptTerms = '';
        }

        return errors;
    }, [name, email, acceptTerms]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTouched({
            name: true,
            email: true,
            acceptTerms: true,
        });

        if (Object.values(errors).every((error) => !error)) {
            onSubmit({
                name,
                email,
                acceptTerms,
            });
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <TextInput
                name="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                label="Dein Name"
                className="mb-4"
                error={errors.name}
                touched={touched.name}
                setTouched={setTouched}
            />
            <TextInput
                name="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                label="Deine E-Mail-Adresse"
                className="mb-4"
                error={errors.email}
                touched={touched.email}
                setTouched={setTouched}
            />
            <Checkbox
                name="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.currentTarget.checked)}
                label={
                    <span>
                        Hiermit akzeptiere ich die{' '}
                        <a href="/agb" target="_blank">
                            AGB
                        </a>
                        .
                    </span>
                }
                error={errors.acceptTerms}
                touched={touched.acceptTerms}
                setTouched={setTouched}
            />
            <Button className="my-5" type="submit">
                Absenden
            </Button>
        </form>
    );
};

export default SubmitForm;
