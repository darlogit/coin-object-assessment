console.log("hey coin")
let coin = {
    state: 0,
    flip: function () {
        if

            ((Math.random() > 0.5)) {
            this.state = 0;
        }
        else {
            this.state = 1
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return ("tails")
        } else {
            return ("heads")
        }



        /* 2. Return the string "Heads" or "Tails", depending on whether
    // //        "this.state" is 0 or 1. */
    },

    toHTML: function () {
        let image = document.createElement("img");
        /* 3. Set the properties of this image element to show either face-up or face-down, depending on whether this.state is 0 or 1.*/
        //    let container = document.createElement("div");
        //    container.append (coin.toHTML());
        //    document.body.append(container);
        if (this.state == 0) {
            image.src = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png";
        } else {
            image.src = "https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png";
        }
        return image;
    }
};
coin.flip()
document.body.append(coin.toString())
function display20flips() {
    for (i = 0; i < 20; i++) {
        // console.log("imageo")
        coin.flip()
        document.body.append(coin.toHTML());
    }
}
function display20images() {
    for (i = 0; i < 20; i++) {
        console.log("20images")
        coin.flip()
        document.body.append(coin.toHTML());
    }
}
coin.flip()
document.body.append(coin.toString())
display20flips()
display20images()
document.body.append(coin.toHTML());


