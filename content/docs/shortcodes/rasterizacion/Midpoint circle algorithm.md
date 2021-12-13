# Midpoint circle algorithm

El algoritmo del punto medio del circulo es un algoritmo usado para determinar los puntos necesarios para rasterizar un circulo. Usamos el algoritmo del punto medio para calcular para calcular todos los puntos del perimetro del circulo en un primer octante y luego imprimimos el reflejo de estos puntos en los 7 octantes restantes para completar el circulo. Esto funciona debido a que el circulo es simetrico en cualquier direccion.

## Formulas

F(p) = x^2+y^2-r^2

Si F(p) < 0, el punto esta dentro del circulo

Si F(p) = 0, el punto esta en el perimetro

Si F(p) > 0, el punto esta fuera del circulo

![](https://media.geeksforgeeks.org/wp-content/uploads/MID-POINT.jpg)

{{< details title="Midpoint circle algorithm" open=false >}}

```html
{{</* p5-iframe sketch="/vc/sketches/rasterization.js" width="646" height="646" */>}}
```

{{< /details >}}

{{< p5-iframe sketch="/vc/sketches/rasterization.js" width="646" height="646" >}}
