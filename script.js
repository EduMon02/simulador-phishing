const preguntas = [

{
tipo:"gmail",
contenido:`
<div class="gmail-header">📧 Google Security</div>
<div class="gmail-body">
De: security@goog1e.com <br>
Asunto: Actividad sospechosa detectada <br><br>

Detectamos un intento de acceso no autorizado a tu cuenta.<br>
Verifica tu identidad inmediatamente:<br>
<span class="link">https://google-verificacion-segura.com</span>
</div>
`,
esPhishing:true,
explicacion:"Dominio falso (goog1e.com) + link externo."
},

{
tipo:"gmail",
contenido:`
<div class="gmail-header">📧 Netflix</div>
<div class="gmail-body">
De: info@netflix.com <br>
Asunto: Cambio de contraseña <br><br>

Tu contraseña fue cambiada correctamente.<br>
Si no fuiste tú, visita:<br>
<span class="link">https://netflix.com/security</span>
</div>
`,
esPhishing:false,
explicacion:"Dominio legítimo y link oficial."
},

{
tipo:"whatsapp",
contenido:`⚠️ Tu cuenta bancaria ha sido bloqueada
<br>Ingresa aquí para reactivarla:
<br><span class="link">http://banco-alerta.xyz/login</span>`,
esPhishing:true,
explicacion:"Urgencia + dominio extraño."
},

{
tipo:"sms",
contenido:`[SERVIENTREGA]
Tu paquete está retenido.
Paga envío aquí:
https://envio-urgente.top`,
esPhishing:true,
explicacion:"Link sospechoso en SMS."
},

{
tipo:"gmail",
contenido:`
<div class="gmail-header">📧 PayPal</div>
<div class="gmail-body">
De: support@paypal.com <br>
Asunto: Confirmación de pago <br><br>

Has realizado un pago correctamente.<br>
Consulta detalles en:
<span class="link">https://paypal.com/activity</span>
</div>
`,
esPhishing:false,
explicacion:"Dominio oficial."
},

{
tipo:"gmail",
contenido:`
<div class="gmail-header">📧 Amazon</div>
<div class="gmail-body">
De: support@amaz0n.com <br>
Asunto: Problema con tu pedido <br><br>

Tu pedido no pudo ser entregado.<br>
Actualiza datos aquí:<br>
<span class="link">http://amazon-verificacion.net</span>
</div>
`,
esPhishing:true,
explicacion:"Dominio falso + link externo."
},

{
tipo:"whatsapp",
contenido:`Hola mamá, cambié de número 😢
Necesito que me envíes dinero urgente`,
esPhishing:true,
explicacion:"Ingeniería social emocional."
},

{
tipo:"sms",
contenido:`Código de verificación: 829311
No compartas este código.`,
esPhishing:false,
explicacion:"Mensaje legítimo."
},

{
tipo:"gmail",
contenido:`
<div class="gmail-header">📧 Banco</div>
<div class="gmail-body">
De: seguridad@banco.com <br>
Asunto: Sin actividad sospechosa <br><br>

No detectamos problemas en tu cuenta.
</div>
`,
esPhishing:false,
explicacion:"Mensaje informativo."
},

{
tipo:"whatsapp",
contenido:`🎁 Ganaste un iPhone 15
Reclama aquí:
<span class="link">http://premio-gratis.com</span>`,
esPhishing:true,
explicacion:"Oferta falsa."
}

];

let i=0,p=0,t=10,int;

function iniciarJuego(){
document.getElementById("inicio").classList.add("hidden");
document.getElementById("final").classList.add("hidden");
document.getElementById("formulario").classList.add("hidden");

document.getElementById("juego").classList.remove("hidden");

i=0;
p=0;

mostrar();
}

function mostrar(){
if(i>=preguntas.length){final();return;}

t=10;
clearInterval(int);

int=setInterval(()=>{
t--;
document.getElementById("timer").textContent="⏱️ "+t;
if(t<=0){clearInterval(int);i++;mostrar();}
},1000);

let q=preguntas[i];
let html="";

if(q.tipo==="gmail"){
html=`<div class="gmail"><div class="gmail-header">📧 Gmail</div>${q.contenido}</div>`;
}else if(q.tipo==="whatsapp"){
html=`<div class="whatsapp"><div class="msg">${q.contenido}</div></div>`;
}else{
html=`<div class="sms">${q.contenido}</div>`;
}

document.getElementById("simulacion").innerHTML=html;
document.getElementById("resultado").textContent="";
document.getElementById("explicacion").textContent="";
document.getElementById("barra").style.width=(i/preguntas.length*100)+"%";
}

