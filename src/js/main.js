window.onload = function () {
    try {
        var countUpEv = new countUp.CountUp("event", 3, {
            suffix: "+",
        });
        var countUpEx = new countUp.CountUp("experience", 2, {
            suffix: "+",
        });
        var countUpPro = new countUp.CountUp("project", 3, {
            suffix: "+",
        });

        countUpEv.start();
        countUpEx.start();
        countUpPro.start();
    } catch (error) {
        console.log(error);
    }
};
