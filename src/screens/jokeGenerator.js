import axios from "axios";
import { useEffect, useState } from "react";

const JokeGenerator = () => {
    const [jokes, setJokes] = useState([]);
    const [jokeIndex, setJokeIndex] = useState(null);
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10");
            const filteredJokes = data.jokes.filter((each) => each.type === "twopart");
            setJokes(filteredJokes);
            console.log(filteredJokes);
            
        } catch (err) {
            console.error(err);
        }
    };

    const generateHandler = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setJokeIndex(randomIndex);
        setReveal(false);  // Reset the reveal state
    };

    const revealHandler = () => {
        setReveal(true);
    };

    return (
        <>
            <h2>Joke Generator</h2>
            <button onClick={generateHandler}>Generate</button>
            {jokeIndex !== null && jokes[jokeIndex] && (
                <>
                    <p>{jokes[jokeIndex].setup}</p>
                    {reveal ? (
                        <p>{jokes[jokeIndex].delivery}</p>
                    ) : (
                        <button onClick={revealHandler}>Reveal</button>
                    )}
                </>
            )}
        </>
    );
};

export default JokeGenerator;
