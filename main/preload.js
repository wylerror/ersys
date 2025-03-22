const
{
    contextBridge,
    ipcRenderer
} = require('electron')
contextBridge.exposeInMainWorld('sign',
{
    FromSignToIndex: () => ipcRenderer.invoke('FromSignToIndex'),
    issignedin: callback => ipcRenderer.on('issignedin', callback),
    SignIn: (username, password) => ipcRenderer.invoke('SignIn', username, password),
    SignOut: () => ipcRenderer.invoke('SignOut'),
    SignUp: (username, password) => ipcRenderer.invoke('SignUp', username, password)
})