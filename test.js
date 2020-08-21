var list = [{
    id: 1,
    nick: "IDK",
    image: "icon (6).png",
    text: "ㅁㄴ이라ㅓㅁㄴ이ㅏ럼;나ㅣㅇ러;미나얼;ㅣㅏㅁㄴ얼;ㅣ마넝ㄹ;ㅇㅁㄴ이라ㅓㅁㄴ이ㅏ럼;나ㅣㅇ러;미나얼;ㅣㅏㅁㄴ얼;ㅣ마넝ㄹ;ㅇㅁㄴ이라ㅓㅁㄴ이ㅏ럼;나ㅣㅇ러;미나얼;ㅣㅏㅁㄴ얼;ㅣ마넝ㄹ;ㅇㅁㄴ이라ㅓㅁㄴ이ㅏ럼;나ㅣㅇ러;미나얼;ㅣㅏㅁㄴ얼;ㅣ마넝ㄹ;ㅇㅁㄴ이라ㅓㅁㄴ이ㅏ럼;나ㅣㅇ러;미나얼;ㅣㅏㅁㄴ얼;ㅣ마넝ㄹ;ㅇ",
    number: 5
  },
  {
    id: 2,
    nick: "siranai",
    image: "icon (6).png",
    text: "bokumo nande siranai sikara",
    number: 50
  },
  {
    id: 3,
    nick: "asdf",
    image: "icon (6).png",
    text: "asdf;lkjzxcv.,mnqwerpoughtybn",
    number: 0
  },

]

var idNum = 0;
var getNum = 0;

var url = "";

function getData() {
  var array = [];
  getNum = getNum + 1;
  axios.post(`http://localhost:8000/api/num`, {
      num: getNum
    })
    .then(function(res) {
      console.log(res.data.array);
      response.data.array.map((arr) => array.push(arr));
    })
    .catch(function(error) {
      console.log(error);
    })

  list.push(array)
}

function get() {
  for (var i = 0; i < list.length; i++) {
    var nick = list[i].nick;

    var newDetails = document.createElement("details");
    newDetails.setAttribute("class", "list-item");

    var newSummary = document.createElement("summary");
    newSummary.setAttribute("class", "list-summary");
    newSummary.innerHTML = list[i].nick;

    var newContents = document.createElement("div");
    newContents.setAttribute("class", "list-contents");

    var newImg = document.createElement("img");
    newImg.setAttribute("src", list[i].image);
    newImg.setAttribute("class", "list-img");


    var newText = document.createElement("textarea");
    newText.setAttribute("class", "list-text");
    newText.setAttribute("readonly", "true");
    newText.innerHTML = list[i].text;

    newContents.appendChild(newImg);
    newContents.appendChild(newText);

    var newItem = document.createElement("div");
    newItem.setAttribute("class", "item");

    var newHeart = document.createElement("div");
    newHeart.setAttribute("class", "heart shape");
    newHeart.setAttribute("id", "heart" + i);
    newHeart.setAttribute("onclick", "heart(" + i + ")");

    var newNumber = document.createElement("div");
    newNumber.setAttribute("class", "number");
    newNumber.innerHTML = list[i].number;

    newItem.appendChild(newHeart);
    newItem.appendChild(newNumber);


    newDetails.appendChild(newSummary);
    newDetails.appendChild(newContents);
    newDetails.appendChild(newItem);

    document.getElementById('list').appendChild(newDetails);
  }
  idNum = list.length;
}

function addList() {

  var nick = document.getElementById('modal-nick').value;
  var text = document.getElementById('modal-text').value;

  var i = idNum + 1;

  const fd = new FormData();
  fd.append("nick", nick);
  fd.append("text", text);
  fd.append("img", url);


  var request = new XMLHttpRequest();
  request.open("POST", `http://10.156.146.142:8080/api/writing`);
  request.send(fd);

  // axios.post(`http://10.156.146.142:8080/api/writing`,fd)
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  // var newDetails = document.createElement("details");
  // newDetails.setAttribute("class", "list-item");
  //
  // var newSummary = document.createElement("summary");
  // newSummary.setAttribute("class", "list-summary");
  // newSummary.innerHTML = nick;
  //
  // var newContents = document.createElement("div");
  // newContents.setAttribute("class", "list-contents");
  //
  // var newImg = document.createElement("img");
  // newImg.setAttribute("src", url);
  // newImg.setAttribute("class", "list-img");
  //
  // var newText = document.createElement("textarea");
  // newText.setAttribute("class", "list-text");
  // newText.setAttribute("readonly", "true");
  // newText.innerHTML = text;
  //
  // newContents.appendChild(newImg);
  // newContents.appendChild(newText);
  //
  // var newItem = document.createElement("div");
  // newItem.setAttribute("class", "item");
  //
  // var newHeart = document.createElement("div");
  // newHeart.setAttribute("class", "heart shape");
  // newHeart.setAttribute("id", "heart" + i);
  // newHeart.setAttribute("onclick", "heart(" + i + ")");
  //
  // var newNumber = document.createElement("div");
  // newNumber.setAttribute("class", "number");
  // newNumber.innerHTML = 0;
  //
  // newItem.appendChild(newHeart);
  // newItem.appendChild(newNumber);
  //
  // newDetails.appendChild(newSummary);
  // newDetails.appendChild(newContents);
  // newDetails.appendChild(newItem);
  //
  // document.getElementById('list').appendChild(newDetails);
  //
  // document.getElementById('modal-nick').value = "";
  // document.getElementById('modal-text').value = "";

  // location.reload(true);
}

function modal() {
  var modal = document.getElementById('modal-back');
  modal.style.display = "block"
}

function noneDisplay() {
  var modal = document.getElementById('modal-back');
  modal.style.display = "none";
}

function heart(i) {

  if (document.getElementById('heart' + i).classList.contains('active')) {
    document.getElementById('heart' + i).classList.remove('active');
  } else {
    document.getElementById('heart' + i).classList.add('active');
  }

}

function setThumbnail(event) {
  var reader = new FileReader();
  reader.onload = function(event) {
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    img.setAttribute("class", "preview")
    document.querySelector("div#image_container").appendChild(img);
  };
  reader.readAsDataURL(event.target.files[0]);

  url = event.target.files[0];
  console.log(url);
}
