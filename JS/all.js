setInterval(timer, 1000);

let second;  //儲存當下秒數
let secondDeg;  // 儲存秒針的度數
let secondHand = document.querySelector('#second');  // 選取器指向秒針

let minute;
let minuteDeg;
let minuteHand = document.querySelector('#minute');

let hour;
let hourDeg;
let hourHand = document.querySelector('#hour');

function timer() {
  let d = new Date();  //儲存當下日期時間等資料
  second = d.getSeconds();
  secondDeg = ((second / 60) * 360);  // 利用秒數計算出指針的角度   
  secondHand.style.transform = `rotate(${secondDeg}deg)`;  // 將資料圖像化 

  minute = d.getMinutes();
  minuteDeg = ((minute / 60) * 360) + ((second / 60) * 6);
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  hour = d.getHours();
  hourDeg = ((hour / 12) * 360) + ((minute / 60) * 30); 
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  document.querySelector('#txtclock').textContent = d;  
}