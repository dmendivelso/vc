# Realizar una indagación teórica de algún algoritmo de visibilidad o algún método de iluminación global.

## Algoritmo del Pintor

![Demostracion] (https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d3/Genesis_fractal_landscape_software_%28Commodore_Amiga%29.webm/Genesis_fractal_landscape_software_%28Commodore_Amiga%29.webm.480p.vp9.webm)

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

![clasica](https://www.researchgate.net/profile/Csaba-Toth-10/publication/228678743/figure/fig1/AS:393726032662531@1470883009610/Objects-may-have-cyclic-overlaps.png)

En estos ejemplos se puede identificar fácilmente posibles escenarios en los que fallara el algoritmo.

2. Perforación polígonos:

Este escenario se presenta en el momento en el que los polígonos se intersectan entre ellos mismos, para este problema Martin Newell propone una solución, la cual es la división que intervengan en este caso (también aplica en el caso de la superposición cíclica).

![poligonos](/content/imgs/Perf_poligonos.png)

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
