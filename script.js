const products = [
  {
    name:"Durrat Al Aroos",
    brand:"AL WATANIAH",
    price:"27/USD",
    img:"Durrat Al Aroos.png",
    gender:"unisex",
    profile:"Floral dulce, limpio y elegante, con una salida suave y femenina pero usable por cualquiera que busque algo delicado.",
    accords:["floral","dulce","almizclado","limpio","suave"],
    notes:["Flores blancas","almizcle","toques frutales","base cremosa"],
    feeling:"Da una sensación prolija, delicada y agradable. No es un perfume agresivo; se siente más fino, limpio y fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada, más notoria durante la primera hora.",
    use:"Ideal para día, salidas tranquilas, uso diario, primavera/verano o situaciones donde querés oler bien sin invadir."
  },
  {
    name:"Odyssey White Edition",
    brand:"ARMAF",
    price:"34/USD",
    img:"Odyssey White Edition.png",
    gender:"masculino",
    profile:"Fresco, limpio y moderno, con una sensación masculina suave, cremosa y fácil de llevar.",
    accords:["fresco","limpio","cremoso","amaderado","moderno"],
    notes:["Cítricos suaves","almizcle","maderas limpias","toques aromáticos"],
    feeling:"Huele a hombre arreglado, prolijo y tranquilo. Es de esos perfumes que no molestan y van bien casi siempre.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada al inicio, después queda más cercano.",
    use:"Muy bueno para diario, oficina, facultad, calor moderado o cuando querés algo seguro y limpio."
  },
  {
    name:"Odyssey Mandarine Sky",
    brand:"ARMAF",
    price:"37.5/USD",
    img:"Odyssey Mandarin Sky.png",
    gender:"masculino",
    profile:"Dulce cítrico, caramelizado y llamativo, con una mezcla jugosa de mandarina, dulzor y fondo cálido.",
    accords:["mandarina","caramelo","dulce","ámbar","juvenil"],
    notes:["Mandarina","naranja","caramelo","haba tonka","ámbar","maderas"],
    feeling:"Tiene vibra divertida, dulce y bastante llamativa. No es tímido: entra con energía y se siente juvenil.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte al inicio y después moderada.",
    use:"Ideal para noche, salidas, citas, clima fresco o para alguien que quiera destacar."
  },
  {
    name:"Club de Nuit Intense EDT",
    brand:"ARMAF",
    price:"44/USD",
    img:"Club de Nuit.png",
    gender:"masculino",
    profile:"Cítrico ahumado y amaderado, con salida potente y una base seca, elegante e intensa.",
    accords:["cítrico","ahumado","amaderado","intenso","masculino"],
    notes:["Limón","bergamota","piña","abedul","almizcle","maderas"],
    feeling:"Huele fuerte, serio y con presencia. Tiene esa sensación de perfume masculino elegante, de salida o evento.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte al inicio.",
    use:"Muy bueno para noche, eventos, salidas, clima templado/fresco y ocasiones donde querés presencia."
  },
  {
    name:"9AM Men",
    brand:"AFNAN",
    price:"40.6/USD",
    img:"Afnan 9AM.png",
    gender:"masculino",
    profile:"Fresco, frutal y limpio, con una vibra energética y moderna para todos los días.",
    accords:["fresco","frutal","cítrico","limpio","diario"],
    notes:["Cítricos","manzana","lavanda","maderas suaves","almizcle"],
    feeling:"Se siente alegre, limpio y juvenil. Es fácil de usar, no se pone pesado y va muy bien de día.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, calor, estudio, trabajo, gimnasio suave o uso diario."
  },
  {
    name:"9PM Men",
    brand:"AFNAN",
    price:"40.6/USD",
    img:"Afnan 9PM Black.png",
    gender:"masculino",
    profile:"Dulce, especiado y vainillado, con una salida frutal y un fondo cálido muy llamativo.",
    accords:["vainilla","dulce","ámbar","especiado","nocturno"],
    notes:["Manzana","canela","lavanda","vainilla","haba tonka","ámbar"],
    feeling:"Tiene vibra de noche, boliche, cita y salida. Dulce, fuerte y muy fácil de notar.",
    performance:"Duración estimada alta: 8–12 horas. Proyección fuerte al inicio.",
    use:"Ideal para noche, otoño/invierno, salidas, citas y momentos donde querés que se note."
  },
  {
    name:"Lattafa Asad",
    brand:"LATTAFA",
    price:"45/USD",
    img:"Lattafa Asad.png",
    gender:"masculino",
    profile:"Especiado, ambarado y oscuro, con una mezcla cálida de vainilla, tabaco, café y maderas.",
    accords:["especias","ámbar","vainilla","tabaco","oscuro"],
    notes:["Pimienta negra","tabaco","café","vainilla","ámbar","maderas secas"],
    feeling:"Se siente masculino, intenso y elegante. Tiene carácter, no es un perfume suavecito.",
    performance:"Duración estimada alta: 8–10 horas. Proyección fuerte a moderada.",
    use:"Ideal para noche, frío, eventos, salidas y personas que prefieren perfumes intensos."
  },
  {
    name:"Asad Elixir",
    brand:"LATTAFA",
    price:"47.5/USD",
    img:"Asad Elixir.png",
    gender:"masculino",
    profile:"Dulce, denso y profundo, con sensación especiada, ambarada y envolvente.",
    accords:["ámbar","especiado","dulce","intenso","cálido"],
    notes:["Especias","vainilla","ámbar","maderas","toques resinosos"],
    feeling:"Tiene una presencia pesada y elegante. Se siente nocturno, oscuro y envolvente.",
    performance:"Duración estimada alta: 8–12 horas. Proyección marcada al inicio.",
    use:"Mejor para noche, invierno, citas, eventos o cuando querés algo con mucha presencia."
  },
  {
    name:"Badee Amethyste",
    brand:"LATTAFA",
    price:"29/USD",
    img:"Badee Amethyste.png",
    gender:"femenino",
    profile:"Dulce, floral y avainillado, con un costado cálido y elegante.",
    accords:["rosa","vainilla","ámbar","dulce","floral"],
    notes:["Rosa","pimienta rosa","jazmín","vainilla","ámbar"],
    feeling:"Se siente femenino, cálido y algo misterioso. Dulce sin ser infantil.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para tarde/noche, clima fresco, citas o salidas."
  },
  {
    name:"Badee Sublime",
    brand:"LATTAFA",
    price:"31.8/USD",
    img:"Badee Sublime.png",
    gender:"femenino",
    profile:"Frutal dulce, alegre y jugoso, con un lado fresco y femenino.",
    accords:["frutal","dulce","fresco","manzana","juvenil"],
    notes:["Manzana","litchi","rosa","vainilla","musk"],
    feeling:"Huele divertido, joven y limpio. Es dulce pero más brillante que pesado.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Muy bueno para día, primavera/verano, salidas casuales y uso diario."
  },
  {
    name:"Honor and Glory",
    brand:"LATTAFA",
    price:"32.6/USD",
    img:"Honor and Glory.png",
    gender:"unisex",
    profile:"Dulce, tropical y cremoso, con una mezcla llamativa de piña, especias suaves y vainilla.",
    accords:["piña","vainilla","cremoso","dulce","tropical"],
    notes:["Piña","crema","cúrcuma","vainilla","ámbar","maderas"],
    feeling:"Tiene una vibra dulce, distinta y muy agradable. Se siente cálido, exótico y con personalidad.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para salidas, tarde/noche, clima templado o para alguien que quiere algo diferente."
  },
  {
    name:"Yara Rosa",
    brand:"LATTAFA",
    price:"31.8/USD",
    img:"Yara Rosa.png",
    gender:"femenino",
    profile:"Dulce, cremosa, tropical y femenina, con una sensación suave y coqueta.",
    accords:["vainilla","tropical","cremoso","dulce","femenino"],
    notes:["Orquídea","mandarina","frutas tropicales","vainilla","almizcle"],
    feeling:"Huele dulce, limpia y tierna. Tiene vibra femenina, suave y muy fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para diario, citas tranquilas, primavera/verano y uso casual."
  },
  {
    name:"Yara Elixir",
    brand:"LATTAFA",
    price:"39.8/USD",
    img:"Yara Elixir.png",
    gender:"femenino",
    profile:"Más dulce, intensa y cremosa que Yara Rosa, con sensación femenina y envolvente.",
    accords:["dulce","vainilla","cremoso","frutal","intenso"],
    notes:["Frutas dulces","flores suaves","vainilla","ámbar","almizcle"],
    feeling:"Se siente más llamativa y más sensual. Sigue siendo femenina, pero con más presencia.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, citas, salidas o cuando querés algo dulce con más fuerza."
  },
  {
    name:"Yara Candy",
    brand:"LATTAFA",
    price:"30.3/USD",
    img:"Yara Candy.png",
    gender:"femenino",
    profile:"Dulce tipo golosina, frutal y juvenil, con un estilo divertido y coqueto.",
    accords:["caramelo","frutal","dulce","juvenil","vainilla"],
    notes:["Frutas dulces","caramelo","vainilla","musk","toques florales"],
    feeling:"Huele alegre, dulce y muy femenino. Tiene vibra de perfume divertido, no serio.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, salidas casuales, verano/primavera y personas que aman perfumes dulces."
  },
  {
    name:"Vintage Radio",
    brand:"LATTAFA",
    price:"31.8/USD",
    img:"Vintage Radio.png",
    gender:"unisex",
    profile:"Dulce, aromático y elegante, con frutas, maderas y un toque cálido refinado.",
    accords:["lavanda","frutal","amaderado","dulce","elegante"],
    notes:["Lavanda","ciruela","palo santo","maderas","ámbar"],
    feeling:"Tiene una vibra sofisticada, distinta y moderna. Dulce, pero no básico.",
    performance:"Duración estimada media-alta: 7–9 horas. Proyección moderada.",
    use:"Ideal para tarde/noche, eventos, clima fresco y personas que quieren algo elegante."
  },
  {
    name:"Mayar Pink",
    brand:"LATTAFA",
    price:"31/USD",
    img:"Mayar Pink.png",
    gender:"femenino",
    profile:"Frutal, fresco y femenino, con una salida jugosa y limpia.",
    accords:["frutal","fresco","dulce","floral","juvenil"],
    notes:["Frutas tropicales","flores blancas","vainilla suave","musk"],
    feeling:"Se siente alegre, femenina y fácil de usar. No es pesada, es más fresca y linda.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor, primavera/verano y uso diario."
  },
  {
    name:"Khamrah Black",
    brand:"LATTAFA",
    price:"31.8/USD",
    img:"Khamrah Black.png",
    gender:"unisex",
    profile:"Dulce, especiado y gourmand, con sensación cálida, densa y envolvente.",
    accords:["gourmand","canela","vainilla","ámbar","especiado"],
    notes:["Canela","praliné","vainilla","dátiles","ámbar","maderas dulces"],
    feeling:"Huele como algo dulce, cálido y elegante. Tiene vibra de noche, invierno y presencia fuerte.",
    performance:"Duración estimada alta: 8–12 horas. Proyección fuerte al inicio.",
    use:"Ideal para noche, otoño/invierno, citas, eventos y amantes de perfumes dulces profundos."
  },
  {
    name:"Eclaire",
    brand:"LATTAFA",
    price:"29.5/USD",
    img:"Eclaire.png",
    gender:"femenino",
    profile:"Gourmand dulce, cremoso y lechoso, con una sensación de vainilla, caramelo y postre.",
    accords:["caramelo","vainilla","leche","gourmand","dulce"],
    notes:["Caramelo","leche","vainilla","azúcar","musk"],
    feeling:"Huele muy comestible, suave y envolvente. Ideal si te gustan los perfumes dulces tipo postre.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, citas, clima fresco o para alguien que quiere oler dulce y cremoso."
  },
  {
    name:"Ajwad Pink to Pink",
    brand:"LATTAFA",
    price:"23.14/USD",
    img:"Ajwad Pink to Pink.png",
    gender:"femenino",
    profile:"Frutal, dulce y femenino, con sensación suave, alegre y juvenil.",
    accords:["frutal","dulce","floral","suave","femenino"],
    notes:["Frutas rojas","flores suaves","vainilla","musk"],
    feeling:"Tiene una vibra linda, delicada y fácil de llevar. Es dulce pero no tan pesada.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para día, uso casual, primavera/verano y regalos seguros."
  },
  {
    name:"Yeah Men",
    brand:"MAISON ALHAMBRA",
    price:"27/USD",
    img:"Yeah Men.png",
    gender:"masculino",
    profile:"Dulce aromático, especiado y masculino, con una vibra moderna y seductora.",
    accords:["aromático","dulce","especiado","vainilla","masculino"],
    notes:["Manzana","jengibre","salvia","vainilla","haba tonka","maderas"],
    feeling:"Huele joven, atractivo y de salida. Dulce sin perder lo masculino.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, citas, salidas, clima fresco y uso casual elegante."
  },
  {
    name:"Salvo Intense",
    brand:"MAISON ALHAMBRA",
    price:"28.7/USD",
    img:"Salvo Intense.png",
    gender:"masculino",
    profile:"Fresco especiado, intenso y masculino, con salida potente y fondo ambarado.",
    accords:["fresco","especiado","ámbar","limpio","intenso"],
    notes:["Bergamota","pimienta","lavanda","ámbar","maderas"],
    feeling:"Da sensación de perfume masculino fuerte, limpio y seguro. Muy fácil de reconocer.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte al inicio.",
    use:"Ideal para noche, salidas, clima fresco y personas que quieren algo intenso."
  },
  {
    name:"La Vivacite Intense",
    brand:"MAISON ALHAMBRA",
    price:"25.5/USD",
    img:"La Vivacite Intense.png",
    gender:"femenino",
    profile:"Dulce, elegante y femenino, con un estilo floral-frutal y fondo cálido.",
    accords:["floral","dulce","frutal","elegante","vainilla"],
    notes:["Frutas dulces","flores blancas","vainilla","maderas suaves"],
    feeling:"Huele arreglada, femenina y con presencia. No es infantil; tiene un aire más elegante.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para tarde, noche suave, eventos, citas o uso diario elegante."
  },
  {
    name:"Leonie",
    brand:"MAISON ALHAMBRA",
    price:"30.2/USD",
    img:"Leonie.png",
    gender:"femenino",
    profile:"Floral dulce, femenino y sofisticado, con sensación limpia y delicada.",
    accords:["floral","limpio","dulce","almizcle","elegante"],
    notes:["Flores suaves","cítricos delicados","vainilla ligera","almizcle"],
    feeling:"Se siente fino, femenino y pulcro. Es más elegante que explosivo.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para diario, oficina, eventos tranquilos y primavera."
  },
  {
    name:"Jungle Vibe",
    brand:"RAYHAAN",
    price:"39.9/USD",
    img:"Jungle Vibe.png",
    gender:"unisex",
    profile:"Frutal, verde y exótico, con una vibra tropical y moderna.",
    accords:["tropical","verde","frutal","fresco","exótico"],
    notes:["Frutas tropicales","notas verdes","maderas suaves","almizcle"],
    feeling:"Huele distinto, fresco y divertido. Tiene personalidad sin ser demasiado pesado.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para día, calor, salidas casuales y quienes buscan algo diferente."
  },
  {
    name:"Hawas Black",
    brand:"RASASI",
    price:"42.14/USD",
    img:"Hawas Black.png",
    gender:"masculino",
    profile:"Fresco oscuro, especiado y amaderado, con una vibra masculina moderna e intensa.",
    accords:["fresco","oscuro","amaderado","especiado","masculino"],
    notes:["Cítricos","especias","maderas","ámbar","musk"],
    feeling:"Se siente fuerte, masculino y de presencia. Más serio que dulce.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte a moderada.",
    use:"Ideal para noche, eventos, clima templado/fresco y salidas."
  }
];

