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
    [
        ["improveMyGrimoire", 1],
        ["respectTheShrine", 1],
        ["feelTheEchoesOfTheBurntTown", 1],
        ["improveMyGrimoire", 2],
        ["shapeMyMana", 1],
        ["shapeMyMana", 2],
        ["useMyGrimoiresPower", 1],
        ["useMyGrimoiresPower", 2],
        ["feelTheEchoesOfTheBurntTown", 2],
        ["buyNicerStuff", 1],
        ["feelTheEchoesOfTheBurntTown", 3],
        ["chatLongerWithAllies", 1],
        ["buyNicerStuff", 2],
        ["investMyCoins", 1],

        ["shapeMyMana", 3],
        ["improveMyGrimoire", 3],

        ["feelTheEchoesOfTheBurntTown", 4],
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
        ["investMyCoins", 3],
        ["investMyCoins", 4],
        ["spendMyFortune", 1],
        ["shapeMyMana", 7],
    ],
    [
        ["improveMyGrimoire", 1],
        ["respectTheShrine", 1],
        ["feelTheEchoesOfTheBurntTown", 1],
        ["improveMyGrimoire", 2],
        ["shapeMyMana", 1],
        ["shapeMyMana", 2],
        ["useMyGrimoiresPower", 1],
        ["useMyGrimoiresPower", 2],
        ["feelTheEchoesOfTheBurntTown", 2],
        ["buyNicerStuff", 1],
        ["chatLongerWithAllies", 1],
        ["investMyCoins", 1],
        ["buyNicerStuff", 2],
        ["feelTheEchoesOfTheBurntTown", 3],

        ["shapeMyMana", 3],
        ["improveMyGrimoire", 3],

        ["feelTheEchoesOfTheBurntTown", 4],
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
        ["investMyCoins", 3],
        ["investMyCoins", 4],
        ["spendMyFortune", 1],
        ["improveMyHouse", 1],
        ["improveMyHouse", 2],
        ["shapeMyMana", 7],
        ["exploreTheLibrary", 1],
        ["readTheOldBooks", 1],
        ["exploreTheLibrary", 2],
        ["readSpellPrimers", 1],
        // ["improveMyHouse", 3]
    ],
    [
        ["improveMyGrimoire", 1],
        ["respectTheShrine", 1],
        ["feelTheEchoesOfTheBurntTown", 1],
        ["improveMyGrimoire", 2],
        ["shapeMyMana", 1],
        ["shapeMyMana", 2],
        ["useMyGrimoiresPower", 1],
        ["useMyGrimoiresPower", 2],
        ["shapeMyMana", 3],
        ["improveMyGrimoire", 3],
        ["feelTheEchoesOfTheBurntTown", 2],
        ["buyNicerStuff", 1],
        ["chatLongerWithAllies", 1],
        ["investMyCoins", 1],

        ["buyNicerStuff", 2],
        ["feelTheEchoesOfTheBurntTown", 3],
        ["feelTheEchoesOfTheBurntTown", 4],
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
        ["investMyCoins", 3],
        ["investMyCoins", 4],
        ["spendMyFortune", 1],

        ["improveMyHouse", 1],
        ["improveMyHouse", 2],
        ["shapeMyMana", 7],
        ["exploreTheLibrary", 1],
        ["readTheOldBooks", 1],
        ["exploreTheLibrary", 2],
        ["readSpellPrimers", 1],
        // ["improveMyHouse", 3]
    ],
    [
        ["improveMyGrimoire", 1],
        ["respectTheShrine", 1],
        ["feelTheEchoesOfTheBurntTown", 1],
        ["improveMyGrimoire", 2],
        ["shapeMyMana", 1],
        ["shapeMyMana", 2],
        ["useMyGrimoiresPower", 1],
        ["useMyGrimoiresPower", 2],
        ["shapeMyMana", 3],
        ["improveMyGrimoire", 3],
        ["feelTheEchoesOfTheBurntTown", 2],
        ["buyNicerStuff", 1],
        ["chatLongerWithAllies", 1],
        ["investMyCoins", 1],
        ["buyNicerStuff", 2],
        ["feelTheEchoesOfTheBurntTown", 3],
        ["buyNicerStuff", 3],
        ["feelTheEchoesOfTheBurntTown", 4],
        ["investMyCoins", 2],
        ["chatLongerWithAllies", 2],
        ["shapeMyMana", 4],
        ["useMoreComplexSpells", 1],
        ["stopBeingSoTense", 1],
        ["feelTheEchoesOfTheBurntTown", 5],
        ["shapeMyMana", 5],

        ["chatLongerWithAllies", 3],

        ["shapeMyMana", 6],
        ["feelTheEchoesOfTheBurntTown", 6],
        ["investMyCoins", 3],
        ["investMyCoins", 4],
        ["spendMyFortune", 1],
        ["improveMyHouse", 1],
        ["useMoreComplexSpells", 2],
        ["improveMyHouse", 2],
        ["shapeMyMana", 7],
        ["exploreTheLibrary", 1],
        ["readTheOldBooks", 1],
        ["exploreTheLibrary", 2],
        ["readSpellPrimers", 1],
        // ["improveMyHouse", 3]
    ]
];
const statsCycle = ["increaseResonance","increaseIntegration","increaseAmplification",
    "increaseArchmagery","increaseAwareness","increaseConcentration","decreaseImpedance"];
