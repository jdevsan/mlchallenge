let mutCountSeq = 0;
const minSeq = 2;
const mutSeqOk = ['CCCC', 'GGGG', 'AAAA', 'TTTT'];


module.exports = {
  
  isMutant: (dna, mutantCollection, adnCollection, cb) => {
    
    
    mutCountSeq = 0;
    horizCheck(dna);
    vertCheck(dna);
    obliCheck(dna);
    
    const verifAdn = dna[0];

    adnCollection.insertOne({adn: verifAdn},(err, rows) =>{});


    
    mutantCollection.findOne({}, {}, (err, rows) => {
      if (err) return console.log(err);
      
      const stats = Object.assign({}, rows);
      
      if(Object.entries(stats).length === 0 && stats.constructor === Object){
        stats._id = 0;
        stats.count_mutant_dna = 0
        stats.count_human_dna = 0
        stats.ratio = 0;
        
      }
 
      const isMutant = mutCountSeq >= minSeq;
   
      stats.count_mutant_dna = isMutant ? stats.count_mutant_dna + 1 : stats.count_mutant_dna;
      stats.count_human_dna = isMutant ? stats.count_human_dna : stats.count_human_dna + 1;
      stats.ratio = (stats.count_mutant_dna / stats.count_human_dna).toFixed(2);
      
      mutantCollection.findOneAndUpdate({ '_id': stats._id}, { $set: { ...stats } }, { upsert: true}, (err, rows) => {
        cb(err, mutCountSeq >= minSeq);
      });
    });
  },

  stats: (mutantCollection, cb) => {
    mutantCollection.findOne({}, (err, rows) => {
      cb(err, rows);
    });
  },

};




function checkSeq(seq){
  if (mutSeqOk.find(matchw => seq.indexOf(matchw) != -1)) {
    mutCountSeq += 1;
  }
};

function horizCheck (dna) {
  dna.forEach(seq => checkSeq(seq));
  
};

function obliCheck (dna) {
  let wrd = '';
  for (let i = 0; i < dna.length; i++) {
    dna.forEach((seq, key) => {
      if (i === key){
        wrd = wrd.concat(seq.charAt(i));
        
        
      }
    });
  }
  checkSeq(wrd);
};


function vertCheck (dna){
  for (let i = 0; i < dna.length; i++) {
    let wrd = '';
    dna.forEach(seq => {
      wrd = wrd.concat(seq.charAt(i));
      
    });
    checkSeq(wrd);
  }
};



