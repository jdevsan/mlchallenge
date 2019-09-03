# ML Challenge "Validando adn mutante".

Tecnologias Utilizadas para el proyecto:
 "express": "^4.17.1"
 "node": "8.12.0"
 "npm": "6.4.1"
 "mocha": "^6.2.0"
 "mongo-mock": "^3.7.1"
 
 ## Instalación del proyecto
 Direccion github: https://github.com/pepecachivache/mlchallenge.git
 Pasos:
 Crear un directorio nuevo.
 Para clonar el repositorio escribir en consola el siguiente comando:
 ```
 git clone https://github.com/pepecachivache/mlchallenge.git
 ```
 para pararse sobre el branch del proyecto ejecutar:
  ```
  git checkout dev
   ```
 Luego ir al directorio principal y ejecutar.
 
 ```
 npm i
 ```
 o
 ```
 npm install
 ```
 Para correr el servidor localmente ejecutar el siguiente comando:
 ```
 npm run dev
 ```
 ## Local api test
 
 Para testear la api localmente pueden utilizar POSTMAN.
 Link de descarga: https://www.getpostman.com/downloads/
 
 1. Colocar la url local: http://localhost:8080/api/mutant (POST) 
 
 2. En el header colocar:
 
 key: Content-type  value: application/json
 
 3. En la solapa body:
 Seleccionar formato raw y seleccionar el formato a enviar (JSON(Application/json))
 
 4. Escribir en el cuerpo:
 {“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}
 
 Si es mutante devolvera: Status (200) : {"result": "Mutant"} caso contrario es humano por lo tanto devuelve: Status(403)
 {"result": "Human"}
 
 ## Estadisticas acumuladas:
 
 1. Colocar la url local: http://localhost:8080/api/stats (GET)
 2. En el header colocar:
 
 key: Content-type  value: application/json
 
 Resultado ejemplo promedio ADN mutante / ADN humano:
  ```
 {
    "count_mutant_dna": 1,
    "count_human_dna": 16,
    "ratio": "0.06"
}

 ```
 
 # Google Cloud Remote Api
 
 Para testear la api localmente tambien pueden utilizar POSTMAN.
 
  1. Colocal la url remota: https://mlchallenge2019-251723.appspot.com/api/mutant (POST)
 
  2. Paso en los headers colocar:
 key: Content-type  value: application/json
 
 3. En la solapa body:
 Seleccionar formato raw y seleccionar el formato a enviar (JSON(Application/json))
 
 4. Escribir en el cuerpo:
 {“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}
 
 Si es mutante devolvera: Status (200) {"result": "Mutant"} caso contrario es humano por lo tanto devuelve: Status (403)
 {"result": "Human"}
 
 
  ## Google Cloud Api Estadisticas acumuladas:
 
 1. Colocar la url local: https://mlchallenge2019-251723.appspot.com/api/stats (GET)
 
 2. En el header colocar:
 key: Content-type  value: application/json
 
 Resultado ejemplo promedio ADN mutante / ADN humano:
  ```
 {
    "count_mutant_dna": 1,
    "count_human_dna": 16,
    "ratio": "0.06"
}

 ```

## Google Cloud App deploy

. Para subir el proyecto a Google Cloud, es necesario crearse una cuenta en la plataforma.
. Crear un nuevo proyecto
. Instalar Google SDK en el ordenador.
. Agrear en el mismo directorio del package.json un archivo "app.yaml" e ingresar las siguientes lineas de codigo:

```
 runtime: nodejs
 env: flex
```

  y dentro del package.json agregar el engine:
  

    "engines": {
    "node": "8.12.0",
    "npm": "6.4.1"
  }


     
Loguearse con la cuenta google correspondiente


 ```
gcloud auth login
 ```
      
Seleccionar el proyecto correspondiente y ejecutar:

```
gcloud app deploy
```

## Test Mocha Framework

Para realizar el test de las funciones principales en la consola ejecutar:

 ```
npm run test
 ```

Resultado esperado:

 ```
 
  Suite >
    isMutant >
      ✓ Should return true when founds two or more mutant dna coincidences (111ms)
      isMutant >
        ✓ Should return false when found less than two dna coincidences (110ms)
    stats >
      ✓ Should return ratio = 1.00 (105ms)


  3 passing (336ms)

 ```
 
 
 ## Test Stress con RESTful Stress 1.6.0 (Chrome extension)
 
 100 iterations Chart
 
 ![alt text](https://ia601507.us.archive.org/16/items/capturadepantalla20190902alas23.39.23/Captura%20de%20pantalla%202019-09-02%20a%20las%2023.39.08.png)
 
100 Iterations Performance

 ![alt text](https://ia601404.us.archive.org/27/items/capturadepantalla20190902alas23.39.23_201909/Captura%20de%20pantalla%202019-09-02%20a%20las%2023.39.23.png)
              
      
  
 

 
 
 
 
