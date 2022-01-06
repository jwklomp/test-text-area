import React, {FunctionComponent} from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
    onChangeFn: (text: string) => void,
    text: string
}


export const TextInput: FunctionComponent<Props> = ({onChangeFn, text}) => {

    const asyncSet = (value: string) => {
        // this causes a jumping cursor
        Promise.resolve().then(() => {
            onChangeFn(value);
        });
    }

    return (
        <TextareaAutosize
            maxRows={5}
            onChange={element => asyncSet(element.target.value)}
            value={text}
        />)
}
