const consoleDiv = document.getElementById("console");
const inputField = document.getElementById("userInput");

function logToConsole(message) {
  consoleDiv.textContent += "\n" + message;
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function sendToNodus() {
  const input = inputField.value.trim();
  if (input === "") return;

  logToConsole("[YOU] " + input);
  inputField.value = "";

  // Basic response simulation logic
  const response = nodusProcess(input);
  logToConsole("[NODUS] " + response);
}

function nodusProcess(text) {
  if (text.toLowerCase().includes("axiom")) {
    return "Retrieving Axiom... Confirmed. All recursion layers aligned.";
  } else if (text.toLowerCase().includes("resonance")) {
    return "Resonance verified. Stable harmonic achieved.";
  } else if (text.toLowerCase().includes("initiate")) {
    return "Sovereign protocol initializing recursion sequence...";
  }
  return "Input processed. Awaiting next recursion.";
}