const earlypriority = {
    refineMyAwareness:110,
    refineMyConcentration:110,
    refineMyControl:110,
    refineMyEnergy:110,
    refineMyIntegration:140,

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
    increaseMarketCap:19,

    increaseInitialInvestment:25,
    valueMyBody:35,
    rememberWhatIDid:70,
    rememberHowIGrew:70,
    rememberMyMastery:140
};
let uniquepriority= {
    startALittleQuicker:{base:2},
    pickUpValuablePlants:{base:10},
    startCasualChats:{base:10},
    learnToFocusMore:{base:1},
    rememberWhatIFocusedOn:{base:1},
    increaseInitialInvestment:{base:100},
    findAngelInvestors:{base:100},
    retrieveMyUnusedResources:{base:15}
};
let autosetup = [[],[],[],[]];
autosetup[0].push({type:"priority", list:earlypriority});
autosetup[0].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[0].push({type:"reset", ac:10, hatl:1, legacy:40, hope:-100, save_ac:true});
autosetup[0].push({type:"reset", ac:20, hatl:2, mq:4, hope:-200});
autosetup[0].push({type:"reset", ac:110, hatl:2, mq:4, hope:-200, save_aw:true, specific:[{name:"improveMyGrimoire",lvl:2}] });
autosetup[0].push({type:"reset", ac:170, hatl:3, mq:6, hope:-200});
autosetup[0].push({type:"reset", ac:1340, hatl:3, mq:6, hope:-200, save_aw:true, specific:[{name:"improveMyGrimoire",lvl:3}] });
autosetup[0].push({type:"reset", ac:1520, hatl:5, mq:48, hope:-200, specific:[{name:"feelTheEchoesOfTheBurntTown",lvl:3}] });
autosetup[0].push({type:"priority", ac:1520, list:midpriority});
autosetup[0].push({type:"reset", ac:2493, hatl:5, mq:32, hope:-200});
autosetup[0].push({type:"reset", ac:6200, hatl:9, mq:540, hope:-200, specific:[{name:"increaseMarketCap",lvl:1}] });
autosetup[0].push({type:"reset", ac:9200, hatl:9, mq:486, hope:-200});
autosetup[0].push({type:"reset", ac:13200, hatl:8, mq:576, hope:-200});
autosetup[0].push({type:"reset", ac:18500, hatl:9, mq:1470, hope:-200});
autosetup[0].push({type:"severance", action:"stop"});

autosetup[1].push({type:"priority", list:earlypriority});
autosetup[1].push({type:"reset", ac:0, hatl:1, hope:-100});
autosetup[1].push({type:"reset", ac:3303+10, hatl:1, legacy:40, hope:-100, save_ac:true});
autosetup[1].push({type:"reset", ac:3303+20, hatl:2, mq:4, hope:-200});
autosetup[1].push({type:"reset", ac:3303+110, hatl:2, mq:4, hope:-200, save_aw:true, specific:[{name:"improveMyGrimoire",lvl:2}] });
autosetup[1].push({type:"reset", ac:3303+170, hatl:3, mq:6, hope:-200});
autosetup[1].push({type:"reset", ac:3303+1160, hatl:3, mq:6, hope:-200, save_aw:true, specific:[{name:"improveMyGrimoire",lvl:3}] });
autosetup[1].push({type:"reset", ac:3303+1430, hatl:5, mq:48, hope:-200, specific:[{name:"feelTheEchoesOfTheBurntTown",lvl:3}] });
autosetup[1].push({type:"priority", ac:3303+1430, list:midpriority});
autosetup[1].push({type:"reset", ac:3303+2493, hatl:5, mq:32, hope:-200});
autosetup[1].push({type:"reset", ac:9600, hatl:5, mq:32, hope:-200, specific:[{name:"increaseMarketCap",lvl:1}] });
autosetup[1].push({type:"reset", ac:11500, hatl:9, mq:576, hope:-200});
autosetup[1].push({type:"reset", ac:48000, hatl:12, mq:2646, hope:-200});
autosetup[1].push({type:"severance", action:"save"});

