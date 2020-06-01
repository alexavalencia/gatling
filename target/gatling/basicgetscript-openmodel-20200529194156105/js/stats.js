var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "609",
        "ok": "609",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12702",
        "ok": "12702",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4695",
        "ok": "4695",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3193",
        "ok": "3193",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4962",
        "ok": "4962",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7269",
        "ok": "7269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9872",
        "ok": "9872",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11862",
        "ok": "11862",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 111,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 461,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.533",
        "ok": "13.533",
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
        "total": "609",
        "ok": "609",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12702",
        "ok": "12702",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4695",
        "ok": "4695",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3193",
        "ok": "3193",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4962",
        "ok": "4962",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7269",
        "ok": "7269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9872",
        "ok": "9872",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11862",
        "ok": "11862",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 111,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 461,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.533",
        "ok": "13.533",
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
