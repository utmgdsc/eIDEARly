import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: questionInput }),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(data.result);
    setquestionInput("");
  }

  return (
    <div>
      <Head>
        <title>Chatbot</title>
      </Head>

      <main className={styles.main}>
        <h3>Ask me</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Question here"
            value={questionInput}
            onChange={(e) => setquestionInput(e.target.value)}
          />
          <input type="submit" value="Get answer" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
