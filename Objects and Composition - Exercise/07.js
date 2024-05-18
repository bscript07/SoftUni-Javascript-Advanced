function solve(towns) {
  towns.shift();
  return JSON.stringify(
    towns.map((e) => {
      const [name, lat, long] = e.split(/\s*\|\s*/gm).filter((x) => x !== "");
      return {
        Town: name,
        Latitude: Number(Number(lat).toFixed(2)),
        Longitude: Number(Number(long).toFixed(2)),
      };
    })
  );
}
