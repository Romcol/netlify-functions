import fish from './fish.json';

export function prepareFishData(data) {
  return data.map((row) => ({
    value: row.replace(' ', '-'),
    label: row.charAt(0).toUpperCase() + row.slice(1),
  }));
}

export const fishData = prepareFishData(fish);

export const filterFish = (inputValue) => {
  return fishData.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};
