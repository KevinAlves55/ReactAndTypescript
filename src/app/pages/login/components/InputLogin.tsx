import React from "react";

interface IInputLoginProps {

    label: string;
    value: string;
    type: string;
    placeholder: string;
    name: string;
    onChange: (newValue: string) => void;
    onPressEnter? : () => void;

}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {

    return(
        <label>
            <span>{props.label}</span>
            <input 
                value={props.value} 
                type={props.type} 
                onChange={e => props.onChange(e.target.value)} 
                placeholder={props.placeholder}
                onKeyDown={e => e.key === "Enter" ? props.onPressEnter && props.onPressEnter() : undefined}
                ref={ref}
                name={props.name}
            />
        </label>
    );

});