const upgradeCycle = [
    ["extraDeathEnergy"],
    ["extraSendRate","extraConsumptionRate","reduceResourcesConsumed"],
    ["extraMomentumGeneration","extraMomentumGeneration"],
    ["extraFightGeneration"],
    ["extraAncientCoins","extraAncientCoins"],
    ["extraLegacy","extraBrythalLegacy"],
    ["extraFortuneGeneration","extraFortuneGeneration","extraMarketCap"],
    ["reducedUnlockCosts","reducedUnlockCosts"]
];
const genesisPrio = [
    { name: "increaseResonance", minLevel: 5, weight: 165 },
    { name: "increaseIntegration", minLevel: 40, weight: 280 },
    { name: "increaseAmplification", minLevel: 0, weight: 72 },
    { name: "increaseArchmagery", minLevel: 0, weight: 85 },
    { name: "increaseAwareness", minLevel: 15, weight: 185 },
    { name: "increaseConcentration", minLevel: 15, weight: 170 },
    { name: "decreaseImpedance", minLevel: 15, weight: 65 },
    { name: "extraDeathEnergy", minLevel: 10, weight: 532, show_diff: true },
    { name: "extraSendRate", minLevel: 12, weight: 0, show_diff: true },
    { name: "extraConsumptionRate", minLevel: 12, weight: 0, show_diff: true },
    { name: "reduceResourcesConsumed", minLevel: 20, weight: 0, show_diff: true },
    { name: "extraMomentumGeneration", minLevel: 10, weight: 0, show_diff: true },
    { name: "extraFortuneGeneration", minLevel: 7, weight: 0, show_diff: true },
    { name: "extraFightGeneration", minLevel: 17, weight: 0 , show_diff: true},
    { name: "extraGeneratorExp", minLevel: 13, weight: 0, show_diff: true },
    { name: "extraAncientCoins", minLevel: 11, weight: 0, show_diff: true },
    { name: "extraAncientWhispers", minLevel: 16, weight: 0, show_diff: true },
    { name: "extraLegacy", minLevel: 11, weight: 0, show_diff: true },
    { name: "extraBrythalLegacy", minLevel: 13, weight: 0, show_diff: true },
    { name: "extraMarketCap", minLevel: 1, weight: 0, show_diff: false },
    { name: "reducedUnlockCosts", minLevel: 8, weight: 0, show_diff: true },
    { name: "higherSpeedCaps", minLevel: 5, weight: 0, show_diff: true }
];
let autosetup = [[],[],[],[]];
autosetup[0].push({type:"priority", list:midpriority});
autosetup[0].push({type:"reset", ac:0, hatl:4, goal:"geyserFields" });
// autosetup[0].push({type:"reset", stage:2, hatl:7, goal:"destroySiegeEngine" });
autosetup[0].push({type:"reset", stage:3, hatl:10, goal:"destroyEasternMonolith", goal_lvl:1 });
autosetup[0].push({type:"severance", action:"no"});

