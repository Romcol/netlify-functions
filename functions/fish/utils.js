import fish from './fish.json';

export function prepareFishData(data) {
  return data.map((row) => ({
    value: row.replace(' ', '-'),
    label: row.charAt(0).toUpperCase() + row.slice(1),
  }));
}

export const fishData = prepareFishData(fish);

export const filterFishPaginated = (inputValue, limit = 10, page = 1) => {
  const results = fishData.filter((i) =>
      i.label.toLowerCase().includes(inputValue && inputValue.toLowerCase()),
  );

  return {
    data: results.slice((page - 1) * limit, page * limit),
    total: results.length,
  };
};
