let trump_marks = [
  "&#x2665;&#xFE0F;", 
  "&#9824;&#65039;",
  "&#9827;&#65039;",
  "&#9830;&#65039;"];
let dot = "";
let str = "";

while(document.body.innerHTML.includes("。")) {
  dot = (Math.random() > 0.5) ? "..." : "";
  str = `${dot}${trump_marks[Math.floor(Math.random() * trump_marks.length)]}`;
  document.body.innerHTML = document.body.innerHTML.replace("。", str);
}
