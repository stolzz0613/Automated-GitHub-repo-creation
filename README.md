## Prueba-Tecnica para aplicar a QA Junior 📋

Prueba técnica desarrollada en Javascript con TestCafe

### Instalación 🔧

Para instalar el proyecto lcoalmente se debe clonar haciendo uso de ```git clone https://github.com/stolzz0613/Automated-GitHub-repo-creation.git```,
posteriormente instalar testcafe con ```npm install```, finalmente configurar las variables de entorno haciendo uso de los siguientes comandos:
#### macOS and Linux:

* ```export USER_NAME_GIT={username}```
* ```export PASSWORD_GIT={password}```

#### Windows:

* ```set USER_NAME_GIT={username}```
* ```set PASSWORD_GIT={password}```

El test se inicia con el comando (Debe ser ejecutado desde el directorio raiz del proyecto)

* ```testcafe chrome ./tests```

## PUNTOS DE LA PRUEBA 🖇️

Crear un proyecto en "TestCafe" siguiendo las buenas prácticas  recomendadas por ellos con "page object model" 
el cual automatice la creación de un repositorio en Github.

### DESARROLLO Y ANOTACIONES 📌

La prueba se desarrolló haciendo uso de TestCafe, se siguieron las buenas practicas y el modelo POM. El test automatiza la creación de un repositorio
en GitHub, para esto primer se loguea el usuario haciendo uso de las credenciales almancenadas en las varaibles de entorno (Se debe deshabilitar la 
autenticación de dos factores o hacer uso del debug para ingresar el segundo factor y continuar con el test), posteriormente se inicia el proceso
de creación, donde el nombre se asigna mediante un snippet (Si se desea asignar un nombre especifico se debe cambiar ```var repoName = generateName();``` por 
```var repoName = {nombreDeseado}```.





