import React, { ChangeEventHandler, FC } from 'react';

type CheckboxPropsType = { checked: boolean; onSelect: ChangeEventHandler<HTMLInputElement> };

const Checkbox: FC<CheckboxPropsType> = ({ checked, onSelect }) => {
    return <input type="checkbox" checked={checked} onSelect={onSelect} />;
};
export default Checkbox;
