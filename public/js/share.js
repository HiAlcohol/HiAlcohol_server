function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  function copy() {
    copyToClipboard('테스트 시작링크');
    alert("테스트 링크가 복사되었습니다.");
  }

function sendLink() {
  Kakao.init('b305a1173710e4ff765e09b5a62e314c');
  Kakao.Link.sendDefault({
     objectType: 'feed',
     content: {
       title: '나에게 어울리는 술은?',
       description: '나에게 어울리는 술 추천받으러 가기',
       imageUrl:
         'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
       link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
       },
     },
     buttons: [
       {
         title: '웹으로 보기',
         link: {
           mobileWebUrl: 'https://developers.kakao.com',
           webUrl: 'https://developers.kakao.com',
        },
       },
     ],
  })
}