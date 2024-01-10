"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1773],{1972:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetStates","desc":"This is a REQUIRED method for all screens\\nIt is responsible for returning the current states","params":[],"returns":[{"desc":"","lua_type":"{isVisible: Fusion.StateObject<boolean>}"}],"function_type":"method","realm":["Client"],"source":{"line":73,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"Show","desc":"This is a REQUIRED method for all screens\\nIt is responsible for showing this screenGui\\n\\nExample Usage:\\nMainGuiController:ShowScreen(\\"Template\\") will automatically call THIS function\\n\\tAND also CLOSE the other visible screens","params":[],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"method","realm":["Client"],"source":{"line":89,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"FuzzySearch","desc":"This is a modified vendor function from the DevForum. \\nIt handles fuzzy search, comparing a string to another string, and returning the closeness ratio.\\nReturns in the format of { { Ratio, Word }, { Ratio, Word } }. \\nA ratio of 1 means it completely matches and a ratio of 0 means nothing matches at all.","params":[{"name":"comparisonStrings","desc":"Array of strings to search and compare through.","lua_type":"string"},{"name":"searchString","desc":"A string that the player is searching for.","lua_type":"string"}],"returns":[{"desc":"","lua_type":"{searchResults: table}"}],"function_type":"static","realm":["Client"],"source":{"line":110,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"HandleSearch","desc":"This function waits for the player to enter text in the search box, and shows the results accordingly.\\nFurthermore, it creates a connection for the SearchButton on KnitInit.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":183,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"UnpackForSearch","desc":"This function goes through all of the categories and unpacks them into a table of strings so the search function can work.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":200,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"UpdateBuyScreen","desc":"This function is called each time before the buy screen is brought up.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":217,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"BuildCategories","desc":"This function automatically puts items in category arrays based on their category type (derived from Furniture array).","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":231,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"HandleBuyScreen","desc":"This function handles all behavior related to the buy screen.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":249,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"HandleCategories","desc":"This function handles all the behavior relating to building categories and their UI.","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":329,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"Hide","desc":"This is a REQUIRED method for all screens\\nIt is responsible for hiding this screenGui\\n\\nExample Usage:\\nMainGuiController:HideScreen(\\"Template\\") will automatically call THIS function\\n\\tAND also CLOSE the other visible screens","params":[],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":436,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"_configureGui","desc":"Clones the GUI from assets into the player\'s PlayerGui\\nself.Gui is a variable that will be set to this item","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":452,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"_configureContainer","desc":"Configures the container inside the given GUI\\nAnimates the container in/out based on the isVisible state","params":[],"returns":[{"desc":"","lua_type":"nil\\r\\n"}],"function_type":"method","realm":["Client"],"private":true,"source":{"line":489,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"KnitInit","desc":"Initialize ShopScreenController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":522,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"KnitStart","desc":"Start ShopScreenController","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","realm":["Client"],"source":{"line":531,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}}],"properties":[{"name":"SEARCH_RESULT_MINIMUM_RATIO","desc":"The similiarity ratio required for the fuzzy search function to accept a string.","lua_type":"number","source":{"line":53,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}},{"name":"name","desc":"Determines the hidden position of this UI\\nThis is calculated by adding this UDim2 to the ORIGIN UDim2 of the frame","lua_type":"DEFAULT_HIDDEN_POSITION","source":{"line":61,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}}],"types":[],"name":"ShopScreenController","desc":"Author: Daniel S.\\nDate: 11/28/2023\\nProject: roblox-sparkles\\n\\nDescription: Handles shop screen UI","realm":["Client"],"source":{"line":11,"path":"src/Client/Controllers/Interface/Screens/ShopScreenController.luau"}}')}}]);