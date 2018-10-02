export function GeneratorFactory(length: number) {
  const tplString = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
  return function(): string {
    const result = [];
    const tplLength = tplString.length;
    for (let i = 0; i < length; i++) {
      result.push(
        tplString.charAt(
            Math.random() * tplLength
          )
        );
    }
    return result.join('');
  };
}
