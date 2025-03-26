# **Reto: Encuentra el par más cercano sin loops**

## **Descripción**

Dado un array de números enteros `arr` y un número objetivo `target`, tu tarea es encontrar el par de elementos cuya suma sea lo más cercana posible a `target`.

**Pero hay una condición especial**: **NO podés usar loops explícitos (`for`, `while`, etc.).**

## 🎯 **Ejemplo**

```js
const arr = [3, 8, 12, 5, 1];
const target = 15;
```

**Salida esperada:** `0`

> **Explicación:** El par `[3, 12]` suma exactamente `15`, por lo que `|15 - 15| = 0`.

Otro ejemplo:

```js
const arr = [2, 9, 14, 7];
const target = 20;
```

**Salida esperada:** `1`

> **Explicación:** El par `[9, 14]` suma `23`, lo más cercano a `20`. La diferencia absoluta es `|23 - 20| = 3`.  
> Sin embargo, `[7, 14]` suma `21`, que es aún más cercano. La diferencia es `|21 - 20| = 1`.  
> La respuesta final es `1`.

## **Reglas del reto**

- Debes encontrar el par más cercano y devolver la diferencia absoluta con el `target`.
- **NO se permite usar loops explícitos (`for`, `while`, etc.).**
- Podés usar **funciones de alto orden** (`map`, `reduce`, `filter`, etc.).
- La solución debe ser lo más eficiente posible.

## **Pistas y consejos**

- Pensá en cómo podrías recorrer un array **sin usar loops tradicionales**.
- Las funciones de **Array.prototype** pueden ser tu mejor aliado.
- Pensá en la **complejidad del algoritmo**: ¿cómo podrías evitar O(n²)?
- ¿Se te ocurre una forma recursiva de abordar el problema? 🤔

## **Cómo participar**

1. **Cloná el repo**

   ```sh
   git clone https://github.com/maxdvar/min-diff-pair-challenge.git
   cd min-diff-pair-challenge
   ```

2. **Implementá tu solución en el archivo `solution.js`.**

3. **Probá tu código** con diferentes entradas ejecutando (Asegurate de tener **Node.js** instalado en tu sistema):

   ```sh
   node solution.js
   ```

## 👣 Comparte tu resultado

Si completas el reto, súbelo a GitHub y compártelo con la comunidad. ¡Me encantaría ver tu solución! 🚀

### 🔗 **¿Listo para el desafío?**
