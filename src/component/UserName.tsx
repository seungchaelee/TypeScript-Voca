interface IName {
  nameTODO: string;
}

export default function UserName1({ nameTODO }: IName) {
  return (
    <>
      <h3>Hello, {nameTODO}</h3>
    </>
  );
}
