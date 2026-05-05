const products = [
  {
    name:"Durrat Al Aroos",
    brand:"AL WATANIAH",
    price:"27/USD",
    img:"Durrat Al Aroos.png",
    gender:"unisex",
    ml:"85 ml",
    badge:"Suave",
    styles:["dulce","diario","floral"],
    featured:true,
    profile:"Floral dulce, limpio y elegante, con una salida suave y delicada.",
    accords:["floral","dulce","almizclado","limpio","suave"],
    notes:["Flores blancas","almizcle","toques frutales","base cremosa"],
    feeling:"Da una sensación prolija, delicada y agradable. No es agresivo; se siente fino, limpio y fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada durante la primera hora.",
    use:"Ideal para día, salidas tranquilas, uso diario, primavera/verano o situaciones donde querés oler bien sin invadir."
  },
  {
    name:"Odyssey White Edition",
    brand:"ARMAF",
    price:"34/USD",
    img:"Odyssey White Edition.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Limpio",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, limpio y moderno, con una sensación masculina suave, cremosa y fácil de llevar.",
    accords:["fresco","limpio","cremoso","amaderado","moderno"],
    notes:["Cítricos suaves","almizcle","maderas limpias","toques aromáticos"],
    feeling:"Huele a hombre arreglado, prolijo y tranquilo. Es de esos perfumes que no molestan y van bien casi siempre.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada al inicio.",
    use:"Muy bueno para diario, oficina, facultad, calor moderado o cuando querés algo seguro y limpio."
  },
  {
    name:"Odyssey Mandarine Sky",
    brand:"ARMAF",
    price:"37.5/USD",
    img:"Odyssey Mandarin Sky.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Llamativo",
    styles:["dulce","intenso","noche"],
    featured:true,
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
    ml:"105 ml",
    badge:"Intenso",
    styles:["intenso","noche","amaderado"],
    featured:true,
    profile:"Cítrico ahumado y amaderado, con salida potente y una base seca, elegante e intensa.",
    accords:["cítrico","ahumado","amaderado","intenso","masculino"],
    notes:["Limón","bergamota","piña","abedul","almizcle","maderas"],
    feeling:"Huele fuerte, serio y con presencia. Tiene sensación de perfume masculino elegante, de salida o evento.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte al inicio.",
    use:"Muy bueno para noche, eventos, salidas, clima templado/fresco y ocasiones donde querés presencia."
  },
  {
    name:"9AM Men",
    brand:"AFNAN",
    price:"40.6/USD",
    img:"Afnan 9AM.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Diario",
    styles:["fresco","diario","cítrico"],
    featured:false,
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
    ml:"100 ml",
    badge:"Noche",
    styles:["dulce","intenso","noche"],
    featured:true,
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
    ml:"100 ml",
    badge:"Fuerte",
    styles:["intenso","noche","frio"],
    featured:false,
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
    ml:"100 ml",
    badge:"Denso",
    styles:["intenso","dulce","noche"],
    featured:false,
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
    ml:"100 ml",
    badge:"Floral",
    styles:["dulce","floral","noche"],
    featured:false,
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
    ml:"100 ml",
    badge:"Frutal",
    styles:["dulce","diario","frutal"],
    featured:false,
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
    ml:"100 ml",
    badge:"Tropical",
    styles:["dulce","gourmand","noche"],
    featured:true,
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
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","diario","cremoso"],
    featured:true,
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
    ml:"100 ml",
    badge:"Sensual",
    styles:["dulce","noche","cremoso"],
    featured:false,
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
    ml:"100 ml",
    badge:"Candy",
    styles:["dulce","diario","frutal"],
    featured:false,
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
    ml:"100 ml",
    badge:"Elegante",
    styles:["dulce","noche","amaderado"],
    featured:false,
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
    ml:"100 ml",
    badge:"Fresco",
    styles:["fresco","diario","frutal"],
    featured:false,
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
    ml:"100 ml",
    badge:"Gourmand",
    styles:["gourmand","dulce","noche","intenso"],
    featured:true,
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
    ml:"100 ml",
    badge:"Postre",
    styles:["gourmand","dulce","noche"],
    featured:true,
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
    ml:"60 ml",
    badge:"Regalo",
    styles:["dulce","diario","frutal"],
    featured:false,
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
    ml:"100 ml",
    badge:"Salida",
    styles:["dulce","noche","aromático"],
    featured:false,
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
    ml:"100 ml",
    badge:"Potente",
    styles:["fresco","intenso","noche"],
    featured:false,
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
    ml:"100 ml",
    badge:"Elegante",
    styles:["dulce","floral","diario"],
    featured:false,
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
    ml:"100 ml",
    badge:"Fino",
    styles:["floral","diario","limpio"],
    featured:false,
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
    ml:"100 ml",
    badge:"Exótico",
    styles:["fresco","diario","frutal"],
    featured:false,
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
    ml:"100 ml",
    badge:"Oscuro",
    styles:["intenso","noche","fresco"],
    featured:false,
    profile:"Fresco oscuro, especiado y amaderado, con una vibra masculina moderna e intensa.",
    accords:["fresco","oscuro","amaderado","especiado","masculino"],
    notes:["Cítricos","especias","maderas","ámbar","musk"],
    feeling:"Se siente fuerte, masculino y de presencia. Más serio que dulce.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte a moderada.",
    use:"Ideal para noche, eventos, clima templado/fresco y salidas."
  }
];

