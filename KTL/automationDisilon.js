const earlypriority = {
    refineMyAwareness:110,
    refineMyConcentration:110,
    refineMyControl:110,
    refineMyEnergy:110,
    refineMyIntegration:140,

    valueMyResearch:20,
    refineMyAmplification:20,
    refineMyPulse:20,
    refineMyCycle:20,
    refineMyResonance:90,

    refineMyAmbition:20,
    refineMyLeverage:20,
    refineMySavvy:20,
    refineMyVision:20,

    refineMyInfluence:20,
    refineMyConfidence:20,
    refineMyCharm:20,

    refineMyObservation:20,
    refineMyEndurance:20,
    refineMyMight:20,
    refineMyNavigation:20,

    refineMyWizardry:21,
    refineMyArchmagery:21,
    refineMySpellcraft:21,
    refineMyValor:10,

    refineMyImpedance:20,

    haveBetterIceBreakers:19,
    extractMyWorth:19,
    glimpseTheWeave:11,
    increaseMyPace:40,
    listenToThePast:19,
    channelMore:19,
    haveBetterConversations:19,
    workHarder:19,
    weaveSmallerStrands:11,
    createABetterFoundation:40,
    feelTheRemnants:19,
    sparkMoreMana:19,
    studyHarder:19,

    valueMyBody:55,
    rememberWhatIDid:70,
    rememberHowIGrew:70,
    rememberMyMastery:140
};
const midpriority = {
    refineMyAwareness:70,
    refineMyConcentration:70,
    refineMyControl:70,
    refineMyEnergy:70,
    refineMyIntegration:100,

    valueMyResearch:20,
    refineMyAmplification:20,
    refineMyPulse:20,
    refineMyCycle:20,
    refineMyResonance:70,

    refineMyAmbition:20,
    refineMyLeverage:20,
    refineMySavvy:20,
    refineMyVision:20,

    refineMyInfluence:20,
    refineMyConfidence:20,
    refineMyCharm:20,

    refineMyObservation:20,
    refineMyEndurance:20,
    refineMyMight:20,
    refineMyNavigation:20,

    refineMyWizardry:21,
    refineMyArchmagery:21,
    refineMySpellcraft:21,
    refineMyValor:25,

    refineMyImpedance:20,

    haveBetterIceBreakers:19,
    extractMyWorth:19,
    glimpseTheWeave:11,
    increaseMyPace:40,
    listenToThePast:19,
    channelMore:19,
    haveBetterConversations:19,
    workHarder:19,
    weaveSmallerStrands:11,
    createABetterFoundation:40,
    feelTheRemnants:19,
    sparkMoreMana:19,
    studyHarder:19,
    increaseMarketCap:19,

    increaseInitialInvestment:25,
    valueMyBody:35,
    rememberWhatIDid:70,
    rememberHowIGrew:70,
    rememberMyMastery:140
};
const latepriority = {
    refineMyAwareness:50,
    refineMyConcentration:50,
    refineMyControl:50,
    refineMyEnergy:50,
    refineMyIntegration:100,

    valueMyResearch:35,
    refineMyAmplification:35,
    refineMyPulse:35,
    refineMyCycle:30,
    refineMyResonance:140,

    refineMyAmbition:30,
    refineMyLeverage:20,
    refineMySavvy:30,
    refineMyVision:35,

    refineMyInfluence:20,
    refineMyConfidence:20,
    refineMyCharm:20,

    refineMyObservation:20,
    refineMyEndurance:20,
    refineMyMight:20,
    refineMyNavigation:20,

    refineMyWizardry:25,
    refineMyArchmagery:20,
    refineMySpellcraft:25,
    refineMyValor:25,

    refineMyImpedance:20,

    haveBetterIceBreakers:19,
    extractMyWorth:19,
    glimpseTheWeave:2,
    increaseMyPace:19,
    listenToThePast:25,
    channelMore:25,
    haveBetterConversations:19,
    workHarder:19,
    weaveSmallerStrands:2,
    createABetterFoundation:19,
    feelTheRemnants:25,
    sparkMoreMana:25,
    studyHarder:19,
    increaseMarketCap:19,

    increaseInitialInvestment:25,
    valueMyBody:35,
    rememberWhatIDid:70,
    rememberHowIGrew:70,
    rememberMyMastery:140
};
let uniquepriority= {
    valueMyBody:{base:100},
    startALittleQuicker:{base:2},
    pickUpValuablePlants:{base:10},
    startCasualChats:{base:10},
    learnToFocusMore:{base:1},
    rememberWhatIFocusedOn:{base:1},
    increaseInitialInvestment:{base:100},
    findAngelInvestors:{base:100},
    retrieveMyUnusedResources:{base:15},
    valueMyResearch:{base:100},
};
let autosetup = [[],[],[],[]];
autosetup[0].push({type:"priority", list:earlypriority});
autosetup[0].push({type:"reset", ac:0, hatl:1, hope:-100, specific:[{name:"improveMyGrimoire",lvl:1}] });
autosetup[0].push({type:"reset", ac:10, hatl:2, mq:3, hope:-200});
autosetup[0].push({type:"reset", ac:40, hatl:2, mq:3, hope:-200, save_aw:true, specific:[{name:"improveMyGrimoire",lvl:2},{name:"shapeMyMana",lvl:1}] });
autosetup[0].push({type:"reset", ac:100, hatl:2, mq:3, hope:-200, specific:[{name:"refineMyIntegration",lvl:1},{name:"improveMyGrimoire",lvl:2}] });
autosetup[0].push({type:"reset", ac:130, hatl:3, mq:5, hope:-200, specific:[{name:"buyNicerStuff",lvl:1},{name:"chatLongerWithAllies",lvl:1}] });
autosetup[0].push({type:"reset", ac:220, hatl:3, mq:5, hope:-200, specific:[{name:"shapeMyMana",lvl:2}] });
autosetup[0].push({type:"reset", ac:490, hatl:3, mq:5, hope:-200, save_aw:true, specific:[{name:"feelTheEchoesOfTheBurntTown",lvl:3},{name:"shapeMyMana",lvl:3}] });
autosetup[0].push({type:"reset", ac:760, hatl:3, mq:5, hope:-200, save_aw:true, specific:[{name:"recognizeTheFamiliarity",lvl:1},{name:"feelTheEchoesOfTheBurntTown",lvl:3},{name:"shapeMyMana",lvl:3}] });
autosetup[0].push({type:"reset", ac:850, hatl:5, mq:32, hope:-200, specific:[{name:"feelTheEchoesOfTheBurntTown",lvl:4}] });
autosetup[0].push({type:"priority", ac:850, list:midpriority});
autosetup[0].push({type:"reset", ac:2622+354, hatl:9, mq:270, hope:-200, specific:[{name:"increaseMarketCap",lvl:1}] });
autosetup[0].push({type:"reset", ac:12200, hatl:10, mq:880, hope:-200});
autosetup[0].push({type:"severance", action:"save"});

