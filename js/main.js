const container = document.getElementById("container");
const buttonPlay = document.getElementById("button-play")

buttonPlay.addEventListener("click",
    
    function(){
        for (let i=1; i <= 100; i++ ){
            const square = createElement("div", "square")
            console.log(square);
        
            container.append(square)
        
            // creo elemento span per insierire i numeri
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

)




addEventListener


// FUNZIONI
function createElement (tag, nameClassAdd){
    const newElement = document.createElement(tag);
    newElement.classList.add(nameClassAdd)
    return newElement
}