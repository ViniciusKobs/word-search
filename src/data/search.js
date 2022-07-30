import { palavrasTodas } from "./wordsJS";

const toNormal = (word) => {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const filterByLength = (data, length) => {
  return data.filter((d) => d.length === length);
}

const filterByWordInclude = (data, acento, include) => {
  if (include === '') {
    return data;
  }
  return data.filter((d) => {
    const fixedData = acento ? d.toLowerCase() : toNormal(d.toLowerCase());
    return include.split(',').every((l) => fixedData.includes(l.toLowerCase()));
  });
}

const filterByWordExclude = (data, acento, exclude) => {
  if (exclude === '') {
    return data;
  }
  return data.filter((d) => {
    const fixedData = acento ? d.toLowerCase() : toNormal(d.toLowerCase());
    return exclude.split(',').every((l) => !fixedData.includes(l.toLowerCase()));
  });
}

const filterByTokenInclude = (data, acento, word, include) => {
  if (include === '') {
    return data;
  }
  const fixedWord = acento ? word.toLowerCase() : toNormal(word.toLowerCase());
  return data.filter((d) => {
    const fixedData = acento ? d.toLowerCase() : toNormal(d.toLowerCase());
    return fixedWord.split('').every((l, i) => {
      if (l === '?' || l === '!') {
        return true;
      }
      if (l === '#' || l === '@') {
        return include.split('').some((c) => fixedData[i].includes(c));
      }
      return l === fixedData[i];
    })
  });
}

const filterByTokenExclude = (data, acento, word, exclude) => {
  if (exclude === '') {
    return data;
  }
  const fixedWord = acento ? word.toLowerCase() : toNormal(word.toLowerCase());
  return data.filter((d) => {
    const fixedData = acento ? d.toLowerCase() : toNormal(d.toLowerCase());
    return fixedWord.split('').every((l, i) => {
      if (l === '?' || l === '#') {
        return true;
      }
      if (l === '!' || l === '@') {
        return exclude.split('').every((c) => !fixedData[i].includes(c));
      }
      return l === fixedData[i];
    })
  });
}

const filterAny = (data, acento, word, include, exclude) => {
  if (include === '' && exclude === '') {
    const fixedWord = acento ? word.toLowerCase() : toNormal(word.toLowerCase());
    return data.filter((d) => {
      const fixedData = acento ? d.toLowerCase() : toNormal(d.toLowerCase());
      return fixedWord.split('').every((l, i) => {
        if (l === '?' || l === '!' || l === '#' || l === '@') {
          return true;
        }
        return l === fixedData[i];
      })
    })
  }
  return data;
}

const search = (word, acento, include, exclude, tokenInclude, tokenExclude) => {
  let results = filterByLength(palavrasTodas, word.length)
  results = filterByWordInclude(results, acento, include)
  results = filterByWordExclude(results, acento, exclude)
  results = filterByTokenInclude(results, acento, word, tokenInclude)
  results = filterByTokenExclude(results, acento, word, tokenExclude)
  results = filterAny(results, acento, word, tokenInclude, tokenExclude);
  return results;
}

export default search;
