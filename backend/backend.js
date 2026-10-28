const http = require('http')
const path = require('path')
const fileName = 'bucycleUsers.txt'
const fullpath = path.join(__dirname, '..', fileName)
const fs = require('fs')

const port = 5001

const formatDateTime = (date = new Date()) => {
  const pad = (value) => String(value).padStart(2, "0")

  return (
    `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}`
  )
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }


  if (req.method == 'POST') {
    let dataFull = ''
    req.on('data', (dataChunk) => {
      dataFull = dataFull + dataChunk.toString()
    })
    req.on('end', () => {
      try {
        dataFull = JSON.parse(dataFull)
      }
      catch {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify('Ошибка на сервере - он не смог распарсить данные'));
        return
      }
      const id = Math.trunc(Math.random() * 1000000)
      dataFull.id = id
      console.log('dataFull:', dataFull);
      fs.appendFile(fullpath, JSON.stringify(dataFull) + '\n' + formatDateTime() + '\n' + '\n', (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify('Ошибка на сервере - он не смог записать в файл данные'));
          return
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 'твой измененный объект (он сохранен)': dataFull }));
        return
      })

    })
    req.on('error', err => {
      console.error('Ошибка чтения запроса:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Ошибка сервера' }));
    });

  }
  else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Тут разрешены только post методы дружочек-пирожочек'));
    return
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log('==== сервер запущен :) ====');
  console.log(`==== port  ${port}====`);

})























