import { FamilyContext } from "./context/FamilyContext";
import { Father } from "./5.Father";

export const GrandFather = () => {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <>
      <FamilyContext.Provider value={{ houseName, pocketMoney }}>
        <Father />
      </FamilyContext.Provider>
    </>
  );
};
