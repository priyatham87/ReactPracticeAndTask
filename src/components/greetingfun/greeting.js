export function greetingFn() {
  let date = new Date();
  let hours = date.getHours();
  let greeting = "";
  if (hours >= 0 && hours < 6) {
    greeting = "Early Moring";
  } else if (hours >= 6 && hours < 11) {
    greeting = "Morning";
  } else if (hours >= 11 && hours < 16) {
    greeting = "AfterNoon";
  } else if (hours >= 16 && hours < 25) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }
  return `Good ${greeting}`
}
greetingFn()
