export const userData = async () => {
  const res = await fetch("https://randomuser.me/api/?results=100&nat=gb");
  return res.json();
};
