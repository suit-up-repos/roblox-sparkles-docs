"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5008],{39928:e=>{e.exports=JSON.parse('{"functions":[{"name":"_processIncomingMessage","desc":"Processes incoming messages and fires the appropriate signals","params":[{"name":"messageType","desc":"The type of message to display to the player (\\"Error\\", \\"Warning\\", or \\"Information\\")","lua_type":"string"},{"name":"Message","desc":"The contents of the message to display to the player","lua_type":"string"},{"name":"callbackBehavior","desc":"(Optional) A specific behavior to fire on the client relating to this notification (NOT ENABLED)","lua_type":"string?"}],"returns":[{"desc":"Returns a boolean indicating whether the message was successfully processed or not","lua_type":"boolean"}],"function_type":"method","private":true,"source":{"line":65,"path":"src/Client/Controllers/Game/NotificationController.lua"}},{"name":"ShowError","desc":"Shows an error message on the client","params":[{"name":"Message","desc":"The contents of the message to display to the player","lua_type":"string"},{"name":"callbackBehavior","desc":"(Optional) A specific behavior to fire on the client relating to this notification (NOT ENABLED)","lua_type":"string?"}],"returns":[{"desc":"Returns a boolean indicating whether the message was successfully processed or not","lua_type":"boolean"}],"function_type":"method","source":{"line":108,"path":"src/Client/Controllers/Game/NotificationController.lua"}},{"name":"ShowWarning","desc":"Shows a warning message on the client","params":[{"name":"Message","desc":"The contents of the message to display to the player","lua_type":"string"},{"name":"callbackBehavior","desc":"(Optional) A specific behavior to fire on the client relating to this notification (NOT ENABLED)","lua_type":"string?"}],"returns":[{"desc":"Returns a boolean indicating whether the message was successfully processed or not","lua_type":"boolean"}],"function_type":"method","source":{"line":119,"path":"src/Client/Controllers/Game/NotificationController.lua"}},{"name":"ShowInformation","desc":"Shows an informational message on the client","params":[{"name":"Message","desc":"The contents of the message to display to the player","lua_type":"string"},{"name":"callbackBehavior","desc":"(Optional) A specific behavior to fire on the client relating to this notification (NOT ENABLED)","lua_type":"string?"}],"returns":[{"desc":"Returns a boolean indicating whether the message was successfully processed or not","lua_type":"boolean"}],"function_type":"method","source":{"line":130,"path":"src/Client/Controllers/Game/NotificationController.lua"}},{"name":"KnitInit","desc":"Initialize NotificationController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":139,"path":"src/Client/Controllers/Game/NotificationController.lua"}},{"name":"KnitStart","desc":"Start NotificationController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":148,"path":"src/Client/Controllers/Game/NotificationController.lua"}}],"properties":[{"name":"NOTIFICATION_SHOW_TIME","desc":"The amount of time in seconds notifications should show for.\\r","lua_type":"number","source":{"line":53,"path":"src/Client/Controllers/Game/NotificationController.lua"}}],"types":[],"name":"NotificationController","desc":"Author: ArtemisTheDeer\\nDate: 01/02/2024\\nProject: roblox-sparkles\\n\\nDescription: Notification controller handles displaying errors/warnings/informational pop-ups to the client (When triggered by either the server or the client).\\n\\n[NotificationService] is used for initiating notifications from the server to respective client(s)\\n\\nThe client can create notifications by calling the respective public functions under NotificationController (Eg. ShowError, ShowWarning, ShowInformation)\\n\\nMessage handling can either be handled within here, or for other scripts, you can listen to the signals under the controller (Error, Warning, and Information) - those signals fire w/the message upon processing a message request","realm":["Client"],"source":{"line":17,"path":"src/Client/Controllers/Game/NotificationController.lua"}}')}}]);