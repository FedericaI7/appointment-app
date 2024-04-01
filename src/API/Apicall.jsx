export const userData = async (number) => {
  const res = await fetch(
    // `https://randomuser.me/api/?page=3&results=${number}&seed=abc`
    `https://randomuser.me/api/?exc=login,nat,dob&page=3&results=${number}&seed=abc`
  );
  return res.json();
};
