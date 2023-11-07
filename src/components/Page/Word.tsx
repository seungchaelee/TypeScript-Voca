import { useState } from "react";
import Loading from "../Loading/Loading";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { toggle } from "../../features/ShowSlice";

interface IProps {
  words: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: any;
}

export default function Word({ words: w }: IProps) {
  const isShow = useAppSelector(state => state.show.value);
  const dispatch = useAppDispatch();
  const [words, setWords] = useState(w);
  const [isDone, setIsDone] = useState(words.isDone);
  const [isLoading, setIsLoading] = useState(false);
  // const [isShow, setIsShow] = useState(false);

  // function toggleShow() {
  //   setIsShow(!isShow);
  // }

  const toggleDone = async () => {
    const res = await fetch(`http://localhost:3001/words/${words.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        ...words,
        isDone: !isDone,
      }),
    });

    if (res.ok) {
      setIsDone(!isDone);
    }
    const data = await res.json();

    return data;
  };

  async function del() {
    if (!isLoading) {
      setIsLoading(true);
      if (window.confirm("삭제 ?")) {
        const res = await fetch(`http://localhost:3001/words/${words.id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setWords({
            ...words,
            id: 0,
          });
          setIsLoading(false);
          alert("삭제 완료");
        }
        const data = await res.json();

        return data;
      }
    }
  }

  if (words.id === 0) {
    return null;
  }

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{words.eng}</td>
        <td>{isShow && words.kor}</td>
        <td>
          <button onClick={() => dispatch(toggle(words.id))}>뜻 {isShow ? "숨기기" : "보기"}</button>
          <button onClick={del} className="btn_del">
            {isLoading ? <Loading text="삭제 중" /> : "삭제"}
          </button>
        </td>
      </tr>
    </>
  );
}