autosetup[1].push({type:"priority", list:earlypriority});
autosetup[1].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[1].push({type:"reset", ac:3303+10, hatl:2, mq:3, hope:-100});
autosetup[1].push({type:"reset", ac:3303+40, hatl:3, mq:4, hope:-200});
autosetup[1].push({type:"reset", ac:3303+400, hatl:5, mq:32, hope:-200});
autosetup[1].push({type:"priority", ac:3303+400, list:midpriority});
autosetup[1].push({type:"reset", ac:5475, hatl:9, mq:300, hope:-200});
autosetup[1].push({type:"reset", ac:20000, hatl:9, mq:300, hope:-200, specific:[{name:"refineMyResonance",lvl:3}] });
autosetup[1].push({type:"reset", ac:23000, hatl:11, mq:2000, hope:-200});
autosetup[1].push({type:"severance", action:"save"});

autosetup[2].push({type:"priority", list:earlypriority});
autosetup[2].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[2].push({type:"reset", ac:6872+10, hatl:2, mq:3, hope:-100});
autosetup[2].push({type:"reset", ac:6872+40, hatl:3, mq:4, hope:-200, save_aw:true, specific:[{name:"shapeMyMana",lvl:3},{name:"feelTheEchoesOfTheBurntTown",lvl:2},{name:"improveMyGrimoire",lvl:2}] });
autosetup[2].push({type:"reset", ac:6872+220, hatl:3, mq:4, hope:-200});
autosetup[2].push({type:"reset", ac:6872+310, hatl:6, mq:32, hope:-200});
autosetup[2].push({type:"priority", ac:6872+310, list:midpriority});
autosetup[2].push({type:"reset", ac:6872+500, hatl:5, mq:32, hope:-200});
autosetup[2].push({type:"reset", ac:8837, hatl:9, mq:252, hope:-200});
autosetup[2].push({type:"reset", ac:18000, hatl:8, mq:252, hope:-200}); //, save_aw:true, specific:[{name:"exploreTheLibrary",lvl:1},{name:"shapeMyMana",lvl:7},{name:"readTheOldBooks",lvl:1},{name:"exploreTheLibrary",lvl:2},{name:"readSpellPrimers",lvl:1}]
autosetup[2].push({type:"reset", ac:28000, hatl:8, mq:252, hope:-200, specific:[{name:"refineMyResonance",lvl:3}] });
autosetup[2].push({type:"reset", ac:30000, hatl:11, mq:6000, hope:-300});
autosetup[2].push({type:"severance", action:"save"});

