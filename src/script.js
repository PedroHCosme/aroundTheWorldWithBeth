var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20();

var allCountries = [
  "Afeganistão",
  "Albânia",
  "Argélia",
  "Andorra",
  "Angola",
  "Antígua e Barbuda",
  "Argentina",
  "Armênia",
  "Austrália",
  "Áustria",
  "Azerbaijão",
  "Bahamas",
  "Bahrein",
  "Bangladesh",
  "Barbados",
  "Bielorrússia",
  "Bélgica",
  "Belize",
  "Benin",
  "Butão",
  "Bolívia (Estado Plurinacional da)",
  "Bósnia e Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunei Darussalam",
  "Bulgária",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Camboja",
  "Camarões",
  "Canadá",
  "República Centro-Africana",
  "Chade",
  "Chile",
  "China",
  "Colômbia",
  "Comores",
  "Congo",
  "Costa Rica",
  "Costa do Marfim",
  "Croácia",
  "Cuba",
  "Chipre",
  "República Tcheca",
  "República Popular Democrática da Coreia",
  "República Democrática do Congo",
  "Dinamarca",
  "Djibuti",
  "Dominica",
  "República Dominicana",
  "Equador",
  "Egito",
  "El Salvador",
  "Guiné Equatorial",
  "Eritreia",
  "Estônia",
  "Suazilândia",
  "Etiópia",
  "Fiji",
  "Finlândia",
  "França",
  "Gabão",
  "Gâmbia",
  "Geórgia",
  "Alemanha",
  "Gana",
  "Grécia",
  "Granada",
  "Guatemala",
  "Guiné",
  "Guiné-Bissau",
  "Guiana",
  "Haiti",
  "Honduras",
  "Hungria",
  "Islândia",
  "Índia",
  "Indonésia",
  "Irã (República Islâmica do)",
  "Iraque",
  "Irlanda",
  "Israel",
  "Itália",
  "Jamaica",
  "Japão",
  "Jordânia",
  "Cazaquistão",
  "Quênia",
  "Kiribati",
  "Kuwait",
  "Quirguistão",
  "República Democrática Popular do Laos",
  "Letônia",
  "Líbano",
  "Lesoto",
  "Libéria",
  "Líbia",
  "Liechtenstein",
  "Lituânia",
  "Luxemburgo",
  "Madagascar",
  "Malawi",
  "Malásia",
  "Maldivas",
  "Mali",
  "Malta",
  "Ilhas Marshall",
  "Mauritânia",
  "Maurício",
  "México",
  "Micronésia (Estados Federados da)",
  "Mônaco",
  "Mongólia",
  "Montenegro",
  "Marrocos",
  "Moçambique",
  "Myanmar",
  "Namíbia",
  "Nauru",
  "Nepal",
  "Países Baixos",
  "Nova Zelândia",
  "Nicarágua",
  "Níger",
  "Nigéria",
  "Macedônia do Norte",
  "Noruega",
  "Omã",
  "Paquistão",
  "Palau",
  "Panamá",
  "Papua Nova Guiné",
  "Paraguai",
  "Peru",
  "Filipinas",
  "Polônia",
  "Portugal",
  "Catar",
  "República da Coreia",
  "República da Moldávia",
  "Romênia",
  "Federação Russa",
  "Ruanda",
  "São Cristóvão e Nevis",
  "Santa Lúcia",
  "São Vicente e Granadinas",
  "Samoa",
  "San Marino",
  "São Tomé e Príncipe",
  "Arábia Saudita",
  "Senegal",
  "Sérvia",
  "Seychelles",
  "Serra Leoa",
  "Cingapura",
  "Eslováquia",
  "Eslovênia",
  "Ilhas Salomão",
  "Somália",
  "África do Sul",
  "Sudão",
  "Suriname",
  "Suécia",
  "Suíça",
  "República Árabe Síria",
  "Tajiquistão",
  "Tailândia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad e Tobago",
  "Tunísia",
  "Turquia",
  "Turcomenistão",
  "Tuvalu",
  "Uganda",
  "Ucrânia",
  "Emirados Árabes Unidos",
  "Reino Unido da Grã-Bretanha e Irlanda do Norte",
  "República Unida da Tanzânia",
  "Estados Unidos da América",
  "Uruguai",
  "Uzbequistão",
  "Vanuatu",
  "Venezuela (República Bolivariana da)",
  "Vietnã",
  "Iêmen",
  "Zâmbia",
  "Zimbábue"
];




