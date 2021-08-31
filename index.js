let starterData = {
  Liked:[],
};



function Login() {
  name = "ColorentData";
  if (localStorage.getItem(name)==undefined){
  jsonData = JSON.stringify(starterData);
  localStorage.setItem(name, jsonData);
  }
  else{
  let acc = name;
  localStorage.setItem("acc",acc)
  }
}Login();
// GETTING THE OLD DATA FROM LOCAL STORAGE
let account,Data,accountData,saveAccountData;getData();
function getData() {
  account=localStorage.getItem("acc");
  accountData=localStorage.getItem(account);
  Data=JSON.parse(accountData);
}
function save() {
  saveAccountData=JSON.stringify(Data);
  localStorage.setItem(account,saveAccountData);
}
// ASIGNING THE RETRIVED DATA






















let colors = [
  '96C672',
  '00AFF0',
  '6878F6',
  'B21FF7',
  '474EB4',
  'E03E48',
  '9B55A9',
  'F77E4A',
  '27B26F',
  'EDC537',
  '3E5BB7',
  '1C1917',
  '11362A',
  'F03630',
  '278DC2',
  'AB253B',
  'AFC271',
  '3B576D',
  'E9792F',
  '14A800',
  '00BFB5',
  '00A99F',
  '4E5CF0',
  'EF5A4D',
  '17A05D',
  'AA0E4F',
  '029CEA',
  '8CCE41',
  'C4A668',
  'A83DA0',
  '7351CA',
  '17CEC4',
  'BC9952',


];






function colorScan() {
  for (var i = 0; i < colors.length; i++) {
    let newColor = document.createElement('content');
    newColor.innerHTML='<a class="likeButt" onclick="Like('+i+');"></a>'+'<h2>#'+colors[i]+'</h2>';
    newColor.style.background = '#'+colors[i];
    document.querySelector('main').appendChild(newColor);
  }
}
function likedColorScan() {
  for (var i = 0; i < Data.Liked.length; i++) {
    let newLikeColor = document.createElement('content');
    newLikeColor.innerHTML='<a class="disLikeButt" onclick="Dislike('+i+');"></a>'+'<h2>#'+Data.Liked[i]+'</h2>';
    newLikeColor.style.background = '#'+Data.Liked[i];
    document.querySelector('#liked').appendChild(newLikeColor);
  }
}
colorScan();
likedColorScan();








function Like(c) {
  Data.Liked.push(colors[c]);

  let uniqueSet = new Set(Data.Liked);
  Data.Liked = [...uniqueSet];

  document.querySelector('#liked').innerHTML='';
  likedColorScan()
  save();
}
function Dislike(c) {
  Data.Liked.splice(c,1);
  document.querySelector('#liked').innerHTML='';
  likedColorScan()
  save();
}










function hideScreens() {
  document.querySelector('main').style.display='none';
  document.querySelector('#liked').style.display='none';
  document.querySelector('#suggestion').style.display='none';
  document.querySelector('#feedback').style.display='none';
  document.querySelector('#talk').style.display='none';
}