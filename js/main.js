const container = document.getElementById("container");
const select = document.getElementById("select")
const buttonPlay = document.getElementById("button-play")

buttonPlay.addEventListener("click",
    
    function(){

        container.innerHTML = "";

        if (select.value === "Easy"){
            for (let i=1; i <= 49; i++ ){
                const square = createElement("div", "square-easy")
            
                container.append(square)
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span")
                square.append(span)
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                    function(){
                        square.classList.add("blue")
                        console.log("Hai cliccato la casella numero: ", i)
                    }
            
                )
            
            }

        }if (select.value === "Normal"){
            for (let i=1; i <= 81; i++ ){
                const square = createElement("div", "square-normal")
            
                container.append(square)
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span")
                square.append(span)
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                    function(){
                        square.classList.add("blue")
                        console.log("Hai cliccato la casella numero: ", i)
                    }
            
                )
            
            }
            

        }if (select.value === "Hard"){
            for (let i=1; i <= 100; i++ ){
                const square = createElement("div", "square-hard")
            
                container.append(square)
            
                // creo elemento span per inserire i numeri
                const span = createElement("span", "span")
                square.append(span)
                span.innerHTML = i
            
                // aggiungi a square evento con click
                square.addEventListener("click",
                
                    function(){
                        square.classList.add("blue")
                        console.log("Hai cliccato la casella numero: ", i)
                    }
            
                )
            
            }
        }
        
        
    }

)


console.log(select.value)

// FUNZIONI
function createElement (tag, nameClassAdd){
    const newElement = document.createElement(tag);
    newElement.classList.add(nameClassAdd)
    return newElement
}