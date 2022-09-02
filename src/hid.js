const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '..', 'logs', 'hid.log')

var HID = require('node-hid');
devices = HID.devices().filter((hid) => {
  return hid.manufacturer =='Yubico'
})

const record = [
  `${new Date()}: ${devices.length} devices found`,
  devices.reduce((memo, device, idx) => {
    memo.push(`${idx+1}: ${device.path}`)
    return memo
  }, []).join('\n'),
].join('\n') + '\n'

fs.writeFileSync(file, record, {
  flag: 'a',
})

console.log('complete', file, devices.length)
