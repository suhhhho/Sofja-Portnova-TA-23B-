document.addEventListener("DOMContentLoaded", function () {
    let searchBtn = document.getElementById("searchBtn");

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            let domainInput = document.getElementById("domainInput").value.trim();
            let domainExtension = document.getElementById("domainExtension").value;
            let domainResults = document.getElementById("domainResults");
            let domainList = document.querySelector(".domain-list");

            if (domainInput !== "") {
                let domainHTML = "";
                for (let i = 0; i < 5; i++) {  
                    domainHTML += `
                        <div class="domain-item d-flex justify-content-between align-items-center">
                            <span class="domain-name">${domainInput}${domainExtension}</span>
                            <span class="domain-price">7.98€ -km</span>
                            <button class="btn btn-outline-dark btn-sm vali-btn">Vali</button>
                        </div>
                    `;
                }
                domainList.innerHTML = domainHTML;
                domainResults.style.display = "block";

                // Add event listeners to "Vali" buttons
                document.querySelectorAll(".vali-btn").forEach(button => {
                    button.addEventListener("click", function () {
                        window.location.href = "index2.html";
                    });
                });

            } else {
                alert("Palun sisesta domeeninimi!");
            }
        });
    } else {
        console.error("Element #searchBtn not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.querySelector(".checkout-btn"); // Target the checkout button

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function (event) {
            const form = document.querySelector(".needs-validation");

            if (form.checkValidity()) {
                window.location.href = "index3.html"; // Redirects to index3.html
            } else {
                alert("Palun täitke kõik vajalikud väljad enne jätkamist!"); // Warning message
                form.classList.add("was-validated"); // Bootstrap validation styling
            }
        });
    } else {
        console.error("Element .checkout-btn not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.querySelector(".checkout-btn");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            const form = document.querySelector(".needs-validation");

            if (form.checkValidity()) {
                // Store form values in localStorage
                localStorage.setItem("firstName", document.getElementById("firstName").value);
                localStorage.setItem("lastName", document.getElementById("lastName").value);
                localStorage.setItem("email", document.getElementById("email").value);

                window.location.href = "index3.html"; // Redirect to index3.html
            } else {
                alert("Palun täitke kõik vajalikud väljad enne jätkamist!");
                form.classList.add("was-validated");
            }
        });
    }
});

