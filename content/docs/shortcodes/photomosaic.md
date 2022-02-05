# Photomosaic

El algoritmo del punto medio del circulo es un algoritmo usado para determinar los puntos necesarios para rasterizar un circulo. Usamos el algoritmo del punto medio para calcular para calcular todos los puntos del perimetro del circulo en un primer octante y luego imprimimos el reflejo de estos puntos en los 7 octantes restantes para completar el circulo. Esto funciona debido a que el circulo es simetrico en cualquier direccion.

{{< details title="Midpoint circle algorithm" open=false >}}

```html
{{</* p5-iframe sketch="/vc/sketches/photomosaic.js" width="646" height="646" */>}}
```

{{< /details >}}

{{< p5-iframe sketch="/vc/sketches/photomosaic.js" lib1="/vc/sketches/libraries/p5.shaderbox.js" lib2="/vc/sketches/libraries/p5.quadrille.js" width="646" height="646" >}}

# Software

{{< p5-iframe sketch="/vc/sketches/photomosaicSoftware.js" width="650" height="440" >}}
