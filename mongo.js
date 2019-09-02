var ObjectID = require('bson-objectid');

module.exports = {
  "muntantcluster-596pr.gcp.mongodb.net": {
    "databases": {
      "test": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              },
              {
                "name": "adnCollection"
              },
              {
                "name": "mutantCollection"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": [
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "test.adnCollection",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "test.mutantCollection",
                "name": "_id_",
                "unique": true
              }
            ]
          },
          {
            "name": "mutantCollection",
            "documents": [
              {
                "_id": {
                  "id": "]l«ÜrJ\u000bÎJzÆ"
                },
                "count_mutant_dna": 1,
                "count_human_dna": 1,
                "ratio": "1.00"
              }
            ]
          },
          {
            "name": "adnCollection",
            "documents": [
              {
                "adn": "ATGCTA",
                "_id": {
                  "id": "]l«ÜrJ\u000bÎJzÅ"
                }
              },
              {
                "adn": "CTGCGA",
                "_id": {
                  "id": "]l«ÜrJ\u000bÎJzÇ"
                }
              }
            ]
          }
        ]
      }
    }
  }
}