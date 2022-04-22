class shape{
    constructor(length,width){
        this.length=length
        this.width=width
    }
    getShape(){
        return "length of shape " + this.length + " and width "+ this.width
    }
}
class rectangle extends shape{
    constructor(length,width,shape="rectangle"){
        super(length,width)
        this.shape =shape
    }
    area(){
        let result =  `Area of ${this.shape}: `+this.length*this.width
        document.getElementById("Q1").innerHTML = result
    }
}
let cal = new rectangle(10,20)
console.log(cal.getShape())
cal.area()
