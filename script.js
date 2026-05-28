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
  },
  {
    name:"Afeef",
    brand:"LATTAFA",
    price:"Consultar",
    img:"afeef edp.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Elegante",
    styles:["floral","dulce","diario"],
    featured:false,
    profile:"Floral dulce, femenino y elegante, con una sensación delicada y prolija.",
    accords:["floral","dulce","almizclado","suave","elegante"],
    notes:["Flores suaves","almizcle","vainilla ligera","toques frutales"],
    feeling:"Se siente fino, limpio y femenino. Ideal para alguien que quiere algo agradable sin ser invasivo.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, salidas tranquilas, primavera/verano y ocasiones casuales."
  },
  {
    name:"Ajwad",
    brand:"LATTAFA",
    price:"Consultar",
    img:"ajwad 60ml.png",
    gender:"unisex",
    ml:"60 ml",
    badge:"Dulce",
    styles:["dulce","diario","frutal"],
    featured:false,
    profile:"Dulce, frutal y suave, con una salida agradable y un fondo cálido.",
    accords:["frutal","dulce","ámbar","almizcle","suave"],
    notes:["Frutas dulces","flores suaves","ámbar","vainilla","musk"],
    feeling:"Tiene una vibra linda, limpia y fácil de usar. No es pesado, va bien para todos los días.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, uso casual, salidas tranquilas y regalos."
  },
  {
    name:"Al Noble Ameer",
    brand:"LATTAFA",
    price:"Consultar",
    img:"al noble ameer.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Intenso",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Amaderado, especiado y elegante, con una presencia masculina fuerte.",
    accords:["amaderado","especiado","ámbar","oscuro","masculino"],
    notes:["Maderas","especias","ámbar","cuero suave","almizcle"],
    feeling:"Se siente serio, masculino y con carácter. Tiene presencia sin parecer común.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, eventos, clima fresco y salidas."
  },
  {
    name:"Al Qiam Silver",
    brand:"LATTAFA",
    price:"Consultar",
    img:"al qiam silver edp.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Fresco",
    styles:["fresco","diario","amaderado"],
    featured:false,
    profile:"Fresco, cítrico y amaderado, con un estilo limpio y moderno.",
    accords:["cítrico","fresco","amaderado","limpio","masculino"],
    notes:["Pomelo","jengibre","maderas","ámbar","almizcle"],
    feeling:"Huele limpio, moderno y masculino. Va muy bien para uso diario.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, calor moderado, trabajo, facultad y salidas casuales."
  },
  {
    name:"Alpine Homme Sport",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"alpine-home-sport.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Sport",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, deportivo y limpio, con una sensación cítrica y fácil de usar.",
    accords:["fresco","cítrico","limpio","aromático","sport"],
    notes:["Cítricos","almizcle","maderas limpias","notas aromáticas"],
    feeling:"Tiene vibra de hombre prolijo, recién bañado y activo. No se pone pesado.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor, gimnasio suave, facultad y uso diario."
  },
  {
    name:"Ameerat Al Arab",
    brand:"ASDAAF",
    price:"Consultar",
    img:"ameerat al arab.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y femenino, con un aire árabe suave y elegante.",
    accords:["dulce","floral","frutal","ámbar","femenino"],
    notes:["Flores blancas","frutas dulces","vainilla","ámbar","musk"],
    feeling:"Se siente femenino, cálido y coqueto. Bastante fácil de llevar.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para diario, tarde, salidas casuales y citas tranquilas."
  },
  {
    name:"Angham",
    brand:"LATTAFA",
    price:"Consultar",
    img:"angham parfum.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Moderno",
    styles:["dulce","gourmand","noche"],
    featured:false,
    profile:"Dulce, cálido y moderno, con una sensación cremosa y elegante.",
    accords:["vainilla","dulce","ámbar","especiado","cremoso"],
    notes:["Vainilla","praliné","jengibre","ámbar","maderas suaves"],
    feeling:"Huele actual, dulce y con presencia. Tiene vibra de perfume llamativo pero fino.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada.",
    use:"Ideal para noche, citas, clima fresco y salidas."
  },
  {
    name:"Ansaam Gold",
    brand:"LATTAFA",
    price:"Consultar",
    img:"ansaam gold.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","noche","elegante"],
    featured:false,
    profile:"Dulce, floral y ambarado, con una vibra elegante y cálida.",
    accords:["dulce","ámbar","floral","vainilla","elegante"],
    notes:["Mandarina","flores blancas","vainilla","ámbar","musk"],
    feeling:"Se siente dulce, limpio y bastante sofisticado. Tiene buena presencia.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche suave, citas, eventos y clima templado."
  },
  {
    name:"Arab Prive Rose",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"arab prive rose.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Rosa",
    styles:["floral","dulce","elegante"],
    featured:false,
    profile:"Floral, rosado y elegante, con una sensación femenina refinada.",
    accords:["rosa","floral","dulce","almizcle","elegante"],
    notes:["Rosa","flores suaves","almizcle","vainilla ligera"],
    feeling:"Huele arreglada, femenina y delicada. No es infantil, es más elegante.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario elegante, citas, primavera y eventos tranquilos."
  },
  {
    name:"Art of Universe",
    brand:"LATTAFA PRIDE",
    price:"Consultar",
    img:"art of universe.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Especial",
    styles:["fresco","dulce","diario"],
    featured:false,
    profile:"Fresco, frutal y moderno, con una presentación llamativa y estilo original.",
    accords:["fresco","frutal","dulce","limpio","moderno"],
    notes:["Frutas","notas frescas","maderas suaves","almizcle"],
    feeling:"Tiene una vibra diferente, juvenil y limpia. Llama la atención sin ser pesado.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, salidas, clima templado y uso casual."
  },
  {
    name:"Asad Bourbon",
    brand:"LATTAFA",
    price:"Consultar",
    img:"asad bourbon.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Cálido",
    styles:["dulce","intenso","noche"],
    featured:false,
    profile:"Dulce, especiado y cálido, con una vibra profunda y masculina.",
    accords:["bourbon","vainilla","ámbar","especiado","dulce"],
    notes:["Especias","vainilla","ámbar","maderas","toques licorosos"],
    feeling:"Se siente más cálido y dulce que Asad clásico. Tiene presencia de noche.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, frío, salidas y citas."
  },
  {
    name:"Asad Zanzibar",
    brand:"LATTAFA",
    price:"Consultar",
    img:"asad zanzibar.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Tropical",
    styles:["fresco","dulce","diario"],
    featured:false,
    profile:"Fresco, tropical y cremoso, con una vibra diferente dentro de la línea Asad.",
    accords:["tropical","fresco","cremoso","dulce","amaderado"],
    notes:["Coco","vainilla suave","notas frescas","maderas","ámbar"],
    feeling:"Se siente playero, moderno y más relajado. Menos oscuro, más fresco.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, calor, salidas casuales y clima templado."
  },
  {
    name:"Atheeri",
    brand:"LATTAFA",
    price:"Consultar",
    img:"atheeri unisex.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Suave",
    styles:["dulce","diario","floral"],
    featured:false,
    profile:"Suave, dulce y floral, con una sensación limpia y delicada.",
    accords:["floral","dulce","almizcle","suave","cremoso"],
    notes:["Flores suaves","vainilla","almizcle","toques frutales"],
    feeling:"Huele delicado, limpio y agradable. Fácil de usar y bastante amigable.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para diario, citas tranquilas, primavera y uso casual."
  },
  {
    name:"B.A.D Homme",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"b.a.d-homme-parfum.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Noche",
    styles:["dulce","noche","amaderado"],
    featured:false,
    profile:"Dulce, amaderado y masculino, con una vibra nocturna y seductora.",
    accords:["dulce","amaderado","cacao","especiado","masculino"],
    notes:["Cacao","maderas","especias","ámbar","vainilla"],
    feeling:"Se siente atractivo, de salida y con un lado oscuro dulce.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, citas, clima fresco y salidas."
  },
  {
    name:"B.A.D Femme",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"b.a.dfemme.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Sensual",
    styles:["dulce","noche","floral"],
    featured:false,
    profile:"Dulce, floral y sensual, con una sensación femenina elegante.",
    accords:["dulce","floral","vainilla","ámbar","femenino"],
    notes:["Flores","vainilla","cacao suave","maderas","almizcle"],
    feeling:"Huele femenino, arreglado y de salida. Dulce sin ser demasiado infantil.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para noche, citas, eventos y clima templado."
  },
  {
    name:"Badee Al Oud Noble Blush",
    brand:"LATTAFA",
    price:"Consultar",
    img:"badee al oud noble blush parfum.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Blush",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, cremoso y floral, con una vibra rosada, suave y femenina.",
    accords:["dulce","floral","cremoso","vainilla","suave"],
    notes:["Rosa suave","vainilla","almizcle","flores blancas"],
    feeling:"Se siente tierno, femenino y agradable. Más suave que intenso.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, primavera, citas tranquilas y uso casual."
  },
  {
    name:"Bayaan",
    brand:"LATTAFA",
    price:"Consultar",
    img:"bayaan.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","noche","amaderado"],
    featured:false,
    profile:"Dulce, ambarado y elegante, con una sensación cálida y envolvente.",
    accords:["ámbar","dulce","maderas","vainilla","cálido"],
    notes:["Ámbar","maderas","vainilla","especias suaves"],
    feeling:"Se siente cálido, prolijo y con presencia. Va bien para quienes buscan algo distinto.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para tarde/noche, clima fresco y salidas."
  },
  {
    name:"Candid",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"candioparfum.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y femenino, con una salida alegre y fácil de usar.",
    accords:["dulce","floral","frutal","almizcle","suave"],
    notes:["Frutas dulces","flores","almizcle","vainilla"],
    feeling:"Tiene una vibra coqueta, limpia y juvenil.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, primavera/verano y salidas casuales."
  },
  {
    name:"Chants Tenderina",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"chants-tenderina.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Tierno",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y suave, con un estilo femenino delicado.",
    accords:["floral","dulce","almizcle","suave","femenino"],
    notes:["Flores suaves","frutas","almizcle","vainilla ligera"],
    feeling:"Huele dulce, limpio y femenino. Bastante fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para diario, citas tranquilas y clima templado."
  },
  {
    name:"Club de Nuit Iconic",
    brand:"ARMAF",
    price:"Consultar",
    img:"club de nuit ico-nic.png",
    gender:"masculino",
    ml:"105 ml",
    badge:"Fresco",
    styles:["fresco","intenso","diario"],
    featured:false,
    profile:"Fresco, cítrico y masculino, con una vibra limpia, elegante y moderna.",
    accords:["cítrico","fresco","amaderado","aromático","masculino"],
    notes:["Pomelo","menta","cítricos","maderas","ámbar"],
    feeling:"Huele limpio, fuerte y caro. Tiene presencia sin ser dulce.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para día, noche, oficina, salidas y clima templado."
  },
  {
    name:"Combo Asad 5th Anniversary",
    brand:"LATTAFA",
    price:"Consultar",
    img:"combo 5 anniversary edition asad black-blue.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Combo",
    styles:["intenso","noche","fresco"],
    featured:false,
    profile:"Combo de Asad con perfiles intensos y masculinos, uno más oscuro y otro más fresco.",
    accords:["ámbar","especiado","fresco","maderas","masculino"],
    notes:["Especias","maderas","ámbar","notas frescas","vainilla"],
    feeling:"Ideal para quien quiere variedad entre algo intenso y algo más fresco.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para regalo, noche, diario y colección."
  },
  {
    name:"Confidential Private Gold",
    brand:"LATTAFA",
    price:"Consultar",
    img:"confidential private gold.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Gold",
    styles:["dulce","elegante","diario"],
    featured:false,
    profile:"Dulce, frutal y elegante, con una sensación cálida y brillante.",
    accords:["frutal","dulce","ámbar","musk","elegante"],
    notes:["Frutas","vainilla","ámbar","almizcle","maderas suaves"],
    feeling:"Se siente elegante pero fácil de usar. Dulce sin ser pesado.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para diario, tarde, citas y clima templado."
  },
  {
    name:"Dark Door Sport",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"dark-door-sport.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Sport",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, limpio y masculino, con una vibra deportiva y moderna.",
    accords:["fresco","cítrico","limpio","aromático","maderas"],
    notes:["Cítricos","lavanda","maderas limpias","almizcle"],
    feeling:"Se siente prolijo, activo y fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor, gimnasio suave, facultad y uso diario."
  },
  {
    name:"Delilah Pour Femme",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"delilah-pour-home.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Femenino",
    styles:["floral","dulce","diario"],
    featured:false,
    profile:"Floral, dulce y femenino, con una sensación delicada y arreglada.",
    accords:["floral","dulce","rosa","almizcle","elegante"],
    notes:["Rosa","litchi","flores suaves","vainilla","musk"],
    feeling:"Huele femenino, limpio y romántico. Muy de salida tranquila o diario elegante.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, citas, primavera y eventos suaves."
  },
  {
    name:"Emaan",
    brand:"LATTAFA",
    price:"Consultar",
    img:"emaan parfum.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Elegante",
    styles:["floral","dulce","diario"],
    featured:false,
    profile:"Floral, dulce y luminoso, con una sensación femenina elegante.",
    accords:["floral","dulce","cítrico","almizcle","elegante"],
    notes:["Flores blancas","cítricos","vainilla suave","almizcle"],
    feeling:"Se siente limpio, femenino y sofisticado. Bastante fácil de usar.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para diario, oficina, eventos tranquilos y primavera."
  },
  {
    name:"Emeer",
    brand:"LATTAFA",
    price:"Consultar",
    img:"emeer unisex.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Fino",
    styles:["amaderado","diario","elegante"],
    featured:false,
    profile:"Amaderado, fresco y elegante, con una sensación moderna y refinada.",
    accords:["amaderado","fresco","cítrico","ámbar","elegante"],
    notes:["Cítricos","maderas","ámbar","almizcle","especias suaves"],
    feeling:"Huele fino, moderno y con presencia limpia.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para diario elegante, eventos, oficina y salidas."
  },
  {
    name:"Extravagant Lover",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"extravagantlover.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Verde",
    styles:["fresco","diario","amaderado"],
    featured:false,
    profile:"Fresco, verde y amaderado, con un estilo masculino limpio y diferente.",
    accords:["verde","fresco","amaderado","cítrico","limpio"],
    notes:["Notas verdes","cítricos","maderas","almizcle"],
    feeling:"Se siente fresco, elegante y poco común. Buena opción para diario.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor moderado, trabajo y salidas casuales."
  },
  {
    name:"Fakhar Black",
    brand:"LATTAFA",
    price:"Consultar",
    img:"fakhar black.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Aromático",
    styles:["fresco","noche","aromático"],
    featured:false,
    profile:"Aromático, fresco y masculino, con una vibra elegante y seductora.",
    accords:["aromático","fresco","amaderado","especiado","masculino"],
    notes:["Manzana","jengibre","salvia","maderas","ámbar"],
    feeling:"Huele a hombre arreglado y seguro. Sirve para diario y salida.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para noche suave, citas, diario elegante y clima templado."
  },
  {
    name:"Fakhar Extrait Gold",
    brand:"LATTAFA",
    price:"Consultar",
    img:"fakhar extrait gold.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Gold",
    styles:["floral","dulce","elegante"],
    featured:false,
    profile:"Floral, dulce y elegante, con una presentación lujosa y femenina.",
    accords:["floral","dulce","vainilla","almizcle","elegante"],
    notes:["Flores blancas","vainilla","frutas suaves","musk"],
    feeling:"Se siente femenino, fino y con presencia.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para eventos, citas, tarde/noche y uso elegante."
  },
  {
    name:"Fakhar Parfum Blanco",
    brand:"LATTAFA",
    price:"Consultar",
    img:"fakhar parfum blanco.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Blanco",
    styles:["floral","diario","limpio"],
    featured:false,
    profile:"Floral blanco, limpio y femenino, con una sensación suave y elegante.",
    accords:["floral","limpio","dulce","almizcle","suave"],
    notes:["Flores blancas","almizcle","vainilla ligera","frutas suaves"],
    feeling:"Huele limpio, delicado y femenino. Muy fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, primavera, oficina y eventos tranquilos."
  },
  {
    name:"Habik Men",
    brand:"LATTAFA",
    price:"Consultar",
    img:"habik men.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Elegante",
    styles:["fresco","amaderado","diario"],
    featured:false,
    profile:"Fresco, amaderado y masculino, con una vibra moderna y prolija.",
    accords:["fresco","amaderado","aromático","limpio","masculino"],
    notes:["Cítricos","maderas","ámbar","almizcle"],
    feeling:"Se siente limpio, masculino y elegante. Buena opción segura.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para diario, oficina, salidas casuales y clima templado."
  },
  {
    name:"Habik Pink",
    brand:"LATTAFA",
    price:"Consultar",
    img:"habik pink edp.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Pink",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y femenino, con una vibra alegre y coqueta.",
    accords:["floral","dulce","frutal","almizcle","femenino"],
    notes:["Frutas dulces","flores","almizcle","vainilla"],
    feeling:"Huele dulce, limpio y juvenil. Muy usable.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, citas tranquilas, primavera y uso casual."
  },
  {
    name:"Haya",
    brand:"LATTAFA",
    price:"Consultar",
    img:"haya parfum mujer.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Dulce",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y femenina, con una sensación suave y agradable.",
    accords:["dulce","floral","frutal","almizcle","suave"],
    notes:["Flores suaves","frutas","almizcle","vainilla"],
    feeling:"Se siente femenina, tierna y limpia. Fácil de usar todos los días.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, primavera/verano, salidas casuales y citas."
  },
  {
    name:"Hayaati Al Maleky",
    brand:"LATTAFA",
    price:"Consultar",
    img:"hayaati al maleky.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Azul",
    styles:["fresco","diario","amaderado"],
    featured:false,
    profile:"Fresco, limpio y masculino, con una vibra moderna y versátil.",
    accords:["fresco","cítrico","amaderado","almizcle","azul"],
    notes:["Cítricos","maderas","ámbar","musk"],
    feeling:"Huele limpio, masculino y fácil de llevar. Muy de diario.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, calor moderado, estudio, trabajo y salidas."
  },
  {
    name:"Hayaati Black",
    brand:"LATTAFA",
    price:"Consultar",
    img:"hayaati black edp.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Oscuro",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Más oscuro, amaderado y masculino, con una vibra fuerte y nocturna.",
    accords:["amaderado","oscuro","ámbar","especiado","masculino"],
    notes:["Maderas","ámbar","especias","almizcle"],
    feeling:"Se siente serio, fuerte y con más carácter.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, salidas, clima fresco y eventos casuales."
  },
  {
    name:"Hayaati Gold Elixir",
    brand:"LATTAFA",
    price:"Consultar",
    img:"hayaati gold elixir.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Gold",
    styles:["dulce","diario","elegante"],
    featured:false,
    profile:"Dulce, cálido y elegante, con una sensación brillante y suave.",
    accords:["dulce","ámbar","vainilla","musk","cálido"],
    notes:["Vainilla","ámbar","frutas suaves","maderas"],
    feeling:"Se siente agradable, cálido y bastante fácil de usar.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para diario, tarde, citas y clima templado."
  },
  {
    name:"Hayaati",
    brand:"LATTAFA",
    price:"Consultar",
    img:"hayaati.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Rosa",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, floral y suave, con una sensación femenina y limpia.",
    accords:["floral","dulce","almizcle","frutal","suave"],
    notes:["Flores","frutas dulces","almizcle","vainilla suave"],
    feeling:"Huele tierno, limpio y femenino.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada/suave.",
    use:"Ideal para diario, primavera/verano y salidas casuales."
  },
  {
    name:"Heroic",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"heroic.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Heroic",
    styles:["dulce","noche","elegante"],
    featured:false,
    profile:"Dulce, especiado y elegante, con una vibra masculina moderna.",
    accords:["dulce","ámbar","especiado","maderas","elegante"],
    notes:["Especias","vainilla","ámbar","maderas"],
    feeling:"Se siente atractivo, cálido y de salida.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, citas, salidas y clima fresco."
  },
  {
    name:"Ishq Al Shuyukh Gold",
    brand:"LATTAFA",
    price:"Consultar",
    img:"ishq al shuyukh gold.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Gold",
    styles:["dulce","gourmand","noche"],
    featured:false,
    profile:"Dulce, cálido y gourmand, con una vibra intensa y envolvente.",
    accords:["caramelo","vainilla","ámbar","dulce","gourmand"],
    notes:["Caramelo","vainilla","cuero suave","ámbar","maderas"],
    feeling:"Huele dulce, fuerte y muy de noche. Tiene bastante presencia.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, citas, frío y salidas."
  },
  {
    name:"Jasoor",
    brand:"LATTAFA",
    price:"Consultar",
    img:"jasoor parfum edp.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Valiente",
    styles:["fresco","noche","amaderado"],
    featured:false,
    profile:"Fresco, especiado y amaderado, con una vibra masculina intensa.",
    accords:["fresco","especiado","amaderado","ámbar","masculino"],
    notes:["Bergamota","especias","maderas","ámbar","almizcle"],
    feeling:"Se siente fuerte, moderno y seguro. Tiene personalidad.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para salidas, noche, eventos casuales y clima templado."
  },
  {
    name:"Jean Lowe Immortal",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jean-lowe-inmortal.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Cítrico",
    styles:["fresco","diario","elegante"],
    featured:false,
    profile:"Cítrico, fresco y elegante, con una sensación refinada y moderna.",
    accords:["cítrico","fresco","ámbar","jengibre","elegante"],
    notes:["Pomelo","jengibre","ámbar","maderas","almizcle"],
    feeling:"Huele fresco, fino y con mucha clase. Excelente para diario elegante.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para día, oficina, eventos y clima templado."
  },
  {
    name:"Jean Lowe Vibe",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jean-lowe-vibo.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Vibe",
    styles:["fresco","diario","verde"],
    featured:false,
    profile:"Fresco, verde y moderno, con una sensación limpia y relajada.",
    accords:["verde","fresco","cítrico","maderas","limpio"],
    notes:["Cítricos","notas verdes","maderas","almizcle"],
    feeling:"Se siente moderno, fresco y fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor, salidas casuales y uso diario."
  },
  {
    name:"Jean Lowe Maitre",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jean-lowe.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Fino",
    styles:["floral","diario","elegante"],
    featured:false,
    profile:"Floral, limpio y elegante, con una sensación suave y refinada.",
    accords:["floral","limpio","almizcle","suave","elegante"],
    notes:["Flores suaves","almizcle","cítricos delicados","maderas"],
    feeling:"Se siente fino, tranquilo y prolijo.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario elegante, oficina y eventos tranquilos."
  },
  {
    name:"Jean Lowe Fraiche",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jeanlowe-fraiche.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Fraiche",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, cítrico y limpio, con una sensación liviana y moderna.",
    accords:["fresco","cítrico","limpio","maderas","almizcle"],
    notes:["Cítricos","notas acuáticas","almizcle","maderas suaves"],
    feeling:"Huele limpio, fresco y fácil de llevar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para calor, diario, facultad, trabajo y salidas casuales."
  },
  {
    name:"Jorge Di Profumo Aqua",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jorge-diprofumo-aqua.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Aqua",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, acuático y masculino, con una vibra limpia y elegante.",
    accords:["acuático","fresco","cítrico","limpio","masculino"],
    notes:["Notas marinas","cítricos","maderas","almizcle"],
    feeling:"Se siente fresco, prolijo y elegante. Ideal para clima cálido.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para día, calor, trabajo, facultad y uso diario."
  },
  {
    name:"Jorge Di Profumo",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"jorge-diprofumo.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Profumo",
    styles:["fresco","noche","amaderado"],
    featured:false,
    profile:"Fresco, amaderado y elegante, con una vibra masculina más seria.",
    accords:["acuático","amaderado","ámbar","fresco","masculino"],
    notes:["Notas marinas","incienso suave","maderas","ámbar"],
    feeling:"Se siente más oscuro y elegante que un fresco común.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche suave, eventos, clima templado y uso elegante."
  },
  {
    name:"Khamrah Dukhan",
    brand:"LATTAFA",
    price:"Consultar",
    img:"khamrah dukhan.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Denso",
    styles:["gourmand","dulce","noche"],
    featured:false,
    profile:"Dulce, ahumado y especiado, con una sensación cálida e intensa.",
    accords:["dulce","ahumado","especiado","vainilla","gourmand"],
    notes:["Especias","vainilla","tabaco suave","ámbar","maderas dulces"],
    feeling:"Tiene vibra nocturna, cálida y con mucha personalidad.",
    performance:"Duración estimada alta: 8–12 horas. Proyección fuerte al inicio.",
    use:"Ideal para noche, frío, citas y salidas."
  },
  {
    name:"La Rouge Baroque Extreme",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"larouge-baroque.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Rojo",
    styles:["dulce","noche","elegante"],
    featured:false,
    profile:"Dulce, floral y elegante, con una vibra intensa y femenina.",
    accords:["dulce","floral","ámbar","vainilla","elegante"],
    notes:["Flores","frutas rojas","ámbar","vainilla","maderas suaves"],
    feeling:"Se siente llamativo, femenino y de noche.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para citas, eventos, noche y clima templado."
  },
  {
    name:"Love Spark",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"love-spark-parfum.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Spark",
    styles:["dulce","floral","diario"],
    featured:false,
    profile:"Dulce, frutal y femenino, con una sensación alegre y coqueta.",
    accords:["dulce","frutal","floral","almizcle","femenino"],
    notes:["Frutas rojas","flores suaves","vainilla","musk"],
    feeling:"Huele divertido, femenino y juvenil.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, salidas casuales, primavera/verano y citas tranquilas."
  },
  {
    name:"Maahir Black Edition",
    brand:"LATTAFA",
    price:"Consultar",
    img:"maahir black edition.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Oscuro",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Oscuro, especiado y amaderado, con una presencia masculina fuerte.",
    accords:["oscuro","amaderado","especiado","cuero","ámbar"],
    notes:["Especias","cuero suave","maderas","ámbar","musk"],
    feeling:"Se siente intenso, serio y elegante. No es un perfume tímido.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, eventos, clima fresco y salidas."
  },
  {
    name:"Maahir Gold",
    brand:"LATTAFA",
    price:"Consultar",
    img:"maahir gold parfum.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Gold",
    styles:["dulce","elegante","diario"],
    featured:false,
    profile:"Dulce, cálido y elegante, con una sensación dorada y refinada.",
    accords:["dulce","ámbar","vainilla","maderas","elegante"],
    notes:["Vainilla","ámbar","flores suaves","maderas"],
    feeling:"Se siente cálido, fino y llamativo sin ser pesado.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para tarde, noche suave, eventos y clima templado."
  },
  {
    name:"Maahir Legacy",
    brand:"LATTAFA",
    price:"Consultar",
    img:"maahir legacy unisex.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Fresco",
    styles:["fresco","diario","aromático"],
    featured:false,
    profile:"Fresco, aromático y vibrante, con una sensación verde y limpia.",
    accords:["fresco","verde","aromático","cítrico","limpio"],
    notes:["Menta","cítricos","lavanda","maderas","almizcle"],
    feeling:"Huele fresco, moderno y muy usable. Ideal para calor.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para día, calor, trabajo, facultad y salidas casuales."
  },
  {
    name:"Mayar Cherry Intense",
    brand:"LATTAFA",
    price:"Consultar",
    img:"mayar cherry intense.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Cherry",
    styles:["dulce","frutal","noche"],
    featured:false,
    profile:"Frutal dulce e intenso, con una cereza marcada y femenina.",
    accords:["cereza","frutal","dulce","vainilla","femenino"],
    notes:["Cereza","frutos rojos","vainilla","flores suaves","musk"],
    feeling:"Se siente dulce, divertido y llamativo. Más de salida que de oficina.",
    performance:"Duración estimada media-alta: 6–8 horas. Proyección moderada.",
    use:"Ideal para noche, citas, salidas y clima templado."
  },
  {
    name:"Mayar Natural Intense",
    brand:"LATTAFA",
    price:"Consultar",
    img:"mayar natural intense mujer.png",
    gender:"femenino",
    ml:"100 ml",
    badge:"Fresco",
    styles:["fresco","frutal","diario"],
    featured:false,
    profile:"Frutal, fresco y femenino, con una sensación tropical y limpia.",
    accords:["frutal","fresco","tropical","floral","femenino"],
    notes:["Frutas tropicales","flores suaves","almizcle","vainilla ligera"],
    feeling:"Huele alegre, fresco y femenino. Muy fácil de usar en calor.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, calor, primavera/verano y uso casual."
  },
  {
    name:"Musamam White Intense",
    brand:"LATTAFA",
    price:"Consultar",
    img:"musamam white intense.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Intenso",
    styles:["dulce","noche","elegante"],
    featured:false,
    profile:"Dulce, especiado y elegante, con una sensación cremosa e intensa.",
    accords:["vainilla","ámbar","especiado","cremoso","elegante"],
    notes:["Especias","vainilla","ámbar","maderas","almizcle"],
    feeling:"Se siente fino, cálido y con presencia. Muy buen perfil nocturno.",
    performance:"Duración estimada alta: 7–10 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, eventos, citas y clima fresco."
  },
  {
    name:"Niche Emarati Mughal Fort",
    brand:"LATTAFA PRIDE",
    price:"Consultar",
    img:"niche emarati mughal fort.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Niche",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Amaderado, especiado y profundo, con una vibra árabe elegante.",
    accords:["amaderado","especiado","ámbar","oud","elegante"],
    notes:["Maderas","oud suave","especias","ámbar","resinas"],
    feeling:"Se siente lujoso, serio y con personalidad. No es un perfume simple.",
    performance:"Duración estimada alta: 8–12 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, eventos, invierno y ocasiones especiales."
  },
  {
    name:"No.2 Men",
    brand:"MAISON ALHAMBRA",
    price:"Consultar",
    img:"no.2-men.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Limpio",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, limpio y masculino, con una vibra minimalista y moderna.",
    accords:["fresco","limpio","cítrico","almizcle","maderas"],
    notes:["Cítricos","maderas limpias","almizcle","notas aromáticas"],
    feeling:"Se siente prolijo, fresco y fácil de usar.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para diario, trabajo, facultad, calor moderado y uso casual."
  },
  {
    name:"Now",
    brand:"RAVE",
    price:"Consultar",
    img:"now parfum.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Potente",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Intenso, amaderado y masculino, con una salida marcada y moderna.",
    accords:["amaderado","intenso","ámbar","especiado","masculino"],
    notes:["Maderas","ámbar","especias","almizcle"],
    feeling:"Se siente fuerte, masculino y de salida.",
    performance:"Duración estimada media-alta: 6–9 horas. Proyección moderada.",
    use:"Ideal para noche, salidas, eventos casuales y clima fresco."
  },
  {
    name:"Odyssey Aqua",
    brand:"ARMAF",
    price:"Consultar",
    img:"odyssey aqua.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Aqua",
    styles:["fresco","diario","limpio"],
    featured:false,
    profile:"Fresco, acuático y moderno, con una vibra limpia y masculina.",
    accords:["acuático","fresco","cítrico","limpio","maderas"],
    notes:["Notas acuáticas","cítricos","maderas suaves","musk"],
    feeling:"Huele fresco, juvenil y limpio. Muy usable en calor.",
    performance:"Duración estimada media: 5–7 horas. Proyección moderada.",
    use:"Ideal para día, verano, facultad, trabajo y uso casual."
  },
  {
    name:"Odyssey Bahamas",
    brand:"ARMAF",
    price:"Consultar",
    img:"odyssey bahamas.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Tropical",
    styles:["fresco","dulce","diario"],
    featured:false,
    profile:"Tropical, fresco y dulce, con una sensación veraniega y llamativa.",
    accords:["tropical","fresco","dulce","frutal","moderno"],
    notes:["Frutas tropicales","cítricos","maderas suaves","almizcle"],
    feeling:"Tiene vibra playera, divertida y distinta. Ideal para destacar en calor.",
    performance:"Duración estimada media: 5–8 horas. Proyección moderada.",
    use:"Ideal para verano, día, salidas casuales y clima cálido."
  },
  {
    name:"Odyssey Mandarin Sky Elixir",
    brand:"ARMAF",
    price:"Consultar",
    img:"odyssey mandarin sky elixir.png",
    gender:"masculino",
    ml:"100 ml",
    badge:"Elixir",
    styles:["dulce","intenso","noche"],
    featured:false,
    profile:"Dulce, cítrico y más intenso, con una mandarina marcada y fondo cálido.",
    accords:["mandarina","dulce","ámbar","caramelo","intenso"],
    notes:["Mandarina","cítricos dulces","ámbar","vainilla","maderas"],
    feeling:"Se siente más potente y nocturno que un fresco común. Llamativo y juvenil.",
    performance:"Duración estimada alta: 7–10 horas. Proyección fuerte al inicio.",
    use:"Ideal para noche, salidas, clima fresco y personas que quieren destacar."
  },
  {
    name:"Oud Lail Maleki",
    brand:"LATTAFA",
    price:"Consultar",
    img:"oud lail maleki parfum.png",
    gender:"unisex",
    ml:"100 ml",
    badge:"Oud",
    styles:["intenso","noche","amaderado"],
    featured:false,
    profile:"Amaderado, oriental y especiado, con una vibra árabe intensa.",
    accords:["oud","amaderado","ámbar","especiado","oriental"],
    notes:["Oud","maderas","ámbar","especias","resinas"],
    feeling:"Se siente fuerte, árabe y con carácter. No es suavecito.",
    performance:"Duración estimada alta: 8–12 horas. Proyección moderada a fuerte.",
    use:"Ideal para noche, invierno, eventos y amantes del oud."
  }
];

