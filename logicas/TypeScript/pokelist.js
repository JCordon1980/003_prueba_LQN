/* Su tarea en este ejercicio es la siguiente: Tome la siguiente selección de 70
Nombres de Pokémon en inglés (extraídos de la lista de Pokémon de Wikipedia), y generar
la/una secuencia con el mayor número posible de nombres de Pokémon donde el
el nombre subsiguiente comienza con la última letra del nombre anterior. Sin Pokémon
el nombre debe repetirse.*/

const pokemons =
  "audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask";
const pokemonList = pokemons.split(" ");


const lastLetter = (word) => word[word.length - 1];

const getOdds = (words, used) => words.filter((e) => !used.includes(e));

const buildLookup = (words) => {
  const lookup = new Map();
  words.forEach((e) => {
    const start = e[0];
    lookup.set(start, [...(lookup.get(start) || []), e]);
  });
  return lookup;
};

const findPaths = (names) => {
  const lookup = buildLookup(names);

  let maxNum = 0;
  let maxPaths = [];

  const parseResult = (arr) => {
    if (typeof arr[0] === "object") {
      arr.forEach((el) => parseResult(el));
    } else {
      if (arr.length > maxNum) {
        maxNum = arr.length;
        maxPaths = [arr];
      }
      if (arr.length === maxNum) {
        maxPaths.push(arr);
      }
    }
  };

  const searchWords = (word, res) => {
    const lookCombinations = getOdds(lookup.get(lastLetter(word)) || [], res);
    return lookCombinations.length ? lookCombinations.map((e) => searchWords(e, [...res, e])) : res;
  };

  names.forEach((word) => {
    const res = searchWords(word, [word]);
    parseResult(res);
  });

  console.log("Max Path:", maxNum);
  console.log("Example Path:", maxPaths[0]);
};

findPaths(pokemonList);
