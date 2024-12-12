import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 900,
    resizable: false,
  });

  win.loadFile("../index.html");
  win.setMenu(null);
};

app.whenReady().then(() => {
  createWindow();
});
