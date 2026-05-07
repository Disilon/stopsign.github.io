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