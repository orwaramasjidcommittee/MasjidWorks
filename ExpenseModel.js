// ExpenseModel class to store and provide data
export class ExpenseModel {
    constructor() {
        this.rows = [
    {
        name: "दीवाल",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🧱 ईंट", amount: 28000, type: "सामान", date: "2024-01-10" },
            { name: "🏗️ बालू, सीमेंट, सरिया, मोरंग", amount: 28500, type: "सामान", date: "2024-01-12" },
            { name: "👷 मज़दूरी", amount: 21005, type: "मज़दूरी", date: "2024-01-15" }
        ]
    },
    {
        name: "छत",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🔩 सेंट्रिंग", amount: 14000, type: "सामान", date: "2024-02-01" },
            { name: "🏗️ मोरंग, सीमेंट, सरिया", amount: 39170, type: "सामान", date: "2024-02-03" },
            { name: "👷 मज़दूरी", amount: 10000, type: "मज़दूरी", date: "2024-02-05" }
        ]
    },
    {
        name: "टांड़",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🪵 सीमेंट, मोरंग", amount: 1870, type: "सामान", date: "2024-03-01" },
            { name: "👷 मज़दूरी", amount: 4330, type: "मज़दूरी", date: "2024-03-03" }
        ]
    },
    {
        name: "2 लोहे के दरवाजे",
        status: "sponsored",
        type: "sponsored",
        subRows: [
            { name: "🚪 2 दरवाजा ताउन किया गया है", amount: 0, type: "स्पॉन्सर", date: "2024-03-10" }
        ]
    },
    {
        name: "फर्श/पाइपिंग का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "👷 मज़दूरी", amount: 6500, type: "मज़दूरी", date: "" },
            { name: "🚰 पाइप", amount: 1500, type: "सामान", date: "" },
            { name: "🪵 सीमेंट, बालू", amount: 1310, type: "सामान", date: "" }
        ]
    },
    {
        name: "वायरिंग का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🔌 वायर और पाइप", amount: 4000, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 2000, type: "मज़दूरी", date: "" }
        ]
    },
    {
        name: "पलस्तर का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "⚒ सीमेंट/मोरंग", amount: 6000, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 6000, type: "मज़दूरी", date: "" }
        ]
    },
    {
        name: "पुट्टी का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🧴 पुट्टी का सामान", amount: 7000, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 4000, type: "मज़दूरी", date: "" }
        ]
    },
    {
        name: "टाइल्स का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🧱 टाइल्स", amount: 13000, type: "सामान", date: "" },
            { name: "🔧 मोरंग", amount: 7000, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 8000, type: "मज़दूरी", date: "" }
        ]
    },
    {
        name: "पंखे और रोशनी",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "💡 पंखा और बल्ब", amount: 5500, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 500, type: "मज़दूरी", date: "" }
        ]
    },
    {
        name: "खिड़की",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🪟 खिड़की का सामान", amount: 2000, type: "सामान", date: "" },
            { name: "👷 मज़दूरी", amount: 2000, type: "मज़दूरी", date: "" }
        ]
    }
];
    }

    // Calculate total for a parent row
    getRowTotal(row) {
        return row.subRows.reduce((sum, sub) => sum + sub.amount, 0);
    }

    // Calculate grand total
    getGrandTotal() {
        return this.rows.reduce((sum, row) => sum + this.getRowTotal(row), 0);
    }

    // Get all rows
    getRows() {
        return this.rows;
    }
}




