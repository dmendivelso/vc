# Realizar una indagación teórica de algún algoritmo de visibilidad o algún método de iluminación global.

## Algoritmo del Pintor

<img style="float: right;" src="https://cdn.discordapp.com/attachments/691796325670453288/919802702295355392/Genesis_fractal_landscape_software_Commodore_Amiga.webm.360p.webm">

### Historia

El algoritmo del pintor se desempeña en la computación visual en 3D, en especial como algoritmo visual, este se caracteriza principalmente por su simplicidad en la aplicación.
El algoritmo fue propuesto por primera vez por Martin Newell, Richard Newell y Tom Sancha en el año 1972 con el fin de solucionar el problema de “Hidden-surface determination” (Determinación de la Superficie Oculta).

### Fundamentos

Este algoritmo se puede implementar basándose en el ordenamiento topológico, el cual se describe como un grafo dirigido de forma lineal de sus nodos, orientando en este caso esa linealidad en función de la profundidad de los polígonos que se encuentran en la figura, ilustración o imagen.

### Explicación del Algoritmo

Recibe el nombre del algoritmo del pintor debido a la práctica o técnica que implementan los mismos al plasmar una escena en sus lienzos, ilustrando así en cada uno de los componentes de la escena en función de la profundidad. Lo cual permite solucionar el problema de la visibilidad.

Este algoritmo se puede resumir en grandes rasgos en dos pasos, los cuales son:

- Ordenar los polígonos según su profundidad, de los más profundos a los más cercanos.
- Situar cada uno de los polígonos en el orden establecido en el paso anterior.

### Como se usa

El algoritmo del pintor se usa con el fin de facilitar la ilustración de los objetos o escenas tridimensionales, basándose en gran parte en la profundidad.

### Problemas

Este algoritmo posee algunos problemas al momento de implementarse, algunos de esos problemas pueden presentarse en las siguientes situaciones:

1. Superposición cíclica:

Esta situación se presenta en el momento en el que el algoritmo no es capaz de diferenciar y ordenar a un conjunto de polígonos, el ejemplo base que se plantea en el cual falla es:

![](https://www.researchgate.net/profile/Csaba-Toth-10/publication/228678743/figure/fig1/AS:393726032662531@1470883009610/Objects-may-have-cyclic-overlaps.png)

En estos ejemplos se puede identificar fácilmente posibles escenarios en los que fallara el algoritmo.

2. Perforación polígonos:

Este escenario se presenta en el momento en el que los polígonos se intersectan entre ellos mismos, para este problema Martin Newell propone una solución, la cual es la división que intervengan en este caso (también aplica en el caso de la superposición cíclica).

![poligonos](data:image/png;base64,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)

3. Eficiencia:

En caso de requerirse un algoritmo de visibilidad, el algoritmo del pintor no se presentaría como una opción eficiente, debido a que al momento de implementar el mismo, se debe tener en cuenta todos los polígonos que componen la escena, imagen o figura.


# Rasterization workshop

Buttons are styled links that can lead to local page or external link.

{{< details title="Midpoint circle algorithm" open=false >}}

```html
{{</* p5-iframe sketch="/vc/sketches/rasterization.js" width="646" height="646" */>}}
```

{{< /details >}}

{{< p5-iframe sketch="/vc/sketches/rasterization.js" width="646" height="646" >}}
