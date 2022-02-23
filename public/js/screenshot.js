$(function(){
    $("#pick").on("click", function(){
      html2canvas(document.querySelector("#capture")).then(canvas =>{
        saveAs(canvas.toDataURL('image/jpg'), "result.jpg");
      });
    });
    function saveAs(uri, filename){
      var link = document.createElement('a');
      if(typeof link.download === 'string'){
        link.href=uri;
        link.download=filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else{
        window.open(uri);
      }
    }
  });