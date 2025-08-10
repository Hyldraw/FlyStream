const { addonBuilder, serveHTTP } = require("stremio-addon-sdk")

const manifest = {
  id: "FlyStream.org",
  version: "1.0.0",
  name: "FlyStream",
  description: "Um addon que fornece filmes e series, dublados com uma incrivel qualidade, sem travar.",
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
  const line2 = `🎫 ${service}`
  const line3 = `${audio} ${flags.map(f => "/" + f).join(" ")}`
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

  // Lupin
  "tt10621032": [
    {
      name: "FlyStream 720P",
      title: formatTitle({
        name: "Lupin III: O Primeiro (2020) [Dublado]",
        service: "𝘏𝘪𝘨𝘩 𝘚𝘱𝘦𝘦𝘥",
        audio: "Audio",
        flags: ["🇧🇷"]
      }),
      url: "https://pixeldrain.com/api/file/S341Foj5"
    }
    ],
}

builder.defineStreamHandler(({ type, id }) => {
  if (!streams[id]) return Promise.resolve({ streams: [] })
  return Promise.resolve({ streams: streams[id] })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
