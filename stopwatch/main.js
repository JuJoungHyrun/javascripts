let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값을 설정합니다.

// 각 변수 별로 html에서 element를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.getElementById("millisec");
const seconds   = document.getElementById("seconds");
const minutes  = document.getElementById("minutes");

console.log(millisec);
console.log(seconds);
console.log(minutes);

const startBtn = document.getElementById("startBtn");
const stopBtn  = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

console.log(startBtn);
console.log(stopBtn);
console.log(resetBtn);

let intervalId;

//시작 버튼 클릭 시 시간이 10ms씩 증가합니다.
startBtn.onclick = function(){
    clearInterval(intervalId)
    intervalId = setInterval(operateTimer, 10)
  }

function operateTimer(){
    ms++;
    millisec.textContent = ms > 9 ? ms : '0' + ms
    if(ms > 99){
      sec++;
      seconds.textContent = sec > 9 ? sec : '0' + sec
      ms = 0
      millisec.textContent = "00"
    }
    if(sec > 59){
      min++;
      minutes.textContent = min > 9 ? min : '0' + min
      sec = 0
      seconds.textContent = "00"    
    }
  }
//일시정지 버튼 클릭 시 시간 증가가 정지됩니다.
stopBtn.onclick = function(){
    clearInterval(intervalId)
  }
//리셋 버튼 클릭 시 시간이 상태로 초기화 됩니다.
resetBtn.onclick = function(){
    clearInterval(intervalId)
    ms = 0; sec = 0; min = 0;
    millisec.textContent = "00"
    seconds.textContent = "00"
    minutes.textContent = "00"
  }