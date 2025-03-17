const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "HealthifyMe",
	createNote: (data) => ipcRenderer.invoke('create-file', data)
})