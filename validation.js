const emailInput = document.getElementById("email");
    const emailMsg = document.getElementById("emailMsg");

    emailInput.addEventListener("input", function () {
      const email = this.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        emailMsg.textContent = "Please enter a valid email address.";
      } else {
        emailMsg.textContent = "";
      }
    });

    function validateForm() {
      const email = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!email || !emailRegex.test(email)) {
        emailMsg.textContent = "Please enter a valid email address.";
      } else {
        emailMsg.textContent = "";
        alert("Email is valid!");
      }
    } 

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");

  // Preserve line breaks
  span.innerHTML = taskText.replace(/\n/g, "<br>");

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔️";
  checkBtn.onclick = () => {
    span.style.color = span.style.color === 'green' ? '#333' : 'green';
  };

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🗑️";
  delBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(checkBtn);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
    function saveDiary() {
      const entry = document.getElementById("diaryText").value.trim();
      const date = document.getElementById("diaryDate").value;
      const msg = document.getElementById("diaryMessage");

      if (!entry || !date) {
        msg.textContent = "Please enter text and choose a date.";
        msg.style.color = "red";
        return;
      } else {
        msg.style.color = "green";
        msg.textContent = "Thank you for Contact Us!";
        document.getElementById('helpText').value = ""; // Clear textarea
      }

      const mood = document.getElementById("mood").value;
      const diaryData = {
        entry: entry,
        mood: mood
      };

      const diaries = JSON.parse(localStorage.getItem("diaryEntries")) || {};
      diaries[date] = diaryData;
      localStorage.setItem("diaryEntries", JSON.stringify(diaries));

      msg.textContent = "Entry and mood saved!";
      msg.style.color = "lime";
      document.getElementById("diaryText").value = "";
    }

    function addIdea() {
  const input = document.getElementById("ideaInput");
  const text = input.value.trim();
  if (!text) return;

  const ideaGrid = document.querySelector(".idea-grid");
  const div = document.createElement("div");

  div.innerHTML = text.replace(/\n/g, "<br>");

  ideaGrid.appendChild(div);
  input.value = "";
}

    window.addEventListener("DOMContentLoaded", () => {
      document.getElementById("profilePic").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            document.getElementById("profilePreview").src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    });
    