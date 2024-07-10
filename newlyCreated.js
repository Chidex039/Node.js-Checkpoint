import fs from "fs";

// fs.writeFile("./NODE CHECKPOINT/welcome.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });

fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// fs.unlink("./places.js", (err) => {
// if (err) {
//      console.error(err);
//      return;
//    }
//  });
