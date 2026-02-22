
// -----------Function to get cards length-------------->
function getJobCount(id) {
    const jobCount = document.getElementById(id).children.length;
    return jobCount;
}

// ---------Function to toogle handle------------->
function handleToggle(id) {
    const cards = document.getElementsByClassName("cards");
    for (const card of cards) {
        card.classList.add("hidden")
    }
    document.getElementById(id)
        .classList.remove("hidden");
}

// --------------Function to toggle tab style-------------->
function tabStyleToggle(id) {
    const btnTabs = document.getElementsByClassName("tab-btn");

    for (const btnTab of btnTabs) {
        btnTab.classList.remove("bg-[#3B82F6]", "text-white");
        btnTab.classList.add("bg-white", "text-[#64748b]")
    }

    const activeBtn = document.getElementById(id);
    activeBtn.classList.remove("bg-white", "text-[#64748b]")
    activeBtn.classList.add("bg-[#3B82F6]", "text-white");

}


// ------------------Set total count-------------->
const totalCount = document.getElementById("total-count");
totalCount.innerText = getJobCount("all-cards");

// -----------------Set interview count---------------->
const interviewCount = document.getElementById("interview-count");
interviewCount.innerText = getJobCount("interview-cards") - 1;

// -------------Set rejected count---------------->
const rejectedCount = document.getElementById("rejected-count");
rejectedCount.innerText = getJobCount("rejected-cards") - 1;

// ---------Dinamically set available job count on initial state on the all tab------>
const availableJobElement = document.getElementById("available-jobs");
const availableJobInAllTab = getJobCount("all-cards");
availableJobElement.innerText = availableJobInAllTab + " jobs";

//---------toggling feature--------------->
document.getElementById("all-tab")
    .addEventListener("click", function () {
        const availableJobElement = document.getElementById("available-jobs");
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInAllTab + " jobs";

        handleToggle("all-cards");
        tabStyleToggle("all-tab");
    })

document.getElementById("interview-tab")
    .addEventListener("click", function () {
        const availableJobElement = document.getElementById("available-jobs");
        const availableJobInInterviewTab = getJobCount("interview-cards") - 1;
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInInterviewTab + " of " + availableJobInAllTab + " jobs";

        handleToggle("interview-cards");
        tabStyleToggle("interview-tab")
    })

document.getElementById("rejected-tab")
    .addEventListener("click", function () {
        const availableJobElement = document.getElementById("available-jobs");
        const availableJobInRejectedTab = getJobCount("rejected-cards") - 1;
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInRejectedTab + " of " + availableJobInAllTab + " jobs";

        handleToggle("rejected-cards");
        tabStyleToggle("rejected-tab");
    })

