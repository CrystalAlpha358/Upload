function FindProxyForURL(url, host) {
  if (isInNet(host, '127.0.0.0', '255.0.0.0')) {
    return 'DIRECT';
  } else if (isInNet(host, '192.168.0.0', '255.255.0.0')) {
    return 'DIRECT';
  }

  return 'SOCKS 127.0.0.1:27380'
}
