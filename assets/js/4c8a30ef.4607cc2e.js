"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[897],{11060:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Create new ShopFloor","params":[{"name":"floorPart","desc":"The BasePart for the shop floor","lua_type":"BasePart"}],"returns":[{"desc":"Returns the newly created ShopFloor class","lua_type":"table"}],"function_type":"static","source":{"line":48,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"_processRemotePropInput","desc":"Processes incoming remote events (Related to a prop placed on the floor) from a client","params":[{"name":"Player","desc":"Player firing the remote","lua_type":"Player"},{"name":"propId","desc":"The ID of the prop to edit","lua_type":"string"},{"name":"propFunction","desc":"The function to fire under the prop","lua_type":"string"},{"name":"...","desc":"Variadic args to provide to the respective function","lua_type":"any"}],"returns":[{"desc":"Returns the callback from the respective function","lua_type":"any"}],"function_type":"method","private":true,"source":{"line":104,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"UpdateMatrix","desc":"Update pathfinding matrix for shop floor\\n!! ASSUMES FLOORPART SIZE IS DIVISIBLE BY GRID_UNIT","params":[],"returns":[],"function_type":"method","private":true,"source":{"line":120,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"GetMatrix","desc":"Get pathfinding matrix","params":[],"returns":[{"desc":"table representing pathfinding matrix","lua_type":"table"}],"function_type":"method","source":{"line":157,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"GetMatrixCoordinate","desc":"Get matrix coordinates of a position relative to a ShopFloor part","params":[{"name":"position","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"i, j representing matrix[i][j]","lua_type":"number, number"}],"function_type":"method","source":{"line":167,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"MoveProp","desc":"Move prop","params":[{"name":"replicaId","desc":"The replicaId of the prop","lua_type":"string"},{"name":"targetCFrame","desc":"The target CFrame to place the prop at","lua_type":"CFrame"}],"returns":[{"desc":"true if prop was successfully moved, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":192,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"PlaceProp","desc":"Place prop","params":[{"name":"prop","desc":"The name of the prop to place down","lua_type":"string"},{"name":"targetCFrame","desc":"The target CFrame to place the prop at","lua_type":"CFrame"}],"returns":[{"desc":"Returns a promise that resolves if the prop was successfully added to the shop floor, and rejects if not","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":210,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"RemoveProp","desc":"Remove prop","params":[{"name":"prop","desc":"The replica ID of the prop (string)","lua_type":"string"}],"returns":[{"desc":"true if prop was found and removed, false otherwise","lua_type":"boolean"}],"function_type":"method","source":{"line":277,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"GetShelves","desc":"Get bounding boxes of shelves","params":[],"returns":[{"desc":"array of bounding boxes of shelves","lua_type":"shelves table"}],"function_type":"method","source":{"line":296,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"StockShelf","desc":"Stocks an item for a shelf","params":[{"name":"propId","desc":"The prop (Replica) ID of the shelf","lua_type":"string"},{"name":"desiredProduct","desc":"The desired product to stock","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves with the new stock configuration for the shelf if successfully stocked, and rejects if it cannot be stocked","lua_type":"Promise<T>"}],"function_type":"method","private":true,"source":{"line":324,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"LookForProduct","desc":"Look for shelves containing specified item","params":[{"name":"itemName","desc":"Name of item","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The required amount of copies that need to be stocked across all the shelves in the store","lua_type":"number?"}],"returns":[{"desc":"array that contains the list of shelves with the selected item on them","lua_type":"shelvesWithItem table"}],"function_type":"method","private":true,"source":{"line":371,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"SetOwner","desc":"Set owner of shop floor","params":[{"name":"owner","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":391,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"Reset","desc":"Wipe all props off shop floor and set OwnerId/owner to nil","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":411,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"GetProps","desc":"Returns all props from the shop floor","params":[],"returns":[{"desc":"List of props that are on the shop floor","lua_type":"table"}],"function_type":"method","source":{"line":432,"path":"src/Server/Services/Game/ShopFloor.lua"}},{"name":"Destroy","desc":"Destroy shop floor","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":440,"path":"src/Server/Services/Game/ShopFloor.lua"}}],"properties":[{"name":"GRID_UNIT","desc":"Grid unit for snapping prop placement","lua_type":"number","source":{"line":34,"path":"src/Server/Services/Game/ShopFloor.lua"}}],"types":[],"name":"ShopFloor","desc":"Author: Maxim Peng\\nProject: roblox-sparkles\\n\\nRepresents one floor of a shop","realm":["Server"],"source":{"line":10,"path":"src/Server/Services/Game/ShopFloor.lua"}}')}}]);