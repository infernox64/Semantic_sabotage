const POOLS = {
    temporal: [
        "Occasionally", "Reluctantly", "Seasonally", "Without warning", 
        "Infrequently", "By late afternoon", "Under optimal conditions", "Strictly on Tuesdays"
    ],
    item: [
        "the living room carpet", "a forgotten hallway", "the kitchen pantry", 
        "the front porch", "the dining room table", "the upstairs banister", 
        "a decorative throw pillow", "the coat rack", "the hallway runner"
    ],
    action: [
        "unplugs sideways", "demands written authorization", "absorbs the ambient lighting", 
        "folds into an aerodynamic shape", "combusts with mild indifference", 
        "re-indexes its own texture", "develops a minor structural grievance", "pivots off-grid"
    ],
    qualifier: [
        "during peak hours", "under strict supervision", "for security reasons", 
        "without prior notice", "across the main entryway", "with zero accountability", 
        "despite previous warnings", "in direct violation of local consensus"
    ]
};

const TEMPLATES = [
    "{temporal}, {item} {action} {qualifier}.",
    "Please notify the occupants before {item} {action}.",
    "We experienced a localized incident where {item} began to {action}.",
    "It was reported that {item} will {action} {qualifier}."
];

let lastResult = "";

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSabotage() {
    let result = "";
    
    // Loop until we get a result distinct from the previous click
    do {
        const template = getRandomElement(TEMPLATES);
        result = template
            .replace(/{temporal}/g, getRandomElement(POOLS.temporal))
            .replace(/{item}/g, getRandomElement(POOLS.item))
            .replace(/{action}/g, getRandomElement(POOLS.action))
            .replace(/{qualifier}/g, getRandomElement(POOLS.qualifier));
    } while (result === lastResult);

    lastResult = result;
    document.getElementById("terminal-output").innerText = result;
}
