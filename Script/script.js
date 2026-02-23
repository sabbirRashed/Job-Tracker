
// ----------------interview and rejected cards information--------->
const interviewCards = [];
const rejectedCards = [];


// -----------Function to get cards length-------------->
function getJobCount(id) {
    const jobCount = document.getElementById(id).children.length;
    return jobCount;
}

// ---------Function to toogle tab handle------------->
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

// --------Function to create card-------------->
function createJobCard(id, arr) {
    const interviewCardsSection = document.getElementById(id);
    interviewCardsSection.innerHTML = " ";

    for (const obj of arr) {
        const card = document.createElement("div");
        card.className = "card p-6 mt-4 border border-gray-100 bg-white space-y-5";
        card.innerHTML = `
                 <div class="flex justify-between items-center">
                    <div>
                        <h3 class="company-name text-[1.2rem] text-[#002C5C] font-bold">${obj.companyName}</h3>
                        <p class="job-title text-[#64748b] mt-1">${obj.jobTitle}</p>
                    </div>

                    <div class="w-8 h-8 rounded-full flex justify-center items-center border-2 border-base-200">
                        <span class="text-[#64748b] text-[0.8rem]"><i class="fa-solid fa-trash-can"></i></span>
                    </div>
                </div>

                <ul class="text-[#64748b] md:flex gap-8">
                    <li class="work-place">${obj.workPlace}</li>
                    <li class="job-type md:list-disc">${obj.workType}</li>
                    <li class="sallary md:list-disc">${obj.sallary}</li>
                </ul>

                <div>
                    <button class="bg-[#EEF4FF]  font-medium text-[#002C5C] px-3 py-2 rounded-md">${obj.statusBtn}</button>
                    <p class="text-[#64748b] mt-2">${obj.jobDescription}</p>
                </div>

                <div class="space-x-2 ">
                    <button
                        class="interview-btn border-2 border-green-400 text-green-400 font-medium px-3 py-2 rounded-md">INTERVIEW</button>
                    <button
                        class="rejected-btn border-2 border-red-400 text-red-400 font-medium px-3 py-2 rounded-md">REJECTED</button>
                </div>
                `
        interviewCardsSection.appendChild(card);
    }

}


// ------------------Set total count-------------->
const totalCount = document.getElementById("total-count");
totalCount.innerText = getJobCount("all-cards");


// ---------Dinamically set available job count on initial state on the all-tab------>
const availableJobElement = document.getElementById("available-jobs");
const availableJobInAllTab = getJobCount("all-cards");
availableJobElement.innerText = availableJobInAllTab + " jobs";


// ---------Set card on the specific tab--------------->
document.getElementById("all-cards")
    .addEventListener("click", function (event) {
        const parentNode = event.target.parentNode.parentNode;

        if (event.target.classList.contains("interview-btn")) {

            const companyName = parentNode.querySelector(".company-name").innerText;
            const jobTitle = parentNode.querySelector(".job-title").innerText;
            const workPlace = parentNode.querySelector(".work-place").innerText;
            const workType = parentNode.querySelector(".job-type").innerText;
            const statusBtn = parentNode.querySelector(".status-btn").innerText;
            const jobDescription = parentNode.querySelector(".description").innerText;
            const sallary = parentNode.querySelector(".sallary").innerText;
            parentNode.querySelector(".status-btn").innerText = "interview";

            console.log(statusBtn)
            const jobInfo = {
                companyName,
                jobTitle,
                workPlace,
                workType,
                statusBtn: "interview",
                jobDescription,
                sallary
            }

            const jobInfoExist = interviewCards.find(item => item.companyName === jobInfo.companyName);
            if (!jobInfoExist) {
                interviewCards.push(jobInfo);
            }

            createJobCard("interview-cards", interviewCards);

            // -----------------Set interview count---------------->
            const interviewCount = document.getElementById("interview-count");
            interviewCount.innerText = getJobCount("interview-cards");

        }

        if (event.target.classList.contains("rejected-btn")) {

            const companyName = parentNode.querySelector(".company-name").innerText;
            const jobTitle = parentNode.querySelector(".job-title").innerText;
            const workPlace = parentNode.querySelector(".work-place").innerText;
            const workType = parentNode.querySelector(".job-type").innerText;
            const statusBtn = parentNode.querySelector(".status-btn").innerText;
            const jobDescription = parentNode.querySelector(".description").innerText;
            const sallary = parentNode.querySelector(".sallary").innerText;
            parentNode.querySelector(".status-btn").innerText = "rejected";

            console.log(statusBtn)
            const jobInfo = {
                companyName,
                jobTitle,
                workPlace,
                workType,
                statusBtn: "rejected",
                jobDescription,
                sallary
            }

            const jobInfoExist = rejectedCards.find(item => item.companyName === jobInfo.companyName);
            if (!jobInfoExist) {
                rejectedCards.push(jobInfo);
            }

            createJobCard("rejected-cards", rejectedCards);

            // -------------Set rejected count---------------->
            const rejectedCount = document.getElementById("rejected-count");
            rejectedCount.innerText = getJobCount("rejected-cards");

        }

    })


//---------toggling tab feature--------------->
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
        const availableJobInInterviewTab = interviewCards.length;
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInInterviewTab + " of " + availableJobInAllTab + " jobs";

        handleToggle("interview-cards");
        tabStyleToggle("interview-tab")
    })

document.getElementById("rejected-tab")
    .addEventListener("click", function () {
        const availableJobElement = document.getElementById("available-jobs");
        const availableJobInRejectedTab = rejectedCards.length;
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInRejectedTab + " of " + availableJobInAllTab + " jobs";

        handleToggle("rejected-cards");
        tabStyleToggle("rejected-tab");
    })


