//injection into original game code
const original_gameTick = gameTick;
gameTick = function() {
    original_gameTick();
    if (auto.enabled) {
        automate();
    }
}
const original_loop = loop;
loop = function() {
    original_loop();
    if (!data.gameSettings.stop) {
        if (data.gameState !== "KTL") {
            cycle_auto();
        }
    }
}

updateUIOnLoad = function() {
    updatePauseButtonVisuals()

    refreshResetLog()
    rebuildLog()
    rebuildPinned()
    clickUpgradeTab("unique");
    checkActionTriggers()
    checkGrimoireUnlocks()
    displayLSStuff()
    checkShopUnlocks()
    refreshShopUpgrades()
    checkDailyTimer()
    applyShopEffects()
    data[hashedKey] = false;
    data[hashIt(mySecret)] = true;

    document.getElementById('viewDeltasSwitch').firstElementChild.style.left = data.gameSettings.viewDeltas ? "50%" : "0";
    document.getElementById('numberTypeSwitch').firstElementChild.style.left = data.gameSettings.numberType==="numberSuffix" ? "66.666%" : (data.gameSettings.numberType==="scientific" ? "33.333%" : "0");
    document.getElementById('viewRatioSwitch').firstElementChild.style.left = data.gameSettings.viewRatio ? "50%" : "0";
    document.getElementById('viewTotalMomentumSwitch').firstElementChild.style.left = data.gameSettings.viewTotalMomentum ? "50%" : "0";
    document.getElementById('viewZeroButtonsSwitch').firstElementChild.style.left = data.gameSettings.viewAll0Buttons ? "50%" : "0";
    document.getElementById('viewAdvancedSlidersSwitch').firstElementChild.style.left = data.gameSettings.viewAdvancedSliders ? "50%" : "0";
    document.getElementById('viewEstimatedTimesSwitch').firstElementChild.style.left = data.gameSettings.viewEstimatedTimes ? "50%" : "0";
    document.getElementById("showCompleteUpgrades").checked = data.gameSettings.showCompletedToggle;
    document.getElementById("showUnaffordableUpgrades").checked = data.gameSettings.showUnaffordable;
    document.getElementById("sortByCost").checked = data.gameSettings.sortByCost;
    applyWebZoomFactor(data.gameSettings.webZoomFactor ?? 1);
    if(data.gameSettings.bonusSpeed > 1) {
        data.gameSettings.bonusSpeed = 1;
        //set it to 3 or set the checked correctly on load
    }
    data.options.bonusRate = 10;
    updateBonusSpeedButton();
    bonusMenuHideButton();
    statMenuHideButton();
    automationHideButton();
    toggleLog();


    for (let actionVar in data.actions) {
        let actionObj = data.actions[actionVar];
        let dataObj = actionData[actionVar];
        if (data.gameState === "KTL") {
            actionObj.isRunning = dataObj.plane === 2;
        } else {
            actionObj.isRunning = dataObj.plane !== 2;
        }
        actionObj.connectedLines = 0;
        let menuFromSave = actionObj.currentMenu;
        actionObj.currentMenu = "";
        clickActionMenu(actionVar, menuFromSave);
        if (actionObj.visible) {
            revealAttsOnAction(actionObj);
        }
        if (data.gameSettings.viewDeltas) {
            views.updateVal(`${actionVar}DeltasDisplayContainer`, "", "style.display");
        }
        if (data.gameSettings.viewRatio) {
            views.updateVal(`${actionVar}BalanceNeedleContainer`, "", "style.display");
        }
        if (data.gameSettings.viewAll0Buttons && dataObj.plane !== 2) {
            views.updateVal(`${actionVar}ToggleDownstreamButtons`, "", "style.display");
        }
        if (data.gameSettings.viewTotalMomentum) {
            views.updateVal(`${actionVar}TotalDownstreamContainer`, "", "style.display");
        }
        if (dataObj.hasUpstream || dataObj.keepParentAutomation) {
            let showRevealAutomation = data.upgrades.stopLettingOpportunityWait.upgradePower > 0 && dataObj.hasUpstream;
            let showMaxLevelAutomation = data.upgrades.knowWhenToMoveOn.upgradePower > 0;
            views.updateVal(`${actionVar}_automationMenuButton`, dataObj.plane !== 2 && (showRevealAutomation || showMaxLevelAutomation) ? "" : "none", "style.display");
            if(dataObj.maxLevel !== undefined) {
                views.updateVal(`${actionVar}_automationMaxLevelContainer`, dataObj.plane !== 2 && showMaxLevelAutomation ? "" : "none", "style.display");
            }
            if(dataObj.hasUpstream) {
                views.updateVal(`${actionVar}_automationRevealContainer`, dataObj.plane !== 2 && showRevealAutomation ? "" : "none", "style.display");
            }
        }

        if(data.doneAmulet) {
            views.updateVal(`${actionVar}PinButton`, "", "style.display");
        }
        if(dataObj.hasUpstream) {
            if (actionObj.automationOnReveal > 0) {
                views.updateVal(`${actionVar}_checkbox`, true, "checked");
                views.updateVal(`${actionVar}_track`, "#2196F3", "style.backgroundColor");
                views.updateVal(`${actionVar}_knob`, "translateX(26px)", "style.transform");
            }
        }
        if((dataObj.hasUpstream || dataObj.keepParentAutomation) && dataObj.maxLevel !== undefined) {
            if (actionObj.automationCanDisable) {
                views.updateVal(`${actionVar}_checkbox2`, true, "checked");
                views.updateVal(`${actionVar}_track2`, "#2196F3", "style.backgroundColor");
                views.updateVal(`${actionVar}_knob2`, "translateX(26px)", "style.transform");
            }
        }
        if(dataObj.isSpell || dataObj.isSpellConsumer) {
            updatePauseActionVisuals(actionVar);
        }
        views.updateVal(`${actionVar}_storyMenuButton`, actionObj.readStory!==undefined?"":"#2196F3", "style.color");
    }
    data.actions.reposeRebounded.isRunning = true;

    if (data.planeUnlocked[1] || data.planeUnlocked[2]) {
        for (let i = 0; i < data.planeUnlocked.length; i++) {
            if (data.planeUnlocked[i]) {
                unveilPlane(i);
            }
        }
    }
    if(data.gameState === "KTL") {
        switchToPlane(2);
    } else {
        switchToPlane(0);
    }


    if(data.doneAmulet && data.gameState !== "KTL") {
        views.updateVal(`openViewAmuletButton`, "", "style.display");
    }
    if(data.useAmuletButtonShowing && data.gameState === "KTL") {
        views.updateVal(`openUseAmuletButton`, "", "style.display");
    }
    if(data.doneKTL) {
        views.updateVal(`ancientCoinDisplay`, "", "style.display");
        views.updateVal(`ancientWhisperDisplay`, "", "style.display");
        views.updateVal(`legacyDisplay`, "", "style.display");
        // views.updateVal(`legacyMultDisplay`, "", "style.display");
        // views.updateVal(`ancientCoinMultDisplay`, "", "style.display");
    }
    views.updateVal(`jobDisplay`, data.displayJob ? "" : "none", "style.display");
    changeJob(data.currentJob);

    for(let i = 0; i < data.toastStates.length; i++) {
        updateToastUI(i);
    }

    // updateSliderDisplay(data.gameSettings.ticksPerSecond);
    // document.getElementById("FPSSlider").value = data.gameSettings.ticksPerSecond;

    updatePreviousTipsMenu();
    reapplyAttentionSelected();
    resizeStatMenu();

    for (const upgradeVar in data.upgrades) {
        const upgrade = data.upgrades[upgradeVar];
        views.updateVal(`card_${upgradeVar}`, upgrade.visible ? "flex" : "none", "style.display");
    }

    for(let attVar in data.atts) {
        recalcAttMult(attVar)
    }

    // views.updateVal(`killTheLichMenuButton2`, !data.actions.trainWithTeam.unlocked ? "Fight the Lich's Forces!":"Fight the Lich's Forces, Together!");

    if(data.upgrades.newGamePlus.upgradePower > 0 || data.genesisResets > 0) {
        document.getElementById("genesisUpgradeTab").style.display = "";
    }
    if(data.upgrades.newGamePlus.upgradePower > 0) {
        document.getElementById("genesisResetButtonContainer").style.display = "";
    } else {
        document.getElementById("genesisResetButtonContainer").style.display = "none";
    }
}

