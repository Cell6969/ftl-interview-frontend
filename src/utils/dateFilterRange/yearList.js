export function yearList() {
  const yearList = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 10; i++) {
    const data = {
      value: i,
      label: i.toString(),
    };
    yearList.push(data);
  }
  return yearList;
}
