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
const awList = [
    ["improveMyGrimoire", 1],
    ["respectTheShrine", 1],
    ["feelTheEchoesOfTheBurntTown", 1],
    ["shapeMyMana", 1],
    ["improveMyGrimoire", 2],
    ["shapeMyMana", 2],
    ["feelTheEchoesOfTheBurntTown", 2],
    ["buyNicerStuff", 1],
    ["useMyGrimoiresPower", 1],
    ["useMyGrimoiresPower", 2],
    ["shapeMyMana", 3],
    ["chatLongerWithAllies", 1],
    ["investMyCoins", 1],
    ["buyNicerStuff", 2],
    ["feelTheEchoesOfTheBurntTown", 3],
    ["feelTheEchoesOfTheBurntTown", 4], //check this order
    ["improveMyGrimoire", 3], // Low-genesis placing
    ["investMyCoins", 2],
    ["buyNicerStuff", 3],
    ["chatLongerWithAllies", 2],
    ["shapeMyMana", 4],
    ["useMoreComplexSpells", 1],
    ["stopBeingSoTense", 1],
    ["feelTheEchoesOfTheBurntTown", 5],
    ["chatLongerWithAllies", 3],
    ["useMoreComplexSpells", 2],
    ["shapeMyMana", 5],
    ["shapeMyMana", 6],
    ["feelTheEchoesOfTheBurntTown", 6],
    ["exploreTheLibrary", 1],
    ["shapeMyMana", 7],
    ["readTheOldBooks", 1],
    ["exploreTheLibrary", 2],
    ["readSpellPrimers", 1],
    ["investMyCoins", 3],
    ["investMyCoins", 4],
    ["spendMyFortune", 1],
    ["improveMyHouse", 1],
    ["improveMyHouse", 2],
    // ["improveMyHouse", 3]
];
let autosetup = [[],[],[],[]];
autosetup[0].push({type:"priority", list:earlypriority});
autosetup[0].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[0].push({type:"reset", stage:1, ac:10, hatl:2, mq:3});
autosetup[0].push({type:"reset", stage:2, ac:130, hatl:3, mq:5});
autosetup[0].push({type:"reset", stage:3, ac:490, hatl:3, mq:5});
autosetup[0].push({type:"priority", ac:760, list:midpriority});
autosetup[0].push({type:"reset", stage:4, ac:850, hatl:5, mq:32});
autosetup[0].push({type:"reset", stage:5, ac:2622+354, hatl:9, mq:270});
autosetup[0].push({type:"reset", stage:6, ac:12200, hatl:10, mq:880});
autosetup[0].push({type:"severance", action:"save"});

autosetup[1].push({type:"priority", list:earlypriority});
autosetup[1].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[1].push({type:"reset", stage:1, ac:3303+10, hatl:2, mq:3, hope:-100});
autosetup[1].push({type:"reset", stage:1, ac:3303+40, hatl:3, mq:4});
autosetup[1].push({type:"priority", ac:3303+310, list:midpriority});
autosetup[1].push({type:"reset", stage:4, ac:3303+400, hatl:5, mq:32});
autosetup[1].push({type:"reset", stage:5, ac:5475, hatl:9, mq:300});
autosetup[1].push({type:"reset", stage:7, ac:23000, hatl:11, mq:2000});
autosetup[1].push({type:"severance", action:"save"});

autosetup[2].push({type:"priority", list:earlypriority});
autosetup[2].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[2].push({type:"reset", stage:1, ac:6872+10, hatl:2, mq:3, hope:-100});
autosetup[2].push({type:"reset", stage:1, ac:6872+40, hatl:3, mq:4});
autosetup[2].push({type:"priority", ac:6872+220, list:midpriority});
autosetup[2].push({type:"reset", stage:4, ac:6872+310, hatl:6, mq:32});
autosetup[2].push({type:"reset", stage:4, ac:6872+500, hatl:5, mq:32});
autosetup[2].push({type:"reset", stage:5, ac:8837, hatl:9, mq:252});
autosetup[2].push({type:"reset", stage:5, ac:18000, hatl:8, mq:252});
autosetup[2].push({type:"reset", stage:8, ac:30000, hatl:11, mq:6000, hope:-300});
autosetup[2].push({type:"severance", action:"save"});

