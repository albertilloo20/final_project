# AlquilaCar

## Instalando GIT
Para instalar git en nuestro ordenador tendremos que acceder a la pagina: https://git-scm.com/downloads y instalarlo dependiendo de nuestro sistema operativo.

## Configurar GIT para que nos muestre la rama en la que estamos trabajando
Para configurar visualmente la consola de comandos de GIT tenemos que acceder al archivo que se llama .bashrc este archivo suele estar oculto y en linux se encuentra en la carpeta ~/ una vez abierto este archivo añadiremos lo siguiente al final del mismo:


RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
GREEN="\[\033[0;32m\]"
BLUE="\[\033[0;34m\]"
LIGHT_BLUE="\[\033[1;34m\]"
LIGHT_RED="\[\033[1;31m\]"
LIGHT_GREEN="\[\033[1;32m\]"
WHITE="\[\033[1;37m\]"
LIGHT_GRAY="\[\033[0;37m\]"
COLOR_NONE="\[\e[0m\]"
function parse_git_dirty {
[[ $(git status 2> /dev/null | tail -n1) != "nothing to commit, working directory clean" ]] &&
   echo "*"
}
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/(\1$(parse_git_dirty))/"
}
PS1="$GREEN\u$WHITE@$YELLOW\H:$LIGHT_BLUE\w${COLOR_NONE}\$(parse_git_branch)\$ "

OJO!!!!!!!!!! cuidado al copiar las comillas no siempre se copian como deberian

Una vez hecho esto ya podemos ver en que rama estamos del proyecto.

## Como bajarse el proyecto
Para bajarse el proyecto es necesario acceder a la terminal de ATOM, recordad que en el curso que os pase el profesor instala atom y varios plugins, uno de esos es para usar la terminal en el ATOM (Esta en el curso seccion 1 clase 4).
Lo siguiente que debemos hacer es seleccionar la carpeta donde vamos a poner nuestro proyecto, en mi caso tengo una carpeta dentro de los documentos que se llama projects y ahi es donde tengo todos los proyectos que estoy haciendo.
Desde la terminal accedemos a esa carpeta donde descargaremos nuestro proyecto mediante el comando cd que vimos en el curso.
Una vez posicionados en la carpeta donde vamos a poner nuestro proyecto ejecutaremos el siguiente comando:
  git clone https://github.com/albertilloo20/final_project.git
Una vez realizado este comando ya tenemos nuestro proyecto en nuestro ordenador, tan solo tenemos que abrirlo con ATOM.

## Primeros pasos con nuestro proyecto
RECORDAD ANTES DE NADA QUE TENEIS QUE TENER NSTALADO LO SIGUIENTE:
-node.js
-typescript
-angular cli
-snippets de atom
TODO ESTO ESTA EN EL CURSO QUE OS PASE seccion 1 clase 4, si ya empezasteis con el curso lo teneis que tener instalado ya.

Una vez hayamos descargado y abierto en ATOM nuestro proyecto, en la terminal de ATOM tendremos que situarnos en la rama master accediendo a la carpeta del proyecto mediante el comando cd (recordad cd .. te lleva un directorio para atras, con el comando ls listamos los archivos que estan en esa carpeta y con cd NOMBRE_DIRECTORIO accederemos al directorio que queramos en ese momento, EJEMPLO: cd alquilaCar nos llevaria a nuestra carpeta del proyecto).
La rama master sera nuestra rama de produccion por asi decirlo, es decir una rama que no vamos a tocar hasta que las cosas funcionen y podamos pasarlo a produccion. 
Existe una rama llamada dev en esta rama comprobaremos que todo funciona antes de pasarlo a master, y desde esta rama nos sacaremos nuestras ramas para hacer tareas. 
Antes de nada una vez os hayais bajado el proyecto con el comando git clone tendreis que instalar los nodos que he metido yo (jquery, bootstrap y popperjs) para ello una vez posicionados en la rama master o dev teneis que ejcutar el siguiente comando: npm install node_modules. Esto sera necesario realizarlo cada vez que actualicemos una libreria o importemos cualquier cosa en nuestro proyecto.
Para comprobar que nuestro proyecto funciona que lo hemos clonado bien y todo eso ejecutaremos el comando ng serve para compilar el proyecto y para nuestra web en el navegador tendremos que poner la siguiente direccion: http://localhost:4200/