autosetup[1].push({type:"priority", list:midpriority});
autosetup[1].push({type:"reset", ac:0, hatl:6, goal:"destroySiegeEngine" });
// autosetup[1].push({type:"reset", stage:2, hatl:7, goal:"destroySiegeEngine" });
autosetup[1].push({type:"reset", stage:5, hatl:12, goal:"destroyEasternMonolith", goal_lvl:2 });
autosetup[1].push({type:"severance", action:"no"});

autosetup[2].push({type:"priority", list:midpriority});
autosetup[2].push({type:"reset", ac:0, hatl:7, goal:"destroySiegeEngine" });
// autosetup[2].push({type:"reset", stage:4, hatl:10, goal:"destroyEasternMonolith" }); //try to remove it next
autosetup[2].push({type:"reset", stage:5, hatl:13, goal:"destroyEasternMonolith", goal_lvl:3 });
autosetup[2].push({type:"severance", action:"no"});

autosetup[3].push({type:"priority", list:midpriority});
autosetup[3].push({type:"reset", ac:0, hatl:9, goal:"destroySiegeEngine" });
// autosetup[3].push({type:"reset", stage:4, hatl:10, goal:"destroyEasternMonolith" });
autosetup[3].push({type:"reset", stage:5, hatl:15, goal:"protectTheSunstone", save_aw:true, specific:[{name:"newGamePlus",lvl:1}] });

