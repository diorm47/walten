document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq_item").forEach((item) => {
    const title = item.querySelector(".faq_item_title");
    const desc = item.querySelector(".faq_item_desc");
    const openIcon = item.querySelector(".open_faq");
    const closeIcon = item.querySelector(".close_faq");

    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active_faq");

      document.querySelectorAll(".faq_item").forEach((faq) => {
        faq.classList.remove("active_faq");
        faq.querySelector(".faq_item_desc").style.display = "none";
        faq.querySelector(".open_faq").style.display = "block";
        faq.querySelector(".close_faq").style.display = "none";
      });

      if (!isActive) {
        item.classList.add("active_faq");
        desc.style.display = "block";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
      }
    });
  });
});
