const temas = [
  {
    nombre: "Tecnología",
    color: "#77f3ff",
    tarjetas: [
      ["Walkman", "https://images.unsplash.com/photo-1629198735660-e39ea93f5c95?auto=format&fit=crop&w=800&q=80", "El reproductor portátil que convirtió la música en una experiencia personal diaria."],
      ["VHS", "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80", "Las cintas VHS dominaron el entretenimiento en casa con películas y grabaciones familiares."],
      ["Computadora personal", "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80", "Las primeras PCs populares acercaron la informática al hogar y a la escuela."],
      ["Casete", "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=800&q=80", "El casete fue clave para grabar canciones favoritas y crear mixtapes."],
      ["Consola retro", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", "Las consolas de 8 bits revolucionaron el juego en familia en la sala."],
      ["Disquete", "https://images.unsplash.com/photo-1591799265444-d66432b91588?auto=format&fit=crop&w=800&q=80", "El disquete se volvió símbolo de almacenamiento en los inicios del cómputo personal."],
      ["Teléfono fijo", "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=80", "La comunicación cotidiana pasaba por teléfonos de diseño robusto y colorido."]
    ]
  },
  {
    nombre: "Música",
    color: "#ffc857",
    tarjetas: [
      ["Synth-pop", "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", "Los sintetizadores definieron el sonido pegajoso y futurista de la década."],
      ["Rock de estadio", "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80", "Conciertos masivos y guitarras potentes marcaron esta etapa del rock."],
      ["Boombox", "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80", "El boombox llevó la música a las calles y reuniones juveniles."],
      ["Vinilos", "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80", "Los discos de vinilo mantuvieron su encanto por su sonido cálido y arte de portada."],
      ["MTV", "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80", "La televisión musical transformó cómo se descubría y consumía la música."],
      ["Pop bailable", "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", "Coreografías icónicas y ritmos enérgicos dominaron pistas de baile."],
      ["Bandas sonoras", "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800&q=80", "Películas y series impulsaron temas musicales que se volvieron clásicos."]
    ]
  },
  {
    nombre: "Entretenimiento",
    color: "#98ff98",
    tarjetas: [
      ["Arcades", "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80", "Los salones de arcade fueron punto de encuentro para competir y socializar."],
      ["Cine de acción", "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80", "Héroes musculosos y explosiones definieron el gran espectáculo ochentero."],
      ["Series de TV", "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80", "Producciones televisivas memorables marcaron tardes y noches familiares."],
      ["Videoclips", "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=800&q=80", "El videoclip se convirtió en formato creativo esencial para artistas."],
      ["Comedia", "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", "Humor irreverente y personajes exagerados triunfaron en la pantalla."],
      ["Ciencia ficción", "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80", "Historias futuristas alimentaron la imaginación colectiva de la época."],
      ["TV en casa", "https://images.unsplash.com/photo-1593784991317-48b66e4b4f0d?auto=format&fit=crop&w=800&q=80", "Ver películas en familia alrededor del televisor era todo un ritual."]
    ]
  },
  {
    nombre: "Juguetes",
    color: "#ff9ecd",
    tarjetas: [
      ["Cubos mágicos", "https://images.unsplash.com/photo-1614421574833-a6b0f11a5f8f?auto=format&fit=crop&w=800&q=80", "El cubo de colores desafió a toda una generación con su ingenio."],
      ["Muñecos de acción", "https://images.unsplash.com/photo-1516139008210-96e45dccd83f?auto=format&fit=crop&w=800&q=80", "Héroes articulados acompañaban historias épicas en cada habitación."],
      ["Patines", "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&w=800&q=80", "Los patines eran sinónimo de tardes activas y mucha diversión."],
      ["Juegos de mesa", "https://images.unsplash.com/photo-1632507391823-2f42cbefe152?auto=format&fit=crop&w=800&q=80", "La convivencia familiar se fortalecía con partidas largas en casa."],
      ["Figuras coleccionables", "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80", "Coleccionar figuras temáticas era un pasatiempo muy popular."],
      ["Videojuegos 8-bit", "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80", "La estética pixelada dio vida a aventuras memorables."],
      ["Juguetes electrónicos", "https://images.unsplash.com/photo-1575364289437-f10f2f5a2f5f?auto=format&fit=crop&w=800&q=80", "Los juguetes con luces y sonidos capturaban la atención al instante."]
    ]
  },
  {
    nombre: "Moda",
    color: "#c9a0ff",
    tarjetas: [
      ["Chaquetas de mezclilla", "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", "La mezclilla fue una prenda básica y versátil de la década."],
      ["Neón", "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", "Colores fosforescentes dominaron looks juveniles y atrevidos."],
      ["Hombreras", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", "Las hombreras dieron una silueta poderosa a trajes y blusas."],
      ["Accesorios llamativos", "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80", "Pendientes grandes, pulseras y cadenas añadían personalidad al estilo."],
      ["Zapatillas retro", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", "El calzado deportivo ganó protagonismo dentro y fuera del deporte."],
      ["Peinados voluminosos", "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80", "El volumen en el cabello reflejaba la actitud audaz de la época."],
      ["Gafas oscuras", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", "Las gafas con estilo geométrico cerraban looks icónicos."]
    ]
  }
];

const catalogo = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const modalTema = document.getElementById("modalTema");
const modalTitulo = document.getElementById("modalTitulo");
const modalImagen = document.getElementById("modalImagen");
const modalDescripcion = document.getElementById("modalDescripcion");
const cerrarModal = document.getElementById("cerrarModal");

function crearCatalogo() {
  temas.forEach((tema) => {
    tema.tarjetas.forEach(([titulo, imagen, descripcion]) => {
      const btn = document.createElement("button");
      btn.className = "tarjeta";
      btn.type = "button";
      btn.style.setProperty("--acento", tema.color);
      btn.innerHTML = `
        <img src="${imagen}" alt="${titulo}" loading="lazy" />
        <div class="tarjeta__info">
          <span class="tarjeta__tema">${tema.nombre}</span>
          <p class="tarjeta__titulo">${titulo}</p>
        </div>
      `;

      btn.addEventListener("click", () => abrirModal({ tema: tema.nombre, titulo, imagen, descripcion }));
      catalogo.appendChild(btn);
    });
  });
}

function abrirModal({ tema, titulo, imagen, descripcion }) {
  modalTema.textContent = tema;
  modalTitulo.textContent = titulo;
  modalImagen.src = imagen;
  modalImagen.alt = titulo;
  modalDescripcion.textContent = descripcion;
  modal.classList.add("abierto");
  modal.setAttribute("aria-hidden", "false");
}

function cerrar() {
  modal.classList.remove("abierto");
  modal.setAttribute("aria-hidden", "true");
}

cerrarModal.addEventListener("click", cerrar);
modal.addEventListener("click", (event) => {
  if (event.target === modal) cerrar();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") cerrar();
});

crearCatalogo();
