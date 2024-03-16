export const userData = async (number) => {
  const res = await fetch(
    `https://randomuser.me/api/?results=${number}&nat=gb`
  );
  return res.json();
};
