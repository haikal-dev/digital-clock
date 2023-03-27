module.exports = class AlertService {

    constructor(){
        this.text = "Test";
    }

    up = () => {
        console.log(this.text);
    }

}