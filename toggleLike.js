function toggleLike(btn) {
      const icon = btn.querySelector("i");
      btn.classList.toggle("liked");
      
      if (btn.classList.contains("liked")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    }