const assert = require('assert');
const Mutant = require('../model/mutant');
const {url, mutCollection,adnCollection} = require('../dbkeys');
const mongo = require('mongo-mock');
mongo.max_delay = 0
const MongoClient = mongo.MongoClient;
MongoClient.persist = "mongo.js";


let dclient;
let mutantCollection;
let dnaCollection;

MongoClient.connect(url, {} , (err, database) => {
    
    dclient = database;
    mutantCollection = dclient.collection(mutCollection);
    dnaCollection = dclient.collection(adnCollection);

      
});


describe('Suite >', () => {
    after(() => {
        dclient.close();
    });
    
    describe('isMutant >', () => {
        it('Should return true', done => {
            const dna = ["ATGCTA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
            
            Mutant.isMutant(dna, mutantCollection, dnaCollection, (err, isMutant) => {
                assert.equal(isMutant, true);
                setTimeout(done, 100);
            });
        })
        
        describe('isMutant >', () => {
            it('Should return false', done => {
                const dna = ["CTGCGA","CAGTGC","TTATGT","AGAAGG","TCCCTA","TCACTG"]
                
                Mutant.isMutant(dna, mutantCollection, dnaCollection, (err, isMutant) => {
                    assert.equal(isMutant, false);
                    setTimeout(done, 100);
                });
            })
            
        });
        
    });
    
    describe('stats >', () => {
        
        it('Should return ratio = 1.00', done => {
            const test = {
                'count_mutant_dna': 1,
                'count_human_dna': 1,
                'ratio': '1.00'
            };
            Mutant.stats(mutantCollection, (err, result) => {              
                assert.equal(result.count_mutant_dna, test.count_mutant_dna);
                assert.equal(result.count_human_dna, test.count_human_dna);
                assert.equal(result.ratio, test.ratio);
                setTimeout(done, 100);
            })
        });
    });
    
})