setAllCaches = function() {
    queueCache("totalMomentum");
    queueCache("secondsPerReset");
    queueCache("NWSecondsContainer");
    queueCache("NWSeconds");
    queueCache("openUseAmuletButton");
    queueCache("openViewAmuletButton");
    queueCache("legacyAmount");
    // queueCache("legacyMult");
    queueCache("ancientCoin");
    queueCache("ancientCoin2");
    // queueCache("ancientCoinMult");
    queueCache("ancientWhisper");
    queueCache("ancientWhisper2");
    queueCache("lichCoinsDisplay");
    queueCache("lichCoins2");
    queueCache("manaQuality");
    queueCache("manaQuality2");
    queueCache("manaQualityErrorMessage");
    queueCache("bonusTime");
    queueCache("convertBtn");
    queueCache("instantBonusTime");
    queueCache("killTheLichMenu");
    queueCache("attDisplay");
    queueCache("bonusDisplay");
    queueCache("killTheLichMenuButton2");
    queueCache("legacyDisplay");
    queueCache("ancientCoinDisplay");
    queueCache("ancientWhisperDisplay");
    queueCache("manaQualityDisplay");
    queueCache("jobDisplay");
    // queueCache("ancientCoinMultDisplay");
    // queueCache("legacyMultDisplay");
    queueCache("HATLDisplay");
    queueCache("HATLestimatedDisplay");
    queueCache("HATL");
    queueCache("HATLestimated");
    queueCache("useAmuletMenu");
    queueCache("amuletEnabledContainer");
    queueCache("amuletMenuTitle");
    queueCache("legacySeveranceMenu");
    queueCache("highestLegacyContainer");
    queueCache("highestLegacy");
    queueCache("secondsPassedContainer");
    queueCache("secondsPassed");
    queueCache("secondsThisGRContainer");
    queueCache("secondsThisGR");
    queueCache("secondsThisLSContainer");
    queueCache("secondsThisLS");
    queueCache("genesisPoints");
    queueCache("genesisResets");
    queueCache("shopContainer");
    queueCache("toggleBonusSpeedButton");
    queueCache("automationDisplay");
    queueCache("toggleAutomationButton");
    for(let actionVar in data.actions) {
        view.cached[`${actionVar}ActionPower`] = document.getElementById(`${actionVar}ActionPower`);
        view.cached[`${actionVar}ResourceSent`] = document.getElementById(`${actionVar}ResourceSent`);
        view.cached[`${actionVar}ResourceTaken`] = document.getElementById(`${actionVar}ResourceTaken`);
        view.cached[`${actionVar}ExpGained`] = document.getElementById(`${actionVar}ExpGained`);
    }
    for(let i = 0; i < data.planeUnlocked.length; i++) {
        queueCache(`planeButton${i}`);
    }
    clearCacheQueue();
}