autosetup[3].push({type:"priority", list:earlypriority});
autosetup[3].push({type:"reset", ac:0, hatl:1, hope:-100, specific:[{name:"improveMyGrimoire",lvl:1}] });
autosetup[3].push({type:"reset", ac:12325+10, hatl:2, mq:3, hope:-100});
autosetup[3].push({type:"reset", ac:12325+40, hatl:3, mq:4, hope:-200, save_aw:true, specific:[{name:"shapeMyMana",lvl:3},{name:"feelTheEchoesOfTheBurntTown",lvl:2},{name:"improveMyGrimoire",lvl:2}] });
autosetup[3].push({type:"reset", ac:12325+220, hatl:3, mq:6, hope:-200});
autosetup[3].push({type:"reset", ac:12325+310, hatl:6, mq:32, hope:-200});
autosetup[3].push({type:"priority", ac:12325+310, list:midpriority});
autosetup[3].push({type:"reset", ac:12325+500, hatl:5, mq:32, hope:-200});
autosetup[3].push({type:"reset", ac:13875, hatl:9, mq:252, hope:-200});
autosetup[3].push({type:"reset", ac:29000, hatl:9, mq:252, hope:-200, save_aw:true, specific:[{name:"readTheOldBooks",lvl:1},{name:"exploreTheLibrary",lvl:2},{name:"readSpellPrimers",lvl:1}] });
autosetup[3].push({type:"priority", ac:29000, list:latepriority});
autosetup[3].push({type:"reset", ac:38000, hatl:14, mq:7938, momentum: 0, hope:-200, save_aw:true, specific:[{name:"improveOverclockToFight",lvl:10}] });
autosetup[3].push({type:"reset", ac:65000, hatl:13, mq:4536, hope:-200, save_aw:true, specific:[{name:"improveOverclockToFight",lvl:10}] });
autosetup[3].push({type:"reset", ac:120000, hatl:13, mq:4536, hope:-200, specific:[{name:"improveOverclockToFight",lvl:10}] });
autosetup[3].push({type:"reset", ac:250000, hatl:16, mq:27000, hope:-270, save_aw:true, specific:[{name:"newGamePlus",lvl:1}] });

let auto = {
    enabled: false,
    goal_hatl: 1,
    goal_mq: 1,
    goal_hope: -100,
    goal_momentum: 0,
    goal_legacy: 0,
    save_ac: false,
    save_aw: false,
    upgrade_priority: {},
    specific_upgrades: [],
    severance: "stop",
    previous_ac: 0,
    save_every_run: false
};

let next_auto= {};

data.ls_times = [];

const log_bought_upgrades = false;

function cycle_auto() {
    let current_ac = calc_total_ac_worth();
    next_auto = undefined;
    for (let i = 0; i < autosetup[data.lichKills].length; i++) {
        let as = autosetup[data.lichKills][i];
        if (as.ac === undefined) {
            as.ac = 0;
        }
        if (as.legacy === undefined) {
            as.legacy = 0;
        }
        if (as.momentum === undefined) {
            as.momentum = 0;
        }
        if (as.mq === undefined) {
            as.mq = 1;
        }
        if (as.save_ac === undefined) {
            as.save_ac = false;
        }
        if (as.save_aw === undefined) {
            as.save_aw = false;
        }
        if (current_ac >= as.ac) {
            if (as.ac > 0) auto.previous_ac = as.ac;
            if (as.type === "priority") {
                auto.upgrade_priority = {};
                for (let key in as.list) {
                    auto.upgrade_priority[key] = {base:as.list[key]};
                }
            }
            if (as.type === "reset") {
                auto.goal_hatl = as.hatl;
                auto.goal_mq = as.mq;
                auto.goal_hope = as.hope;
                auto.goal_legacy = as.legacy;
                auto.goal_momentum = as.momentum;
                auto.save_ac = as.save_ac;
                auto.save_aw = as.save_aw;
                if (as.specific !== undefined) {
                    auto.specific_upgrades = as.specific;
                }
            }
            if (as.type === "severance") {
                auto.severance = as.action;
            }
        } else {
            if (next_auto === undefined && as.type === "reset") {
                // next_auto = structuredClone(as);
                next_auto = as;
            }
        }
    }
    if (data.upgrades["keepUnlockedCount"].upgradesBought > 0) {
        auto.upgrade_priority.recognizeTheFamiliarity = {base:75};
    } else {
        auto.upgrade_priority.recognizeTheFamiliarity = {base:25};
    }
    updateAutomationDisplay();
}

