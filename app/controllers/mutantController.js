const Mutant = require('../model/mutant');

const minMatchNumber = 4;

module.exports = {
    
    isMutant : function(req, res) {
        mutCountSeq = 0;
        const {dna} = req.body;
        
        if(typeof dna === 'undefined'){
            
            res.status(403).json('No se enviaron datos');
            return;
        }
        const notAllowedDna = dna.find(seq => seq.length !== dna.length);
        
        
        if (notAllowedDna) {
            res.status(403).send();
            return;
        }
        
        if (dna.length < minMatchNumber) {
            res.status(403).send();
            return;
        }
        
        
        const toUpperDna = dna.map(seq => seq.toUpperCase());  
        
        Mutant.isMutant(toUpperDna, req.app.mutantCollection, req.app.adnCollection,(err, isMutant) => {
            if (isMutant){
                
                res.status(200).json({ result: 'Mutant' });
            }
            else
            res.status(403).json({ result: 'Human' });
        });
    },
    
    stats : function (req, res) {
        Mutant.stats(req.app.mutantCollection, (err, rows) => {
            if (err) res.status(403).json('Error');
            
            res.status(200).json({
                count_mutant_dna: rows.count_mutant_dna,
                count_human_dna: rows.count_human_dna,
                ratio: rows.ratio
            });
        });
    }
    
    
}