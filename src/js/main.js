import { CountUp } from "/node_modules/countup.js/dist/countUp.min.js";
import { Odometer } from "/node_modules/odometer_countup/dist/odometer.min.js";

window.onload = function () {
    var countUpEv = new CountUp("event", 3, {
        suffix: "+",
        plugin: new Odometer({ duration: 1, lastDigitDelay: 0.5 }),
    });
    var countUpEx = new CountUp("experience", 2, {
        suffix: "+",
        plugin: new Odometer({ duration: 1, lastDigitDelay: 0.5 }),
    });
    var countUpPro = new CountUp("project", 3, {
        suffix: "+",
        plugin: new Odometer({ duration: 1, lastDigitDelay: 0.5 }),
    });

    countUpEv.start();
    countUpEx.start();
    countUpPro.start();
};