let currentGender = "todos";
let currentStyle = "todos";
let currentModalProduct = null;
let observer = null;

/*
  Estado de "Ver todo".
  sessionStorage hace que Safari/iPhone no lo cierre de la nada cuando cambia la barra del navegador.
*/
let mobileShowAll = sessionStorage.getItem("naelahMobileShowAll") === "true";

/*
  Usamos matchMedia en vez de resize.
  En iPhone Safari, resize se dispara al scrollear por la barra superior/inferior.
*/
const mobileQuery = window.matchMedia("(max-width: 600px)");

const productGrid = document.getElementById("productGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const productCount = document.getElementById("productCount");
const mobileShowMoreBtn = document.getElementById("mobileShowMoreBtn");
const toast = document.getElementById("toast");

const detailsModal = document.getElementById("detailsModal");
const modalImg = document.getElementById("modalImg");
const modalBrand = document.getElementById("modalBrand");
const modalName = document.getElementById("modalName");
const modalGender = document.getElementById("modalGender");
const modalMl = document.getElementById("modalMl");
const modalPrice = document.getElementById("modalPrice");
const modalProfile = document.getElementById("modalProfile");
const modalAccords = document.getElementById("modalAccords");
const modalNotes = document.getElementById("modalNotes");
const modalFeeling = document.getElementById("modalFeeling");
const modalPerformance = document.getElementById("modalPerformance");
const modalUse = document.getElementById("modalUse");
const modalCopyBtn = document.getElementById("modalCopyBtn");

function genderLabel(gender){
  if(gender === "masculino") return "Masculino";
  if(gender === "femenino") return "Femenino";
  return "Unisex";
}

function getSearchText(product){
  return `${product.name} ${product.brand} ${product.gender} ${product.profile} ${product.accords.join(" ")} ${product.styles.join(" ")} ${product.badge}`.toLowerCase();
}

function getFilteredProducts(){
  const value = searchInput.value.toLowerCase().trim();

  return products.filter(product => {
    const matchesText = getSearchText(product).includes(value);
    const matchesGender = currentGender === "todos" || product.gender === currentGender;
    const matchesStyle = currentStyle === "todos" || product.styles.includes(currentStyle);

    return matchesText && matchesGender && matchesStyle;
  });
}

function showToast(text){
  toast.innerText = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function copyText(text){
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast("Nombre copiado 📩");
      })
      .catch(() => {
        copyTextFallback(text);
      });
  }else{
    copyTextFallback(text);
  }
}

