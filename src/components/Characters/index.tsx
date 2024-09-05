import Character from "./characterComponent";
import { data } from "./data";

export default function Characters() {
  const characterData = data;

  return (
    <>
      {characterData.map((data, index) => {
        return (
          <Character
            key={`${index}_${data.name}`}
            name={data.name}
            bgImage={data.bgImage}
            characterImage={data.characterImage}
            description={data.description}
          />
        );
      })}
    </>
  );
}
