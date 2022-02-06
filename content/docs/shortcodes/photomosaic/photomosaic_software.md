# Fotomosaico por software


El fotomosaico es una imagen, retrato o fotografía que se divide por figuras geométricas, generalmente
por cuadrados o rectángulos del mismo tamaño, esto con el fin de remplazar las mismas
por otros retratos, fotografías o imágenes que concuerden con los colores promedio que encierran las
figuras geométricas de la imagen original, logrando que al visualizar la
imagen de un punto lejano se logre ver como la original , pero que al ver de un punto cercano o al 
hacer zoom se pueda percibir que se compone de otras imágenes.

## Explicación fotomosaico por software

La implementación del fotomosaico se puede realizar por medio de software, es decir, la construcción de un algoritmo que se encargue de convertir la imagen original en un mosaico de otras.

Dicho algoritmo, se inicia con una división de la imagen original en cuadrados del mismo tamaño, esto para poder calcular el color promedio en formato RGB que esta presente en esa área de la imagen original, este conjunto de colores promedios son almacenados en un vector. Posterior a esto, cada uno de los integrantes de este vector se comparan con las imágenes que están disponibles para ser usadas en el mosaico, con el fin de que la imagen que se va incrustar en esa área concuerde con el color promedio del retrato original, al encontrar la imagen que mas se acerque al color deseado, se le cambia el tamaño para que se acomode con las medidas de las figuras geométricas y se va agregando a la nueva imagen en el mismo orden del arreglo de los colores promedio.

{{< p5-iframe sketch="/vc/sketches/photomosaicSoftware.js" width="650" height="440" >}}

La implementación anterior, fue realizada para una fotografía y un video con un conjunto de 23 imágenes, adicionalmente se implemento un botón que se puede desplazar para poder visualizar la diferencia de resolución que se va adquiriendo a medida de que se usan mas imágenes en áreas mas pequeñas.

## Comparación Fotomosaico por Software y por Hardware

La implementación del fotomosaico por Hardware y Software son bastante agiles. Sin embargo, viendo el comportamiento de los dos se puede denotar que el fotomosaico implementado por medio del hardware es notoriamente mas fluido que el implementado por medio de software. También cabe resaltar que si bien hoy la capacidad de computación ha mejorado, la velocidad de procesamiento de imágenes por medio de software se ve limitada y que el desempeño de los procesadores dedicados se encuentra muy por encima y aporta mucho al momento de procesar contenido gráfico.
