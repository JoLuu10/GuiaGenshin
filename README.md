# GuiaGenshin
Guia sobre Genshin Impact con Angular 

## Instalación
Paso 1: Accedo a la carpeta donde voy a crear este proyecto
```bash
  cd ruta/a/tu/carpeta/GuiaGenshin
```
Paso 2: Creamos el proyecto
```bash
  ng new GenshinImpact
```
*Aclaración* te preguntará cosas como 

→ Would you like to add Angular routing? le damos a *Yes*

→ Which stylesheet format? seleccionamos CSS (o SCSS si quieres algo más pro)

Paso 3: Ejecutamos e iniciamos
```bash
  cd GenshinImpact
```
```bash
  ng serve
```

## Estructura
GuiaGenshin/<br>
└── GenshinImpact/<br>
    ├── .angular/<br>
    ├── .vscode/<br>
    ├── node_modules/<br>
    ├── public/<br>
    │   ├── characterImg/<br>
    │   ├── weaponImg/<br>
    │   ├── favicon.ico<br>
    │   ├── Paimon.ico<br>
    ├── src/<br>
    │   ├── app/<br>
    │   │   ├── pages/<br>
    │   │   │   ├── armas/<br>
    │   │   │   │   ├── armas.css<br>
    │   │   │   │   ├── armas.html<br>
    │   │   │   │   ├── armas.spec.ts<br>
    │   │   │   │   ├── armas.ts<br>
    │   │   │   ├── home/<br>
    │   │   │   │   ├── home.css<br>
    │   │   │   │   ├── home.html<br>
    │   │   │   │   ├── home.spec.ts<br>
    │   │   │   │   ├── home.ts<br>
    │   │   │   ├── personjes/<br>
    │   │   │   │   ├── personjes.css<br>
    │   │   │   │   ├── personjes.html<br>
    │   │   │   │   ├── personjes.spec.ts<br>
    │   │   │   │   ├── personjes.ts<br>
    │   ├── index.html<br>
    │   ├── main.server.ts<br>
    │   ├── main.ts<br>
    │   ├── server.ts<br>
    │   ├── style.css<br>
    ├── .editorconfig<br>
    ├── .gitignore<br>
    ├── .prettierrc<br>
    ├── angular.json<br>
    ├── package.json<br>
    ├── ...

