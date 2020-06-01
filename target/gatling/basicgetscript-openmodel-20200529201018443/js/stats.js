var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "167",
        "ok": "167",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "709",
        "ok": "709",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "25532",
        "ok": "25532",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10804",
        "ok": "10804",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5362",
        "ok": "5362",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10280",
        "ok": "10280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14700",
        "ok": "14700",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20197",
        "ok": "20197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "23982",
        "ok": "23982",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 165,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.274",
        "ok": "0.274",
        "ko": "-"
    }
},
contents: {
"req_basicgetrequest-0e927": {
        type: "REQUEST",
        name: "basicgetrequest",
path: "basicgetrequest",
pathFormatted: "req_basicgetrequest-0e927",
stats: {
    "name": "basicgetrequest",
    "numberOfRequests": {
        "total": "167",
        "ok": "167",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "709",
        "ok": "709",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "25532",
        "ok": "25532",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10804",
        "ok": "10804",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5362",
        "ok": "5362",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10280",
        "ok": "10280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14700",
        "ok": "14700",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20197",
        "ok": "20197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "23982",
        "ok": "23982",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 165,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.274",
        "ok": "0.274",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
