/**
 * Created by QQ on 2021/3/3.
 */

(function() {

    var Box = {};

    Box.img1 = document.getElementById("buttonimg1");
    Box.img2 = document.getElementById("buttonimg2");
    Box.img3 = document.getElementById("buttonimg3");
    Box.img4 = document.getElementById("buttonimg4");

    Box.closeBtn1 = document.getElementById("closeBtn1");
    Box.closeBtn2 = document.getElementById("closeBtn2");
    Box.closeBtn3 = document.getElementById("closeBtn3");
    Box.closeBtn4 = document.getElementById("closeBtn4");

    Box.Btn1 = document.getElementById("btn1");
    Box.Btn2 = document.getElementById("btn2");
    Box.Btn3 = document.getElementById("btn3");
    Box.Btn4 = document.getElementById("btn4");

    Box.show1 = function() {
        console.log(this.img1);
        this.img1.style.display = "block";
    }
    Box.show2 = function() {
        console.log(this.img2);
        this.img2.style.display = "block";
    }
    Box.show3= function() {
        console.log(this.img3);
        this.img3.style.display = "block";
    }
    Box.show4 = function() {
        console.log(this.img4);
        this.img4.style.display = "block";
    }
    Box.close1 = function() {
        this.img1.style.display = "none";
    }
    Box.close2 = function() {
        this.img2.style.display = "none";
    }
    Box.close3 = function() {
        this.img3.style.display = "none";
    }
    Box.close4 = function() {
        this.img4.style.display = "none";
    }



    Box.init1 = function() {
        var that = this;
        this.Btn1.onclick = function() {
            that.show1();
        }
        this.closeBtn1.onclick = function() {
            that.close1();
        }

    }
    Box.init1();

    Box.init2 = function() {
        var that = this;
        this.Btn2.onclick = function() {
            that.show2();
        }
        this.closeBtn2.onclick = function() {
            that.close2();
        }
    }
    Box.init2();

    Box.init3 = function() {
        var that = this;
        this.Btn3.onclick = function() {
            that.show3();
        }
        this.closeBtn3.onclick = function() {
            that.close3();
        }
    }
    Box.init3();

    Box.init4 = function() {
        var that = this;
        this.Btn4.onclick = function() {
            that.show4();
        }
        this.closeBtn4.onclick = function() {
            that.close4();
        }
    }
    Box.init4();
})();
