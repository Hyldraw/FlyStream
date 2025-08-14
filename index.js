const { addonBuilder, serveHTTP } = require("stremio-addon-sdk")

const manifest = {
  id: "FlyStream.org",
  version: "1.0.0",
  name: "FlyStream",
  description: "Filmes e séries com carregamento rápido, sem travamentos e com excelente qualidade de imagem e áudio. Experiência fluida para você assistir sem interrupções.",
  logo: "https://i.imgur.com/YBExiFl.png",
  background: "https://i.imgur.com/hLl93U4.jpeg",
  resources: ["stream"],
  types: ["movie", "series"],
  idPrefixes: ["tt"],
  catalogs: []
}

const builder = new addonBuilder(manifest)

// Função para formatar o título em 3 linhas
function formatTitle({ name, service, audio, flags }) {
  const line1 = name
  const line2 = `${service}`
  const line3 = `${audio} ${flags.map(f => "/ " + f).join(" ")}`
  return `${line1}\n${line2}\n${line3}`
}

// Lista de streams organizados por ID
const streams = {
  // Serie: Supernatural
  "tt0460681:1:1": [
    {
      name: "ReelTime 1080P",
      title: formatTitle({
        name: "Suupernatural: Temporada 1",
        service: "Direct / 🎫 T01EP1",
        audio: "Dual Áudio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://www.terabox.com/api/streaming?path=%2FSPN%2F22.mkv&app_id=250528&clienttype=0&type=M3U8_FLV_264_480&vip=0"
    }
    ],

  // Um Maluco no Golfe 2
  "tt31868189": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Um Maluco no Golfe 2 (2024) [Dual]",
        service: "⛳ Trapalhadas no Campo",
        audio: "Dual Audio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://pixeldrain.com/api/file/ZWGnS9XG"
    }
    ],

  // Lupin III: O Primeiro
  "tt10621032": [
      {
        name: "FlyStream 720p",
        title: formatTitle({
          name: "Lupin III: O Primeiro (2020) [Dublado]",
          service: "🧨 Roubo Épico",
          audio: "Audio",
          flags: ["🇧🇷"]
        }),
        url: "https://ia800504.us.archive.org/33/items/lupin.-iii.-o.-primeiro.-2020.720p.-dub.-enc/Lupin.III.O.Primeiro.2020.720p.DUB.ENC.mp4"
      },
      {
        name: "FlyStream 720p",
        title: formatTitle({
          name: "Lupin III: The First (2020) [Dubbed]",
          service: "Epic Heist",
          audio: "Audio",
          flags: ["🇺🇸"]
        }),
        url: "https://dn790001.ca.archive.org/0/items/lupin-iii-the-first-english-dub-720p.-720/Lupin%20III-%20The%20First%20%28English%20Dub%29%20%5B720p%5D.720.mp4"
      }
  ],

  
  // Robô Selvagem
  "tt29623480": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Robô Selvagem (2024) [Dual]",
        service: "Robô e Natureza",
        audio: "Dual Audio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://pixeldrain.com/api/file/nKoh96i3"
    }
    ],

    // Homem Aranha: Sem volta para casa
  "tt10872600": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Homem Aranha: Sem Volta Para Casa (2021) [Dual]",
        service: "O Passado Retorna",
        audio: "Dual Audio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://dn720401.ca.archive.org/0/items/homem-aranha-sem-volta-para-casa-1080p/Homem%20Aranha%20%28Sem%20Volta%20Para%20Casa%29%20%281080p%29.mp4"
    }
    ],

  // Homem Aranha: Longe de Casa
  "tt6320628": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Homem Aranha: Longe De Casa (2019) [Dublado]",
        service: "Mistério na Europa",
        audio: "Audio",
        flags: ["🇧🇷"]
      }),
      url: "https://dn720407.ca.archive.org/0/items/homem-aranha-longe-de-casa_202202/Homem-Aranha%20Longe%20de%20Casa.ia.mp4"
    }
    ],

  // Homem Aranha: De volta ao lar
  "tt2250912": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Homem-Aranha: De Volta ao Lar (2017) [Dual]",
        service: "Desafios do Lar",
        audio: "Dual Audio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://pixeldrain.com/api/file/s1YZmkja"
    }
    ],

  // Homem Aranha: No Aranhaverso
  "tt4633694": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Homem Aranha: No Aranhaverso (2018) [Dublado]",
        service: "Realidades Paralelas",
        audio: "Audio",
        flags: ["🇧🇷"]
      }),
      url: "https://dn720407.ca.archive.org/0/items/homem-aranha-no-aranhaverso/Homem-Aranha%20no%20Aranhaverso.ia.mp4"
    }
    ],

  // Homem Aranha: Através Aranhaverso
  "tt9362722": [
    {
      name: "FlyStream 1080p",
      title: formatTitle({
        name: "Homem-Aranha: Através do Aranhaverso (2023) [Dual]",
        service: "Dimensões em Choque",
        audio: "Dual Audio",
        flags: ["🇧🇷","🇺🇸"]
      }),
      url: "https://pixeldrain.com/api/file/SeABQN6Q"
    }
    ],

  // O Espetacular Homem Aranha animação - T1
  "tt0976192:1:1": [
    {
      name: "FlyStream 720p",
      title: formatTitle({
        name: "O Espetacular Homem-Aranha (2008) [T01 EP01] [Dublado]",
        service: "Teias e Vilões",
        audio: "Audio",
        flags: ["🇧🇷"]
      }),
      url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F001%20Biologia%2F001%20Sobreviv%C3%AAncia%20Do%20Mais%20Forte%20%282008%29.ia.mp4"
    }
    ],

  "tt0976192:1:2": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP02] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F001%20Biologia%2F002%20Intera%C3%A7%C3%A3o%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:3": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP03] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F001%20Biologia%2F001%20Sobreviv%C3%AAncia%20Do%20Mais%20Forte%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:4": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP04] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F002%20Economia%2F004%20For%C3%A7as%20Do%20Mercado%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:5": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP05] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F002%20Economia%2F005%20Competi%C3%A7%C3%A3o%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:6": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP06] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F002%20Economia%2F006%20A%20M%C3%A3o%20Invis%C3%ADvel%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:7": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP07] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F003%20Qu%C3%ADmica%2F007%20Catalizadores%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:8": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP08] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F003%20Qu%C3%ADmica%2F008%20Rea%C3%A7%C3%A3o%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:9": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP09] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F003%20Qu%C3%ADmica%2F009%20O%20Principio%20Da%20Incerteza%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:10": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP010] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F004%20Psicologia%2F010%20Mulher-Gato%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:11": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP011] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F004%20Psicologia%2F011%20Terapia%20Em%20Grupo%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:12": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP12] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F004%20Psicologia%2F012%20Interven%C3%A7%C3%A3o%20%282008%29.ia.mp4"
  }
  ],

  "tt0976192:1:13": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2008) [T01 EP13] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2001%20%282008%29%2F004%20Psicologia%2F013%20Natureza%20Vs.%20Cria%C3%A7%C3%A3o%20%282008%29.ia.mp4"
  }
  ],

  // O Espetacular Homem Aranha animação - T2
  "tt0976192:2:1": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP1] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F005%20Engenharia%2F014%20Projetos%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:2": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP2] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F005%20Engenharia%2F015%20Teste%20Destrutivo%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:3": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP3] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F005%20Engenharia%2F016%20Refor%C3%A7o%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:4": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP4] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F005%20Engenharia%2F017%20For%C3%A7a%20Cortante%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:5": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP5] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F006%20Desenvolvimento%20Humano%2F018%20Primeiros%20Passos%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:6": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP6] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F006%20Desenvolvimento%20Humano%2F019%20A%20For%C3%A7a%20E%20O%20Poder%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:7": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP7] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F006%20Desenvolvimento%20Humano%2F020%20Crise%20De%20Identidade%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:8": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP8] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F007%20Criminologia%2F021%20Cumplisses%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:9": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP9] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F007%20Criminologia%2F022%20Causa%20Prov%C3%A1vel%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:10": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP10] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F007%20Criminologia%2F023%20A%20Gangue%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:11": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP11] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F008%20Drama%2F024%20Um%20Novo%20Inimigo%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:12": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP12] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F008%20Drama%2F025%20Rebeli%C3%A3o%20No%20Presidio%20%282009%29.ia.mp4"
  }
  ],

  "tt0976192:2:13": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "O Espetacular Homem-Aranha (2009) [T02 EP13] [Dublado]",
      service: "Teias e Vilões",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia600604.us.archive.org/26/items/o-espetacular-homem-aranha-2008-2009/O%20Espetacular%20Homem-Aranha%20%282008-2009%29%2FTemporada%2002%20%282009%29%2F008%20Drama%2F026%20Ato%20Final%20%282009%29.ia.mp4"
  }
  ],

  // Como treinar o seu dragão
  "tt0892769": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "Como Treinar o Seu Dragão (2010) [Dublado]",
      service: "Descobrindo o Dragão",
      audio: "Audio",
      flags: ["🇧🇷"]
    }),
    url: "https://ia800901.us.archive.org/30/items/dragao/como_treinar_o_seu_dragao_1.mp4"
  }
  ],

  "tt1646971": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "Como Treinar o Seu Dragão 2 (2014) [Dual]",
      service: "Aventura e Descoberta",
      audio: "Dual Audio",
      flags: ["🇧🇷","🇺🇸"]
    }),
    url: "https://ia600901.us.archive.org/30/items/dragao/Como.Treinar.o.Seu.Drag%C3%A3o.2.2014.720p.WEB-DL.Dual-WOLVERDONFILMES.COM.mp4"
  }
  ],

  "tt1646971": [
  {
    name: "FlyStream 720p",
    title: formatTitle({
      name: "Como Treinar o Seu Dragão 3 (2019) [Dual]",
      service: "Dragões e Destinos",
      audio: "Dual Audio",
      flags: ["🇧🇷","🇺🇸"]
    }),
    url: "https://ia600901.us.archive.org/30/items/dragao/Como.Treinar.o.Seu.Drag%C3%A3o.3.2019.720p.BluRay.6CH.x264.DUAL-WWW.BLUDV.TV.mp4"
  }
  ],

  // Ghostbusters: apocalipse de gelo
  "tt21235248": [
  {
    name: "FlyStream 1080p",
    title: formatTitle({
      name: "Ghostbusters: Apocalipse de Gelo (2024) [Dual]",
      service: "Apocalipse Gelado",
      audio: "Dual Audio",
      flags: ["🇧🇷","🇺🇸"]
    }),
    url: "https://pixeldrain.com/api/file/VCThRnB4"
  }
  ],
}

builder.defineStreamHandler(({ type, id }) => {
  if (!streams[id]) return Promise.resolve({ streams: [] })
  return Promise.resolve({ streams: streams[id] })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
