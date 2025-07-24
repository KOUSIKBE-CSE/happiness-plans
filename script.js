document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  fetch("https://formsubmit.co/ajax/kousikdmk@gmail.com", {
    // ✅ Replace above with your token if you activated FormSubmit
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("✅ Message Sent Successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("❌ Error Sending Message! Please try again.");
    });
});