function copyTextFallback(text){
  const temp = document.createElement("input");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);

  showToast("Nombre copiado 📩");
}

function renderFeatured(){
  featuredGrid.innerHTML = "";

  const filtered = getFilteredProducts();
  let featuredProducts = filtered.filter(product => product.featured);

  if(featuredProducts.length === 0){
    featuredProducts = filtered.slice(0, 6);
  }else{
    featuredProducts = featuredProducts.slice(0, 6);
  }

  if(featuredProducts.length === 0){
    featuredGrid.innerHTML = `
      <div class="featured-empty">
        No hay recomendados para este filtro 😔
      </div>
    `;
    return;
  }

  featuredProducts.forEach(product => {
    const index = products.indexOf(product);

    const card = document.createElement("div");
    card.className = "featured-card";
    card.innerHTML = `
      <img src="img/${product.img}" alt="${product.name}">
      <div class="featured-info">
        <small>${product.brand}</small>
        <h3>${product.name}</h3>
        <p>${product.price} · ${product.ml}</p>
      </div>
    `;

    card.addEventListener("click", () => openDetails(products[index]));
    featuredGrid.appendChild(card);
  });
}

function renderProducts(){
  productGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.gender = product.gender;
    card.dataset.styles = product.styles.join(" ");
    card.dataset.name = product.name;
    card.dataset.search = getSearchText(product);

    card.innerHTML = `
      <div class="card-top">
        <span class="badge">${product.badge}</span>
        <span class="ml-card">${product.ml}</span>
      </div>

      <img src="img/${product.img}" alt="${product.name}">

      <div class="brand">${product.brand}</div>

      <div class="name">
        ${product.name}
        <span class="tag ${product.gender}">${genderLabel(product.gender)}</span>
      </div>

      <div class="card-style-line">
        ${product.styles.slice(0,3).map(style => `<span>${style}</span>`).join("")}
      </div>

      <div class="price">${product.price}</div>

      <div class="card-actions">
        <button class="detail-btn" type="button" data-index="${index}">Ver detalles</button>
        <button class="copy-name-btn" type="button" data-name="${product.name}">Copiar nombre</button>
      </div>
    `;

    productGrid.appendChild(card);
  });

  document.querySelectorAll(".detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openDetails(products[btn.dataset.index]);
    });
  });

  document.querySelectorAll(".copy-name-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      copyText(btn.dataset.name);
    });
  });

  setupScrollAnimations();
  applyFilters();
}

function openDetails(product){
  currentModalProduct = product;

  modalImg.src = `img/${product.img}`;
  modalImg.alt = product.name;
  modalBrand.innerText = product.brand;
  modalName.innerText = product.name;
  modalGender.innerText = genderLabel(product.gender);
  modalGender.className = `tag ${product.gender}`;
  modalMl.innerText = product.ml;
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
  const visibleProducts = getFilteredProducts();
  const visibleNames = visibleProducts.map(product => product.name);

  const isMobile = mobileQuery.matches;
  const mobileLimit = 8;

  let realMatchCount = 0;
  let shownCount = 0;

  document.querySelectorAll(".card").forEach(card => {
    const cardName = card.dataset.name;
    const isMatch = visibleNames.includes(cardName);

    if(isMatch){
      realMatchCount++;

      if(isMobile && !mobileShowAll && shownCount >= mobileLimit){
        card.style.display = "none";
      }else{
        card.style.display = "block";
        shownCount++;
      }
    }else{
      card.style.display = "none";
    }
  });

  noResults.style.display = realMatchCount === 0 ? "block" : "none";

  if(isMobile && !mobileShowAll && realMatchCount > mobileLimit){
    productCount.innerText = `Mostrando ${mobileLimit} de ${realMatchCount} perfumes`;
    mobileShowMoreBtn.classList.add("visible");
    mobileShowMoreBtn.innerText = "Ver todo";
  }else{
    productCount.innerText = `Mostrando ${realMatchCount} de ${products.length} perfumes`;
    mobileShowMoreBtn.classList.remove("visible");
  }

  renderFeatured();
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentGender = btn.dataset.filter;

    mobileShowAll = false;
    sessionStorage.removeItem("naelahMobileShowAll");

    applyFilters();
  });
});

