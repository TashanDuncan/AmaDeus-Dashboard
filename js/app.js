const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



// create the html for the banner
alertBanner.innerHTML =`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>3</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>

`;

const tasks = document.getElementById("tasks");
const closeTasks = document.getElementById("close-tasks")
tasks.style.display = "none"

alertBanner.addEventListener('click', e => {
    const element = e.target;
    
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
    }  else if (tasks.style.display === "none") {
        tasks.style.display = ""
    }
});

closeTasks.addEventListener('click', e => {
    const element = e.target;
    const parent = e.target.parentElement;

    parent.style.display = "none";
})

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    user.value = '';
    message.value = '';
    }
});

