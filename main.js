const POOLS = {
    temporal: ["Occasionally", "Reluctantly", "Seasonally", "Without warning", "Infrequently"],
    item: ["the living room carpet", "a forgotten hallway", "the kitchen pantry", "the front porch", "the dining room table"],
    action: ["unplugs sideways", "demands written authorization", "absorbs the ambient lighting", "folds into an aerodynamic shape", "combusts with mild indifference"],
    qualifier: ["during peak hours", "under strict supervision", "for security reasons", "without prior notice", "across the main entryway"]
};

const TEMPLATES = [
    "{temporal}, {item} {action} {qualifier}.",
    "Please notify the occupants before {item} {action}.",
    "We experienced a localized incident where {item} began to {action}.",
    "It was reported that {item} will {action} {qualifier}."
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSabotage() {
    const template = getRandomElement(TEMPLATES);
    
    const result = template
        .replace("{temporal}", getRandomElement(POOLS.temporal))
        .replace("{item}", getRandomElement(POOLS.item))
        .replace("{action}", getRandomElement(POOLS.action))
        .replace("{qualifier}", getRandomElement(POOLS.qualifier));

    document.getElementById("terminal-output").innerText = result;
}

