// Getting all the option buttons and card items
const optionsEl = document.querySelector(".card__options");
const buttons = document.querySelectorAll(".card__option");
const cards = document.querySelectorAll(".card-item");

// Fetching data from json
async function fetchTimeData() {
    try {
        const response = await fetch("/data.json");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(`Could not get data: ${error}`);
    }
}

// Making objects for every card element that will be used for updating
let cardElements = {};

cards.forEach((card) => {
    cardElements[card.id] = {
        currentHours: card.querySelector(".card__current-hours"),
        comparisonTitle: card.querySelector(".card__comparison-title"),
        comparisonPreviousTime: card.querySelector(
            ".card__comparison-previous-time"
        ),
    };
});

const cardList = ["work", "play", "study", "exercise", "social", "self-care"];

// Changing the timeframe according to the button click and updating all the cards
function changeTimeFrameAndData(timedata, timeframe) {
    const titleMap = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };

    cardList.forEach((item, index) => {
        const cardData = timedata[index].timeframes[timeframe];
        cardElements[
            `card-${item}`
        ].currentHours.textContent = `${cardData.current}hrs`;
        cardElements[`card-${item}`].comparisonTitle.textContent =
            titleMap[timeframe];
        cardElements[
            `card-${item}`
        ].comparisonPreviousTime.textContent = `${cardData.previous}hrs`;
    });
}

// Listening for click event on any button
function changeTime(timeData) {
    optionsEl.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return;

        buttons.forEach((button) => {
            button.classList.remove("card__option--active");
        });
        e.target.classList.add("card__option--active");
        changeTimeFrameAndData(timeData, e.target.id);
    });
}

// Getting time data and passing it for updating time
async function dashboardDataUpdate() {
    const timeData = await fetchTimeData();
    changeTime(timeData);
}

// Calling the global function
dashboardDataUpdate();
