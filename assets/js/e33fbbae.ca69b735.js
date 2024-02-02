"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8176],{27697:e=>{e.exports=JSON.parse('{"functions":[{"name":"GenerateCustomer","desc":"Generates a new customer class","params":[{"name":"Replication","desc":"An array of players to replicate this customer to - if no table is provided (nil), then the customer will replicate to all clients","lua_type":"table"},{"name":"Origin","desc":"(Optional) The starting CFrame of the customer NPC. If Origin is nil, a random spawn location will be selected","lua_type":"CFrame?"},{"name":"rigName","desc":"The type of rig to use for the customer NPC (Optional - if not provided, will default to random regular NPC)","lua_type":"string?"}],"returns":[{"desc":"Returns a promise that resolves with the new customer table and the total amount of customers (Separate returns) and rejects if it cannot","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":145,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"DestroyCustomer","desc":"Destroys an existing customer class","params":[{"name":"CustomerID","desc":"The customer ID to destroy","lua_type":"string"}],"returns":[{"desc":"Returns a promise that resolves if the customer was deleted successfully and rejects if it cannot","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":544,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"AddItemToShoppingList","desc":"Adds a new item (Or multiple of the same item) to a customer\'s shopping list\\n\\nThe customer will then search stores to see if they carry that item, and if they do, it will be purchased\\n\\t","params":[{"name":"CustomerID","desc":"The unique ID of the customer","lua_type":"string"},{"name":"itemId","desc":"The item ID that you want to add to the customer\'s shopping list","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of copies of the item that you want to add to the customer\'s shopping list","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the current shopping list, or rejects if it cannot be added to the shopping list for some reason","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":574,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"AddRandomItemsToShoppingList","desc":"Adds a new random item (Or multiple) to the customer\'s shopping list\\n\\nThe customer will then search stores to see if they carry those item(s), and if they do, it will be purchased","params":[{"name":"CustomerID","desc":"The unique ID of the customer","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of copies of the item that you want to add to the customer\'s shopping list - default to 1","lua_type":"number"}],"returns":[{"desc":"Returns a key/pair table (item name/quantity) of what the NPC wants to purchase","lua_type":"table"}],"function_type":"method","source":{"line":593,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"RemoveItemFromShoppingList","desc":"Removes an item from the customer\'s shopping list","params":[{"name":"CustomerID","desc":"The unique ID of the customer","lua_type":"string"},{"name":"itemId","desc":"The item ID that you want to remove from the customer\'s shopping list","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of copies of the item that you want to remove from the customer\'s shopping list","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the current shopping list and new item count (two variables), or rejects if it cannot be removed for some reason","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":611,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"AddItemToCart","desc":"Adds a new item (Or multiple of the same item) to a customer\'s cart","params":[{"name":"CustomerID","desc":"The unique ID of the customer","lua_type":"string"},{"name":"itemId","desc":"The item ID that you want to add to the customer\'s cart","lua_type":"string"},{"name":"itemQuantity","desc":"(Optional) The amount of copies of the item that you want to add to the customer\'s cart","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the current cart and new item count (two variables), or rejects if it cannot be added to the cart for some reason","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":632,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"RemoveItemFromCart","desc":"Removes an item (Or multiple of the same item) from a customer\'s cart","params":[{"name":"CustomerID","desc":"The unique ID of the customer","lua_type":"string"},{"name":"itemId","desc":"The item ID that you want to remove from the customer\'s cart","lua_type":"string"},{"name":"itemQuantity","desc":"The amount of copies of the item that you want to remove from the customer\'s cart","lua_type":"number"}],"returns":[{"desc":"Returns a promise that resolves with the current cart and new item count (two variables), or rejects if it cannot be removed from the cart for some reason","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":649,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"PurchaseItemsInCart","desc":"\\"Purchases\\" the items in a player\'s cart and credits the storeOwner player with the equivalent amount of credits","params":[{"name":"CustomerID","desc":"The ID of the customer","lua_type":"string"},{"name":"storeOwner","desc":"The owner of the store","lua_type":"Player"}],"returns":[{"desc":"Returns whether the items were successfully sold, and if so, the list of currencies/values awarded. If this function errors, the 2nd return argument will be a string explaining the error","lua_type":"boolean, table"}],"function_type":"method","source":{"line":666,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"NavigateToPoint","desc":"Returns a promise that resolves when the NPC reaches the point desired, and rejects if it cannot be reached","params":[{"name":"CustomerID","desc":"The ID of the customer","lua_type":"string"},{"name":"Position","desc":"The desired position/orientation of the NPC","lua_type":"CFrame"}],"returns":[{"desc":"Returns a promise that resolves if the NPC reaches the desired point, and rejects if it does not","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":712,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"KnitInit","desc":"Initialize CustomerService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Server"],"source":{"line":727,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"KnitStart","desc":"Start CustomerService","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Server"],"source":{"line":803,"path":"src/Server/Services/Game/CustomerService/init.lua"}}],"properties":[{"name":"CUSTOMER_SPAWN_LOCATION_DEBOUNCE","desc":"How long a spawn location (Randomly selected) cannot spawn another customer on top for (Eg. A 5 second debounce)","lua_type":"number","source":{"line":43,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_RANDOM_SHOPPING_LIST_QUANTITY","desc":"How many randomly selected items the customer should want to purchase when joining the game","lua_type":"number","source":{"line":50,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_SPAWN_DEBOUNCE_TIME","desc":"How long before CustomerService will attempt to generate another random customer","lua_type":"number","source":{"line":57,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"MAX_CUSTOMERS_IN_MAP","desc":"How many randomly generated customers are allowed in the map at any given moment","lua_type":"number","source":{"line":64,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_LIFETIME","desc":"How long a customer is in-game for before they\'re automatically removed","lua_type":"number","source":{"line":71,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_SEARCH_TIME","desc":"How long a customer plays the searching animation for before proceeding w/the next action","lua_type":"number","source":{"line":78,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"RANDOM_WAYPOINT_RADIUS","desc":"How many studs (Divided by two) max on the X/Z axis from a waypoint\'s position the desired position can be\\nEg.\\nRadius is 10\\nPosition += Vector3.new(randomNumber:NextNumber(-RANDOM_WAYPOINT_RADIUS/2,RANDOM_WAYPOINT_RADIUS/2),0,randomNumber:NextNumber(-RANDOM_WAYPOINT_RADIUS/2,RANDOM_WAYPOINT_RADIUS/2))","lua_type":"number","source":{"line":88,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_PURCHASE_TIMEOUT","desc":"How long a customer will wait after approaching a cash register (To check out w/the items in their cart) before they walk out of the store/abandon the transaction","lua_type":"number","source":{"line":95,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_EXIT_STORE_DELAY","desc":"How long the found item animation should play at the cash register until the NPC walks out of the store/resumes their normal walk cycle","lua_type":"number","source":{"line":102,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_VIP_CHANCE","desc":"The chance of a customer spawning w/a VIP item request (Awards additional money on customer purchase to the shop owner)\\nNumber is picked based on Random:NextInteger(1,CUSTOMER_VIP_CHANCE)\\nEg. CUSTOMER_VIP_CHANCE is 10, there\'s a 10% chance that a customer spawned will be a VIP\\nCUSTOMER_VIP_CHANCE is 1, all customers will be VIPs","lua_type":"number","source":{"line":112,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"HERO_SPAWN_TIME","desc":"How often (In seconds) a hero NPC (Eg. Jade Ballroom) should spawn in\\n\\nNote: If all available hero NPCs are spawned in at a given moment, a random regular NPC will spawn instead (And another attempt will be made at spawning a hero after time has passed)","lua_type":"number","source":{"line":121,"path":"src/Server/Services/Game/CustomerService/init.lua"}},{"name":"CUSTOMER_VIP_MULTIPLIER","desc":"If an item selected by a customer is marked as a VIP item, multiply the NPCSalePrice variable by this number","lua_type":"number","source":{"line":128,"path":"src/Server/Services/Game/CustomerService/init.lua"}}],"types":[],"name":"CustomerService","desc":"Author: ArtemisTheDeer\\nDate: 11/22/2023\\nProject: roblox-sparkles\\n\\nDescription: Customer service knit service - controls spawning/desired travel points for NPCs\\n\\nCustomer spawn locations are defined in workspace under the workspace > LEVEL_GEOMETRY > SPAWN_LOCATIONS > Customers folder","source":{"line":12,"path":"src/Server/Services/Game/CustomerService/init.lua"}}')}}]);