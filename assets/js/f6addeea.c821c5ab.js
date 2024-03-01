"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5727],{33754:e=>{e.exports=JSON.parse('{"functions":[{"name":"_toggleEnchantment","desc":"Toggles a specific enchantment\'s behavior (Private internal method)","params":[{"name":"enchantmentKey","desc":"The enchantment to enable/disable","lua_type":"string"},{"name":"doEnable","desc":"Should the enchantment be enabled?","lua_type":"boolean"},{"name":"Initializing","desc":"Whether the prop is loading into the game for the first time, or is newly enchanted/disenchanted","lua_type":"boolean?"}],"returns":[{"desc":"Returns a boolean if the enchantment is successfully set, and a string (Error) if not","lua_type":"boolean | string"}],"function_type":"method","private":true,"source":{"line":113,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"ToggleEnchantment","desc":"Toggles a specific enchantment\'s behavior","params":[{"name":"enchantmentKey","desc":"The enchantment to enable/disable","lua_type":"string"},{"name":"doEnable","desc":"Should the enchantment be enabled?","lua_type":"boolean"}],"returns":[{"desc":"Returns a boolean if the enchantment is successfully set, and a string (Error) if not","lua_type":"boolean | string"}],"function_type":"method","source":{"line":131,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"GetEnabledEnchantments","desc":"Get an array of enchantments that are presently equipped to this prop","params":[],"returns":[{"desc":"Returns an array (strings) of equipped enchantments","lua_type":"table"}],"function_type":"method","source":{"line":148,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"PivotTo","desc":"Moves the furniture model to a new location\\n\\nIf the respective furniture class has a custom PivotTo function, that will be used instead of this pivot to function\\n\\nIf called from the client, the 3D model will pivot to the new location\\nIf called from the server, the hitbox will pivot to the new location","params":[{"name":"self","desc":"Self class","lua_type":"table"},{"name":"targetCFrame","desc":"The new CFrame for the model/hitbox","lua_type":"CFrame"},{"name":"isOwner","desc":"Indicates whether the owner of this prop is the local player","lua_type":"boolean"},{"name":"initialPlacement","desc":"Indicates whether this is the prop being placed down for the first time or is being moved","lua_type":"boolean?"}],"returns":[{"desc":"Returns true if the prop\'s position is successfully adjusted, and false if not","lua_type":"boolean"}],"function_type":"static","source":{"line":182,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"PlayAnimation","desc":"Plays an animation on the prop","params":[{"name":"Animation","desc":"The name of the animation to play - if nil, current animation will be stopped","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"method","realm":["Client"],"source":{"line":257,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"_initiateServer","desc":"Initiates the server-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The starting CFrame of the prop","lua_type":"CFrame"}],"returns":[{"desc":"Returns the newly created bounding box","lua_type":"BasePart"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":280,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"_initiateClient","desc":"Initiates the client-side code for the furniture class (Activated by the :Initiate(...) method)","params":[{"name":"targetCFrame","desc":"The CFrame to pivot the furniture model to","lua_type":"CFrame"}],"returns":[{"desc":"Returns a model (The newly created furniture)","lua_type":"Model"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":346,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"Initiate","desc":"Initiates furniture behavior","params":[{"name":"...","desc":"TBD optional parameters","lua_type":"any"}],"returns":[{"desc":"Returns the furniture model if the code is being run client-side, and returns the bounding box BasePart if run server-side","lua_type":"Model | BasePart"}],"function_type":"method","source":{"line":429,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"_destroyServer","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Server"],"private":true,"source":{"line":443,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"_destroyClient","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","realm":["Client"],"private":true,"source":{"line":453,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"_processRemoteInput","desc":"Processes input from the client (That\'s sent to the server) for a specific prop","params":[{"name":"Player","desc":"The player firing the remote","lua_type":"Player"},{"name":"propFunction","desc":"The name of the function to fire under the prop","lua_type":"string"},{"name":"...","desc":"Variadic args for the propFunction","lua_type":"any"}],"returns":[{"desc":"Returns the result from the respective propFunction","lua_type":"any"}],"function_type":"method","realm":["Server"],"private":true,"source":{"line":467,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"Destroy","desc":"Destroys the furniture class","params":[],"returns":[],"function_type":"method","source":{"line":493,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"SetReplicaData","desc":"Set replica data for this furniture object","params":[{"name":"existingFurnitureData","desc":"(Optional) Existing saved furniture data for this prop","lua_type":"table?"}],"returns":[],"function_type":"method","source":{"line":505,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}},{"name":"new","desc":"Creates a new furniture object","params":[{"name":"floorId","desc":"The ID of the floor this prop is being placed on","lua_type":"string"},{"name":"ownerId","desc":"The user ID of the player who owns the floor this prop is placed on","lua_type":"number"},{"name":"existingFurnitureData","desc":"(Optional) Existing saved furniture data for this prop","lua_type":"table?"}],"returns":[{"desc":"Returns a new furniture class","lua_type":"table"}],"function_type":"static","source":{"line":539,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}}],"properties":[{"name":"MODEL_PIVOT_TWEEN_INFO","desc":"The tween info for the model\'s pivot/growth animation (Default if a prop does not have a custom animation defined)","lua_type":"TweenInfo","source":{"line":80,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}}],"types":[],"name":"FurnitureBaseClass","desc":"Author: ArtemisTheDeer\\nDate: 01/29/2024\\nProject: roblox-sparkles\\n\\nDescription: Furniture base class\\n\\nUnder the furniture class, there is a signal (PropEnchantmentToggled) - you can connect to it for determining when a prop\'s enchantment was enabled/disabled\\n\\nArgs provided for the callback function are:\\n\\nEnchantment: string - The enchantment being enabled/disabled\\n\\nisEnabled: boolean - If the enchantment is enabled/disabled\\n\\nTo add enchantments:\\n\\nEnchantments go under the optional \'Enchantments\' table of Metadata\\n\\nEach enchantment table key should have the following:\\n\\nKey: string = {\\n\\t\\t\\t\\tName: string= \\"MyEnchantment\\", -- Name of the enchantment (What text should be displayed to players)\\n\\t\\t\\t\\tDescription: string = \\"Automatically check out customers who approach the cash register\\", -- Description of the enchantment (What text should be displayed to players)\\n\\t\\t\\t\\tPrice: number = 100, -- How much one quantity of this enchantment costs (Players can buy multiple quantities of the enchantment and equip/unequip across the same type of prop w/their store)\\n\\t\\t\\t\\tPurchaseCurrency: string = \\"Credits\\", -- What currency to bill players to purchase one copy of this enchantment\\n\\t\\t\\t\\t_function: string = \\"automaticCheckout\\", -- What internal function to fire when the enchantment is toggled on/off (Client/server)\\n\\t\\t\\t},\\n\\n\\t\\tWith the _function string, here is how you add an enchantment function to the prop\\n\\n\\t\\t\\tThe function should be defined under the prop class (Eg. GlassDisplay) as follows:\\n\\n\\t\\t\\tfunction MyProp._enchantmentFunction(self: ANY_TABLE, doEnable: boolean): boolean | string\\n\\n\\t\\t\\tWhere:\\n\\n\\t\\t\\t- _function key (Under the enchantment table) would be \\"enchantmentFunction\\"\\n\\n\\t\\t\\t- MyProp would have a function under it called ._enchantmentFunction\\n\\n\\t\\t\\tThis function will be called server and client-side (With the self argument being the server/client prop class, respectively, and doEnable being whether that enchantment is enabled/disabled)\\n\\n\\t\\t\\tThe function should return a boolean if the behavior is successfully set, and a string (The error reason) if it is unable to be successfully ran","private":true,"source":{"line":49,"path":"src/Shared/Modules/Furniture/FurnitureBaseClass.lua"}}')}}]);