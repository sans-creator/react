import { useState, useEffect } from "react";

export default function Jokes() {
    const [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        try {
            const response = await fetch(URL);
            const jsonR = await response.json();
            console.log(jsonR);
            setJoke({ setup: jsonR.setup, punchline: jsonR.punchline });
        } catch (error) {
            console.error("Failed to fetch joke:", error);
        }
    };

    // Fetch joke on initial render
    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div>
            <h1>Jokes</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>New Joke</button>
        </div>
    );
}
