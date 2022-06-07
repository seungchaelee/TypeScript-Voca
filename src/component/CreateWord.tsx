import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DayList";
import Loading from "./Loading";

export default function CreateWord() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      const res = await fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      });

      if (res.ok) {
        alert("생성 완료");
        navigate(`/day/${day}`);
        setIsLoading(false);
      }
      const data = await res.json();

      return data;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>English</label>
        <input type="text" placeholder="English word" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Korea</label>
        <input type="text" placeholder="한글 뜻" ref={korRef} />
      </div>
      <div className="input_area">
        <select ref={dayRef}>
          {days.map(day =>
            <option key={day.id} value={day.day}>
              {`Day ${day.day}`}
            </option>
          )}
        </select>
      </div>
      <button>{isLoading ? <Loading text="생성 중" /> : "저장"}</button>
    </form>
  );
}
