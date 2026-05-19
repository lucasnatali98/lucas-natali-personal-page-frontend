import { useEffect, useState } from "react";

type Props = { words: string[]; speed?: number; pause?: number };

export function Typewriter({ words, speed = 80, pause = 1600 }: Props) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const ms = deleting ? speed / 2 : speed;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, ms);
    return () => clearTimeout(timer);
  }, [text, deleting, i, words, speed, pause]);

  return (
    <span>
      {text}
      <span className="cursor-blink" />
    </span>
  );
}