autosetup[3].push({type:"priority", list:earlypriority});
autosetup[3].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[3].push({type:"reset", stage:1, ac:12325+10, hatl:2, mq:3, hope:-100});
autosetup[3].push({type:"reset", stage:1, ac:12325+40, hatl:3, mq:4});
autosetup[3].push({type:"priority", ac:12325+220, list:midpriority});
autosetup[3].push({type:"reset", stage:4, ac:12325+310, hatl:6, mq:32});
autosetup[3].push({type:"reset", stage:4, ac:12325+500, hatl:5, mq:32});
autosetup[3].push({type:"reset", stage:5, ac:13875, hatl:9, mq:252});
autosetup[3].push({type:"priority", ac:29000, list:latepriority});
autosetup[3].push({type:"reset", stage:8, ac:38000, hatl:14, mq:7938, save_aw:true, specific:[{name:"improveOverclockToFight",lvl:10}] });
autosetup[3].push({type:"reset", stage:8, ac:65000, hatl:13, mq:4536, save_aw:true, specific:[{name:"improveOverclockToFight",lvl:10}] });
autosetup[3].push({type:"reset", stage:8, ac:120000, hatl:13, mq:4536});
autosetup[3].push({type:"reset", stage:108, ac:200000, hatl:16, mq:27000, hope:-270, save_aw:true, specific:[{name:"newGamePlus",lvl:1}] });

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

