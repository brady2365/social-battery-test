function calculateResult() {

    let intro = 0;
    let extro = 0;

    let questions = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6"
    ];


    for (let question of questions) {

        let answer = document.querySelector(
            `input[name="${question}"]:checked`
        );


        if (!answer) {
            alert("Please answer all six questions first!");
            return;
        }


        if (answer.value === "intro") {
            intro++;
        } else {
            extro++;
        }

    }


    let result = document.getElementById("result");

    result.classList.remove("hidden");


    if (Math.abs(intro - extro) <= 1) {

        result.innerHTML = `
        <div class="result-icon">🌓</div>

        <h2>AMBIVERT — Socially Flexible</h2>

        <p>
        You could go either way. Your social battery depends on the day.
        </p>

        <p>
        Your recommended activity:
        </p>

        <p>
        🎲 Do whatever looks fun and leave whenever you feel like it.
        </p>

        <p>
        Try the lawn games, find the couch, grab a snack or beverage,
        and definitely test yourself at the ESP station 🔮
        </p>

        `;

    }


    else if (intro > extro) {

        result.innerHTML = `
        <div class="result-icon">🛋️</div>

        <h2>RESULT: INTROVERT</h2>

        <p>
        Your social battery is operating in Low Power Mode.
        </p>


        <p>
        Your recommended party prescription:
        </p>


        <p>
        → Claim a spot on the couch<br>
        Observe the festivities from a safe and comfortable distance.
        </p>


        <p>
        → Sneak a snack<br>
        No conversation necessary.
        </p>


        <p>
        → Test your intuition at the ESP Card Station 🔮<br>
        Perhaps your psychic abilities can eliminate the need for small talk entirely.
        </p>


        <h3>
        Diagnosis: Selectively Social.
        </h3>
        `;

    }


    else {

        result.innerHTML = `
        <div class="result-icon">🎉</div>

        <h2>RESULT: EXTROVERT</h2>

        <p>
        Your social battery is at 100%.
        </p>


        <p>
        Please use your powers responsibly.
        </p>


        <p>
        → Head outside for the lawn games<br>
        Competition + people = your natural habitat.
        </p>


        <p>
        → Grab a beverage<br>
        Then find someone to talk to while drinking it.
        </p>


        <p>
        → Test your intuition at the ESP Card Station 🔮<br>
        You already think you can read the room. Let's see if you can actually read minds.
        </p>


        <h3>
        Diagnosis: Socially Solar Powered.
        </h3>
        `;

    }


    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}