let currentGender = "todos";
let currentStyle = "todos";
let currentModalProduct = null;
let observer = null;
let mobileShowAll = false;
let wasMobile = window.innerWidth <= 600;

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

  const isMobile = window.innerWidth <= 600;
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
  }else if(isMobile && mobileShowAll && realMatchCount > mobileLimit){
    productCount.innerText = `Mostrando ${realMatchCount} perfumes`;
    mobileShowMoreBtn.classList.add("visible");
    mobileShowMoreBtn.innerText = "Ver menos";
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
    applyFilters();
  });
});

document.querySelectorAll(".style-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".style-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentStyle = btn.dataset.style;
    mobileShowAll = false;
    applyFilters();
  });
});

searchInput.addEventListener("input", () => {
  mobileShowAll = false;
  applyFilters();
});

mobileShowMoreBtn.addEventListener("click", () => {
  mobileShowAll = !mobileShowAll;
  applyFilters();
});

const closeBannerBtn = document.getElementById("closeBannerBtn");
const infoBanner = document.getElementById("infoBanner");

if(closeBannerBtn && infoBanner){
  closeBannerBtn.addEventListener("click", () => {
    infoBanner.style.display = "none";
  });
}

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

window.addEventListener("resize", () => {
  const isMobile = window.innerWidth <= 600;

  if(isMobile !== wasMobile){
    mobileShowAll = false;
    wasMobile = isMobile;
  }

  applyFilters();
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


(function(){

  const NAELAH_WHATSAPP = "5491158999373";
  const CART_KEY = "naelahCart";

  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function getProductByName(name){
    return products.find(product => product.name === name);
  }

  function getPriceNumber(priceText){
    const match = String(priceText).replace(",", ".").match(/\d+(\.\d+)?/);
    return match ? Number(match[0]) : 0;
  }

  function getWhatsappProductLink(product){
    const message = `Hola, quiero consultar por ${product.name} de Naelah Amber`;
    return `https://wa.me/${NAELAH_WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  function createCartUI(){
    if(!document.getElementById("cartSidebar")){
      const sidebar = document.createElement("div");
      sidebar.className = "cart-sidebar";
      sidebar.id = "cartSidebar";

      sidebar.innerHTML = `
  <button type="button" class="cart-minimize-btn" id="cartMinimizeBtn">
    ← Cerrar carrito
  </button>

  <div class="cart-header">
    <h2>Mi carrito</h2>
  </div>

  <div class="cart-items" id="cartItems"></div>

  <div class="cart-footer">
    <strong id="cartTotal">Total: 0 USD</strong>
    <button type="button" id="checkoutBtn">Finalizar pedido</button>
  </div>
`;

      document.body.appendChild(sidebar);
    }

    if(!document.getElementById("floatingCartBtn")){
      const btn = document.createElement("button");
      btn.className = "floating-cart-btn";
      btn.id = "floatingCartBtn";
      btn.type = "button";
      btn.innerHTML = `🛒 <span id="cartCount">0</span>`;

      document.body.appendChild(btn);
    }
  }

  function updateCartCount(){
    const cartCount = document.getElementById("cartCount");

    if(!cartCount) return;

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.innerText = totalItems;
  }

  function addToCart(product){
    const existing = cart.find(item => item.name === product.name);

    if(existing){
      existing.quantity += 1;
    }else{
      cart.push({
        name: product.name,
        brand: product.brand,
        price: product.price,
        img: product.img,
        ml: product.ml,
        quantity: 1
      });
    }

    saveCart();
    renderCart();
    showToast(`${product.name} agregado al carrito 🛒`);
  }

  function removeFromCart(name){
    cart = cart.filter(item => item.name !== name);
    saveCart();
    renderCart();
  }

  function changeQuantity(name, amount){
    const item = cart.find(product => product.name === name);

    if(!item) return;

    item.quantity += amount;

    if(item.quantity <= 0){
      removeFromCart(name);
      return;
    }

    saveCart();
    renderCart();
  }

  function renderCart(){
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if(!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";

    if(cart.length === 0){
      cartItems.innerHTML = `
        <div class="cart-empty">
          Todavía no agregaste perfumes.
        </div>
      `;

      cartTotal.innerText = "Total: 0 USD";
      updateCartCount();
      return;
    }

    let total = 0;

    cart.forEach(item => {
      const itemTotal = getPriceNumber(item.price) * item.quantity;
      total += itemTotal;

      const div = document.createElement("div");
      div.className = "cart-item";

      div.innerHTML = `
        <img src="img/${item.img}" alt="${item.name}">

        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>${item.price} · ${item.ml}</span>

          <div class="cart-qty">
            <button type="button" class="qty-btn" data-name="${item.name}" data-action="minus">−</button>
            <small>${item.quantity}</small>
            <button type="button" class="qty-btn" data-name="${item.name}" data-action="plus">+</button>
          </div>
        </div>

        <button type="button" class="remove-cart-btn" data-name="${item.name}">
          ×
        </button>
      `;

      cartItems.appendChild(div);
    });

    cartTotal.innerText = `Total aprox: ${total.toFixed(1)} USD`;

    document.querySelectorAll(".remove-cart-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        removeFromCart(btn.dataset.name);
      });
    });

    document.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const amount = btn.dataset.action === "plus" ? 1 : -1;
        changeQuantity(btn.dataset.name, amount);
      });
    });

    updateCartCount();
  }

  function openCart(){
    const cartSidebar = document.getElementById("cartSidebar");
    if(cartSidebar) cartSidebar.classList.add("active");
  }

  function closeCart(){
    const cartSidebar = document.getElementById("cartSidebar");
    if(cartSidebar) cartSidebar.classList.remove("active");
  }

  function checkoutCart(){
    if(cart.length === 0){
      showToast("El carrito está vacío");
      return;
    }

    const productsText = cart.map(item => {
      return `• ${item.name} x${item.quantity} - ${item.price}`;
    }).join("\n");

    const total = cart.reduce((sum, item) => {
      return sum + getPriceNumber(item.price) * item.quantity;
    }, 0);

    const message = 
`Hola, quiero hacer este pedido en Naelah Amber:

${productsText}

Total aprox: ${total.toFixed(1)} USD

¿Me confirmás stock, precio y entrega?`;

    const url = `https://wa.me/${NAELAH_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function enhanceCards(){
    document.querySelectorAll(".card").forEach(card => {
      if(card.dataset.enhanced === "true") return;

      const product = getProductByName(card.dataset.name);
      const actions = card.querySelector(".card-actions");

      if(!product || !actions) return;

      const consultBtn = document.createElement("a");
      consultBtn.className = "consult-btn";
      consultBtn.href = getWhatsappProductLink(product);
      consultBtn.target = "_blank";
      consultBtn.rel = "noopener noreferrer";
      consultBtn.innerText = "Consultar";

      const addBtn = document.createElement("button");
      addBtn.className = "add-cart-btn";
      addBtn.type = "button";
      addBtn.innerText = "Agregar al carrito";

      addBtn.addEventListener("click", () => {
        addToCart(product);
        openCart();
      });

      const copyBtn = actions.querySelector(".copy-name-btn");

      if(copyBtn){
        actions.insertBefore(consultBtn, copyBtn);
        actions.insertBefore(addBtn, copyBtn);
      }else{
        actions.appendChild(consultBtn);
        actions.appendChild(addBtn);
      }

      card.dataset.enhanced = "true";
    });
  }

  function setupCartEvents(){
    const floatingCartBtn = document.getElementById("floatingCartBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");const cartMinimizeBtn = document.getElementById("cartMinimizeBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");

    if(floatingCartBtn){
      floatingCartBtn.addEventListener("click", openCart);
    }

    if(closeCartBtn){
      closeCartBtn.addEventListener("click", closeCart);
    }

    if(cartMinimizeBtn){
  cartMinimizeBtn.addEventListener("click", closeCart);
}

    if(checkoutBtn){
      checkoutBtn.addEventListener("click", checkoutCart);
    }
  }

  createCartUI();
  enhanceCards();
  renderCart();
  setupCartEvents();

})();

(async function trackVisit(){
  try{
    const SUPABASE_URL = "https://ilzcrfoszbiobmdygcqs.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_IzZPgm8PozXBiYe67MI1Fw_d3jQFBZI";

    const ipRes = await fetch("https://ipapi.co/json/");
    const data = await ipRes.json();

    const res = await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        ip: data.ip || null,
        country: data.country_code || null,
        region: data.region_code || null,
        city: data.city || null,
        user_agent: navigator.userAgent
      })
    });

    const result = await res.text();

    console.log("STATUS VISITA:", res.status);
    console.log("RESPUESTA SUPABASE:", result);

  }catch(error){
    console.log("ERROR GENERAL:", error);
  }
})();