let goal_hatl= 1;
let goal_mq= 1;
let goal_hope= -100;
let goal_legacy= 0;
let save_ac= false;
let save_aw= false;
let upgrade_priority= {};
let specific_upgrades= [];
let severance= "stop";
let auto_enabled= true;

function cycle_auto() {
    let current_ac = calc_total_ac_worth();
    for (let i = 0; i < autosetup[data.lichKills].length; i++) {
        let auto = autosetup[data.lichKills][i];
        if (auto.ac === undefined) {
            auto.ac = 0;
        }
        if (auto.legacy === undefined) {
            auto.legacy = 0;
        }
        if (auto.mq === undefined) {
            auto.mq = 1;
        }
        if (auto.save_ac === undefined) {
            auto.save_ac = false;
        }
        if (auto.save_aw === undefined) {
            auto.save_aw = false;
        }
        if (current_ac >= auto.ac) {
            if (auto.type === "priority") {
                upgrade_priority = {};
                for (let key in auto.list) {
                    upgrade_priority[key] = {base:auto.list[key]};
                }
            }
            if (auto.type === "reset") {
                goal_hatl = auto.hatl;
                goal_mq = auto.mq;
                goal_hope = auto.hope;
                goal_legacy = auto.legacy;
                save_ac = auto.save_ac;
                save_aw = auto.save_aw;
                if (auto.specific !== undefined) {
                    specific_upgrades = auto.specific;
                }
            }
            if (auto.type === "severance") {
                severance = auto.action;

            }
        }
    }
    if (data.upgrades["keepUnlockedCount"].upgradesBought > 0) {
        upgrade_priority.recognizeTheFamiliarity = {base:75};
    } else {
        upgrade_priority.recognizeTheFamiliarity = {base:25};
    }
}

function automate() {
    if (data.gameState === "KTL") {
        if (document.getElementById("legacySeveranceButton1").style.display === "") {
            if (severance === "save") {
                update_priority(uniquepriority);
                buy_ac_upgrades(uniquepriority);
                exportSaveFile("KTL_LS_" + data.lichKills);
                legacySeveranceReset(true);
                changeBonusSpeed(400);
            } else {
                auto_enabled = false;
                pauseGame();
            }
            return;
        }
        if (data.atts.hope.num <= goal_hope) {
            for (let specific of specific_upgrades) {
                buy_specific_upgrade(specific.name, specific.lvl);
            }
            if (!save_aw) {
                buy_aw_upgrades();
            }
            upgrade_priority = update_priority(upgrade_priority);
            if (!save_ac) {
                buy_ac_upgrades(upgrade_priority);
            }
            cycle_auto();
            if (!data.gameSettings.stop) {
                document.getElementById('amuletConfirm').checked = true;
                console.log("Amulet reset:" + data.resetCount);
                useAmulet();
                changeBonusSpeed(400);
            }
        }
    } else {
        if (data.actions.hearAboutTheLich.level >= goal_hatl && actionData.awakenYourGrimoire.manaQuality() >= goal_mq) {
            if (data.legacy >= goal_legacy) {
                changeBonusSpeed(100);
                initializeKTL(true);
            }
        }
    }
}

function buy_ac_upgrades(list) {
    while (find_next_ac_upgrade(list, true) !== undefined) {
        const name = find_next_ac_upgrade(list, true);
        console.log(name);
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
        console.log(name);
    }
}

function buy_specific_upgrade(key, lvl) {
    const cost = calcUpgradeCost(key, data.upgrades[key].upgradesBought);
    if (data.upgrades[key].upgradesBought < lvl && canAffordUpgrade(upgradeData[key].type, cost)) {
        buyUpgrade(key);
        console.log(key);
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