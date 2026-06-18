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
    ["improveMyGrimoire", 2],
    ["shapeMyMana", 1],
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
    ["feelTheEchoesOfTheBurntTown", 4],
    ["improveMyGrimoire", 3],
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
    ["shapeMyMana", 7],
    ["exploreTheLibrary", 1],
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
const genesisPrio = [
    { name: "increaseResonance", minLevel: 5, weight: 100 },
    { name: "increaseIntegration", minLevel: 40, weight: 250 },
    { name: "increaseAmplification", minLevel: 0, weight: 50 },
    { name: "increaseArchmagery", minLevel: 0, weight: 60 },
    { name: "increaseAwareness", minLevel: 15, weight: 160 },
    { name: "increaseConcentration", minLevel: 15, weight: 170 },
    { name: "decreaseImpedance", minLevel: 15, weight: 50 },
    { name: "extraDeathEnergy", minLevel: 9, weight: 532, show_diff: true },
    { name: "extraSendRate", minLevel: 9, weight: 1000*0, show_diff: true },
    { name: "extraConsumptionRate", minLevel: 9, weight: 1000*0, show_diff: true },
    { name: "reduceResourcesConsumed", minLevel: 13, weight: 1800*0, show_diff: true },
    { name: "extraMomentumGeneration", minLevel: 7, weight: 96, show_diff: true },
    { name: "extraFortuneGeneration", minLevel: 0, weight: 0, show_diff: true },
    { name: "extraFightGeneration", minLevel: 12, weight: 0 , show_diff: true},
    { name: "extraGeneratorExp", minLevel: 10, weight: 676, show_diff: true },
    { name: "extraAncientCoins", minLevel: 9, weight: 317, show_diff: true },
    { name: "extraAncientWhispers", minLevel: 10, weight: 0, show_diff: true },
    { name: "extraLegacy", minLevel: 8, weight: 367, show_diff: true },
    { name: "extraBrythalLegacy", minLevel: 10, weight: 720, show_diff: true },
    { name: "extraMarketCap", minLevel: 0, weight: 0, show_diff: true },
    { name: "reducedUnlockCosts", minLevel: 4, weight: 100, show_diff: true },
    { name: "higherSpeedCaps", minLevel: 5, weight: 891, show_diff: true }
];
let autosetup = [[],[],[],[]];
autosetup[0].push({type:"priority", list:earlypriority});
autosetup[0].push({type:"reset", ac:0, hatl:4, momentum:1e33});
autosetup[0].push({type:"reset", stage:2, hatl:7, mq:12, momentum:1e39});
autosetup[0].push({type:"priority", ac:270, list:midpriority});
autosetup[0].push({type:"reset", stage:3, hatl:10, mq:32, momentum:1e52});
autosetup[0].push({type:"reset", stage:5, hatl:10, mq:156, momentum:1e58});
autosetup[0].push({type:"severance", action:"no"});

autosetup[1].push({type:"priority", list:earlypriority});
autosetup[1].push({type:"reset", ac:0, hatl:4});
autosetup[1].push({type:"reset", stage:2, hatl:7, mq:6});
autosetup[1].push({type:"priority", ac:3350, list:midpriority});
autosetup[1].push({type:"reset", stage:4, hatl:10, mq:99, momentum:1e48}); //99 108
autosetup[1].push({type:"reset", stage:6, hatl:12, mq:270, momentum:1e64}); //360 486
autosetup[1].push({type:"severance", action:"no"});

autosetup[2].push({type:"priority", list:earlypriority});
autosetup[2].push({type:"reset", ac:0, hatl:4});
autosetup[2].push({type:"reset", stage:2, hatl:7, mq:6});
autosetup[2].push({type:"priority", ac:7000, list:midpriority});
autosetup[2].push({type:"reset", stage:4, hatl:10, mq:99, momentum:1e48});
autosetup[2].push({type:"reset", stage:6, hatl:13, mq:800, momentum:1e70}); //1365 1575
autosetup[2].push({type:"severance", action:"no"});