initializeKTL = function(forceReset) {
    if (!forceReset && (!document.getElementById('confirmKTL').checked ||
        !(isDebug || (data.actions.hearAboutTheLich.level >= 1 && actionData.awakenYourGrimoire.manaQuality() >= 1)))) {
        return;
    }
    trackFirst();
    logKTL();
    resetKTLSpiral();
    for (let actionVar in data.actions) {
        let actionObj = data.actions[actionVar];
        let dataObj = actionData[actionVar];
        actionObj.isRunning = dataObj.plane === 2;

        if(dataObj.plane === 2) {
            views.updateVal(`${actionVar}UnlockText`, generateUnlockText(actionVar), "innerHTML");
        }
    }
    data.actions.reposeRebounded.isRunning = true;
    unveilPlane(2);
    switchToPlane(2);
    views.updateVal("openViewAmuletButton", "none", "style.display")
    if (data.doneAmulet) {
        views.updateVal("openUseAmuletButton", "", "style.display")
    }
    for (let focusObj of data.focusSelected) {
        unhighlightLine(focusObj.borderId, focusObj.lineData);
        let power = data.upgrades.rememberWhatIFocusedOn.upgradePower + 1;
        if (data.upgrades.rememberWhatIFocusedOn.upgradePower > 0) {
            let actionObj = data.actions[focusObj.lineData.from];
            let permFocusMultKey = focusObj.lineData.to + "PermFocusMult";
            if (actionObj[permFocusMultKey] < power) {
                actionObj[permFocusMultKey] += Math.pow(data.actions.hearAboutTheLich.level, 2) / 100;
                if (actionObj[permFocusMultKey] > power) {
                    actionObj[permFocusMultKey] = power;
                }
            }
        }
    }
    data.focusSelected = [];
    data.actions.overclockTargetingTheLich.resource = data.totalMomentum;
    data.actions.worry.resource = data.actions.hearAboutTheLich.resource;
    views.updateVal("killTheLichMenu", "none", "style.display")
    revealAtt("hope");
    data.actions.fightTheEvilForces.unlockCost = 0;
    revealAction('worry');
    revealAction('courage');
    revealAction('fightTheEvilForces');
    revealAction('overclockTargetingTheLich');
    unlockAction(data.actions.worry);
    unlockAction(data.actions.courage);
    unlockAction(data.actions.fightTheEvilForces);
    unlockAction(data.actions.overclockTargetingTheLich);
    actionUpdateAllStatMults();
    views.updateVal(`ancientCoinDisplay`, "", "style.display");
    views.updateVal(`ancientWhisperDisplay`, "", "style.display");
    // views.updateVal(`legacyMultDisplay`, "", "style.display");
    // views.updateVal(`ancientCoinMultDisplay`, "", "style.display");
    data.doneKTL = true;
    data.gameState = "KTL";
}

