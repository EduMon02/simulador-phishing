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

let i=0,p=0,t=15,int;

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

t=15;
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
setTimeout(mostrar,2000);
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

  let inputs = document.querySelectorAll("#formulario input");

  let nombre = inputs[0].value || "Usuario";
  let documento = inputs[2].value || "Sin documento";

  let nivel="";
  if(p<=4) nivel="Bajo nivel de seguridad";
  else if(p<=7) nivel="Nivel intermedio";
  else nivel="Alto nivel de seguridad";

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  // 🎨 FONDO GRADIENTE SIMULADO
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 297, 210, "F");

  // 🧱 MARCO ELEGANTE
  doc.setDrawColor(56, 189, 248);
  doc.setLineWidth(2);
  doc.rect(8, 8, 281, 194);

  doc.setDrawColor(255,255,255);
  doc.setLineWidth(0.5);
  doc.rect(12, 12, 273, 186);

  // 🏷️ HEADER
  doc.setFont("helvetica", "bold");
  doc.setTextColor(56, 189, 248);
  doc.setFontSize(14);
  doc.text("CYBERSEC ACADEMY", 20, 25);

  // 🛡️ TÍTULO
  doc.setFont("times", "bold");
  doc.setTextColor(255,255,255);
  doc.setFontSize(34);
  doc.text("CERTIFICADO", 148, 65, { align: "center" });

  doc.setFontSize(20);
  doc.text("DE PARTICIPACIÓN", 148, 80, { align: "center" });

  // 📄 TEXTO BASE
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(200,200,200);
  doc.text("Se certifica que:", 148, 100, { align: "center" });

  // ✍️ NOMBRE DESTACADO
  doc.setFont("times", "bolditalic");
  doc.setFontSize(28);
  doc.setTextColor(255,255,255);
  doc.text(nombre, 148, 120, { align: "center" });

  // 📊 DATOS
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(220,220,220);

  doc.text(`Documento: ${documento}`, 148, 135, { align: "center" });
  doc.text(`Puntaje: ${p}/10`, 148, 145, { align: "center" });
  doc.text(`Nivel: ${nivel}`, 148, 155, { align: "center" });

  // 📘 DESCRIPCIÓN
  doc.setFontSize(11);
  doc.setTextColor(180,180,180);
  doc.text(
    "Ha completado exitosamente el simulador interactivo de detección de phishing, demostrando habilidades en ciberseguridad.",
    148,
    170,
    { align: "center", maxWidth: 220 }
  );

  // 📅 FECHA
  let fecha = new Date().toLocaleDateString();
  doc.setFontSize(10);
  doc.text("Fecha: " + fecha, 240, 185);

  // ✒️ FIRMA
  doc.setDrawColor(255,255,255);
  doc.line(40, 175, 100, 175);
  doc.text("Instructor", 60, 185);

  // 🏅 SELLO PRO
  doc.setDrawColor(56, 189, 248);
  doc.setLineWidth(1);
  doc.circle(240, 120, 18);

  doc.setFontSize(10);
  doc.setTextColor(56,189,248);
  doc.text("CERTIFIED", 240, 120, { align: "center" });

  doc.save("Certificado_" + nombre.replace(/\s+/g, "_") + ".pdf");

  // 🚨 ALERTA FINAL
  setTimeout(()=>{
    document.getElementById("alertSound").play();
    alert("🚨 ALERTA DE PHISHING 🚨\n\nAcabas de ingresar datos personales en un formulario sin verificar.\n\nAsí es como funcionan los ataques reales de ingeniería social.\n\nSiempre valida antes de confiar.");
  },700);
}

function mostrarFormulario(){
document.getElementById("final").classList.add("hidden");
document.getElementById("formulario").classList.remove("hidden");
}

function mostrarLoginFake(){
document.getElementById("final").classList.add("hidden");
document.getElementById("loginFake").classList.remove("hidden");
}

function verificarLoginFake(){
document.getElementById("loginFake").classList.add("hidden");
document.getElementById("formulario").classList.remove("hidden");
}
