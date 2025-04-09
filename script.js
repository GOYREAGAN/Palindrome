document.getElementById("check-btn").addEventListener("click", () => {
    const inputText = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");
  
    if (!inputText) {
      alert("Please input a value.");
      return;
    }
  
    const cleanedText = inputText
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
  
    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");
  
    if (isPalindrome) {
      resultElement.textContent = `${inputText} is a palindrome.`;
    } else {
      resultElement.textContent = `${inputText} is not a palindrome.`;
    }
  });