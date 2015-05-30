##Instalar la máquina virtual
OS Sugerido ---  debian 7 net installer

##Instalar Paquetes en maquina virtual

1.  curl
2.  node.js
3.  build-essencials
4.  npm express-generator

##Crear Aplicación con express, handlebars, less y git support

express --hbs -css less --git <nombreAplicacion>

cd <nombreAplicacion>

npm install

node ./bin/www


##Paquetes a instalar en Atom IO. (0.201 o superior)

* remote-sync
* atom-beautify
* autoclose-html
* color-picker

##Configurar remote-sync

En Atom estando en la carpeta donde se manipulará los archivos
del proyecto que se desean sincronizar con el servidor virtual
se configura el plugin remote-sync para permitir una
sincronización automática de archivos. Asi podremos tener
el siguiente ambiente de desarrollo:

                                    Maquina de
                                    Desarrollo
                                       |
           .---------gitshell-------------------atom (remote-sync)---.
           |                                                         |
     .----------.                                            .-----------.
       github                                                máquina virtual
      repository                                             de desarrollo
     .----------.                                            .-----------.
           |
           |
     .----------.
      servidor
     de Producción
     .----------.  

Para configurar remote-sync usamos los siguiente:

1. ctrl + shift + p
2. escribir **remote-sync: Configure** para obtener el panel de configuración
3. llenar los datos solicitados en el panel de configuración
4. Si queremos manualmente modificar los valores guardades se puede
ingresar a modificar el archivo .remote-sync.json (tener cuidado).