function automate() {
    if (data.upgrades["newGamePlus"].upgradesBought > 0 || data.ancientWhisper >= 1000000) {
        buyUpgrade("newGamePlus");
        auto.enabled = false;
        auto.previous_ac = 0;
        updateAutomationButton();
        data.gameSettings.stop = true;
        recordLStime();
        printLStime();
        updatePauseButtonVisuals();
        changeBonusSpeed(400);
        return;
    }
    if (data.gameState === "KTL") {
        if (document.getElementById("legacySeveranceButton1").style.display === "") {
            if (auto.severance === "save") {
                update_priority(uniquepriority);
                buy_ac_upgrades(uniquepriority);
                recordLStime();
                data.gameSettings.stop = true;
                exportSaveFile("KTL_LS_" + data.lichKills);
                data.gameSettings.stop = false;
                legacySeveranceReset(true);
                auto.previous_ac = 0;
                changeBonusSpeed(400);
            } else {
                auto.enabled = false;
                updateAutomationButton();
                pauseGame();
            }
            return;
        }
        if (data.atts.hope.num <= auto.goal_hope) {
            buy_upgrades();
            printAWlvls();
            if (!data.gameSettings.stop) {
                document.getElementById('amuletConfirm').checked = true;
                console.log("Amulet reset:" + data.resetCount);
                useAmulet();
                changeBonusSpeed(400);
                if (auto.save_every_run) {
                    exportSaveFile("KTL_Run_" + data.resetCount);
                }
            }
        }
    } else {
        if (data.actions.hearAboutTheLich.level >= auto.goal_hatl && actionData.awakenYourGrimoire.manaQuality() >= auto.goal_mq) {
            if (data.legacy >= auto.goal_legacy && data.totalMomentum >= auto.goal_momentum) {
                changeBonusSpeed(100);
                initializeKTL(true);
            }
        }
    }
}

function buy_upgrades() {
    if (document.getElementById("legacySeveranceButton1").style.display === "") {
        update_priority(uniquepriority);
        buy_ac_upgrades(uniquepriority);
    }
    for (let specific of auto.specific_upgrades) {
        buy_specific_upgrade(specific.name, specific.lvl);
    }
    if (!auto.save_aw) {
        buy_aw_upgrades();
    }
    auto.upgrade_priority = update_priority(auto.upgrade_priority);
    if (!auto.save_ac) {
        buy_ac_upgrades(auto.upgrade_priority);
    }
    cycle_auto();
}

function buy_ac_upgrades(list) {
    while (find_next_ac_upgrade(list, true) !== undefined) {
        const name = find_next_ac_upgrade(list, true);
        if (log_bought_upgrades) console.log(name);
        buyUpgrade(name);
        list = update_priority(list, name);
    }
}

function find_next_ac_upgrade(list, save_for_prio) {
    let max_prio = 0;
    let upgrade_name;
    for (let key in list) {
        if (data.upgrades[key].visible) {
            if (!data.upgrades[key].isFullyBought) {
                const cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
                const prio = list[key].prio;
                if (prio > max_prio && (save_for_prio || canAffordUpgrade("ac", cost))) {
                    max_prio = prio;
                    upgrade_name = key;
                }
            }
        }
    }
    if (upgrade_name === undefined) {
        return undefined;
    }
    const cost = calcUpgradeCost(upgrade_name, data.upgrades[upgrade_name].upgradesBought);
    if (save_for_prio && !canAffordUpgrade("ac", cost)) {
        return undefined;
    }
    return upgrade_name;
}

function update_priority(list, name) {
    if (name === undefined) {
        for (let key in list) {
            let cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
            list[key].prio = list[key].base / cost;
        }
    } else {
        let cost = calcUpgradeCost(name, data.upgrades[name].upgradesBought);
        list[name].prio = list[name].base / cost;
    }
    return list;
}

function find_next_cheapest_upgrade(type) {
    let min_cost= -1;
    let upgrade_name;
    for (let key in upgradeData) {
        if (upgradeData[key].type === type && data.upgrades[key].visible) {
            if (!data.upgrades[key].isFullyBought) {
                const cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
                if ((min_cost < 0 || min_cost > cost) && canAffordUpgrade(type, cost)) {
                    min_cost = cost;
                    upgrade_name = key;
                }
            }
        }
    }
    return upgrade_name;
}

