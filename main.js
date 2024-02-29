const fs = require("fs");
const path = require("path");
const title = "Титл проекта";
const headH1 = "Hello & welcome !!!!";

// Создаем папку проекта
fs.mkdir("./src", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Папка проекта создана");
});

// Создаем папку assets
fs.mkdir("./src/assets", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Папка assets создана");
});

// Создаем папки для стилей, скриптов и изображений
["css", "js", "img", "sass"].forEach((type) => {
  fs.mkdir(`./src/assets/${type}`, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`Папка ${type} создана`);
  });
});

// Создаем файл index.html
fs.writeFile(
  "./src/index.html",
  `<!DOCTYPE html>\n<html lang="ru">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${title}</title>\n</head>\n<body>\n<h1>${headH1}</h1>\n</body>\n</html>`,
  (err) => {
    if (err) throw err;
    console.log("Файл index.html создан");
  }
);
// Создаем файл style.sass
fs.writeFile(
  "./src/assets/sass/style.sass",
  "*\n\tbox-sizing: border-box",
  (err) => {
    if (err) throw err;
    console.log("Файл style.sass создан");
  }
);
