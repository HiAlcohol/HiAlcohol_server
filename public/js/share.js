$(document).ready(function () {
    $('.copy').click(function(){	
        var link= $('#link');
        link.css('display','block').select();
        document.execCommand("Copy");
        alert('결과 링크가 복사되었습니다.');	
        return false;
        });
});