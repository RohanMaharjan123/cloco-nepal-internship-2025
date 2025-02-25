import { ButtonProps } from "./interface/ButtonProps"

function Button({ onClick, label = "Add Task" }: ButtonProps) {
    return <button onClick={onClick}>{label}</button>;
}

export default Button;