const log_bought_ACupgrades = true;
const log_bought_AWupgrades = true;

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
        if (as.hope === undefined) {
            as.hope = -100;
        }
        if (as.stage === undefined) {
            as.stage = 0;
        }
        if (as.save_ac === undefined) {
            as.save_ac = false;
        }
        if (as.save_aw === undefined) {
            as.save_aw = false;
        }
        if (current_ac >= as.ac && check_stage(as.stage)) {
            if (as.ac > 0) auto.previous_ac = as.ac;
            if (as.type === "priority") {
                auto.upgrade_priority = {};
                for (let key in as.list) {
                    auto.upgrade_priority[key] = {base:as.list[key]};
                }
            }
            if (as.type === "reset") {
                auto.stage = as.stage;
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
                console.log(`Amulet run ${data.resetCount} ended`);
                console.log(`Legacy severance ${data.lichKills} ended`);
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
            console.log(`stage ${auto.stage}`)
            buy_upgrades();
            if (!data.gameSettings.stop) {
                document.getElementById('amuletConfirm').checked = true;
                console.log(`Amulet run ${data.resetCount} ended`);
                useAmulet();
                changeBonusSpeed(400);
                if (auto.save_every_run) {
                    exportSaveFile("KTL_Run_" + (data.resetCount-1));
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
    if (auto.save_aw) {
        auto.save_aw = auto.specific_upgrades.some(specific =>
            data.upgrades[specific.name]?.type === "actions" && !check_u(specific.name, specific.lvl)
        );
    }
    if (auto.save_ac) {
        auto.save_ac = auto.specific_upgrades.some(specific =>
            data.upgrades[specific.name]?.type !== "actions" && !check_u(specific.name, specific.lvl)
        );
    }
    if (!auto.save_aw) {
        buy_aw_upgrades(ready_for_next_stage());
    }
    auto.upgrade_priority = update_priority(auto.upgrade_priority);
    if (!auto.save_ac) {
        buy_ac_upgrades(auto.upgrade_priority);
    }
    printAWlvls();
    console.log(`AC left ${Math.floor(data.ancientCoin)} AW left ${Math.floor(data.ancientWhisper)}`)
    console.log(`ready for stage ${getCurrentStage()}`)
    if (check_next_stage()) {
        console.log("next run stage increase");
    }
    cycle_auto();
}

function buy_ac_upgrades(list) {
    if (ready_for_next_stage() && next_auto.stage > 5) {
        for (let i = 0; i < 8; i++) {
            if (data.upgrades.refineMyResonance.visible && !data.upgrades.refineMyResonance.isFullyBought) {
                const cost = calcUpgradeCost("refineMyResonance", data.upgrades.refineMyResonance.upgradesBought);
                if (data.ancientCoin >= cost) {
                    if (log_bought_ACupgrades) console.log("refineMyResonance - for KTL");
                    buyUpgrade("refineMyResonance");
                }
            }
        }
    }
    while (find_next_ac_upgrade(list, true) !== undefined) {
        const name = find_next_ac_upgrade(list, true);
        if (log_bought_ACupgrades) console.log(name);
        buyUpgrade(name);
        list = update_priority(list, name);
    }
    if (check_next_stage()) {
        if (data.ancientCoinGained * 0.5 < data.ancientCoin) {
            const name = find_next_ac_upgrade(list, false);
            if (name !== undefined) {
                if (log_bought_ACupgrades) console.log(name + " leftovers");
                buyUpgrade(name);
                list = update_priority(list, name);
            }
        }
    }
}

function check_next_stage() {
    if (next_auto === undefined) return false;
    return auto.stage < next_auto.stage && getCurrentStage() === next_auto.stage && calc_total_ac_worth() >= next_auto.ac;
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

function buy_aw_upgrades(buy_leftovers) {
    for (const [name, lvl] of awList) {
        let success = buy_specific_upgrade(name, lvl);
        if (!success) break;
    }
    if (buy_leftovers) {
        let next;
        while ((next = find_next_cheapest_upgrade("actions")) && getCurrentStage() < 100) {
            buyUpgrade(next);
            log_bought_AWupgrades && console.log(next + " leftovers");
        }
    }
}

function buy_specific_upgrade(key, lvl) {
    let max_lvl = Math.min(data.upgrades[key].upgradesAvailable, lvl);
    if (!data.upgrades[key].visible) max_lvl = 0;
    for (let i = data.upgrades[key].upgradesBought; i < max_lvl; i++) {
        const cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
        if (data.upgrades[key].visible && canAffordUpgrade(upgradeData[key].type, cost)) {
            buyUpgrade(key);
            if (data.upgrades[key].type === "actions") {
                if (log_bought_AWupgrades) console.log(key);
            } else {
                if (log_bought_ACupgrades) console.log(key);
            }
        }
    }
    return data.upgrades[key].upgradesBought >= max_lvl;
}

function ready_for_next_stage() {
    if (next_auto === undefined) {
        return false;
    }
    return calc_total_ac_worth() >= next_auto.ac && check_stage(next_auto.stage);
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
        previous/next stage: ${auto.stage ?? "-"}<br>
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
        previous/next stage: ${auto.stage ?? "-"} / ${next_auto.stage ?? "-"}<br>
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

/**
 * @param {number} stage
 * 1: MQ 2-4
 * 2: MQ 5?
 * 3: MQ 5-6
 * 4: MQ 12-64
 * 5: MQ 165-408
 * 6: MQ 600+
 * 7: MQ 1000+
 * 8: MQ 4000+
 * 100+: improveOverclockToFight lvl + 100
 * @return boolean
 */
function check_stage(stage) {
    if (stage > 100) {
        return check_u("improveOverclockToFight",stage-100);
    }
    switch (stage) {
        case 0:
            return true;
        case 1:
            return check_u("improveMyGrimoire",1);
        case 2:
            return check_u("improveMyGrimoire",2);
        case 3:
            return check_u("improveMyGrimoire",2) && check_u("shapeMyMana",2);
        case 4:
            return check_u("improveMyGrimoire",2) && check_u("shapeMyMana",3);
        case 5:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",4);
        case 6:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",5) && check_u("useMoreComplexSpells",2);
        case 7:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",7) && check_u("useMoreComplexSpells",2);
        case 8:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",7) && check_u("useMoreComplexSpells",2) && check_u("readSpellPrimers",1);
    }
    return false;
}

function getCurrentStage() {
    const iotf = data.upgrades.improveOverclockToFight.upgradesBought;
    if (iotf > 0) return iotf + 100;
    // Start from the highest stage and go down to find the first completed one
    for (let stage = 8; stage >= 0; stage--) {
        if (check_stage(stage)) {
            return stage;
        }
    }
    return 0;
}

function check_u(name, lvl) {
    return data.upgrades[name].upgradesBought >= lvl;
}