views.updateViewOnSecond = function () {
    showAllValidToasts();
    drawChart();
    checkActionsToReveal();

    let toShowUseAmulet = data.useAmuletButtonShowing && data.gameState === "KTL";
    views.updateVal(`openUseAmuletButton`, toShowUseAmulet ? "" : "none", "style.display");

    views.updateVal(`ancientCoinDisplay`, data.doneKTL ? "" : "none", "style.display");
    views.updateVal(`ancientWhisperDisplay`, data.doneKTL ? "" : "none", "style.display");
    views.updateVal(`legacyDisplay`, data.legacy > 0 ? "" : "none", "style.display");
    views.updateVal(`highestLegacyContainer`, data.highestLegacy > 0 ? "" : "none", "style.display");
    views.updateVal(`highestLegacy`, data.highestLegacy, "textContent", 2);
    views.updateVal(`secondsPassed`, data.currentGameState.secondsPassed, "textContent", "time");
    views.updateVal(`secondsThisGRContainer`, data.currentGameState.secondsThisGR > 0 ? "" : "none", "style.display");
    views.updateVal(`secondsThisGR`, data.currentGameState.secondsThisGR, "textContent", "time");
    views.updateVal(`secondsThisLSContainer`, (data.lichKills > 0 || data.genesisResets > 0) ? "" : "none", "style.display");
    views.updateVal(`secondsThisLS`, data.currentGameState.secondsThisLS, "textContent", "time");
    // views.updateVal(`legacyMult`, data.legacyMultKTL
    //     * Math.pow(1.1, data.upgrades.extraLegacy.upgradePower)
    //     * Math.pow(1.5, data.shopUpgrades.extraLegacy.upgradePower)
    //     * (data.shopUpgrades.currencyGainPotion.upgradePower > 0 ? 2 : 1), "innerText", 2);
    // views.updateVal(`ancientCoinMult`, data.ancientCoinMultKTL, "innerText", 2);

    views.updateVal(`manaQualityDisplay`, actionData.awakenYourGrimoire.manaQuality() > 0 ? "" : "none", "style.display");

    views.updateVal(`jobDisplay`, data.displayJob ? "" : "none", "style.display");

    views.updateVal(`HATLDisplay`, data.actions.hearAboutTheLich.unlocked ? "" : "none", "style.display");
    views.updateVal(`HATLestimatedDisplay`, data.actions.hearAboutTheLich.unlocked ? "" : "none", "style.display");
    views.updateVal(`HATL`, data.actions.hearAboutTheLich.level, "innerText", "none");
    views.updateVal(`HATLestimated`, secondsToTime(calcTimeToLevel(data.actions.hearAboutTheLich), true), "textContent");

    let shouldShowKTLButton = data.actions.hearAboutTheLich.level >= 1 && data.gameState !== "KTL";
    views.updateVal(`killTheLichMenuButton2`, shouldShowKTLButton?"":"none", "style.display")

    if(isSteam) {
        let hideShop = data[hashIt("test")] || !data[hashIt(mySecret)]
        views.updateVal(`shopContainer`, hideShop ? "none" : "", "style.display")
    }
}

