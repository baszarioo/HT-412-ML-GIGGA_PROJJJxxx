export function decodeMessage(template, values) {
  return template.replace(/{{\s*(.*?)\s*}}/g, (match, key) => {
    if (!values.hasOwnProperty(key)) return '';

    const [encoding, encodedValue] = values[key].split(':');
    let decodedValue;

    switch (encoding) {
      case 'b64':
        decodedValue = Buffer.from(encodedValue, 'base64').toString('utf8');
        break;
      case 'c13':
        decodedValue = encodedValue.split('').map(c => {
          if (c.match(/[a-z]/i)) {
            const charCode = c.charCodeAt(0) - 13;
            return String.fromCharCode(charCode < (c.toUpperCase() === c ? 65 : 97) ? charCode + 26 : charCode);
          } else {
            return c;
          }
        }).join('');
        break;
      case 'uri':
        decodedValue = decodeURIComponent(encodedValue);
        break;
      default:
        return '';
    }

    return decodedValue;
  });
}