let currentGender = "todos";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const detailsModal = document.getElementById("detailsModal");
const modalImg = document.getElementById("modalImg");
const modalBrand = document.getElementById("modalBrand");
const modalName = document.getElementById("modalName");
const modalGender = document.getElementById("modalGender");
const modalPrice = document.getElementById("modalPrice");
const modalProfile = document.getElementById("modalProfile");
const modalAccords = document.getElementById("modalAccords");
const modalNotes = document.getElementById("modalNotes");
const modalFeeling = document.getElementById("modalFeeling");
const modalPerformance = document.getElementById("modalPerformance");
const modalUse = document.getElementById("modalUse");

function genderLabel(gender){
  if(gender === "masculino") return "Masculino";
  if(gender === "femenino") return "Femenino";
  return "Unisex";
}

function renderProducts(){
  productGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.gender = product.gender;
    card.dataset.search = `${product.name} ${product.brand} ${product.gender} ${product.profile} ${product.accords.join(" ")}`.toLowerCase();

    card.innerHTML = `
      <img src="img/${product.img}" alt="${product.name}">
      <div class="brand">${product.brand}</div>
      <div class="name">
        ${product.name}
        <span class="tag ${product.gender}">${genderLabel(product.gender)}</span>
      </div>
      <div class="price">${product.price}</div>
      <button class="detail-btn" type="button" data-index="${index}">Ver detalles</button>
    `;

    productGrid.appendChild(card);
  });

  document.querySelectorAll(".detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openDetails(products[btn.dataset.index]);
    });
  });
}

