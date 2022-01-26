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