document.querySelectorAll(".style-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".style-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentStyle = btn.dataset.style;

    mobileShowAll = false;
    sessionStorage.removeItem("naelahMobileShowAll");

    applyFilters();
  });
});

searchInput.addEventListener("input", () => {
  mobileShowAll = false;
  sessionStorage.removeItem("naelahMobileShowAll");
  applyFilters();
});

mobileShowMoreBtn.addEventListener("click", () => {
  mobileShowAll = true;
  sessionStorage.setItem("naelahMobileShowAll", "true");
  applyFilters();
});

document.getElementById("closeBannerBtn").addEventListener("click", () => {
  document.getElementById("infoBanner").style.display = "none";
});

document.getElementById("closeModalBtn").addEventListener("click", closeDetails);

detailsModal.addEventListener("click", (e) => {
  if(e.target === detailsModal){
    closeDetails();
  }
});

modalCopyBtn.addEventListener("click", () => {
  if(currentModalProduct){
    copyText(currentModalProduct.name);
  }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

function handleMobileModeChange(){
  mobileShowAll = false;
  sessionStorage.removeItem("naelahMobileShowAll");
  applyFilters();
}

if(typeof mobileQuery.addEventListener === "function"){
  mobileQuery.addEventListener("change", handleMobileModeChange);
}else if(typeof mobileQuery.addListener === "function"){
  mobileQuery.addListener(handleMobileModeChange);
}

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    applyFilters();
  }, 400);
});

function setupScrollAnimations(){
  if(observer){
    observer.disconnect();
  }

  const animatedElements = document.querySelectorAll(".card, .how-to-buy, .featured-section, .recommend-box");

  observer = new IntersectionObserver((entries) => {
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

document.getElementById("recommendBtn").addEventListener("click", () => {
  const scent = document.getElementById("quizScent").value;
  const use = document.getElementById("quizUse").value;
  const gender = document.getElementById("quizGender").value;

  const scored = products.map(product => {
    let score = 0;

    if(gender === "todos" || product.gender === gender) score += 3;
    if(product.styles.includes(scent)) score += 3;
    if(product.styles.includes(use)) score += 2;

    if(use === "calor" && (product.styles.includes("fresco") || product.styles.includes("diario"))) score += 2;
    if(use === "frio" && (product.styles.includes("dulce") || product.styles.includes("intenso") || product.styles.includes("gourmand"))) score += 2;

    return {product, score};
  })
  .filter(item => item.score > 0)
  .sort((a,b) => b.score - a.score)
  .slice(0,3);

  const results = document.getElementById("quizResults");
  results.innerHTML = "";

  scored.forEach(item => {
    const product = item.product;

    const div = document.createElement("div");
    div.className = "quiz-card";
    div.innerHTML = `
      <strong>${product.name}</strong>
      <span>${product.price} · ${product.ml}</span>
      <p>${product.badge} · ${product.styles.slice(0,3).join(" · ")}</p>
    `;

    div.addEventListener("click", () => openDetails(product));
    results.appendChild(div);
  });
});

renderProducts();

function trackVisit(){
  const alreadyTracked = sessionStorage.getItem("naelahVisitTracked");

  if(alreadyTracked === "true"){
    return;
  }

  sessionStorage.setItem("naelahVisitTracked", "true");

  fetch("https://naelah-api.vercel.app/api/visit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page: window.location.href,
      referrer: document.referrer || null,
      device_width: window.innerWidth,
      device_height: window.innerHeight
    })
  }).catch(() => {});
}

trackVisit();