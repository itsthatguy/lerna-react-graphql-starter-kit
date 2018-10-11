export const flatten = arr =>
  [...arr].reduce((r, v) => {
    r.push(...v);
    return r;
  }, []);

export const unique = arr => arr.filter((v, i, self) => self.indexOf(v) === i);

export const dashIt = str => str.replace(/\s/g, '-');
