import Counter from "./components/Counter";
import { Greeting } from "./components/Greeting";
import FormView from "./components/ItemList";
import TimerComponent from "./components/TimerComponent";
import "./styles.css";

export default function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            {/* <Greeting first_name="test" last_name="test" /> */}

            <FormView />
            {/* <TimerComponent /> */}
        </div>
    );
}
