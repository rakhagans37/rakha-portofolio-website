import CountUp from "countup.js";

window.onload = function () {
    try {
        var countUpEv = new CountUp("event", 3, {
            suffix: "+",
        });
        var countUpEx = new CountUp("experience", 2, {
            suffix: "+",
        });
        var countUpPro = new CountUp("project", 3, {
            suffix: "+",
        });

        countUpEv.start();
        countUpEx.start();
        countUpPro.start();
    } catch (error) {
        console.log(error);
    }
};
