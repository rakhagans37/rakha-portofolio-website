import { CountUp } from "countup.js";
import { Odometer } from "odometer.js";

window.onload = function () {
    try {
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
    } catch (error) {
        document.getElementById("event").innerHTML = "3+";
        document.getElementById("experience").innerHTML = "2+";
        document.getElementById("project").innerHTML = "3+";
    }
};