function buy_aw_upgrades() {
    while (find_next_cheapest_upgrade("actions") !== undefined) {
        const name = find_next_cheapest_upgrade("actions");
        buyUpgrade(name);
        if (log_bought_upgrades) console.log(name);
    }
}

function buy_specific_upgrade(key, lvl) {
    const max_lvl = Math.min(data.upgrades[key].upgradesAvailable, lvl);
    for (let i = data.upgrades[key].upgradesBought; i < max_lvl; i++) {
        const cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
        if (data.upgrades[key].visible && canAffordUpgrade(upgradeData[key].type, cost)) {
            buyUpgrade(key);
            if (log_bought_upgrades) console.log(key);
        }
    }
}

function calc_total_ac_worth() {
    let result = data.ancientCoin;
    for (let upg in data.upgrades) {
        if (upgradeData[upg].type !== "actions" && upgradeData[upg].type !== "genesis" && upgradeData[upg].isAutomation !== true) {
            result += calcTotalSpentOnUpgrade(data.upgrades[upg].initialCost, data.upgrades[upg].costIncrease, data.upgrades[upg].upgradesBought, data.upgrades[upg].additiveIncrease);
        }
    }
    return Math.round(result);
}

function updateAutomationDisplay() {
    document.getElementById("automationInfoContainer").innerHTML = automationInfo();
}

function automationInfo() {
    if (next_auto === undefined) {
        return `
        LS: ${data.lichKills ?? "-"}<br>
        AC: ${calc_total_ac_worth() ?? "-"}<br>
        previous AC goal: ${auto.previous_ac ?? "-"}<br>
        previous HATL goal: ${auto.goal_hatl ?? "-"}<br>
        previous MQ goal: ${auto.goal_mq ?? "-"}<br>
        previous Legacy goal: ${auto.goal_legacy ?? "-"}<br>
        action on severance: ${auto.severance ?? "-"}<br>
        save every run: ${auto.save_every_run ?? "-"}
    `;
    } else {
        return `
        LS: ${data.lichKills ?? "-"}<br>
        AC: ${calc_total_ac_worth() ?? "-"}<br>
        previous/next AC goal: ${auto.previous_ac ?? "-"} / ${next_auto.ac ?? "-"}<br>
        previous/next HATL goal: ${auto.goal_hatl ?? "-"} / ${next_auto.hatl ?? "-"}<br>
        previous/next MQ goal: ${auto.goal_mq ?? "-"} / ${next_auto.mq ?? "-"}<br>
        previous/next Legacy goal: ${auto.goal_legacy ?? "-"} / ${next_auto.legacy ?? "-"}<br>
        action on severance: ${auto.severance ?? "-"}<br>
        save every run: ${auto.save_every_run ?? "-"}
    `;
    }
}

function automationHideButton() {
    let button = document.getElementById("automationDisplayShowButton");
    let automationDisplay = view.cached.automationDisplay;
    if(automationDisplay.style.display !== "none") {
        automationDisplay.style.display = "none";
        button.style.display = "";
    } else {
        automationDisplay.style.display = "flex";
        button.style.display = "none";
    }
}

function toggleAutomation() {
    auto.enabled = !auto.enabled;
    updateAutomationButton();
}

function updateAutomationButton() {
    if(!auto.enabled) {
        views.updateVal("toggleAutomationButton", "red", "style.backgroundColor");
        views.updateVal("toggleAutomationButton", "Enable automation", "textContent")
    } else {
        views.updateVal("toggleAutomationButton", "green", "style.backgroundColor");
        views.updateVal("toggleAutomationButton", "Disable automation", "textContent")
    }
}

function recordLStime() {
    data.ls_times[data.lichKills] = data.currentGameState.secondsThisLS;
    if (data.lichKills === 0) {
        data.ls_times[1] = 0;
        data.ls_times[2] = 0;
        data.ls_times[3] = 0;
    }
}

function printLStime() {
    console.log("G resets:");
    console.log(data.genesisResets);
    for (let l in data.ls_times) {
        console.log(secondsToTime(data.ls_times[l]));
    }
}

function printAWlvls() {
    printAWlvl("feelTheEchoesOfTheBurntTown");
    printAWlvl("shapeMyMana");
    printAWlvl("improveMyGrimoire");
    printAWlvl("readSpellPrimers");
    printAWlvl("improveOverclockToFight");
}

function printAWlvl(name) {
    let lvl = data.upgrades[name].upgradesBought;
    if (lvl > 0) {
        console.log(name + " - " + lvl);
    }
}