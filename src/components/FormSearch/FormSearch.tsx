import { ChangeEvent, FC, HTMLAttributes, useCallback, useEffect, useState } from 'react';

import { InputMain } from '../InputSearch';
import { BtnBase } from '../BtnBase';
import './FormSearch.scss';

const FormSearch: FC<HTMLAttributes<HTMLFormElement> & { sendForm?: (value: string) => void }> = ({ sendForm, ...props }) => {
    const [textInput, setTextInput] = useState<string>('');
    const [validator, setValidator] = useState<'' | 'input--valid-ok' | 'input--valid-false'>('');
    const [btnDisable, setBtnDisable] = useState<'btn' | 'btn btn--disable'>('btn btn--disable');

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setTextInput(e?.target?.value);
        },
        [setTextInput]
    );

    useEffect(() => {
        if (textInput === '') {
            setValidator('');
            setBtnDisable('btn btn--disable');
        } else if (/^[a-z]{3,}$/.test(textInput)) {
            setValidator('input--valid-ok');
            setBtnDisable('btn');
        } else {
            setValidator('input--valid-false');
            setBtnDisable('btn btn--disable');
        }
    }, [textInput]);

    const clickCloseBtn = useCallback(() => {
        setTextInput('');
    }, []);

    const onSubmitHandler = useCallback(() => {
        if (validator === 'input--valid-ok') {
            sendForm?.(textInput);
            setTextInput('');
            setValidator('');
        }
    }, [sendForm, textInput, validator]);

    return (
        <form {...props} className="form-search">
            <>
                <InputMain type="text" placeholder="Имя покемона" value={textInput} onChange={onChangeHandler} classModify={validator} />
                <BtnBase type="button" className="btn__clear" clickCallback={clickCloseBtn}></BtnBase>
                <BtnBase type="submit" className={btnDisable} clickCallback={onSubmitHandler}>
                    Поиск
                </BtnBase>
                {validator === 'input--valid-false' && (
                    <div className="tooltip">Разрешены только строчные латинские буквы, введите не менее трех.</div>
                )}
            </>
        </form>
    );
};

export default FormSearch;
