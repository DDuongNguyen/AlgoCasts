function timeConversion(s) {
  let AMPM = s.slice(-2);
  let timearr = s.slice(0, -2).split(":");
  if (AMPM === "AM" && timearr[0] === "12") {
    timearr[0] = "00";
  } else if (AMPM === "PM" && timearr[0] !== "12") {
    timearr[0] = Number(timearr[0]) + 12;
  }
  return timearr.join(":");
}