var countryFlags = {
  Afghanistan: "🇦🇫",
  Albânia: "🇦🇱",
  Argélia: "🇩🇿",
  Andorra: "🇦🇩",
  Angola: "🇦🇴",
  "Antígua e Barbuda": "🇦🇬",
  Argentina: "🇦🇷",
  Armênia: "🇦🇲",
  Austrália: "🇦🇺",
  Áustria: "🇦🇹",
  Azerbaijão: "🇦🇿",
  Bahamas: "🇧🇸",
  Bahrein: "🇧🇭",
  Bangladesh: "🇧🇩",
  Barbados: "🇧🇧",
  Bielorrússia: "🇧🇾",
  Bélgica: "🇧🇪",
  Belize: "🇧🇿",
  Benin: "🇧🇯",
  Butão: "🇧🇹",
  "Bolívia (Estado Plurinacional da)": "🇧🇴",
  "Bósnia e Herzegovina": "🇧🇦",
  Botsuana: "🇧🇼",
  Brasil: "🇧🇷",
  "Brunei Darussalam": "🇧🇳",
  Bulgária: "🇧🇬",
  "Burkina Faso": "🇧🇫",
  Burundi: "🇧🇮",
  "Cabo Verde": "🇨🇻",
  Camboja: "🇰🇭",
  Camarões: "🇨🇲",
  Canadá: "🇨🇦",
  "República Centro-Africana": "🇨🇫",
  Chade: "🇹🇩",
  Chile: "🇨🇱",
  China: "🇨🇳",
  Colômbia: "🇨🇴",
  Comores: "🇰🇲",
  Congo: "🇨🇬",
  "Costa Rica": "🇨🇷",
  "Costa do Marfim": "🇨🇮",
  Croácia: "🇭🇷",
  Cuba: "🇨🇺",
  Chipre: "🇨🇾",
  "República Tcheca": "🇨🇿",
  "República Popular Democrática da Coreia": "🇰🇵",
  "República Democrática do Congo": "🇨🇩",
  Dinamarca: "🇩🇰",
  Djibuti: "🇩🇯",
  Dominica: "🇩🇲",
  "República Dominicana": "🇩🇴",
  Equador: "🇪🇨",
  Egito: "🇪🇬",
  "El Salvador": "🇸🇻",
  "Guiné Equatorial": "🇬🇶",
  Eritreia: "🇪🇷",
  Estônia: "🇪🇪",
  Suazilândia: "🇸🇿",
  Etiópia: "🇪🇹",
  Fiji: "🇫🇯",
  Finlândia: "🇫🇮",
  França: "🇫🇷",
  Gabão: "🇬🇦",
  Gâmbia: "🇬🇲",
  Geórgia: "🇬🇪",
  Alemanha: "🇩🇪",
  Gana: "🇬🇭",
  Grécia: "🇬🇷",
  Granada: "🇬🇩",
  Guatemala: "🇬🇹",
  Guiné: "🇬🇳",
  "Guiné-Bissau": "🇬🇼",
  Guiana: "🇬🇾",
  Haiti: "🇭🇹",
  Honduras: "🇭🇳",
  Hungria: "🇭🇺",
  Islândia: "🇮🇸",
  Índia: "🇮🇳",
  Indonésia: "🇮🇩",
  "Irã (República Islâmica do)": "🇮🇷",
  Iraque: "🇮🇶",
  Irlanda: "🇮🇪",
  Israel: "🇮🇱",
  Itália: "🇮🇹",
  Jamaica: "🇯🇲",
  Japão: "🇯🇵",
  Jordânia: "🇯🇴",
  Cazaquistão: "🇰🇿",
  Quênia: "🇰🇪",
  Kiribati: "🇰🇮",
  Kuwait: "🇰🇼",
  Quirguistão: "🇰🇬",
  "República Democrática Popular do Laos": "🇱🇦",
  Letônia: "🇱🇻",
  Líbano: "🇱🇧",
  Lesoto: "🇱🇸",
  Libéria: "🇱🇷",
  Líbia: "🇱🇾",
  Liechtenstein: "🇱🇮",
  Lituânia: "🇱🇹",
  Luxemburgo: "🇱🇺",
  Madagascar: "🇲🇬",
  Malawi: "🇲🇼",
  Malásia: "🇲🇾",
  Maldivas: "🇲🇻",
  Mali: "🇲🇱",
  Malta: "🇲🇹",
  "Ilhas Marshall": "🇲🇭",
  Mauritânia: "🇲🇷",
  Maurícia: "🇲🇺",
  México: "🇲🇽",
  "Micronésia (Estados Federados da)": "🇫🇲",
  Mônaco: "🇲🇨",
  Mongólia: "🇲🇳",
  Montenegro: "🇲🇪",
  Marrocos: "🇲🇦",
  Moçambique: "🇲🇿",
  Mianmar: "🇲🇲",
  Namíbia: "🇳🇦",
  Nauru: "🇳🇷",
  Nepal: "🇳🇵",
  "Países Baixos": "🇳🇱",
  "Nova Zelândia": "🇳🇿",
  Nicarágua: "🇳🇮",
  Níger: "🇳🇪",
  Nigéria: "🇳🇬",
  "Macedônia do Norte": "🇲🇰",
  Noruega: "🇳🇴",
  Omã: "🇴🇲",
  Paquistão: "🇵🇰",
  Palau: "🇵🇼",
  Panamá: "🇵🇦",
  "Papua Nova Guiné": "🇵🇬",
  Paraguai: "🇵🇾",
  Peru: "🇵🇪",
  Filipinas: "🇵🇭",
  Polônia: "🇵🇱",
  Portugal: "🇵🇹",
  Catar: "🇶🇦",
  "República da Coreia": "🇰🇷",
  "República da Moldávia": "🇲🇩",
  Romênia: "🇷🇴",
  "Federação Russa": "🇷🇺",
  Ruanda: "🇷🇼",
  "São Cristóvão e Nevis": "🇰🇳",
  "Santa Lúcia": "🇱🇨",
  "São Vicente e Granadinas": "🇻🇨",
  Samoa: "🇼🇸",
  "San Marino": "🇸🇲",
  "São Tomé e Príncipe": "🇸🇹",
  "Arábia Saudita": "🇸🇦",
  Senegal: "🇸🇳",
  Sérvia: "🇷🇸",
  Seychelles: "🇸🇨",
  "Serra Leoa": "🇸🇱",
  Singapura: "🇸🇬",
  Eslováquia: "🇸🇰",
  Eslovênia: "🇸🇮",
  "Ilhas Salomão": "🇸🇧",
  Somália: "🇸🇴",
  "África do Sul": "🇿🇦",
  Sudão: "🇸🇩",
  Suriname: "🇸🇷",
  Suécia: "🇸🇪",
  Suíça: "🇨🇭",
  "República Árabe Síria": "🇸🇾",
  Tajiquistão: "🇹🇯",
  Tailândia: "🇹🇭",
  "Timor-Leste": "🇹🇱",
  Togo: "🇹🇬",
  Tonga: "🇹🇴",
  "Trinidad e Tobago": "🇹🇹",
  Tunísia: "🇹🇳",
  Turquia: "🇹🇷",
  Turcomenistão: "🇹🇲",
  Tuvalu: "🇹🇻",
  Uganda: "🇺🇬",
  Ucrânia: "🇺🇦",
  "Emirados Árabes Unidos": "🇦🇪",
  "Reino Unido da Grã-Bretanha e Irlanda do Norte": "🇬🇧",
  "República Unida da Tanzânia": "🇹🇿",
  "Estados Unidos da América": "🇺🇸",
  Uruguai: "🇺🇾",
  Uzbequistão: "🇺🇿",
  Vanuatu: "🇻🇺",
  "Venezuela (República Bolivariana da)": "🇻🇪",
  Vietnã: "🇻🇳",
  Iêmen: "🇾🇪",
  Zâmbia: "🇿🇲",
  Zimbábue: "🇿🇼",
};

var sliceSize = 75;
var randomIndex = Math.floor(Math.random() * (allCountries.length - sliceSize));
var countries = allCountries.slice(randomIndex, randomIndex + sliceSize);

var data = countries.map(function (country, index) {
  return {
    label: country,
    value: index + 1,
    question: "País sorteado",
  };
});

var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

var arc = d3.svg.arc().outerRadius(r);

var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  });

arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d) {
  container.on("click", null);

  if (oldpick.length == data.length) {
    container.on("click", null);
    return;
  }

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;

  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }

  rotation += 90 - Math.round(ps / 2);

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
        "fill",
        "#111"
      );

      d3.select("#question h1").html(function () {
        var countryLabel = data[picked].label;
        var flagEmoji = countryFlags[countryLabel] || ""; // Get the flag emoji for the country
        return (
          data[picked].question +
          " : " +
          " " +
          countryLabel +
          " " +
          flagEmoji +
          "!"
        );
      });

      oldrotation = rotation;

      console.log(data[picked].value);

      container.on("click", spin);
    });
}

svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "black" });

container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });

container
  .append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("GIRAR")
  .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}