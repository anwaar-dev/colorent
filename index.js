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

];
function colorScan() {
  for (var i = 0; i < colors.length; i++) {
    let newColor = document.createElement('content');
    newColor.innerHTML='<h2>#'+colors[i]+'</h2>';
    newColor.style.background = '#'+colors[i];
    document.querySelector('main').appendChild(newColor);

  }
}

colorScan();