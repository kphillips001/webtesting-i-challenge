module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }, item.enhancement < 20 && item.enhancement++;
}

function fail(item) {
  return (
    { ...item },
    item.enhancement < 15
      ? (item.durability = item.durability - 5)
      : item.enhancement > 15 && item.enhancement < 17
      ? (item.durability = item.durability - 10)
      : item.enhancement > 17 &&
        item.enhancement-- &&
        (item.durability = item.durability - 10)
  );
}

function repair(item) {
  return { ...item }, (item.durability = 100);
}

function get(item) {
  console.log(item);
  
  if (item.enhancement === 0) {
    return item;
  } else {
    item.name = `${item.name}[${item.enhancement}]`;
    return item;
  }
}