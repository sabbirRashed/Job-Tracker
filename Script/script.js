
// ----------------interview and rejected cards information--------->
let allCards = document.querySelector(".card");
console.log(allCards)
let interviewCards = [];
let rejectedCards = [];


// -----------Function to get cards length-------------->
function getJobCount(id) {
    const jobCount = document.getElementById(id).children.length;
    return jobCount;
}

// ----------Function to get available cards---------------->
function getAvailableCards(id, arr) {
    const getGvailableJobElement = document.getElementById(id);
    const availableJobInExpectedTab = arr.length;
    const availableJobInAllTab = getJobCount("all-cards");
    getGvailableJobElement.innerText = availableJobInExpectedTab + " of " + availableJobInAllTab + " jobs";
}

// -------------
function getAvailableCards2(id1, id2) {
    const getGvailableJobElement = document.getElementById(id1);
    const availableJobInExpectedTab = getJobCount(id2);
    const availableJobInAllTab = getJobCount("all-cards");
    getGvailableJobElement.innerText = availableJobInExpectedTab + " of " + availableJobInAllTab + " jobs";
}

// ---------Function to toogle tab handle------------->
function handleToggle(id, className) {
    const items = document.getElementsByClassName(className);
    for (const item of items) {
        item.classList.add("hidden")
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

// --------------Function to get active tab------------->
function getActiveTab(id) {
    const btnTabs = document.getElementsByClassName("tab-btn");

    for (const tab of btnTabs) {
        tab.classList.remove("active-tab");
    }

    const activeTab = document.getElementById(id);
    activeTab.classList.add("active-tab");
}

// --------Function to create job card-------------->
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

                    <div class="delete-btn w-8 h-8 rounded-full flex justify-center items-center border-2 border-base-200">
                        <span class="text-[#64748b] text-[0.8rem]"><i class="fa-solid fa-trash-can"></i></span>
                    </div>
                </div>

                <ul class="text-[#64748b] md:flex gap-8">
                    <li class="work-place">${obj.workPlace}</li>
                    <li class="job-type md:list-disc">${obj.workType}</li>
                    <li class="sallary md:list-disc">${obj.sallary}</li>
                </ul>

                <div>
                    <button class="status-btn bg-[#EEF4FF]  font-medium text-[#002C5C] px-3 py-2 rounded-md">${obj.statusBtn}</button>
                    <p class="description text-[#64748b] mt-2">${obj.jobDescription}</p>
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


// ----------Function to create no-job-card---------->
function createNoAvailableCard(id) {
    const CardsSection = document.getElementById(id);
    CardsSection.innerHTML =
        `
            <div id="interview-no-job-card" class="card bg-white mt-5 py-27 justify-center items-center gap-5">
                <div class="text-8xl text-[#7DA8FF]"><i class="fa-regular fa-file-lines"></i></div>

                <div class="text-center">
                    <p class="text-[1.5rem] font-bold text-[#002C5C]">No jobs available</p>
                    <p class="text-[#64748b] mt-2">Check back soon for new job opportunities</p>
                </div>
            </div>
       `
}

// ------------------Set total count-------------->
const totalCount = document.getElementById("total-count");
totalCount.innerText = getJobCount("all-cards");


// ---------Dinamically set available job count on initial state on the all-tab------>
const availableJobElement = document.getElementById("available-jobs-all");
const availableJobInAllTab = getJobCount("all-cards");
availableJobElement.innerText = availableJobInAllTab + " jobs";


// ---------Set card on the specific tab--------------->
document.getElementById("main")
    .addEventListener("click", function (event) {
        const parentNode = event.target.parentNode.parentNode;
        const activeTab = document.querySelector(".active-tab").id;

        if (event.target.classList.contains("interview-btn")) {

            const companyName = parentNode.querySelector(".company-name").innerText;
            const jobTitle = parentNode.querySelector(".job-title").innerText;
            const workPlace = parentNode.querySelector(".work-place").innerText;
            const workType = parentNode.querySelector(".job-type").innerText;
            const statusBtn = parentNode.querySelector(".status-btn").innerText;
            const jobDescription = parentNode.querySelector(".description").innerText;
            const sallary = parentNode.querySelector(".sallary").innerText;

            parentNode.querySelector(".status-btn").innerText = "interview";

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
            rejectedCards = rejectedCards.filter(item => item.companyName !== jobInfo.companyName);
            createJobCard("rejected-cards", rejectedCards);

            // -----------------Set interview count---------------->
            const interviewCount = document.getElementById("interview-count");
            const rejectedCount = document.getElementById("rejected-count");
            interviewCount.innerText = getJobCount("interview-cards");
            rejectedCount.innerText = getJobCount("rejected-cards");

            // ----------available job cards count--
            getAvailableCards("available-jobs-interview", interviewCards);
            getAvailableCards("available-jobs-rejected", rejectedCards);

            // --------show no jobs card----------
            const count = getJobCount("rejected-cards");

            if (count === 0) {
                createNoAvailableCard("rejected-cards");
            }


        }

        else if (event.target.classList.contains("rejected-btn")) {

            const companyName = parentNode.querySelector(".company-name").innerText;
            const jobTitle = parentNode.querySelector(".job-title").innerText;
            const workPlace = parentNode.querySelector(".work-place").innerText;
            const workType = parentNode.querySelector(".job-type").innerText;
            const statusBtn = parentNode.querySelector(".status-btn").innerText;
            const jobDescription = parentNode.querySelector(".description").innerText;
            const sallary = parentNode.querySelector(".sallary").innerText;
            parentNode.querySelector(".status-btn").innerText = "rejected";

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
            interviewCards = interviewCards.filter(item => item.companyName !== jobInfo.companyName);
            createJobCard("interview-cards", interviewCards);

            // -------------Change cards count----------------
            const rejectedCount = document.getElementById("rejected-count");
            const interviewCount = document.getElementById("interview-count");
            rejectedCount.innerText = getJobCount("rejected-cards");
            interviewCount.innerText = getJobCount("interview-cards");

            // ----------available job cards count-------------
            getAvailableCards("available-jobs-rejected", rejectedCards);
            getAvailableCards("available-jobs-interview", interviewCards);

            // --------show no jobs card----------
            const count = getJobCount("interview-cards");

            if (count === 0) {
                createNoAvailableCard("interview-cards");
            }

        }


        else if (activeTab === "all-tab") {
            const deleteBtn = event.target.closest(".delete-btn");

            if (!deleteBtn) {
                return
            }

            const card = event.target.closest(".card");
            card.remove();

            // ----------Change total cards count------------
            const totalCount = document.getElementById("total-count");
            totalCount.innerText = getJobCount("all-cards");

            // ------------Change available cards count-----
            const availableJobElement = document.getElementById("available-jobs-all");
            const availableJobInAllTab = getJobCount("all-cards");
            availableJobElement.innerText = availableJobInAllTab + " jobs";

            // --------show no jobs card----------
            const count = getJobCount("all-cards");

            if (count === 0) {
                createNoAvailableCard("all-cards");
            }
        }

        else if (activeTab === "interview-tab") {
            const deleteBtn = event.target.closest(".delete-btn");

            if (!deleteBtn) {
                return
            }

            const card = event.target.closest(".card");
            card.remove();

            // ----------Change cards count------------
            const interviewCount = document.getElementById("interview-count");
            interviewCount.innerText = getJobCount("interview-cards");

            // ------------Change available cards count-----
            getAvailableCards2("available-jobs-interview", "interview-cards");

            // --------show no jobs card----------
            const count = getJobCount("interview-cards");

            if (count === 0) {
                createNoAvailableCard("interview-cards");
            }
        }


        else if (activeTab === "rejected-tab") {
            const deleteBtn = event.target.closest(".delete-btn");

            if (!deleteBtn) {
                return
            }

            const card = event.target.closest(".card");
            card.remove();

            // ----------Change cards count------------
            const rejectedCount = document.getElementById("rejected-count");
            rejectedCount.innerText = getJobCount("rejected-cards");

            // ------------Change available cards count-----
            getAvailableCards2("available-jobs-rejected", "rejected-cards");

            // --------show no jobs card----------
            const count = getJobCount("rejected-cards");

            if (count === 0) {
                createNoAvailableCard("rejected-cards");
            }
        }


    })



//---------toggling tab feature--------------->
document.getElementById("all-tab")
    .addEventListener("click", function () {
        const availableJobElement = document.getElementById("available-jobs-all");
        const availableJobInAllTab = getJobCount("all-cards");
        availableJobElement.innerText = availableJobInAllTab + " jobs";

        handleToggle("all-cards", "cards");
        handleToggle("available-jobs-all", "available-jobs");
        tabStyleToggle("all-tab");
        getActiveTab("all-tab");
    })

document.getElementById("interview-tab")
    .addEventListener("click", function () {

        handleToggle("interview-cards", "cards");
        handleToggle("available-jobs-interview", "available-jobs");
        tabStyleToggle("interview-tab");
        getActiveTab("interview-tab");
    })

document.getElementById("rejected-tab")
    .addEventListener("click", function () {

        handleToggle("rejected-cards", "cards");
        handleToggle("available-jobs-rejected", "available-jobs");
        tabStyleToggle("rejected-tab");
        getActiveTab("rejected-tab");
    })


