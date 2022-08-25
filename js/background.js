function setAlarm(event) {
    let minutes = parseFloat(event.target.value);
    // chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({minutes: minutes});
    window.close();
  }

const arrayOfPhrases = ["Nerd alert! why don\'t you get up and go smile at yourself in the mirror because you\'re that freaken amaizing!", "Hey loser! Today is a brand new day for you! Are you gonna sit there and do nothing or are you gonna make something of yourself!? Leetzzz gooo!", "You\'re daily challenge: go give a stranger a high five! If you don\'t, you\'re weak!", "Wow... YouTube again? Are you too lazy to read something?", "Oh, hey. It's me again. Just thought I'd check in and tell you how freaken incredible you are.", "Go ask them out. Just do it... "];

const doc = document.getElementById("changeQuote").addEventListener("click", function() {
  let phrases = arrayOfPhrases[ Math.floor( Math.random() * quotes.length ) ];
  document.getElementById("test").innerHTML = q;     
});

console.log(arrayOfPhrases); 

// Create a visual dialogue box that pops up, generating new random messages every x amount of time
    // Generate a variable is that acts on a set time (normally would be 30 min incriments, but for the sake of the presentation, we'll do every 10 - 15 seconds)
    // Create an array of string that stores all of our different phrases 
    // Create a series of different phrases 
    // Create a randomizer function to select phrases from array
    // Impliment it into a google chrome extension

// Figure out how to create a google chrome extension  

// document.getElementById('sampleSecond').addEventListener('click', setAlarm);
// document.getElementById('15min').addEventListener('click', setAlarm);
// document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

// chrome.alarms.onAlarm.addListener(function() {
//     chrome.browserAction.setBadgeText({text: ''});
//     chrome.notifications.create({
//         type:     'basic',
//         iconUrl:  'stay_hydrated.png',
//         title:    'Time to Hydrate',
//         message:  'Everyday I\'m Guzzlin\'!',
//         buttons: [
//           {title: 'Keep it Flowing.'}
//         ],
//         priority: 0});
//   });
  
//   chrome.notifications.onButtonClicked.addListener(function() {
//     chrome.storage.sync.get(['minutes'], function(item) {
//       chrome.browserAction.setBadgeText({text: 'ON'});
//       chrome.alarms.create({delayInMinutes: item.minutes});
//     });
//   });

// Math.round(Math.random() * arrayOfPhrases.length);