function responder(r){
clearInterval(int);
let q=preguntas[i];

if(r===q.esPhishing){
p++;
document.getElementById("resultado").textContent="✔️ Correcto";
}else{
document.getElementById("resultado").textContent="❌ Incorrecto";
}

document.getElementById("explicacion").textContent=q.explicacion;

i++;
setTimeout(mostrar,1500);
}

function final(){
document.getElementById("juego").classList.add("hidden");
document.getElementById("formulario").classList.add("hidden");

document.getElementById("final").classList.remove("hidden");

let nivel="";
if(p<=4) nivel="🟥 Vulnerable";
else if(p<=7) nivel="🟨 Intermedio";
else nivel="🟩 Seguro";

document.getElementById("puntaje").textContent=`${p}/10 - ${nivel}`;
}

function generarCertificado(){
  const { jsPDF } = window.jspdf;

  let nombre = document.querySelector("#formulario input").value || "Usuario";

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  // 🎨 Fondo elegante
  doc.setFillColor(245, 247, 250);
  doc.rect(0, 0, 297, 210, "F");

  // 🧱 Marco doble (detalle PRO)
  doc.setDrawColor(0);
  doc.setLineWidth(1.5);
  doc.rect(10, 10, 277, 190);

  doc.setLineWidth(0.5);
  doc.rect(14, 14, 269, 182);

  // 🏷️ Encabezado tipo institución
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("CYBERSEC ACADEMY", 20, 25);

  // 🎓 Título principal
  doc.setFont("times", "bold");
  doc.setFontSize(32);
  doc.text("CERTIFICADO", 148, 65, { align: "center" });

  doc.setFontSize(20);
  doc.text("DE PARTICIPACIÓN", 148, 80, { align: "center" });

  // 📄 Texto
  doc.setFont("times", "normal");
  doc.setFontSize(14);
  doc.text("Se certifica que:", 148, 100, { align: "center" });

  // ✍️ Nombre destacado
  doc.setFont("times", "bolditalic");
  doc.setFontSize(26);
  doc.text(nombre, 148, 120, { align: "center" });

  // 🧠 Descripción
  doc.setFont("times", "normal");
  doc.setFontSize(13);
  doc.text(
    "Ha completado exitosamente el simulador interactivo de detección de phishing, demostrando conocimientos en identificación de ataques de ingeniería social.",
    148,
    140,
    { align: "center", maxWidth: 230 }
  );

  // 📅 Fecha
  let fecha = new Date().toLocaleDateString();
  doc.setFontSize(11);
  doc.text("Fecha: " + fecha, 220, 175);

  // ✒️ Firma simulada
  doc.line(40, 170, 100, 170);
  doc.text("Instructor", 55, 180);

  // 🏅 Sello (simulación visual)
  doc.setDrawColor(0);
  doc.circle(240, 120, 15);
  doc.setFontSize(8);
  doc.text("CERTIFIED", 240, 120, { align: "center" });

  // 💾 Descargar
  doc.save("Certificado_Ciberseguridad_PRO.pdf");

  // 🚨 ALERTA FINAL (impacto psicológico)
  setTimeout(()=>{
    document.getElementById("alertSound").play();

    alert(
      "🚨 ALERTA DE PHISHING 🚨\n\nAcabas de ingresar datos personales en un formulario sin verificar.\n\nAsí es como funcionan los ataques reales de ingeniería social.\n\nSiempre valida antes de confiar."
    );
  }, 700);
}

function mostrarFormulario(){
  document.getElementById("final").classList.add("hidden");
  document.getElementById("loginFake").classList.remove("hidden");
}

function verificarLoginFake(){

  document.getElementById("alertSound").play();

  alert(
    "🚨 HAS CAÍDO EN PHISHING 🚨\n\nAcabas de ingresar credenciales en un sitio falso.\n\nAsí funcionan los ataques reales."
  );

  // Oculta login falso
  document.getElementById("loginFake").classList.add("hidden");

  // Muestra formulario real
  document.getElementById("formulario").classList.remove("hidden");
}