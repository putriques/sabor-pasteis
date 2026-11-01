var SPOTS=[["Domingo","Fechado",0],["Segunda","Fechado",0],["Terça","Feira do Verbo Divino",1],["Quarta","Feira Agudos do Sul",1],["Quinta","Feira Rua XV de Novembro",1],["Sexta","Feira Ouro Fino",1],["Sábado","Feira Rua XV de Novembro",1]];
var NOMES=["domingo","segunda","terça","quarta","quinta","sexta","sábado"];
var d=new Date().getDay();
var week=document.getElementById("week");
SPOTS.forEach(function(s,i){
  var el=document.createElement("div");
  el.className="day"+(i===d?" on":"")+(s[2]?"":" off");
  el.innerHTML="<b>"+s[0]+"</b><span>"+s[1]+"</span>";
  week.appendChild(el);
});
var t=SPOTS[d];
document.getElementById("today").textContent=t[2]?"Hoje ("+NOMES[d]+"): "+t[1]:"Hoje não abrimos. Veja os próximos dias";
