 let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartBtn = document.getElementById("heartBtn");
    const coinBtn = document.getElementById("coinBtn");
    const copyBtnNavbar = document.getElementById("copyBtnNavbar");
    const historyList = document.getElementById("historyList");
    const clearHistory = document.getElementById("clearHistory");

    // Heart Button
    document.querySelectorAll(".heart-icon").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount++;
        heartBtn.textContent = heartCount + " ❤";
      });
    });

    // Copy Button
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const number = e.target.closest("div").previousElementSibling.textContent;
        navigator.clipboard.writeText(number);
        alert("Copied: " + number);
        copyCount++;
        copyBtnNavbar.textContent = copyCount + " Copy";
      });
    });

    // Call Button
    document.querySelectorAll(".call-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const service = e.target.dataset.name;
        const number = e.target.dataset.number;

        if (coinCount < 20) {
          alert("Not enough coins to call!");
          return;
        }

        alert(`Calling ${service} at ${number}`);
        coinCount -= 20;
        coinBtn.textContent = coinCount + " ⭐";

        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.textContent = `${service} (${number}) at ${time}`;
        historyList.appendChild(li);
      });
    });

    // Clear History
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });

