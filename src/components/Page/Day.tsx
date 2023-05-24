import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

export default function Day() {
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <Loading text="단어 가져오는 중" />}
      <table>
        <tbody>
          {words.map((word) =>
            <Word words={word} key={word.id} />
          )}
        </tbody>
      </table>
    </>
  );
}
