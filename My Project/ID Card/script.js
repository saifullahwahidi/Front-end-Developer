
const imgEl = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");
  
  let idx = 0;
  
  updateTestimonial();
  
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 10000);
  }