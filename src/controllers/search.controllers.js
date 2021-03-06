const SearchService = require('../services/search.services');

const functions = {
  /**
   * @param  {} req
   * @param  {} res
   */
  async getByParam(req, res) {
    const { s, p } = req.query;

    try {
      const data = await new SearchService({ s, p }).get();

      res.status(200).json(data['Search']);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  /**
   * @param  {} req
   * @param  {} res
   */
  async getById(req, res) {
    const { id } = req.params;

    try {
      const data = await new SearchService({ i: id }).get();

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  /**
   * @param  {} req
   * @param  {} res
   */
  async getSearchLogs(req, res) {
    try {
      const data = await new SearchService().getLogs();

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  anagram(req, res) {
    var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

    let result = [];
    // BASICALLY, COMPARE FIRST VALUE IN FIRST ARRAY
    // TO ANOTHER LOOP
    // INDEX I COMPARE TO INDEX JSON.LENGTH
    for (let i = 0; i < words.length; i++) {
      for (let i = 0; i < words.length; i++) {
        let check = true;

        for (let j = 0; j < result.length; j++) {
          if (result[j].includes(words[i])) {
            check = false;
          }
        }

        if (check) {
          let anagrams = [];
          anagrams.push(words[i]);
          for (let j = 0; j < words.length; j++) {
            if (i !== j) {
              // COMPARE 2 VALUE
              // IF MATCH THEN PUSH TO ARRAY
              const word1 = words[i].split('').sort().join().trim();
              const word2 = words[j].split('').sort().join().trim();
              if (word1 === word2) {
                anagrams.push(words[j]);
              }
            }
          }

          // ANAGRAMS RESULT PUSH TO RESULT
          result.push(anagrams);
        }
      }
    }

    res.status(200).json(result);
  },

  /**
   * @param  {} req
   * @param  {} res
   */
  findFirstStringInBracket(req, res) {
    const { str } = req.query;

    var result = str.substring(str.indexOf('(') + 1, str.indexOf(')'));

    res.status(200).json(result);

    // if (str.length > 0) {
    //   let indexFirstBracketFound = str.indexOf('(');

    //   if (indexFirstBracketFound >= 0) {
    //     let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

    //     if (wordsAfterFirstBracket) {
    //       wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
    //       console.log(wordsAfterFirstBracket);
    //       let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(')');
    //       if (indexClosingBracketFound >= 0) {
    //         const wordsAfter = wordsAfterFirstBracket.substring(
    //           0,
    //           indexClosingBracketFound
    //         );
    //         res.status(200).json(wordsAfter);
    //       } else {
    //         res.status(200).json('');
    //       }
    //     } else {
    //       res.status(200).json('');
    //     }
    //   } else {
    //     res.status(200).json('');
    //   }
    // } else {
    //   res.status(200).json('');
    // }
  },
};

module.exports = functions;
