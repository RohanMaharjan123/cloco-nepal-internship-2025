interface Props {
    message: string;
}

export default function MessageDisplay({ message }: Props) {
    return <h2>{message}</h2>;
}

//singleton classes 