## Creacion de una nueva rama donde desarrollaremos las tareas
IMPORTANTE: una vez ejecutado el comando pull o push nos pedira a veces unas credenciales, estas credenciales son vuestro usuario y contraseña de github.

Por ejemplo a Pepo le toca hacer un formulario de registro de usuario, los pasos a seguir por Pepo serian los siguientes:
  1.- posicionarse en la rama dev, para ello usaria el siguiente comando: git checkout dev
  
  2.- una vez posicionado en esta rama hara el siguiente comando para bajarse la ultima version del proyecto y trabajar
  a partir de ahi: git pull origin dev
  
  3.- una vez se ha pulleado la rama se creara una rama a partir de dev con el siguiente comando: 
  git branch nombreDeLaRama 
  Los nombres de las ramas los definiremos con logica para que todos sepamos que se esta haciendo en esta rama
  
  3.- una vez creada la rama tendremos que acceder a ella mediante el siguiente comando git checkout nombreDeLaRama
  En nuestra terminal nos debera aparecer lo siguiente:
  teki@teki-SVE1513Y1ESI:~/Projects/final_project/AlquilaCar(nombreDeLaRama)$
  teki@teki sera el usuario en mi caso es teki en el vuestro sera pepo juan o como se llame vuestro usuario
  SVE1513Y1ESI:supongo que sera el hash de ese usuario(esto no tiene importancia)
  ~/Projects/final_project/AlquilaCar es el directorio en donde nos encontramos
  (nombreDeLaRama) es la rama de GIT donde estamos trabajando.
  
  4.- Una vez realizado lo anterior Pepo desarrollaria sus cambios en el proyecto como por ejemplo añadir un formulario,
  cambiar un fondo, añadir un toolbar... Lo que sea.
  
  5.- Cuando pepo haya desarrollado lo que tenia que desarrollar lo siguiente que tendra que hacer es pushear su rama, es
  decir hasta ahora pepo habia estado trabajando en una rama que solo estaba en su ordenador, al pushear hara que esa rama 
  sea visible para todos ya que estara en remoto y de esta forma yo me podre encargar de mezclarlo con nuestro proyecto.
  Para pushear una rama hay que seguir unos pasos:
  
    5.1- Hay que añadir todos los cambios que se han realizado en los archivos, para ello usara el siguiente comando:
    git add .       (El caracter '.' lo que dice es que añadira todos los archivos modificados al commit que se realizara)
    
    5.2- Una vez añadidos los cambios tiene que commitearlos (Esto se hace para que podamos volver a este punto si la 
    liamos)
    para ello pepo ejecutara el siguiente comando: git commit -m ''     dentro de las comillas ira el mensaje que queramos
    poner, por ejemplo git commit -m 'formulario de usuario realizado', este mensaje sera visible para todos y de esta
    forma podremos ver que funcionalidad se ha añadido en esa rama.
    
    5.3.- Una vez realizado el commit pepo tiene que pushear esa rama para lo que usara el comando: 
    git push origin nombreDeLaRama      Una vez hecho esto y si no ha habido ningun error la rama estara disponible en 
    remoto y ya me encargare yo de mezclarla con el proyecto final.
   
   RECORDAD COSAS IMPORTANTES:
   
   -Antes de sacar una nueva rama para hacer nuestra tarea hay que hacer pull para tener la version mas actualizada del
   proyecto
   
   -Antes de pushear una rama primero hay que añadir cambios(add) y commitearlos (commit).
  
