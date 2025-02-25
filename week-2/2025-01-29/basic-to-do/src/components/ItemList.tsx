import React, { useState } from "react";
import Button from "./Button";

function FormView() {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newItem}
                onChange={handleInputChange}
                placeholder="Enter item"
            />
            <Button onClick={addItem} label="" />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default FormView;
