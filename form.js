function buat_login(){
  var a = document.getElementById('X');
  a.parentElement.removeChild(a);
  var login = document.getElementsByTagName('div')[0];
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Login"
  login.appendChild(p);
  var form = document.createElement("form");
  form.className = "form_login";
  login.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Nama User ";
  form.appendChild(label);
  var input_user = document.createElement("input");
  input_user.type = "text";
  input_user.name = "nama";
  input_user.className = "form_login";
  input_user.placeholder = "Nama User..";
  form.appendChild(input_user);
  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_nohp = document.createElement("input");
  input_nohp.type ="text";
  input_nohp.name ="nohp";
  input_nohp.className = "form_login";
  input_nohp.placeholder = "Nomor Handphone..";
  form.appendChild(input_nohp);
  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement("input");
  input_username.type ="text";
  input_username.name ="nohp";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau Email..";
  form.appendChild(input_username);
  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_pass = document.createElement("input");
  input_pass.type ="password";
  input_pass.name ="pass";
  input_pass.className = "form_login";
  input_pass.placeholder = "Password..";
  form.appendChild(input_pass);
  var tombol = document.createElement("button");
  tombol.className = "tombol_login";
  tombol.innerHTML = "Daftar Sekarang"
  form.appendChild(tombol)
}
