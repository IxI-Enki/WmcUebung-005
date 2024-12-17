function startDarkmode() {
  document.body.style.backgroundColor = 'black';
  header.style.color = 'white';

  darkModeButton.style.visibility = 'hidden';
  lightModeButton.style.visibility = 'visible';

  trainingsContainer.style.backgroundColor = 'rgba(15,17,22,1)';
  trainingsContainer.style.color = '#888';

  console.log("- swapped to darkmode\n  + removed button & label");
}
function startLightmode() {
  document.body.style.backgroundColor = 'white';
  header.style.color = 'black';

  darkModeButton.style.visibility = 'visible';
  lightModeButton.style.visibility = 'hidden';

  trainingsContainer.style.backgroundColor = 'rgba(15,17,22,1)';
  trainingsContainer.style.color = '#111';

  console.log("- swapped to lightmode\n  + removed button & label");
}


function runCode() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomBool()) {
        resolve("resolved!!")
      } else {
        reject("rejected!")
      }
    }, 1000)
  })

  function getRandomBool() {
    return Math.random() < 0.5
  }

  promise.then((message) => {
    console.log(`The promis finally ${message}`)
  }).catch((message) => {
    console.log(`The promis finally ${message}`)
  })
}