let auto = {
    enabled: false,
    goal_hatl: 1,
    goal_fight: 1,
    goal: "bridgeOfBone",
    goal_lvl: 1,
    goal_hope: -100,
    save_ac: false,
    save_aw: false,
    upgrade_priority: {},
    specific_upgrades: [],
    severance: "stop",
    previous_ac: 0,
    save_every_run: false,
    stop_at_genesis: 10000,
    cycle_stat_weights: false,
    cycle_upgrades: false,
    previous_speed: 400,
    projected_NW: [],
    NW_tick: 0
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
        if (as.goal_lvl === undefined) {
            as.goal_lvl = 0;
        }
        if (as.fight === undefined) {
            as.fight = 1;
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
                auto.goal_fight = as.fight;
                auto.goal = as.goal;
                auto.goal_lvl = as.goal_lvl;
                auto.goal_hope = as.hope;
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

function predictNW() {
    let actions = [
        { name: "fightTheEvilForces", speed: 0.1, lvl_next:0 },
        { name: "bridgeOfBone", speed: 0.1, consume: true, max: 10, lvl_next: 5,
            progressMaxBase:10, progressMaxIncrease:1.5, expToLevelBase:5, unlockCost:5 },
        { name: "harvestGhostlyField", speed: 0.1, consume: true, max: 10, lvl_next: 4,
            progressMaxBase:50, progressMaxIncrease:1.5, expToLevelBase:5, unlockCost:100 },
        { name: "geyserFields", speed: 0.1, consume: true, max: 10, lvl_next: 6,
            progressMaxBase:500, progressMaxIncrease:2, expToLevelBase:5, unlockCost:1000 },
        { name: "destroySiegeEngine", speed: 0.1, consume: true, max: 10, lvl_next: 5,
            progressMaxBase:1e5, progressMaxIncrease:2, expToLevelBase:5, unlockCost:2e5 },
        { name: "destroyEasternMonolith", speed: 0.01, consume: true, max: 3,
            progressMaxBase:3e10, progressMaxIncrease:15, expToLevelBase:1, unlockCost:1e7 },
        { name: "stopDarknessRitual", speed: 0.01, consume: true, max: 10, lvl_next: 5,
            progressMaxBase:2e12, progressMaxIncrease:2, expToLevelBase:5, unlockCost:2e8 },
        { name: "protectTheSunstone", speed: 0.01, consume: true, max: 10,
            progressMaxBase:2e14, progressMaxIncrease:2, expToLevelBase:5, unlockCost:2.5e9 },
    ];
    if (data.lichKills >= 3) actions[5].lvl_next = 3;
    let worry = { progressMaxBase:2, expToLevelBase:1e4, expToLevelIncrease:10, actionPowerBase:5, actionPowerMultIncrease:1.3,
        progress:0, exp: 0, power: 5, lvl: 0 };
    let courage = { progressMaxBase:100, progressMaxIncrease:4, speed: 0.01, bravery:0, progress:0, lvl:0 };
    let overclock = { progressMaxBase:1e29, progressMaxIncrease:2, speed: 0.1, momentum:0, progress:0, lvl:0 }
    const fear = data.actions.hearAboutTheLich.resource;
    const res_effect = data.actions.destroyEasternMonolith.attReductionEffect;
    const mq = actionData.awakenYourGrimoire.manaQuality();
    const f_mult = Math.pow(1.2, data.upgrades.extraFightGeneration.upgradePower);
    const gen_exp = Math.pow(1.05, data.upgrades.extraGeneratorExp.upgradePower);
    const unlock_mult = Math.pow(.9, data.upgrades.reducedUnlockCosts.upgradePower);
    const speed_cap = 1 + data.upgrades.higherSpeedCaps.upgradePower * 0.1;
    const consume = Math.pow(1.1, data.upgrades.extraConsumptionRate.upgradePower);
    const send = Math.pow(1.1, data.upgrades.extraSendRate.upgradePower);
    const drain = 1.0 - 0.05 * data.upgrades.reduceResourcesConsumed.upgradesBought;
    let total_fight = 0;
    overclock.progressMaxBase /= res_effect;
    overclock.progressMaxIncrease -= data.upgrades.improveOverclockToFight.upgradePower*.01;
    let ratio = data.atts.resonance.num/200;
    overclock.speed *= Math.min(speed_cap, (ratio > 1 ? 1 + ((ratio - 1) * 0.1) : Math.pow(0.01,1-ratio)));
    overclock.momentum = data.totalMomentum;
    for (let i = 0; i < actions.length; i++) {
        actions[i].lvl = 0;
        actions[i].exp = 0;
        actions[i].progress = 0;
        if (actions[i].unlockCost) {
            const u = data.actions[actions[i].name].unlockedCount;
            actions[i].fight = -1 * actions[i].unlockCost * unlock_mult;
            if (data.upgrades.recognizeTheFamiliarity.upgradePower > 0) {
                actions[i].fight /= (1 + u * 0.04);
            }
        } else {
            actions[i].fight = 0;
        }
        if (i >= 5) {
            actions[i].progressMaxBase /= res_effect;
        }
    }
    courage.progressMaxBase /= data.actions.courage.attReductionEffect;
    let hope = data.atts.hope.num;
    let speed = Math.min(speed_cap, Math.pow(10, hope/100));
    let t = 0;
    let delta = 0.25;
    let tick = 0;
    const lvlup_limit = Math.ceil(10 / (4 / 20)); //4 ticks for x100 speed
    let history = [];
    while (hope > -100) {
        // if (t < 10) {
        //     delta = 0.25;
        // } else {
        //     delta = 1;
        // }
        t += delta;
        tick++;
        worry.progress += speed * delta;
        let lvlup_counter = lvlup_limit;
        if (worry.progress >= worry.progressMaxBase) {
            worry.progress -= worry.progressMaxBase;
            worry.exp += fear * speed * gen_exp;
            courage.bravery += worry.power * speed;
            while (lvlup_counter > 0 && worry.exp >= worry.expToLevelBase * Math.pow(worry.expToLevelIncrease, worry.lvl)) {
                worry.exp -= worry.expToLevelBase * Math.pow(worry.expToLevelIncrease, worry.lvl)
                worry.lvl++;
                lvlup_counter--;
            }
            worry.power = worry.actionPowerBase * Math.pow(worry.actionPowerMultIncrease, worry.lvl);
        }
        const c_d = courage.bravery * courage.speed * consume * speed * delta;
        courage.progress += c_d;
        courage.bravery -= c_d * drain;
        lvlup_counter = lvlup_limit;
        while (lvlup_counter > 0 && courage.progress >= courage.progressMaxBase * Math.pow(courage.progressMaxIncrease, courage.lvl)) {
            courage.progress -= courage.progressMaxBase * Math.pow(courage.progressMaxIncrease, courage.lvl);
            lvlup_counter--;
            courage.lvl++;
            hope += 10;
        }
        const o_d = overclock.momentum * overclock.speed * consume * delta;
        overclock.progress += o_d;
        overclock.momentum -= o_d * drain;
        lvlup_counter = lvlup_limit;
        while (lvlup_counter > 0 && overclock.progress >= overclock.progressMaxBase * Math.pow(overclock.progressMaxIncrease, overclock.lvl)) {
            overclock.progress -= overclock.progressMaxBase * Math.pow(overclock.progressMaxIncrease, overclock.lvl);
            overclock.lvl++;
            lvlup_counter--;
            const to_add = Math.pow((1+overclock.lvl/10), 3) * mq * f_mult;
            actions[0].fight += to_add;
            total_fight += to_add;
        }
        if (t%10 === 0) {
            hope -= 10;
        }
        speed = Math.min(speed_cap, Math.pow(10, hope/100));
        for (let i = 0; i < actions.length; i++) {
            let a_d = actions[i].fight * actions[i].speed * (i === 0 ? 1 : speed) * delta;
            const d_max = actions[i].speed * speed * ((actions[i].lvl < actions[i].max ? consume : 0) + send);
            if (d_max > 1) {
                a_d /= d_max;
            }
            if (a_d > 0) {
                if (actions[i].consume && actions[i].lvl < actions[i].max) {
                    actions[i].progress += a_d * consume;
                    actions[i].fight -= a_d * consume * drain;
                    lvlup_counter = lvlup_limit;
                    while (lvlup_counter > 0 && actions[i].progress >= actions[i].progressMaxBase * Math.pow(actions[i].progressMaxIncrease, actions[i].lvl) &&
                    actions[i].lvl < actions[i].max) {
                        actions[i].progress -= actions[i].progressMaxBase * Math.pow(actions[i].progressMaxIncrease, actions[i].lvl);
                        lvlup_counter--;
                        actions[i].exp++;
                        if (actions[i].exp >= actions[i].expToLevelBase) {
                            actions[i].exp = 0;
                            actions[i].lvl++;
                        }
                    }
                }
                if (a_d > 0 && actions[i].lvl_next !== undefined && actions[i].lvl >= actions[i].lvl_next) {
                    let ratio = Math.min(1, actions[i].speed * (i === 0 ? 1 : speed) * delta * send);
                    const transfer = actions[i].fight * ratio;
                    actions[i].fight -= transfer;
                    actions[i+1].fight += transfer;
                }
            }
        }
        // history[tick] = {
        //     actions: structuredClone(actions),
        //     overclock: structuredClone(overclock),
        //     worry: structuredClone(worry),
        //     courage: structuredClone(courage),
        //     total_fight: total_fight
        // }
    }
    let result = {
        actions: [],
        overclock: overclock,
        worry: worry,
        courage: courage,
        total_fight: total_fight,
        // history: history
    };
    let j = 0;
    for (let i = actions.length-1; i >= 0; i--) {
        if (!actions[i].consume || (actions[i].fight >= 0 || actions[i].lvl > 0)) {
            result.actions[j] = actions[i];
            j++;
        }
    }
    return result;
}

function checkPredictResult(result) {
    let action_n = 2;
    if (auto.goal === "protectTheSunstone") action_n = 8;
    if (auto.goal === "stopDarknessRitual") action_n = 7;
    if (auto.goal === "destroyEasternMonolith") action_n = 6;
    if (auto.goal === "destroySiegeEngine") action_n = 5;
    if (auto.goal === "geyserFields") action_n = 4;
    if (auto.goal === "harvestGhostlyField") action_n = 3;
    const r_n = result.length;
    if (r_n < action_n) return false;
    if (r_n > action_n) return true;
    for (let i = 0; i < r_n; i++) {
        if (result[i].name === auto.goal && result[i].lvl >= auto.goal_lvl) {
            return true;
        }
    }
    return false;
}

function compareNWexp(name, history = false) {
    const actual = data.actions[name];
    const projected = history ? auto.projected_NW.history[auto.NW_tick] : auto.projected_NW;
    let predict;
    for (const action of projected.actions) {
        if (action.name === name) {
            predict = action;
        }
    }
    let exp1 = actual.exp + actual.progress/actual.progressMax;
    let exp2 = predict.exp + predict.progress/(predict.progressMaxBase * Math.pow(predict.progressMaxIncrease, predict.lvl));
    return `exp:${intToString(exp1)}/${intToString(exp2)}`
}

function checkActualNW() {
    let actions = [
        "bridgeOfBone",
        "harvestGhostlyField",
        "geyserFields",
        "destroySiegeEngine",
        "destroyEasternMonolith",
        "stopDarknessRitual",
        "protectTheSunstone"
    ];
    let diff = [];
    let f_a = auto.projected_NW.actions[0];
    if (!data.actions[f_a.name].visible || data.actions[f_a.name].level < f_a.lvl) {
        console.log("Failed run!");
    }
    for (const action of auto.projected_NW.actions) {
        diff.push(`${action.name} lvl:${data.actions[action.name].level}/${action.lvl} ${compareNWexp(action.name)} fight:${intToString(data.actions[action.name].resource-data.actions[action.name].unlockCost)}/${intToString(action.fight)}`);

    }
    diff.push(`overclock lvl:${data.actions.overclockTargetingTheLich.level}/${auto.projected_NW.overclock.lvl} progress:${intToString(data.actions.overclockTargetingTheLich.progress)}/${intToString(auto.projected_NW.overclock.progress)} momentum:${intToString(data.actions.overclockTargetingTheLich.resource)}/${intToString(auto.projected_NW.overclock.momentum)}`);
    diff.push(`worry lvl:${data.actions.worry.level}/${auto.projected_NW.worry.lvl} exp:${intToString(data.actions.worry.exp)}/${intToString(auto.projected_NW.worry.exp)}`);
    diff.push(`courage lvl:${data.actions.courage.level}/${auto.projected_NW.courage.lvl} progress:${intToString(data.actions.courage.progress)}/${intToString(auto.projected_NW.courage.progress)} bravery:${intToString(data.actions.courage.resource)}/${intToString(auto.projected_NW.courage.bravery)}`);
    diff.push(`total fight:${intToString(data.fightGenerated)}/${intToString(auto.projected_NW.total_fight)}`);
    if (diff.length > 0) {
        console.log(diff.join("; "));
    }
}

function checkHistoryNW() {
    if (auto.NW_tick === undefined) return;
    console.log(auto.NW_tick);
    const projected = auto.projected_NW.history[auto.NW_tick];
    if (projected === undefined) return;
    let actions = [
        "bridgeOfBone",
        "harvestGhostlyField",
        "geyserFields",
        "destroySiegeEngine",
        "destroyEasternMonolith",
        "stopDarknessRitual",
        "protectTheSunstone"
    ];
    let diff = [];
    let f_a = projected.actions[0];
    if (!data.actions[f_a.name].visible || data.actions[f_a.name].level < f_a.lvl) {
        console.log("Failed run!");
    }
    for (const action of projected.actions) {
        diff.push(`${action.name} lvl:${data.actions[action.name].level}/${action.lvl} ${compareNWexp(action.name, true)} fight:${intToString(data.actions[action.name].resource)}/${intToString(action.fight)}`);
    }
    diff.push(`overclock lvl:${data.actions.overclockTargetingTheLich.level}/${projected.overclock.lvl} progress:${intToString(data.actions.overclockTargetingTheLich.progress)}/${intToString(projected.overclock.progress)} momentum:${intToString(data.actions.overclockTargetingTheLich.resource)}/${intToString(projected.overclock.momentum)}`);
    diff.push(`worry lvl:${data.actions.worry.level}/${projected.worry.lvl} exp:${intToString(data.actions.worry.exp)}/${intToString(projected.worry.exp)}`);
    diff.push(`courage lvl:${data.actions.courage.level}/${projected.courage.lvl} progress:${intToString(data.actions.courage.progress)}/${intToString(projected.courage.progress)} bravery:${intToString(data.actions.courage.resource)}/${intToString(projected.courage.bravery)}`);
    diff.push(`total fight:${intToString(data.fightGenerated)}/${intToString(projected.total_fight)}`);
    if (diff.length > 0) {
        console.log(diff.join("; "));
    }
}

function automate() {
    updateFocusLines();
    if (data.upgrades["newGamePlus"].upgradesBought > 0 || data.ancientWhisper >= 1000000) {
        buyUpgrade("newGamePlus");
        if (data.atts.hope.num <= auto.goal_hope) {
            checkActualNW();
            auto.previous_ac = 0;
            recordLStime();
            printLStime(data.genesisResets);
            updatePauseButtonVisuals();
            changeBonusSpeed(auto.previous_speed);
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
            auto.NW_tick = 0;
            return;
        }
    }
    if (data.gameState === "KTL") {
        auto.NW_tick++;
        if (document.getElementById("legacySeveranceButton1").style.display === "") {
            if (data.atts.hope.num <= auto.goal_hope) {
                checkActualNW();
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
                    changeBonusSpeed(auto.previous_speed);
                } else {
                    update_priority(uniquepriority);
                    buy_ac_upgrades(uniquepriority);
                    recordLStime();
                    if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
                    if (debug_runs) console.log(`Legacy severance ${data.lichKills} ended`);
                    legacySeveranceReset(true);
                    updateFocusLines();
                    auto.previous_ac = 0;
                    changeBonusSpeed(auto.previous_speed);
                }
                auto.NW_tick = 0;
                return;
            }
        } else {
            if (data.atts.hope.num <= auto.goal_hope) {
                if (debug_runs) console.log(`stage ${auto.stage}`)
                checkActualNW();
                buy_upgrades();
                if (!data.gameSettings.stop) {
                    document.getElementById('amuletConfirm').checked = true;
                    if (debug_runs) console.log(`Amulet run ${data.resetCount} ended`);
                    useAmulet();
                    auto.NW_tick = 0;
                    updateFocusLines();
                    changeBonusSpeed(auto.previous_speed);
                    if (auto.save_every_run) {
                        exportSaveFile("KTL_Run_" + (data.resetCount-1));
                    }
                }
            }
        }

    } else {
        if (data.actions.hearAboutTheLich.level >= auto.goal_hatl) {
            if (actionData.awakenYourGrimoire.manaQuality() >= 1) {
                const result= predictNW();
                if (checkPredictResult(result.actions)) {
                    auto.projected_NW = result;
                    auto.previous_speed = data.options.bonusRate;
                    if (data.options.bonusRate > 100) {
                        changeBonusSpeed(100);
                    }
                    initializeKTL(true);
                }
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
    for (const [name, lvl] of awList[data.lichKills]) {
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
        stage: ${getCurrentStage() ?? "-"}<br>
        previous stage: ${auto.stage ?? "-"}<br>
        previous HATL goal: ${auto.goal_hatl ?? "-"}<br>
        previous fight goal: ${auto.goal_fight ?? "-"}<br>
        previous goal: ${auto.goal ?? "-"} lvl:${auto.goal_lvl ?? 0}<br>
        action on severance: ${auto.severance ?? "-"}<br>
        save every run: ${auto.save_every_run ?? "-"}
    `;
    } else {
        return `
        LS: ${data.lichKills ?? "-"}<br>
        stage: ${getCurrentStage() ?? "-"}<br>
        previous/next stage: ${auto.stage ?? "-"} / ${next_auto.stage ?? "-"}<br>
        previous/next HATL goal: ${auto.goal_hatl ?? "-"} / ${next_auto.hatl ?? "-"}<br>
        previous/next fight goal: ${auto.goal_fight ?? "-"} / ${next_auto.goal_fight ?? "-"}<br>
        previous/next goal: ${auto.goal ?? "-"} lvl:${auto.goal_lvl ?? 0} / ${next_auto.goal ?? "-"} lvl:${next_auto.goal_lvl ?? 0}<br>
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

function genesisStats() {
    let result = [];
    for (let i = 0; i < statsCycle.length; i++) {
        let stat = statsCycle[i].replace(/increase|decrease/gi, '');
        result.push(`${stat}${data.upgrades[statsCycle[i]].upgradesBought}`);
    }
    return result.join(";");
}

function recordLStime() {
    if (data.ls_times === undefined) {
        data.ls_times = [];
        data.ls_times[data.genesisResets] = [0,0,0,0,""];
    }
    if (data.ls_times[data.genesisResets] === undefined) {
        data.ls_times[data.genesisResets] = [0,0,0,0,""];
    }
    data.ls_times[data.genesisResets][data.lichKills] = data.currentGameState.secondsThisLS;
    data.ls_times[data.genesisResets][4] = genesisStats();
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
        console.log(`${times[4]}`);
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
        console.log(`${secondsToHours(times[0])}\t${secondsToHours(times[1])}\t${secondsToHours(times[2])}\t${secondsToHours(times[3])}\t${times[4]}`);
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
 * 2: MQ 5-12
 * 3: MQ 10-64 (80+)
 * 4: MQ 234
 * 5: MQ 330+ (760+)
 * 6: MQ 448+
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
            return check_u("improveMyGrimoire",3) && check_u("shapeMyMana",5) && check_u("useMoreComplexSpells",1);
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

function getCyclicNumber(n, range) {
    const tens = Math.floor(n / 10);
    return tens % range;
}

function optimizeUpgrades(upgradesList) {
    for (const upgrade of upgradesList) {
        if (!data.upgrades[upgrade.name].visible) continue;
        let minLevel = upgrade.minLevel;
        if (auto.cycle_upgrades) {
            const k = getCyclicNumber(data.genesisResets - 6320 + 1, upgradeCycle.length);
            for (const u of upgradeCycle[k]) {
                if (u === upgrade.name) {
                    minLevel++;
                }
            }
        }
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
                let value = upgrade.weight / cost;
                if (auto.cycle_stat_weights) {
                    const k = getCyclicNumber(data.genesisResets - 4260 + 1, statsCycle.length);
                    if (k < 7 && statsCycle[k] === upgrade.name) {
                        value *= 1.15;
                    }
                }
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
    // console.log(`${data.upgrades.increaseResonance.upgradesBought}\t${data.upgrades.increaseIntegration.upgradesBought}\t${data.upgrades.increaseAmplification.upgradesBought}\t${data.upgrades.increaseArchmagery.upgradesBought}\t${data.upgrades.increaseAwareness.upgradesBought}\t${data.upgrades.increaseConcentration.upgradesBought}\t${data.upgrades.decreaseImpedance.upgradesBought}`);
    // console.log(`Genesis point left: ${data.genesisPoints}`);
}

function updateFocusLines() {
    for (let focusObj of data.focusSelected) {
        unhighlightLine(focusObj.borderId, focusObj.lineData);
    }
    data.focusSelected = [];
    focusLine("dipInTheRiver", "prepareInfusion");
    if (data.actions.infuseMind.visible) {
        focusLine("prepareInfusion", "infuseMind");
        if (data.maxFocusAllowed >= 3) {
            focusLine("prepareInfusion", "infuseBody");
        }
    } else {
        focusLine("prepareInfusion", "infuseBody");
    }
    if (data.maxFocusAllowed >= 4) {
        if (data.actions.infuseMagic.visible) {
            focusLine("prepareInfusion", "infuseMagic");
        } else {
            if (data.actions.infuseSenses.visible) {
                focusLine("prepareInfusion", "infuseSenses");
            } else {
                focusLine("prepareInfusion", "infuseImage");
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