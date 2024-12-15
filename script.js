// Array of emojis and their decimal codes
const emojis = [
    { code: 128512, symbol: "😀" },
    { code: 128513, symbol: "😁" },
    { code: 128514, symbol: "😂" },
    { code: 128515, symbol: "😃" },
    { code: 128516, symbol: "😄" },
    { code: 128517, symbol: "😅" },
    { code: 128518, symbol: "😆" },
    { code: 128519, symbol: "😉" },
    { code: 128520, symbol: "😊" },
    { code: 128521, symbol: "😋" },
    { code: 128522, symbol: "😎" },
    { code: 128523, symbol: "😍" }
  ];

  
  //Search bar IMPROVEMENT
  const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredEmojis = emojis.filter(
    (emoji) =>
      emoji.code.toString().includes(searchTerm) ||
      emoji.symbol.includes(searchTerm)
  );


  const addEmojiForm = document.getElementById("add-emoji-form");

addEmojiForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const newEmoji = {
    symbol: document.getElementById("new-emoji-symbol").value,
    name: document.getElementById("new-emoji-name").value,
    code: parseInt(document.getElementById("new-emoji-code").value)
  };

  emojis.push(newEmoji); // Add new emoji to the array
  searchBar.dispatchEvent(new Event("input")); // Trigger gallery update
});


  gallery.addEventListener("click", (e) => {
    if (e.target.classList.contains("emoji")) {
      navigator.clipboard.writeText(e.target.textContent).then(() => {
        alert("Emoji copied to clipboard!");
      });
    }
  });

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  



  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji");
    emojiChar.innerHTML = `&#${emoji.code};`;
    const emojiCode = document.createElement("span");
    emojiCode.classList.add("code");
    emojiCode.textContent = emoji.code;
    const emojiName = document.createElement("span");
    emojiName.classList.add("name");
    emojiName.textContent = emoji.name;
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    emojiItem.appendChild(emojiName);
    gallery.appendChild(emojiItem);
  });
  


  
  gallery.innerHTML = ""; // Clear the gallery
  filteredEmojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji");
    emojiChar.innerHTML = `&#${emoji.code};`;
    const emojiCode = document.createElement("span");
    emojiCode.classList.add("code");
    emojiCode.textContent = emoji.code;
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    gallery.appendChild(emojiItem);
  });
});

  
  // Selected the emoji gallery section
  const gallery = document.getElementById("emoji-gallery");
  
  // Loop for each emoji and created an element for it
  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji");
    emojiChar.innerHTML = `&#${emoji.code};`;
  
    const emojiCode = document.createElement("span");
    emojiCode.classList.add("code");
    emojiCode.textContent = emoji.code;
  
    
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    gallery.appendChild(emojiItem);
  });
  