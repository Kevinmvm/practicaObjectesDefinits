/*En aquesta pràctica implementarem el joc de la ser que hi havia antigament als mòbils.
Per fer-ho heu de seguir les especificacions que hi han al diagrama adjunt.
El controlador del joc el posaré jo, i la implementació de la classe que s'encarregui de dibuixar també.
Cada classe ha d'estar en un fitxer propi.
Per tal d'importar/exportar feu servir import/export de JavaScript.
Per fer servir el IDrawer feu el següent import:
import CanvasDrawer from "canvas-drawer.js"

P.S.: Si voleu anar fent proves per tal de veure si va funcionant, podeu fer 
implementar una classe CanvasDrawer dummy, que no faci absolutament res, 
però així no us donarà cap error.


Extres:
Afegir un sistema de puntuacions on la serp guanyi punts cada cop que mengi i perdi 
cada cop que topa amb alguna cosa.
Afegir diferents tipus de menjar que tingui diferents tipus d'efectes sobre la serp. 
Per exemple alguns poden fer que la serp creixi més ràpid o que es mogui més lentament.
Afegir obstacles al joc per a que la serp els tingui que evitar.
- atributo o funcion pública
+ publico
# protected
*/

import Snake from "./snake.js"
import Food from "./food.js"

class CanvasDrawerDummy {
    drawFood() {
        const food = new Food();
        return food;
    }
    drawSnake() {
        const snake = new Snake();
        return snake;
    }
    clearBoard(){

    }

}

export default CanvasDrawerDummy;