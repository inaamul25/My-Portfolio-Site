

export function typeEffect(textElement, words) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function updateText() {
      const currentWord = words[wordIndex];
  
      if (isDeleting) {
        // Erase characters one by one
        charIndex--;
        textElement.textContent = currentWord.substring(0, charIndex);
  
        // When the word is fully erased, move to the next word
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        // Type characters one by one
        charIndex++;
        textElement.textContent = currentWord.substring(0, charIndex);
        if(charIndex === 1){
          textElement.style.color = "red";
        }
  
        // When the full word is typed out, start deleting after a pause
        if (charIndex === currentWord.length) {
          setTimeout(() => { isDeleting = true; }, 1000); // Pause before deleting
        }
      }
  
      // Adjust the speed of typing/deleting
      const speed = isDeleting ? 50 : 200;
      setTimeout(updateText, speed);
    }
  
    updateText(); // Start the typing effect
  }
  