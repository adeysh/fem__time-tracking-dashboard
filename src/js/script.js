const buttons = document.querySelectorAll(".card__option");
const cards = document.querySelectorAll(".card_item");

let cardElements = {};
cards.forEach(card => {
    cardElements[card.id] = {
        currentHours: card.querySelector(".card__current-hours"),
        comparisonTitle: card.querySelector(".card__comparison-title"),
        comparisonPreviousTime: card.querySelector(".card__comparison-previous-time"),
    };
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "daily":

                cardElements["card-work"].currentHours.textContent = "5hrs";
                cardElements["card-work"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-work"].comparisonPreviousTime.textContent = "7hrs";

                cardElements["card-play"].currentHours.textContent = "1hrs";
                cardElements["card-play"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-play"].comparisonPreviousTime.textContent = "2hrs";

                cardElements["card-study"].currentHours.textContent = "0hrs";
                cardElements["card-study"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-study"].comparisonPreviousTime.textContent = "1hrs";

                cardElements["card-exercise"].currentHours.textContent = "1hrs";
                cardElements["card-exercise"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-exercise"].comparisonPreviousTime.textContent = "1hrs";

                cardElements["card-social"].currentHours.textContent = "1hrs";
                cardElements["card-social"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-social"].comparisonPreviousTime.textContent = "3hrs";

                cardElements["card-self-care"].currentHours.textContent = "0hrs";
                cardElements["card-self-care"].comparisonTitle.textContent = "Yesterday";
                cardElements["card-self-care"].comparisonPreviousTime.textContent = "1hrs";
                break;
            case "weekly":
                console.log("weekly");
                cardElements["card-work"].currentHours.textContent = "32hrs";
                cardElements["card-work"].comparisonTitle.textContent = "Last Week";
                cardElements["card-work"].comparisonPreviousTime.textContent = "36hrs";

                cardElements["card-play"].currentHours.textContent = "10hrs";
                cardElements["card-play"].comparisonTitle.textContent = "Last Week";
                cardElements["card-play"].comparisonPreviousTime.textContent = "8hrs";

                cardElements["card-study"].currentHours.textContent = "4hrs";
                cardElements["card-study"].comparisonTitle.textContent = "Last Week";
                cardElements["card-study"].comparisonPreviousTime.textContent = "7hrs";

                cardElements["card-exercise"].currentHours.textContent = "4hrs";
                cardElements["card-exercise"].comparisonTitle.textContent = "Last Week";
                cardElements["card-exercise"].comparisonPreviousTime.textContent = "5hrs";

                cardElements["card-social"].currentHours.textContent = "5hrs";
                cardElements["card-social"].comparisonTitle.textContent = "Last Week";
                cardElements["card-social"].comparisonPreviousTime.textContent = "10hrs";

                cardElements["card-self-care"].currentHours.textContent = "2hrs";
                cardElements["card-self-care"].comparisonTitle.textContent = "Last Week";
                cardElements["card-self-care"].comparisonPreviousTime.textContent = "2hrs";
                break;
            case "monthly":
                console.log("monthly");
                cardElements["card-work"].currentHours.textContent = "103hrs";
                cardElements["card-work"].comparisonTitle.textContent = "Last Month";
                cardElements["card-work"].comparisonPreviousTime.textContent = "128hrs";

                cardElements["card-play"].currentHours.textContent = "23hrs";
                cardElements["card-play"].comparisonTitle.textContent = "Last Month";
                cardElements["card-play"].comparisonPreviousTime.textContent = "29hrs";

                cardElements["card-study"].currentHours.textContent = "13hrs";
                cardElements["card-study"].comparisonTitle.textContent = "Last Month";
                cardElements["card-study"].comparisonPreviousTime.textContent = "19hrs";

                cardElements["card-exercise"].currentHours.textContent = "11hrs";
                cardElements["card-exercise"].comparisonTitle.textContent = "Last Month";
                cardElements["card-exercise"].comparisonPreviousTime.textContent = "18hrs";

                cardElements["card-social"].currentHours.textContent = "21hrs";
                cardElements["card-social"].comparisonTitle.textContent = "Last Month";
                cardElements["card-social"].comparisonPreviousTime.textContent = "23hrs";

                cardElements["card-self-care"].currentHours.textContent = "7hrs";
                cardElements["card-self-care"].comparisonTitle.textContent = "Last Month";
                cardElements["card-self-care"].comparisonPreviousTime.textContent = "11hrs";
                break;
            default:
                break;
        }
    })
});

