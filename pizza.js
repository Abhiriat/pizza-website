function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function show(){
    document.getElementById("signup-box").style.display="block";
  }
  function closethis(){
    document.getElementById("signup-box").style.display="none";
  }
  function addon1(){
    console.log("pizzza");
    var table=document.getElementById("tab");
    var row= table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3 =row.insertCell(2);
    cell1.innerHTML="Burger";
    cell2.innerHTML="           ";
    cell3.innerHTML=" $60 ";
    document.getElementById("footer-menu").style.display="block";
   
    }
    function addon2(){
      console.log("burger");
      var table=document.getElementById("tab");
      var row= table.insertRow(0);
      var cell1=row.insertCell(0);
      var cell2=row.insertCell(1);
      var cell3 =row.insertCell(2);
      cell1.innerHTML="Pizza";
      cell2.innerHTML="           ";
      cell3.innerHTML=" $62 ";
      document.getElementById("footer-menu").style.display="block";
     
      }
      function addon3(){
        console.log("kheer");
        var table=document.getElementById("tab");
        var row= table.insertRow(0);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3 =row.insertCell(2);
        cell1.innerHTML="kheer";
        cell2.innerHTML="           ";
        cell3.innerHTML=" $66 ";
        document.getElementById("footer-menu").style.display="block";
       
        }
        function closed(){
          document.getElementById("order-list").style.display='none';
          document.getElementById("footer-menu").style.display="block";
        }
        function shown(){
          document.getElementById("order-list").style.display="block";
          document.getElementById("footer-menu").style.display="none";

        }
        function reset(){
          document.getElementById("tab").deleteRow(0);

        }
        function order(){
          document.getElementById("done").style.display='block';
          document.getElementById("order-list").style.display='none';
          document.getElementById("footer-menu").style.display="none";
        }
        function bye(){
          document.getElementById("done").style.display='none';
        }