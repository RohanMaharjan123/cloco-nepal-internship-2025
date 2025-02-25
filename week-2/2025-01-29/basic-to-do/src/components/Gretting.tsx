import { GreetingProps } from "../interfaces/GettingProps";

export const Greeting = (props: GreetingProps) => {
    const getName = () => {
        if (props.last_name) {
            return props.first_name + " " + props.last_name;
        }

        return props.first_name;
    };

    return <h1>Hello, {getName()}!</h1>;
};