## TRELLO
  Trello es una pizarra para gestionar tareas, os recomiendo que useis esta aplicacion, de esta manera veremos que tareashay
  que hacer, que tareas se estan desarrollando y quien la esta desarrollando, ya os pasare el enlace con la pizarra de
  momento solo registraros, el nombre de las ramas que creemos en git deberian de ser iguales al nombre de la tarea que haya
  creada en trello, de esta forma podemos ver el codigo de alguien que haya hecho una tarea y la haya pusheado sabiendo
  simplemente el nombre de esa tarea.
  
## Comandos mas importantes de git
  git checkout nombreDeLaRama -> nos lleva a la rama que queramos ir
  
  git checkout . -> nos borrara todos los cambios que no hayan sido commiteados (Este comando yo lo uso para cuando tengas 
  que volver al principio de todo de esa rama que te creaste porque las cosas que quieres hacer no te salen y quieres volver
  al estado del proyecto en el que funcionaba todo correctamente.
  
  git status -> nos dice en que estado estan nuestros archivos rojo significa que no estan añadidos para el commit, verde 
  significa que ya estan añadidos y estan listos para commitear.
  
  git add -> añadir archivos para commitear
  
  git commit -m 'Mensaje a escribir' -> esto commiteara nuestros archivos (por asi decirlo es un punto de restauracion). El
  mensaje es totalmente obligatorio y deberia describir que se ha hecho con ese commit.
  
  git push origin NombreDeLaRama -> sirve para poner lo que hemos realizado (nuestra rama) en remoto y que todos nosotros lo
  podamos ver. Recordad que nunca vais a trabajar en dev o en master solo creareis ramas a partir de dev y pusheareis 
  vuestras ramas con el nombre que le hayais dado y luego yo las mezclo con el proyecto.
  
  git pull origin NombreDeLaRama-> lo usaremos para traernos la rama remota de dev que sera siempre la mas actualizada, y lo
  haremos siempre obligatoriamente antes de crearnos una nueva rama para trabajar.
  
  git checkout nombreDeLaRamaQueNoExisteEnNuestroRepositorioLocal -> imaginemos que pepo quiere bajarse una rama que esta en
  remoto de algo que ha realizado juan pepo deberia usar este comando para traerse esa rama del repositorio remoto al 
  repositorio local
  
  git branch -> nos muestra las ramas que tenemos en local
  
  git branch -r ->nos muestra las ramas que existe en el repositorio remoto
  
  git branch nuevaRamaQueVamosACrear -> esto se usa para crear una nueva rama a partir de la que estamos posicionados
  despues de crear esta rama haremos el comando git checkout nuevaRamaQueCreamosAnteriormente y ya estamos posicionados
  en nuestra nueva rama.
  
  HAY QUE TENER MUCHO CUIDADO CON EL COMANDO PUSH SI QUEREIS LAS PRIMERAS VECES ME AVISAIS Y PUSHEAMOS JUNTOS
  NADIE TOCARA LA RAMA MASTER, Y NADIE HARA NADA EN LA RAMA DEV, lo unico que se hara en la rama dev es sacarse nuevas 
  ramas.
  
  Recordad siempre ver en que rama estais trabajando lo pone en la terminal como ya os dije antes, es muy importante siempre
  saber donde estamos posicionados para no cagarla.
  
  Es una buena practica que si yo por ejemplo tengo que realizar una vista de usuario que conlleva varias cosas como por
  ejemplo añadir una foto editar informacion, crear unas cards etc cada vez que haga algo que funcione lo commitee, aunque 
  no lo pushee en remoto, ya que de esta forma si he realizado el añadir una foto de perfil de puta madre, y luego me pongo 
  a hacer un formulario para editar los datos de un usuario y en este punto me lio tanto que no se donde coño estoy si ya he 
  commiteado despues de realizar lo de la foto de putamadre, simplemente con hacer un git checkout . se borrara todo lo que 
  hice hasta ese commit, es decir empezare justo despues de que la parte de la foto me funcione de puta madre.
