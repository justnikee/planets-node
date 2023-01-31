const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanet = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "confirmed" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("cumulative_2023.01.31_09.51.36.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanet.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanet);
    console.log(`${habitablePlanet.length} Habitable planets Found!`);
  });
