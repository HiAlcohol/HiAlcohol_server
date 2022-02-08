var testurl = 'hialcohol.xyz/mbti';

function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  function copy() {
    copyToClipboard(testurl);
    alert("테스트 링크가 복사되었습니다.");
  }

function sendLink() {
  Kakao.init('b305a1173710e4ff765e09b5a62e314c');
  Kakao.Link.sendDefault({
     objectType: 'feed',
     content: {
       title: '나에게 어울리는 술은?',
       description: '나에게 어울리는 술 추천받으러 가기',
       imageUrl: '/public/img/cocktail.png',
       link: {
        mobileWebUrl: testurl,
        webUrl: testurl,
       },
     },
     buttons: [
       {
         title: '웹으로 보기',
         link: {
           mobileWebUrl: testurl,
           webUrl: testurl,
        },
       },
     ],
  })
}