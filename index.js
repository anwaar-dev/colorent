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
  ['96C672','Anwaar'],
  ['00AFF0','Anwaar'],
  ['6878F6','Anwaar'],
  ['F7549C','Reddd'],
  ['B21FF7','Anwaar'],
  ['544AF4','Alec Ree'],
  ['474EB4','Anwaar'],
  ['FF770F','Gabokase'],
  ['21CCF5','Gabokase'],
  ['E03E48','Anwaar'],
  ['055670','Anwaar'],
  ['F76A5B','Anwaar'],
  ['074A81','Fired'],
  ['7CC8EC','Anwaar'],
  ['6F1014','Fired'],
  ['3DBBC3','Anwaar'],
  ['344D68','Fired'],
  ['F44E81','Fired'],
  ['107490','Anwaar'],
  ['A72919','Fired'],
  ['153C55','Fired'],
  ['EEAF1C','Anwaar'],
  ['1A2F61','Fired'],
  ['180744','Anwaar'],
  ['44308C','Witter'],
  ['1290C9','Fired'],
  ['E83023','Anwaar'],
  ['EBE438','Fired'],
  ['783490','Anwaar'],
  ['5BAFB6','gooddy'],
  ['1E89F7','Fired'],
  ['0D7B93','Anwaar'],
  ['F2866E','Fired'],
  ['50F193','Anwaar'],
  ['9707B2','Anwaar'],
  ['014768','Anwaar'],
  ['21A0CA','Anwaar'],
  ['8A82E0','Anwaar'],
  ['9B55A9','Anwaar'],
  ['F77E4A','Anwaar'],
  ['27B26F','Anwaar'],
  ['EDC537','Anwaar'],
  ['3E5BB7','Anwaar'],
  ['1C1917','Anwaar'],
  ['11362A','Anwaar'],
  ['F03630','Anwaar'],
  ['278DC2','Anwaar'],
  ['AB253B','Gabokase'],
  ['AFC271','Anwaar'],
  ['AA0E4F','Anwaar'],
  ['3B576D','Anwaar'],
  ['E9792F','Anwaar'],
  ['14A800','Anwaar'],
  ['00BFB5','Anwaar'],
  ['FF6843','Izhar GFX'],
  ['00A99F','Anwaar'],
  ['4E5CF0','Anwaar'],
  ['EF5A4D','Anwaar'],
  ['17A05D','Eleven'],
  ['029CEA','Anwaar'],
  ['8CCE41','Anwaar'],
  ['C4A668','Anwaar'],
  ['A83DA0','Anwaar'],
  ['7351CA','Anwaar'],
  ['17CEC4','Anwaar'],
  ['BC9952','Anwaar'],


];






function colorScan() {
  for (var i = 0; i < colors.length; i++) {
    let newColor = document.createElement('content');
    newColor.innerHTML='<a class="likeButt" onclick="Like('+i+');"></a>'+'<h2>#'+colors[i][0]+'</h2>'+'<h5>By '+colors[i][1]+'</h5>';
    newColor.style.background = '#'+colors[i][0];
    document.querySelector('main').appendChild(newColor);
  }
}
function likedColorScan() {
  for (var i = 0; i < Data.Liked.length; i++) {
    let newLikeColor = document.createElement('content');
    newLikeColor.innerHTML='<a class="disLikeButt" onclick="Dislike('+i+');"></a>'+'<h2>#'+Data.Liked[i][0]+'</h2>'+'</h2>'+'<h5>By '+Data.Liked[i][1]+'</h5>';
    newLikeColor.style.background = '#'+Data.Liked[i][0];
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