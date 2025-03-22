const crypto = require('crypto'),
{
    app,
    BrowserWindow,
    ipcMain
} = require('electron'),
fs = require('fs'),
path = require('path'),
file =
{
    sign: [360, 240, 'renderer/sign.html'],
    index: [1600, 900, 'renderer/index.html']
}
let currentuser = '', encryptmethod = 'sha512', issignedin = false
const CreateWindow = filename => new BrowserWindow(
{
    width: file[filename][0],
    height: file[filename][1],
    webPreferences:
    {
        preload: path.join(__dirname, 'preload.js')
    }
}).loadFile(file[filename][2])
const EncryptPassword = password => crypto.createHash(encryptmethod).update(password).digest('hex')
const SignIn = (username, password) =>
{
    try
    {
        if (issignedin = EncryptPassword(password) === fs.readFileSync(path.join(`${app.getPath('userData')}/${username}/password`), 'utf8'))
            currentuser = username
        BrowserWindow.getAllWindows()[0].webContents.send('issignedin', issignedin)
    }
    catch (error)
    {
        console.log(error)
        process.exit(-1)
    }
}
const SignOut = () =>
{
    BrowserWindow.getAllWindows().forEach(win => win.close())
    currentuser = '', issignedin = false
    process.exit(-1)
}
const SignUp = (username, password) =>
{
    currentuser = username, issignedin = true
    try
    {
        fs.mkdirSync(path.join(`${app.getPath('userData')}/${username}`))
        fs.writeFileSync(path.join(`${app.getPath('userData')}/${username}/password`), EncryptPassword(password))
    }
    catch (error)
    {
        console.log(error)
        process.exit(-1)
    }
}
app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
        app.quit()
})
app.whenReady().then(() =>
{
    CreateWindow('sign')
    app.on('activate', () =>
    {
        if (BrowserWindow.getAllWindows().length === 0)
            CreateWindow('sign')
    })
})
ipcMain.handle('FromSignToIndex', event =>
{
    CreateWindow('index')
    BrowserWindow.getAllWindows()[1].close()
})
ipcMain.handle('SignIn', (event, username, password) =>
{
    SignIn(username, password)
})
ipcMain.handle('SignOut', event =>
{
    SignOut()
})
ipcMain.handle('SignUp', (event, username, password) =>
{
    SignUp(username, password)
})