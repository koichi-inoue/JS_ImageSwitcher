let fileName = [
  // 画像ファイルのフルパスを記載して下さい。
  'images/PIC_01.jpg',
  'images/PIC_02.jpg',
  'images/PIC_03.jpg',
  'images/PIC_04.jpg',
  'images/PIC_05.jpg'
]

let current = 0;
let picture = document.getElementById('picture');
let caption = document.getElementById('caption');

// Window onload
window.onload = function(){

  let selectBtn = document.getElementsByClassName('select-button');
  for(i=0; i<selectBtn.length; i++ ){
    selectBtn[i].addEventListener('click',
      { number: i, handleEvent: selectImage },
      false);
  }

  let prevBtn = document.getElementById('prevButton');
  prevBtn.addEventListener('click', changePrev, false);

  let nextBtn = document.getElementById('nextButton');
  nextBtn.addEventListener('click', changeNext, false);

}

// SELECTOR
function selectImage(event) {
  current = this.number;
  picture.setAttribute('src', fileName[current]);
  caption.innerHTML = fileName[current];
}

// PREV
function changePrev(event) {
  current --;
  if( current < 0) current = fileName.length - 1;
  picture.setAttribute('src', fileName[current]);
  caption.innerHTML = fileName[current];
}

// NEXT
function changeNext(event) {
  current ++;
  if( fileName.length <= current) current = 0;
  picture.setAttribute('src', fileName[current]);
  caption.innerHTML = fileName[current];
}
