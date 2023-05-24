import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

export interface IDay {
  id: number;
  day: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  return (
    <>
      {days.length === 0 && <Loading text="Day 리스트 가져오는 중" />}
      <ul className="list_day">
        {days.map((dayNumber) =>
          <li key={dayNumber.id}>
            <Link to={`/day/${dayNumber.day}`}>Day {dayNumber.day}</Link>
          </li>
        )}
      </ul>
    </>
  );
}
