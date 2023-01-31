const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanet = [];

function isHabitablePlanet(planets) {
  return planets["koi_disposition"] === "confirmed";
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
    console.log(result);
    console.log("we are Done!");
  });