autosetup[3].push({type:"priority", list:earlypriority});
autosetup[3].push({type:"reset", ac:0, hatl:4});
autosetup[3].push({type:"reset", stage:2, hatl:7, mq:6, momentum:1e41});
autosetup[3].push({type:"priority", ac:12325+150, list:midpriority});
autosetup[3].push({type:"reset", stage:4, hatl:10, mq:99, momentum:1e48});
autosetup[3].push({type:"priority", ac:27000, list:latepriority});
autosetup[3].push({type:"reset", stage:6, hatl:13, mq:850, momentum:1e70});
autosetup[3].push({type:"reset", stage:104, hatl:15, mq:4284, momentum:1e80, save_aw:true, specific:[{name:"newGamePlus",lvl:1}] }); //6804 7938

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
    save_every_run: false,
    stop_at_genesis: 2500
};

let next_auto= {};

let debug_runs= false;

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
                auto.goal_mq = as.mq/Math.pow(1.18,data.upgrades.extraFightGeneration.upgradesBought-10);
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
        auto.upgrade_priority.recognizeTheFamiliarity = {base:500};
    } else {
        auto.upgrade_priority.recognizeTheFamiliarity = {base:25};
    }
    updateAutomationDisplay();
}

function automate() {
    updateFocusLines();
    if (data.upgrades["newGamePlus"].upgradesBought > 0 || data.ancientWhisper >= 1000000) {
        buyUpgrade("newGamePlus");
        auto.previous_ac = 0;
        recordLStime();
        printLStime(data.genesisResets);
        updatePauseButtonVisuals();
        changeBonusSpeed(400);
        data.gameSettings.stop = true;
        if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
        console.log(`GR ${data.genesisResets} ended - ${data.resetCount} AR`);
        exportSaveFile(`KTL_Genesis_${data.genesisResets}`);
        if (data.genesisResets < auto.stop_at_genesis) {
            optimizeUpgrades(genesisPrio);
            genesisReset(true);
            updateFocusLines();
            auto.previous_ac = 0;
            data.gameSettings.stop = false;
        } else {
            auto.enabled = false;
            updateAutomationButton();
            updatePauseButtonVisuals();
        }
        return;
    }
    if (data.gameState === "KTL") {
        if (document.getElementById("legacySeveranceButton1").style.display === "") {
            if (auto.severance === "save") {
                update_priority(uniquepriority);
                buy_ac_upgrades(uniquepriority);
                recordLStime();
                if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
                if (debug_runs) console.log(`Legacy severance ${data.lichKills} ended`);
                data.gameSettings.stop = true;
                exportSaveFile("KTL_LS_" + data.lichKills);
                data.gameSettings.stop = false;
                legacySeveranceReset(true);
                updateFocusLines();
                auto.previous_ac = 0;
                changeBonusSpeed(400);
            } else {
                update_priority(uniquepriority);
                buy_ac_upgrades(uniquepriority);
                recordLStime();
                if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
                if (debug_runs) console.log(`Legacy severance ${data.lichKills} ended`);
                legacySeveranceReset(true);
                updateFocusLines();
                auto.previous_ac = 0;
                changeBonusSpeed(400);
            }
            return;
        }
        if (data.atts.hope.num <= auto.goal_hope) {
            if (debug_runs) console.log(`stage ${auto.stage}`)
            buy_upgrades();
            if (!data.gameSettings.stop) {
                document.getElementById('amuletConfirm').checked = true;
                if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
                useAmulet();
                updateFocusLines();
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
    if (debug_runs) {
        printAWlvls();
        console.log(`AC left ${Math.floor(data.ancientCoin)} AW left ${Math.floor(data.ancientWhisper)}`)
        console.log(`ready for stage ${getCurrentStage()}`)
        if (check_next_stage()) {
            console.log("next run stage increase");
        }
    }
    cycle_auto();
}

function buy_ac_upgrades(list) {
    if (ready_for_next_stage() && next_auto && next_auto.stage > 5) {
        for (let i = 0; i < 8; i++) {
            if (data.upgrades.refineMyResonance.visible && !data.upgrades.refineMyResonance.isFullyBought) {
                const cost = calcUpgradeCost("refineMyResonance", data.upgrades.refineMyResonance.upgradesBought);
                if (data.ancientCoin >= cost) {
                    if (debug_runs) console.log("refineMyResonance - for KTL");
                    buyUpgrade("refineMyResonance");
                }
            }
        }
    }
    while (find_next_ac_upgrade(list, true) !== undefined) {
        const name = find_next_ac_upgrade(list, true);
        if (debug_runs) console.log(name);
        buyUpgrade(name);
        list = update_priority(list, name);
    }
    if (check_next_stage()) {
        if (data.ancientCoinGained * 0.5 < data.ancientCoin) {
            const name = find_next_ac_upgrade(list, false);
            if (name !== undefined) {
                if (debug_runs) console.log(name + " leftovers");
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
    let bought_all = true;
    for (const [name, lvl] of awList) {
        let success = buy_specific_upgrade(name, lvl);
        if (!success) {
            bought_all = false;
            break;
        }
    }
    if (buy_leftovers || bought_all) {
        let next;
        while ((next = find_next_cheapest_upgrade("actions")) && auto.stage < 100) {
            buyUpgrade(next);
            debug_runs && console.log(next + " leftovers");
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
                if (debug_runs) console.log(key);
            } else {
                if (debug_runs) console.log(key);
            }
        }
    }
    return data.upgrades[key].upgradesBought >= max_lvl;
}

function ready_for_next_stage() {
    if (getCurrentStage() > 100) return false;
    if (next_auto === undefined) {
        return true;
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
        stage: ${getCurrentStage() ?? "-"}<br>
        previous stage: ${auto.stage ?? "-"}<br>
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
        stage: ${getCurrentStage() ?? "-"}<br>
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
    if (data.ls_times === undefined) {
        data.ls_times = [];
        data.ls_times[data.genesisResets] = [0,0,0,0];
    }
    if (data.ls_times[data.genesisResets] === undefined) {
        data.ls_times[data.genesisResets] = [0,0,0,0];
    }
    data.ls_times[data.genesisResets][data.lichKills] = data.currentGameState.secondsThisLS;
}

function secondsToHours(seconds, useInfinity) {
    if(!seconds || seconds < 0) {
        seconds = "0";
    }
    if(useInfinity && (seconds === Infinity || seconds > 3.5e6)) {
        return "∞"
    }
    seconds = Math.floor(seconds);
    const hours = Math.floor(seconds / 3600);
    const remainder = seconds % 3600;
    const minutes = Math.floor(remainder / 60);
    const secs = remainder % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function printLStime(n) {
    const lsTimes = data.ls_times;
    if (!lsTimes) return;

    const printTimes = (key, times) => {
        // Ensure all 4 slots have values (only modify if undefined)
        for (let i = 0; i < 4; i++) {
            if (times[i] === undefined || times[i] === null) times[i] = 0;
        }
        console.log(`G reset: ${key}`);
        console.log(`${secondsToHours(times[0])}\t${secondsToHours(times[1])}\t${secondsToHours(times[2])}\t${secondsToHours(times[3])}`);
    };

    if (n === undefined) {
        // Process all entries
        Object.entries(lsTimes).forEach(([key, times]) => {
            if (times !== undefined && times !== null) printTimes(key, times);
        });
    } else {
        // Process single entry
        const times = lsTimes[n];
        if (times !== undefined && times !== null) printTimes(n, times);
    }
}

function printLStimeLine() {
    const lsTimes = data.ls_times;
    if (!lsTimes) return;

    const printTimes = (key, times) => {
        // Ensure all 4 slots have values (only modify if undefined)
        for (let i = 0; i < 4; i++) {
            if (times[i] === undefined || times[i] === null) times[i] = 0;
        }
        console.log(`${secondsToHours(times[0])}\t${secondsToHours(times[1])}\t${secondsToHours(times[2])}\t${secondsToHours(times[3])}`);
    };
    let counter = -1;
    Object.entries(lsTimes).forEach(([key, times]) => {
        if (times !== undefined && times !== null) {
            if (counter === -1) {
                console.log(`G reset: ${key}`);
            }
            counter = key;
            printTimes(key, times);
        }
    });
    console.log(`G reset: ${counter}`);
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
 * 3: MQ 5-32
 * 4: MQ 234
 * 5: MQ 165-408
 * 6: MQ 600+
 * 7: MQ 1000-2142
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
            return check_u("improveMyGrimoire",2) && check_u("shapeMyMana",2) && check_u("useMyGrimoiresPower",2);
        case 4:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",3) && check_u("useMyGrimoiresPower",2);
        case 5:
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",4) && check_u("useMyGrimoiresPower",2);
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

function optimizeUpgrades(upgradesList) {
    for (const upgrade of upgradesList) {
        const minLevel = upgrade.minLevel;
        if (!data.upgrades[upgrade.name].visible) continue;
        for (let i = data.upgrades[upgrade.name].upgradesBought; i > minLevel; i--) {
            sellUpgrade(upgrade.name);
        }
        for (let i = data.upgrades[upgrade.name].upgradesBought; i < minLevel; i++) {
            buyUpgrade(upgrade.name);
        }
    }
    while (true) {
        let bestUpgrade = null;
        let bestValue = -Infinity;
        for (const upgrade of upgradesList) {
            if (data.upgrades[upgrade.name].upgradesBought >= data.upgrades[upgrade.name].upgradesAvailable || !data.upgrades[upgrade.name].visible) continue;
            const cost = calcUpgradeCost(upgrade.name, data.upgrades[upgrade.name].upgradesBought);
            if (cost <= data.genesisPoints) {
                const value = upgrade.weight / cost;
                if (value > bestValue) {
                    bestValue = value;
                    bestUpgrade = upgrade;
                }
            }
        }
        if (bestUpgrade === null) break;
        buyUpgrade(bestUpgrade.name);
    }
    for (const upgrade of upgradesList) {
        const dif= data.upgrades[upgrade.name].upgradesBought - upgrade.minLevel;
        if (dif > 0 && upgrade.show_diff) {
            console.log(`${upgrade.name} lvl ${data.upgrades[upgrade.name].upgradesBought}(+${dif})`);
        }
    }
    console.log(`${data.upgrades.increaseResonance.upgradesBought}\t${data.upgrades.increaseIntegration.upgradesBought}\t${data.upgrades.increaseAmplification.upgradesBought}\t${data.upgrades.increaseArchmagery.upgradesBought}\t${data.upgrades.increaseAwareness.upgradesBought}\t${data.upgrades.increaseConcentration.upgradesBought}\t${data.upgrades.decreaseImpedance.upgradesBought}`);
    // console.log(`Genesis point left: ${data.genesisPoints}`);
}

function updateFocusLines() {
    for (let focusObj of data.focusSelected) {
        unhighlightLine(focusObj.borderId, focusObj.lineData);
    }
    data.focusSelected = [];
    if (data.actions.dipInTheRiver.level < 10 || !data.actions.infuseMind.visible || data.actions.dipInTheRiver.level < data.actions.dipInTheRiver.maxLevel) {
        focusLine("dipInTheRiver", "prepareInfusion");
        if (data.actions.infuseMind.visible) {
            focusLine("prepareInfusion", "infuseMind");
            if (data.maxFocusAllowed >= 3) {
                focusLine("prepareInfusion", "infuseBody");
            }
        } else {
            focusLine("prepareInfusion", "infuseBody");
        }
    } else {
        focusLine("prepareInfusion", "infuseBody");
        focusLine("prepareInfusion", "infuseMind");
        if (data.maxFocusAllowed >= 3) {
            if (data.upgrades.improveMyGrimoire.upgradesBought <= 0 || data.actions.prepareInfusion.level < 5) {
                focusLine("dipInTheRiver", "prepareInfusion");
                // focusLine("prepareInfusion", "infuseImage");
            } else {
                focusLine("prepareInfusion", "infuseMagic");
            }
        }
    }

}
function focusLine(from, to) {
    if (data.actions[from].visible && data.actions[to].visible) {
        let select = {from: from, to: to};
        let borderId = `${select.from}_${select.to}_Line_Outer`;
        handleLineClick(borderId, select)
    }
}