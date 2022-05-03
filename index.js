function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log("HELLO");
}
function logWhisper(string) {
  console.log("hello");
}
function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else {
    return "I would love to!";
  }
}

//if (string == lowercase) {
// console.log("I can't hear you!");

// need help with tech
// I know I need an 'if' statement
// however, I'm not sure how to format
// function sayHiToHeadphonedRoomate(string) {
