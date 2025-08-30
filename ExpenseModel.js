// ExpenseModel class to store and provide data
export class ExpenseModel {
    constructor() {
        this.rows = [
    {
        name: "दीवाल",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🧱 ईंट", amount: 28000, type: "सामान", date: "2025-07-17", note: "" },
            { name: "🏗️ बालू, सीमेंट, सरिया, मोरंग", amount: 25000, type: "सामान", date: "2025-07-26" ,  note: "+3700" },
            { name: "👷 मज़दूरी", amount: 17420, type: "मज़दूरी", date: "2025-07-26",  note: ""  }
        ]
    },
    {
        name: "छत",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🔩 सेंट्रिंग", amount: 14000, type: "सामान", date: "2025-07-31", note: "" },
            { name: "🏗️ मोरंग, सीमेंट, सरिया", amount: 39170, type: "सामान", date: "2025-07-31", note: "-9170" },
            { name: "👷 मज़दूरी", amount: 10000, type: "मज़दूरी", date: "2025-08-04", note: "" }
        ]
    },
    {
        name: "टांड़",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🪵 सीमेंट, मोरंग", amount: 1870, type: "सामान", date: "2025-08-16" },
            { name: "👷 मज़दूरी", amount: 4330, type: "मज़दूरी", date: "2025-08-16" }
        ]
    },
    {
        name: "2 लोहे के दरवाजे",
        status: "sponsored",
        type: "sponsored",
        subRows: [
            { name: "🚪 दरवाज़े का फ्रेम", amount: 3385, type: "सामान", date: "2025-07-20" },
            { name: "🚪 2 दरवाजा ताउन किया गया है", amount: 0, type: "स्पॉन्सर", date: "" }
        ]
    },
    {
        name: "फर्श/पाइपिंग का काम",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "👷 मज़दूरी", amount: 6500, type: "मज़दूरी", date: "2025-08-28" },
            { name: "🚰 पाइप", amount: 1800, type: "सामान", date: "2025-08-28" },
            { name: "🪵 सीमेंट, बालू", amount: 1310, type: "सामान", date: "2025-08-28" }
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