function openDetails(product){
  modalImg.src = `img/${product.img}`;
  modalImg.alt = product.name;
  modalBrand.innerText = product.brand;
  modalName.innerText = product.name;
  modalGender.innerText = genderLabel(product.gender);
  modalGender.className = `tag ${product.gender}`;
  modalPrice.innerText = product.price;
  modalProfile.innerText = product.profile;
  modalFeeling.innerText = product.feeling;
  modalPerformance.innerText = product.performance;
  modalUse.innerText = product.use;

  modalAccords.innerHTML = "";
  product.accords.forEach(accord => {
    modalAccords.innerHTML += `<span>${accord}</span>`;
  });

  modalNotes.innerHTML = "";
  product.notes.forEach(note => {
    modalNotes.innerHTML += `<li>${note}</li>`;
  });

  detailsModal.classList.add("active");
}

function closeDetails(){
  detailsModal.classList.remove("active");
}

function applyFilters(){
  const value = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  document.querySelectorAll(".card").forEach(card => {
    const matchesText = card.dataset.search.includes(value);
    const matchesGender = currentGender === "todos" || card.dataset.gender === currentGender;

    if(matchesText && matchesGender){
      card.style.display = "block";
      visibleCount++;
    }else{
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentGender = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

document.getElementById("closeBannerBtn").addEventListener("click", () => {
  document.getElementById("infoBanner").style.display = "none";
});

document.getElementById("closeModalBtn").addEventListener("click", closeDetails);

detailsModal.addEventListener("click", (e) => {
  if(e.target === detailsModal){
    closeDetails();
  }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

renderProducts(); 

function setupScrollAnimations(){
  const animatedElements = document.querySelectorAll(".card, .how-to-buy");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.12
  });

  animatedElements.forEach(el => observer.observe(el));
}

setupScrollAnimations();