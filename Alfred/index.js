document.addEventListener("DOMContentLoaded", function() {
    var websiteUrl = "https://www.alfy.co.ke";
    var emailUrl = "mailto:ochialfred2001@gmail.com";

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", websiteUrl);
    linkElement.textContent = "Visit My Website";

    var container = document.getElementById("websiteLinkContainer");
    if (container) {
        container.appendChild(linkElement);
    }

    var emailElement = document.createElement("a");
    emailElement.setAttribute("href", emailUrl);
    emailElement.textContent = "ochialfred2001@gmail.com";

    var emailContainer = document.getElementById("emailLinkContainer");
    if (emailContainer) {
        emailContainer.appendChild(emailElement);
    }
});