renderResetLog = function() {
    let rows = '';
    for (let resetLog in data.resetLogs) {
        if (!data.resetLogs.hasOwnProperty(resetLog)) continue; //only print when both stages are added
        const log = data.resetLogs[resetLog];
        if(!log.stage1) {
            continue;
        }
        rows += `
            <tr>
                <td style="padding-right:15px;">
                    ${log.stage1.resetCount} 
                </td>
                <td style="padding-right:15px;">
                    ${log.stage1.secondsPerReset ? secondsToTime(log.stage1.secondsPerReset) : "-"} |
                    ${log.stage1.currentLegacy ? intToString(log.stage1.currentLegacy, 1) : "-"}
                </td>
                <td style="padding-right:15px;">
                    ${log.stage1.currentMomentum ? intToString(log.stage1.currentMomentum) : "-"} | 
                    ${log.stage1.hatlLevel ?? "-"} | 
                    ${log.stage1.mq ? intToString(log.stage1.mq, 1) : "-"} | 
                    ${log.stage1.resonance ?? "-"} | 
                    ${log.stage1.valor ?? "-"} | 
                    ${log.stage1.currentAC ?? "-"}
                </td>
                <td style="">
                ${log.stage2 ? `
                    ${log.stage2.fightGenerated ? intToString(log.stage2.fightGenerated, 1) : "-"} |
                    ${log.stage2.legacyGained ? intToString(log.stage2.legacyGained, 1) : "-"} | 
                    ${log.stage2.ancientCoin ? intToString(log.stage2.ancientCoin, 1) : "-"} | 
                    ${log.stage2.ancientWhisper ? intToString(log.stage2.ancientWhisper, 1) : "-"}`
            : ""}
                </td>
            </tr>
        `;
    }
    return `
        <div style="overflow-x:auto">
            <div style="font-size:20px; font-weight:bold; margin:0 0 6px 0;">Recent Run Statistics (Last 100)</div>
            <table style="width:100%;border-collapse:collapse;font-size:16px;white-space:nowrap">
                <thead>
                    <tr>
                        <th style="padding-right:15px; text-align:left;">#</th>
                        <th style="padding-right:15px; text-align:left;">Stats<br>(Reset | Legacy)</th>
                        <th style="padding-right:15px; text-align:left;">Stage 1<br>(Momentum | HATL | MQ | Resonance | Valor)</th>
                        <th style="padding-right:15px; text-align:left;">Stage 2<br>(Fight Generated | Legacy Gained |<br> AC Gained | AW Gained)</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

logKTL = function() {
    data.resetLogs.push({
        stage1: {
            secondsPerReset: data.secondsPerReset,
            // hatl1Time: data.actions.hearAboutTheLich.level1Time, //not in use
            hatlLevel: data.actions.hearAboutTheLich.level,
            mq:actionData.awakenYourGrimoire.manaQuality(),
            valor:data.atts.valor.num,
            resonance:data.atts.resonance.num,
            currentLegacy: data.legacy,
            resetCount: data.resetCount,
            currentMomentum: data.totalMomentum,
            currentAC: calc_total_ac_worth()
            // currentFear: data.actions.hearAboutTheLich.resource, //not in use
        },
        stage2: null
    });
    if (data.resetLogs.length > 100) data.resetLogs.shift();
    data.ancientCoinGained = 0;
    data.ancientWhisperGained = 0;
    refreshResetLog();
}

toggleBonusSpeed = function() {
    if(data.gameSettings.bonusSpeed > 1 || data.currentGameState.bonusTime <= 1000) {
        data.gameSettings.bonusSpeed = 1;
        data.gameSettings.ticksPerSecond = 20
    } else {
        data.gameSettings.bonusSpeed = data.options.bonusRate;
        checkTicksPerSecond();
    }
    updateBonusSpeedButton();
}

changeBonusSpeed = function(num) {
    data.options.bonusRate = num;
    if(data.gameSettings.bonusSpeed > 1) { //already running
        data.gameSettings.bonusSpeed = num;
        checkTicksPerSecond();
    }
}

checkTicksPerSecond = function() {
    if (data.options.bonusRate > 20) {
        if (data.options.bonusRate > 100) {
            data.gameSettings.ticksPerSecond = 1
        } else {
            data.gameSettings.ticksPerSecond = 5
        }
    } else {
        data.gameSettings.ticksPerSecond = 20
    }
}

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

function isEqual(value1, value2) {
    // Handle array comparison
    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) return false;

        // For arrays of primitives, sort and compare
        const isPrimitiveArray = value1.every(item => !isObject(item) && !Array.isArray(item));
        if (isPrimitiveArray) {
            const sorted1 = [...value1].sort();
            const sorted2 = [...value2].sort();
            return JSON.stringify(sorted1) === JSON.stringify(sorted2);
        }

        // For arrays of objects, compare each item
        return JSON.stringify(value1) === JSON.stringify(value2);
    }

    // Handle object comparison
    if (isObject(value1) && isObject(value2)) {
        return JSON.stringify(value1) === JSON.stringify(value2);
    }

    // Handle primitive comparison
    return value1 == value2;
}

load = async function() {
    initializeData();

    let toLoad = {};

    if(loadStaticSaveFile) {
        if(onLoadData) {
            try {
                console.log('Loading locally.');
                toLoad = JSON.parse(decode64(onLoadData));
            } catch (e) {
                try { //old save
                    toLoad = JSON.parse(decode(onLoadData));
                } catch (e) {
                    exportFile(onLoadData, "KTL_Error_File")
                }
            }
        }
    } else {
        await loadFromSteamCloudToLocal();
        if (localStorage[saveName]) {
            if (localStorage[saveName].startsWith("{\"actions\":")) {
                console.log('Save version 8+ found.');
                try {
                    toLoad = JSON.parse(localStorage[saveName]);
                } catch (e) {
                    exportFile(localStorage[saveName], "KTL_Error_File")
                }
            } else {
                console.log('Save found.');
                try {
                    toLoad = JSON.parse(decode64(localStorage[saveName]));
                } catch (e) {
                    try { //old save
                        toLoad = JSON.parse(decode(localStorage[saveName]));
                    } catch (e) {
                        exportFile(localStorage[saveName], "KTL_Error_File")
                    }
                }
            }
        }
    }
    if(!isLoadingEnabled) {
        console.log('Save ignored.');
        toLoad = {};
    }

    const saveVersionFromLoad = toLoad && toLoad.saveVersion !== undefined ? toLoad.saveVersion : data.saveVersion;
    const checkFields = ["tier","progressMaxBase","progressMaxIncrease","expToLevelBase","expToLevelIncrease",
        "actionPowerBase","actionPowerMult","actionPowerMultIncrease","efficiencyBase","efficiencyMult","efficiencyIdeal",
        "onLevelAtts","expAtts","efficiencyAtts"];

    let queuedLogMessages = []; //Any info that needs to be told to the user

    if((loadStaticSaveFile || localStorage[saveName]) && saveVersionFromLoad < 6) {
        if(!loadStaticSaveFile) {
            exportFile(localStorage[saveName], "KTL_v2_Backup") //just in case
        }
        handleV2Saves(toLoad) //set aside the data you need, show welcome back message
        document.getElementById("welcomeBackMessage").style.display = "";
    } else if(localStorage[saveName] && toLoad.actions) {
        toLoad.actions = saveVersionFromLoad <= 7 ? toLoad.actions : reverseExtractNestedSchema(toLoad.actions, actionsSchema);
        //only go through the ones in toLoad and graft them on to existing data
        for(let actionVar in toLoad.actions) {
            let actionObj = data.actions[actionVar];
            let dataObj = actionData[actionVar];
            let loadObj = toLoad.actions[actionVar];
            if(!dataObj) {
                continue;
            }
            if(dataObj.creationVersion > saveVersionFromLoad) {
                actionObj.automationOnReveal = loadObj.automationOnReveal;
                console.log("Skipped loading action " + actionVar + " from save.");
                continue;
            } else {
                // for(let fieldPath of checkFields) {
                //     if(actionObj[fieldPath] !== undefined && !isEqual(actionObj[fieldPath], loadObj[fieldPath])) {
                //         console.log(`Field "${fieldPath}" mismatch for action ${actionVar}:`,
                //             JSON.stringify(actionObj[fieldPath]), 'vs', JSON.stringify(loadObj[fieldPath]));
                //     }
                // }
            }
            loadActionFromSave(actionObj, loadObj);
        }

        let refundAmount = 0;
        for(let upgradeVar in toLoad.upgrades) {
            let upgradeObj = data.upgrades[upgradeVar];
            let upgradeDataObj = upgradeData[upgradeVar];
            let loadObj = toLoad.upgrades[upgradeVar];
            if(!upgradeDataObj || upgradeDataObj.creationVersion > saveVersionFromLoad) { //If removed or needs to refresh
                let toRefund = calcTotalSpentOnUpgrade(loadObj.initialCost, loadObj.costIncrease, loadObj.upgradesBought, loadObj.additiveIncrease);
                if(toRefund > 0) {
                    refundAmount += toRefund;
                    queuedLogMessages.push(["Info: Refunded <b>"+toRefund+"</b> AC for the upgrade: " + (loadObj.title || decamelizeWithSpace(upgradeVar)), "info"])
                }
                // console.log("Skipped loading upgrade " + upgradeVar + " from save.");
                continue;
            }
            loadUpgradeFromSave(upgradeObj, loadObj);
        }

        for(let shopVar in toLoad.shopUpgrades) {
            let shopObj = data.shopUpgrades[shopVar] ?? {};
            let shopDataObj = shopUpgrades[shopVar];
            let loadObj = toLoad.shopUpgrades[shopVar];
            if(!shopDataObj || shopDataObj.creationVersion > saveVersionFromLoad) { //If removed or needs to refresh
                let toRefund = calcTotalSpentOnUpgrade(loadObj.initialCost, loadObj.costIncrease, loadObj.upgradesBought, loadObj.additiveIncrease);
                if(toRefund > 0) {
                    refundAmount += toRefund;
                    queuedLogMessages.push(["Info: Refunded <b>"+toRefund+"</b> SC for the upgrade: " + (loadObj.title || decamelizeWithSpace(shopVar)), "info"])
                }
                continue;
            }
            loadUpgradeFromSave(shopObj, loadObj);
        }

        // mergeExistingOnly(data, toLoad, "actions", ["x", "y", "realX", "realY"]); //use patch instead
        //these are in the skiplist because if, between saves, an action has changed the atts it has, the links need to be reset instead of saved.
        mergeExistingOnly(data, toLoad, "atts", ["linkedActionExpAtts", "linkedActionEfficiencyAtts", "linkedActionOnLevelAtts"]);
        mergeExistingOnly(data, toLoad, "options");
        mergeExistingOnly(data, toLoad, "gameSettings");

        data.toastStates = toLoad.toastStates;

        //load global items that aren't lists or objects
        data.gameState = toLoad.gameState ?? "default";
        data.planeTabSelected = toLoad.planeTabSelected ?? 0;
        data.totalMomentum = toLoad.totalMomentum ?? 0;
        data.ancientCoin = toLoad.ancientCoin ?? 0;
        data.ancientWhisper = toLoad.ancientWhisper ?? 0;
        data.useAmuletButtonShowing = !!toLoad.useAmuletButtonShowing;
        data.secondsPerReset = toLoad.secondsPerReset ?? 0;
        data.currentJob = toLoad.currentJob ?? "helpScottWithChores";
        data.currentWage = toLoad.currentWage ?? 1;
        data.doneKTL = !!toLoad.doneKTL;
        data.doneAmulet = !!toLoad.doneAmulet;
        data.displayJob = !!toLoad.displayJob;
        data.focusSelected = toLoad.focusSelected ?? [];
        data.resetLogs = toLoad.resetLogs ?? [];
        data.planeUnlocked = toLoad.planeUnlocked ?? [true, false, false, false, false];
        if (Array.isArray(data.planeUnlocked) && data.planeUnlocked.length === 4) {
            data.planeUnlocked = [...data.planeUnlocked, false];
        }
        data.maxFocusAllowed = toLoad.maxFocusAllowed ?? 2;
        data.lastVisit = toLoad.lastVisit ?? Date.now();
        data.currentLog = toLoad.currentLog ?? [];
        data.currentPinned = toLoad.currentPinned ?? [];
        data.ancientCoinMultKTL = toLoad.ancientCoinMultKTL ?? 1;
        data.ancientWhisperMultKTL = toLoad.ancientWhisperMultKTL ?? 1;
        data.legacyMultKTL = toLoad.legacyMultKTL ?? 1;
        data.resetCount = toLoad.resetCount ?? 1;
        data.ancientCoinGained = toLoad.ancientCoinGained ?? 0;
        data.ancientWhisperGained = toLoad.ancientWhisperGained ?? 0;
        data.queuedReveals = toLoad.queuedReveals ?? {};
        data.legacy = toLoad.legacy ?? 0;
        data.lichKills = toLoad.lichKills ?? 0;
        data.lichCoins = toLoad.lichCoins ?? 0;
        data.highestLegacy = toLoad.highestLegacy ?? 0;
        data.genesisPoints = toLoad.genesisPoints ?? 0;
        data.genesisResets = toLoad.genesisResets ?? 0;
        data.fightGenerated = toLoad.fightGenerated ?? 0;
        data.soulCoins = toLoad.soulCoins ?? 0;
        data.totalDailySoulCoins = toLoad.totalDailySoulCoins ?? 0;
        data.totalBoughtSoulCoins = toLoad.totalBoughtSoulCoins ?? 0;

        data.currentGameState = toLoad.currentGameState;
        data.currentGameState.dailyTimer = toLoad.currentGameState.dailyTimer ?? 0;
        data.currentGameState.dailyCharges = toLoad.currentGameState.dailyCharges ?? 0;

        data.chartData = reverseExtractNestedSchema(toLoad.chartData, true) ?? [];

        //data correction
        if(toLoad.gameSettings.viewAdvancedSliders === undefined) { //defaults off on new saves
            data.gameSettings.viewAdvancedSliders = true;
        }

        data.ls_times = toLoad.ls_times;

        refundAmount += saveFileCorrection(saveVersionFromLoad)

        data.ancientCoin += refundAmount;
        applyUpgradeEffects()
        adjustMagicMaxLevels()
    }

    //update all generator's multiplier data
    for(let actionVar in actionData) {
        let dataObj = actionData[actionVar];
        if(dataObj.updateMults) {
            dataObj.updateMults();
        }
    }

    initializeDisplay();
    adjustUIAfterLoad(toLoad, saveVersionFromLoad);
    views.updateView();


    for(let queuedLogMessage of queuedLogMessages) {
        addLogMessage(queuedLogMessage[0], queuedLogMessage[1]);
    }
    saveFileCorrectionAfterLoad(saveVersionFromLoad);
    debug(); //change game after all else, for easier debugging
}

const original_revealAction = revealAction;
revealAction = function(actionVar) {
    original_revealAction(actionVar);
    if (actionVar === "prepareInfusion") {
        updateFocusLines();
    }
    if (actionVar === "infuseBody") {
        updateFocusLines();
    }
    if (actionVar === "infuseMind") {
        updateFocusLines();
    }
    if (actionVar === "infuseMagic") {
        updateFocusLines();
    }
}

takeDataSnapshot = function(resourceValue, currentTime) {
    if (currentTime <= 1) return;
    if (data.chartData.length === 0) {
        data.chartData.push({
            time: currentTime,
            value: resourceValue,
            HATL: data.actions["hearAboutTheLich"].level,
            MQ: actionData.awakenYourGrimoire.manaQuality()
        });
        return;
    }

    const lastStoredPoint = data.chartData[data.chartData.length - 1];
    // if (resourceValue === lastStoredPoint.value) {
    //     return;
    // }

    if ((currentTime - lastStoredPoint.time) > (currentTime > 3600 ? 119 : 19)) {
        data.chartData.push({
            time: currentTime,
            value: resourceValue.toPrecision(4),
            HATL: data.actions["hearAboutTheLich"].level,
            MQ: actionData.awakenYourGrimoire.manaQuality()
        });
    }

    if (data.chartData.length > 200) {
        data.chartData.splice(0, 2);
    }
}