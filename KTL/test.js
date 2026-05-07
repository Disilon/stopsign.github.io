function calculateACGainedToNextStage(currentAC, currentRunAC, currentHATL, currentStage, allLines) {
    // Find current line index
    let currentLineIndex = allLines.findIndex(l => l.stage === currentStage && l.hatl === currentHATL);
    if (currentLineIndex === -1) {
        // Try to find by stage and hatl without exact match
        currentLineIndex = allLines.findIndex(l => l.stage === currentStage);
        if (currentLineIndex === -1) return null;
    }

    // Find next stage threshold (smallest AC with stage > currentStage)
    let nextStageMinAC = Infinity;
    for (let line of allLines) {
        if (line.stage > currentStage && line.ac < nextStageMinAC) {
            nextStageMinAC = line.ac;
        }
    }

    if (nextStageMinAC === Infinity) return null;

    // Known income mapping
    const knownIncome = {
        "0,1": 10, "1,2": 30, "2,3": 90, "4,6": 532, "5,9": 3075
    };

    function getIncome(stage, hatl) {
        const key = `${stage},${hatl}`;
        if (knownIncome[key]) return knownIncome[key];

        const sameStage = allLines.filter(l => l.stage === stage);
        for (let l of sameStage) {
            const testKey = `${l.stage},${l.hatl}`;
            if (knownIncome[testKey]) {
                const diff = hatl - l.hatl;
                return knownIncome[testKey] * Math.pow(1.5, diff);
            }
        }
        return null;
    }

    let totalAC = currentAC;
    let totalACGained = 0;
    let runs = [];
    let currentIdx = currentLineIndex;

    while (totalAC < nextStageMinAC && currentIdx < allLines.length) {
        const currentLine = allLines[currentIdx];

        // Check if we can move to next line (including same stage, lower hatl)
        if (currentIdx + 1 < allLines.length) {
            const nextLine = allLines[currentIdx + 1];
            if (totalAC >= nextLine.ac) {
                // Switch to next line even if same stage or lower hatl
                currentIdx++;
                continue;
            }
        }

        const income = getIncome(currentLine.stage, currentLine.hatl);
        if (income === null) {
            console.error(`No income for stage ${currentLine.stage}, hatl ${currentLine.hatl}`);
            break;
        }

        console.log(`Run ${runs.length} income= ${income}`);

        const willReach = (totalAC + income) >= nextStageMinAC;

        totalACGained += income;
        totalAC += income;
        runs.push({
            stage: currentLine.stage,
            hatl: currentLine.hatl,
            income: income,
            partial: false
        });

        if (runs.length > 1000) break;
    }

    return {
        acGained: totalACGained,
        runs: runs,
        endingAC: totalAC,
        runsCount: runs.length,
        nextStageAC: nextStageMinAC
    };
}

// Full simulation through all stages
function simulateAllStages() {
    const lines = [
        { stage: 0, hatl: 1, ac: 6872 },
        { stage: 1, hatl: 2, ac: 6882 },
        { stage: 2, hatl: 3, ac: 6912 },
        { stage: 4, hatl: 6, ac: 7182 },
        { stage: 4, hatl: 5, ac: 7372 },
        { stage: 5, hatl: 9, ac: 8837 },
        { stage: 5, hatl: 8, ac: 18000 },
        { stage: 8, hatl: 11, ac: 30000 }
    ];

    const knownIncome = {
        "0,1": 10, "1,2": 30, "2,3": 90, "4,6": 532, "5,9": 3075
    };

    function getIncome(stage, hatl) {
        const key = `${stage},${hatl}`;
        if (knownIncome[key]) return knownIncome[key];

        const sameStage = lines.filter(l => l.stage === stage);
        for (let l of sameStage) {
            const testKey = `${l.stage},${l.hatl}`;
            if (knownIncome[testKey]) {
                const diff = hatl - l.hatl;
                return knownIncome[testKey] * Math.pow(1.5, diff);
            }
        }
        return null;
    }

    // Start at first line
    let currentStage = 0;
    let currentHATL = 1;
    let currentAC = 6872; // Starting AC
    let totalRuns = 0;
    let allStageProgressions = [];

    console.log("=".repeat(80));
    console.log("FULL STAGE PROGRESSION SIMULATION");
    console.log(`Starting AC: ${currentAC}, Stage: ${currentStage}, HATL: ${currentHATL}`);
    console.log("=".repeat(80));
    console.log("");

    // Get unique stages in order
    const stages = [...new Set(lines.map(l => l.stage))].sort((a,b) => a-b);

    for (let s = 0; s < stages.length - 1; s++) {
        const fromStage = stages[s];
        const toStage = stages[s + 1];

        if (currentStage !== fromStage) {
            // Find current config
            const currentLine = lines.find(l => l.stage === currentStage && l.hatl === currentHATL);
            if (!currentLine) continue;
        }

        console.log(`\n--- PROGRESSING FROM STAGE ${fromStage} TO STAGE ${toStage} ---`);
        console.log(`Current AC: ${currentAC}, Current HATL: ${currentHATL}`);

        const result = calculateACGainedToNextStage(currentAC, null, currentHATL, currentStage, lines);

        if (!result) {
            console.log(`Cannot progress from stage ${fromStage}`);
            break;
        }

        console.log(`Runs needed: ${result.runsCount}`);
        console.log(`AC gained: ${result.acGained.toFixed(2)}`);
        console.log(`AC before: ${currentAC}`);
        console.log(`AC after: ${result.endingAC.toFixed(2)}`);

        // Update for next stage
        totalRuns += result.runsCount;
        currentAC = result.endingAC;

        // Find new stage and HATL after reaching threshold
        const newLine = lines.find(l => l.ac <= currentAC && l.stage > currentStage);
        if (newLine) {
            currentStage = newLine.stage;
            currentHATL = newLine.hatl;
            console.log(`New config: Stage ${currentStage}, HATL ${currentHATL}`);
        }

        allStageProgressions.push({
            fromStage,
            toStage,
            runs: result.runsCount,
            acGained: result.acGained,
            startingAC: currentAC - result.acGained,
            endingAC: currentAC
        });
    }

    console.log("\n" + "=".repeat(80));
    console.log("SIMULATION COMPLETE");
    console.log(`Total runs: ${totalRuns}`);
    console.log(`Final AC: ${currentAC}`);
    console.log(`Final Stage: ${currentStage}, HATL: ${currentHATL}`);
    console.log("=".repeat(80));

    console.log("\n=== STAGE PROGRESSION SUMMARY ===");
    allStageProgressions.forEach(p => {
        console.log(`Stage ${p.fromStage} → ${p.toStage}: ${p.runs} runs, +${p.acGained.toFixed(0)} AC (${p.startingAC.toFixed(0)} → ${p.endingAC.toFixed(0)})`);
    });

    return { totalRuns, finalAC: currentAC, progressions: allStageProgressions };
}

// Run the simulation
simulateAllStages();